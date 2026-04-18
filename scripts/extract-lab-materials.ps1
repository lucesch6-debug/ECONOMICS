param(
  [string]$OutputDirectory = (Join-Path $PSScriptRoot "..\\extracted-labs")
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Runtime.WindowsRuntime

[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] > $null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType=WindowsRuntime] > $null
[Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType=WindowsRuntime] > $null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime] > $null
[Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime] > $null
[Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType=WindowsRuntime] > $null

$downloads = "C:\Users\luces\Downloads"
$inputs = @(
  "1 - Production and firms - Lab (1).pdf",
  "2 - Consumption and behavior - Lab.pdf",
  "3 - Strategic interactions - Lab.pdf",
  "4 - Industrial organization - Lab.pdf",
  "5 - Incentives - Lab.pdf",
  "6 - Inflation and unemployment - Lab.pptx",
  "7 - GDP and fiscal policy - Lab.pptx",
  "8 - Money and monetary policy - Lab.pptx",
  "9 - Environment - Lab.pptx",
  "10 - Growth - Lab.pptx"
)

$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
  $_.Name -eq "AsTask" -and $_.IsGenericMethod -and $_.GetGenericArguments().Count -eq 1 -and $_.GetParameters().Count -eq 1
})[0]

$asTaskAction = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
  $_.Name -eq "AsTask" -and -not $_.IsGenericMethod -and $_.GetParameters().Count -eq 1
})[0]

function Await-Operation {
  param(
    [Parameter(Mandatory = $true)]$Operation,
    [Parameter(Mandatory = $true)][Type]$ResultType
  )

  $task = $script:asTaskGeneric.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
  return $task.Result
}

function Await-Action {
  param(
    [Parameter(Mandatory = $true)]$Action
  )

  $task = $script:asTaskAction.Invoke($null, @($Action))
  $task.Wait()
}

function Get-SlideTextFromPptx {
  param(
    [Parameter(Mandatory = $true)][string]$Path
  )

  $zip = [System.IO.Compression.ZipFile]::OpenRead($Path)
  try {
    $entries = $zip.Entries |
      Where-Object { $_.FullName -like "ppt/slides/slide*.xml" } |
      Sort-Object {
        if ($_.Name -match "slide(\d+)\.xml") {
          [int]$Matches[1]
        }
        else {
          9999
        }
      }

    $builder = New-Object System.Text.StringBuilder
    $slideIndex = 0

    foreach ($entry in $entries) {
      $reader = New-Object System.IO.StreamReader($entry.Open())
      try {
        $xmlText = $reader.ReadToEnd()
      }
      finally {
        $reader.Close()
      }

      [xml]$slide = $xmlText
      $namespaceManager = New-Object System.Xml.XmlNamespaceManager($slide.NameTable)
      $namespaceManager.AddNamespace("a", "http://schemas.openxmlformats.org/drawingml/2006/main")
      $textNodes = @($slide.SelectNodes("//a:t", $namespaceManager) | ForEach-Object { $_.InnerText.Trim() } | Where-Object { $_ })

      if ($textNodes.Count -eq 0) {
        continue
      }

      $slideIndex += 1
      [void]$builder.AppendLine("=== Slide $slideIndex ===")
      foreach ($node in $textNodes) {
        [void]$builder.AppendLine($node)
      }
      [void]$builder.AppendLine("")
    }

    return $builder.ToString().Trim()
  }
  finally {
    $zip.Dispose()
  }
}

function Get-TextFromPdfByOcr {
  param(
    [Parameter(Mandatory = $true)][string]$Path
  )

  $file = Await-Operation ([Windows.Storage.StorageFile]::GetFileFromPathAsync($Path)) ([Windows.Storage.StorageFile])
  $pdf = Await-Operation ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])
  $ocrEngine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
  $builder = New-Object System.Text.StringBuilder

  for ($pageNumber = 0; $pageNumber -lt $pdf.PageCount; $pageNumber++) {
    $page = $pdf.GetPage($pageNumber)
    try {
      $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
      $options = New-Object Windows.Data.Pdf.PdfPageRenderOptions
      $options.DestinationWidth = [Math]::Round($page.Size.Width * 2)
      $options.DestinationHeight = [Math]::Round($page.Size.Height * 2)

      Await-Action ($page.RenderToStreamAsync($stream, $options))
      $stream.Seek(0)

      $decoder = Await-Operation ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
      $bitmap = Await-Operation ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
      $ocrResult = Await-Operation ($ocrEngine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])
      $text = $ocrResult.Text.Trim()

      if ([string]::IsNullOrWhiteSpace($text)) {
        continue
      }

      [void]$builder.AppendLine("=== Page $($pageNumber + 1) ===")
      [void]$builder.AppendLine($text)
      [void]$builder.AppendLine("")
    }
    finally {
      $page.Dispose()
    }
  }

  return $builder.ToString().Trim()
}

New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null

foreach ($name in $inputs) {
  $path = Join-Path $downloads $name
  if (-not (Test-Path -LiteralPath $path)) {
    Write-Warning "Skipping missing file: $name"
    continue
  }

  $stem = [System.IO.Path]::GetFileNameWithoutExtension($name)
  $outputPath = Join-Path $OutputDirectory ($stem + ".txt")

  if ($path.EndsWith(".pptx")) {
    $content = Get-SlideTextFromPptx -Path $path
  }
  elseif ($path.EndsWith(".pdf")) {
    $content = Get-TextFromPdfByOcr -Path $path
  }
  else {
    Write-Warning "Unsupported file type: $name"
    continue
  }

  Set-Content -LiteralPath $outputPath -Value $content -Encoding UTF8
  Write-Output ("EXTRACTED " + $name + " -> " + $outputPath)
}
