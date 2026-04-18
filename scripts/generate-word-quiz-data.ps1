param(
  [string]$OutputPath = (Join-Path $PSScriptRoot "..\\word-quiz-section.js")
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$extractScriptPath = Join-Path $PSScriptRoot "extract-quiz-section.ps1"
if (-not (Test-Path -LiteralPath $extractScriptPath)) {
  throw "The extractor script '$extractScriptPath' could not be found."
}

$moduleTitles = @(
  "Production and firms",
  "Consumption and behavior",
  "Strategic interactions",
  "Industrial organization",
  "Incentives",
  "Inflation and unemployment",
  "GDP and fiscal policy",
  "Money and monetary policy",
  "Environment",
  "Growth"
)

$allQuestions = @()
$globalQuestionNumber = 1

for ($sectionNumber = 1; $sectionNumber -le $moduleTitles.Count; $sectionNumber++) {
  $rawSection = & $extractScriptPath -Section $sectionNumber | ConvertFrom-Json

  foreach ($question in $rawSection.questions) {
    $allQuestions += [ordered]@{
      shortLabel = [string]$globalQuestionNumber
      group = "Module $sectionNumber - $($moduleTitles[$sectionNumber - 1])"
      meta = "Module $sectionNumber - Question $($question.number)"
      prompt = $question.prompt
      options = @(
        $question.options | ForEach-Object {
          [ordered]@{
            text = $_.text
            correct = [bool]$_.correct
          }
        }
      )
    }

    $globalQuestionNumber += 1
  }
}

$payload = [ordered]@{
  id = "section-1"
  title = "Economics Quiz - Section 1"
  eyebrow = "Revision sprint"
  description = "Les 100 questions du document Word, mot pour mot, avec correction immediate, score live, progression, navigation arriere et sauvegarde automatique."
  questions = $allQuestions
}

$jsContent = "window.wordQuizSection = " + ($payload | ConvertTo-Json -Depth 6) + ";" + [Environment]::NewLine

$outputDirectory = Split-Path -Parent $OutputPath
if ($outputDirectory) {
  New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null
}

Set-Content -LiteralPath $OutputPath -Value $jsContent -Encoding UTF8
