param(
  [string]$DocPath = (Join-Path $PSScriptRoot "..\\source.docx"),
  [int]$Section = 1,
  [string]$OutputPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if ($Section -lt 1) {
  throw "Section must be greater than or equal to 1."
}

if (-not (Test-Path -LiteralPath $DocPath)) {
  throw "The document '$DocPath' could not be found."
}

Add-Type -AssemblyName System.IO.Compression.FileSystem

function Get-ParagraphText {
  param(
    [Parameter(Mandatory = $true)]$Paragraph,
    [Parameter(Mandatory = $true)][System.Xml.XmlNamespaceManager]$NamespaceManager
  )

  $parts = @($Paragraph.SelectNodes(".//w:t", $NamespaceManager) | ForEach-Object { $_.InnerText })
  return [string]::Concat($parts).Replace([char]0xA0, " ").Trim()
}

$zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $DocPath))

try {
  $entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
  if (-not $entry) {
    throw "The Word document does not contain a word/document.xml entry."
  }

  $reader = New-Object System.IO.StreamReader($entry.Open())
  $xmlText = $reader.ReadToEnd()
  $reader.Close()

  [xml]$document = $xmlText
  $namespaceManager = New-Object System.Xml.XmlNamespaceManager($document.NameTable)
  $namespaceManager.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
  $namespaceManager.AddNamespace("wp", "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing")

  $paragraphs = $document.SelectNodes("//w:p", $namespaceManager)
  $sections = @()
  $currentSection = @()
  $currentQuestion = $null
  $pendingOption = $null

  foreach ($paragraph in $paragraphs) {
    $text = Get-ParagraphText -Paragraph $paragraph -NamespaceManager $namespaceManager
    $descriptors = @(
      $paragraph.SelectNodes(".//wp:docPr", $namespaceManager) |
        ForEach-Object {
          $value = $_.GetAttribute("descr")
          if (-not [string]::IsNullOrWhiteSpace($value)) {
            $value
          }
        }
    )

    if ($descriptors.Count -gt 0) {
      $pendingOption = [PSCustomObject]@{
        Correct = ($descriptors -contains "Correct Answer") -or ($descriptors -contains "Selected")
      }
      continue
    }

    if ([string]::IsNullOrWhiteSpace($text)) {
      continue
    }

    if ($text -match "^Question\s+(\d+)$") {
      $questionNumber = [int]$Matches[1]

      if ($questionNumber -eq 1 -and $currentSection.Count -gt 0) {
        if ($currentQuestion) {
          $currentSection += $currentQuestion
          $currentQuestion = $null
        }

        $sections += , @($currentSection)
        $currentSection = @()
      }
      elseif ($currentQuestion) {
        $currentSection += $currentQuestion
      }

      $currentQuestion = [ordered]@{
        number = $questionNumber
        promptLines = @()
        options = @()
      }
      $pendingOption = $null
      continue
    }

    if ($text -match "^0\s*/\s*1\s*point$") {
      continue
    }

    if ($pendingOption) {
      $currentQuestion.options += [ordered]@{
        text = $text
        correct = $pendingOption.Correct
      }
      $pendingOption = $null
      continue
    }

    if ($currentQuestion) {
      $currentQuestion.promptLines += $text
    }
  }

  if ($currentQuestion) {
    $currentSection += $currentQuestion
  }

  if ($currentSection.Count -gt 0) {
    $sections += , @($currentSection)
  }

  if ($Section -gt $sections.Count) {
    throw "Requested section $Section, but only $($sections.Count) sections were detected."
  }

  $selectedSection = $sections[$Section - 1] | ForEach-Object {
    [ordered]@{
      number = $_.number
      prompt = ($_.promptLines -join " ")
      options = $_.options
    }
  }

  $payload = [ordered]@{
    section = $Section
    totalQuestions = $selectedSection.Count
    questions = $selectedSection
  }

  $json = $payload | ConvertTo-Json -Depth 6

  if ($OutputPath) {
    $outputDirectory = Split-Path -Parent $OutputPath
    if ($outputDirectory) {
      New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null
    }
    Set-Content -LiteralPath $OutputPath -Value $json -Encoding UTF8
  }
  else {
    $json
  }
}
finally {
  $zip.Dispose()
}
