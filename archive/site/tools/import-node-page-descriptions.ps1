[CmdletBinding(SupportsShouldProcess)]
param(
    [Parameter(Mandatory)]
    [string]$Node,
    [Parameter(Mandatory)]
    [string]$Page,
    [string]$KnowledgeBase = (Join-Path $PSScriptRoot '..\.local\node-parameter-kb'),
    [switch]$Apply
)

$ErrorActionPreference = 'Stop'
$catalogPath = Join-Path ([System.IO.Path]::GetFullPath($KnowledgeBase)) 'parameters.csv'
$pagePath = [System.IO.Path]::GetFullPath($Page)
if (-not (Test-Path -LiteralPath $catalogPath)) { throw "Catalog not found: $catalogPath" }
if (-not (Test-Path -LiteralPath $pagePath)) { throw "MDX page not found: $pagePath" }

$descriptions = @{}
foreach ($line in (Get-Content -LiteralPath $pagePath)) {
    if ($line -notmatch '^\|\s*([^|]+?)\s*\|\s*(.*?)\s*\|\s*$') { continue }
    $name = $Matches[1].Trim()
    $description = $Matches[2].Trim()
    if ($name -match '^[-: ]+$' -or $name -match '^<small>' -or [string]::IsNullOrWhiteSpace($description)) { continue }
    if ($descriptions.ContainsKey($name) -and $descriptions[$name] -ne $description) { throw "Conflicting table descriptions for '$name' in $pagePath" }
    $descriptions[$name] = $description
}

$catalog = @(Import-Csv -LiteralPath $catalogPath)
$repositoryRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$relativeSource = [System.IO.Path]::GetRelativePath($repositoryRoot, $pagePath).Replace('\', '/')
$exactMatches = @($catalog | Where-Object {
    $_.Node -eq $Node -and
    $_.WorkScope -eq 'active' -and
    $_.DescriptionStatus -eq 'missing' -and
    $descriptions.ContainsKey($_.Parameter)
})

Write-Host "Exact missing-description matches for ${Node}: $($exactMatches.Count)"
foreach ($row in $exactMatches) { Write-Host "  $($row.Group) / $($row.Parameter)" }
if (-not $Apply) {
    Write-Host 'Dry run only. Re-run with -Apply to update the local catalog.'
    exit 0
}

foreach ($row in $exactMatches) {
    $row.Description = $descriptions[$row.Parameter]
    $row.DescriptionStatus = 'draft'
    $row.DescriptionSource = $relativeSource
    $row.EvidenceStatus = 'inferred-draft'
    $row.ReviewNotes = "Exact parameter-name match imported from an existing English MDX table; current-product verification is still required."
    $row.ReviewedAt = (Get-Date).ToString('yyyy-MM-dd')
}
$sourcedRows = @($catalog | Where-Object { $_.Node -eq $Node -and $_.DescriptionSource -eq $relativeSource -and $_.EvidenceStatus -eq 'inferred-draft' })
foreach ($row in $sourcedRows) {
    $description = [string]$row.Description
    if ($row.Type -eq 'Action') {
        $row.ParameterRole = 'action-trigger'
    } elseif ($row.Type -eq 'Messages' -and $description -match '(?i)input|incoming|accept|receive') {
        $row.ParameterRole = 'messages-input-draft'
    } elseif ($row.Type -eq 'Messages' -and $description -match '(?i)output|emit|send') {
        $row.ParameterRole = 'messages-output-draft'
    } elseif ($row.Type -match '^(Image|Audio|Patch|Camera|Object|Matrix|TimeCode|Display|Blender|3D Camera)$' -and $description -match '(?i)input|incoming|accept|receive') {
        $row.ParameterRole = 'resource-input-draft'
    } elseif ($row.Type -match '^(Image|Audio|Patch|Camera|Object|Matrix|TimeCode|Display|Blender|3D Camera)$' -and $description -match '(?i)output|outputs|produce|render') {
        $row.ParameterRole = 'resource-output-draft'
    } elseif ($description -match '(?i)^Displays|^Indicates|^Reports|^Shows') {
        $row.ParameterRole = 'read-only-status-draft'
    }
    $row.DocumentationDisposition = 'node-reference'
}
$catalog | Export-Csv -LiteralPath $catalogPath -NoTypeInformation -Encoding utf8
Write-Host "Applied $($exactMatches.Count) draft descriptions and classified $($sourcedRows.Count) sourced rows in $catalogPath"
