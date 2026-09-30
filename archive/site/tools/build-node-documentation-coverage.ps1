[CmdletBinding()]
param(
    [string]$KnowledgeBase = (Join-Path $PSScriptRoot '..\.local\node-parameter-kb'),
    [string]$RepositoryRoot = (Join-Path $PSScriptRoot '..')
)

$ErrorActionPreference = 'Stop'
$RepositoryRoot = [System.IO.Path]::GetFullPath($RepositoryRoot)
$catalogPath = Join-Path ([System.IO.Path]::GetFullPath($KnowledgeBase)) 'parameters.csv'
$outputCsv = Join-Path $RepositoryRoot '.local\node-documentation-coverage.csv'
$outputMd = Join-Path $RepositoryRoot '.local\node-documentation-coverage.md'
if (-not (Test-Path -LiteralPath $catalogPath)) { throw "Catalog not found: $catalogPath" }

$catalog = @(Import-Csv -LiteralPath $catalogPath)
$enFiles = @(Get-ChildItem -LiteralPath (Join-Path $RepositoryRoot 'content\en') -Recurse -File -Filter '*.mdx')
$jpFiles = @(Get-ChildItem -LiteralPath (Join-Path $RepositoryRoot 'content\jp') -Recurse -File -Filter '*.mdx')
$allMdx = @($enFiles + $jpFiles)
$fileText = @{}
foreach ($file in $allMdx) { $fileText[$file.FullName] = Get-Content -LiteralPath $file.FullName -Raw }

function Get-RelativePath([string]$Path) {
    return [System.IO.Path]::GetRelativePath($RepositoryRoot, $Path).Replace('\', '/')
}

function Get-DedicatedPages([string]$Node, $Files) {
    $normalizedNode = ($Node.ToLowerInvariant() -replace '[^a-z0-9]', '')
    return @($Files | Where-Object {
        $headingMatch = [regex]::Match($fileText[$_.FullName], '(?mi)^#\s+(.+?)\s*$')
        if (-not $headingMatch.Success) { return $false }
        $normalizedHeading = ($headingMatch.Groups[1].Value.ToLowerInvariant() -replace '[^a-z0-9]', '')
        return $normalizedHeading -eq $normalizedNode
    } | ForEach-Object { Get-RelativePath $_.FullName })
}

function Get-RelatedPages([string]$Node, $Files) {
    $escaped = [regex]::Escape($Node)
    $pattern = "\*\*$escaped\*\*|\[$escaped\]|(?mi)^#{1,6}\s+$escaped(?:\s|$)"
    return @($Files | Where-Object {
        $_.Name -ne 'nodes.mdx' -and $fileText[$_.FullName] -match $pattern
    } | ForEach-Object { Get-RelativePath $_.FullName })
}

$priorityNodes = @(
    'Media Player', 'Canvas', 'Display', 'Render Target',
    'Touch Engine', 'Notch Playback',
    '3D Camera', '3D Scene', '3D Primitive', 'Projection Mapper', 'Projector',
    'Calibrator', 'CalibratorPatch'
)
$nodeGroups = @($catalog | Group-Object Node | Sort-Object Name)
$coverage = foreach ($nodeGroup in $nodeGroups) {
    $rows = @($nodeGroup.Group)
    $active = @($rows | Where-Object WorkScope -eq 'active')
    $enDedicated = @(Get-DedicatedPages $nodeGroup.Name $enFiles)
    $jpDedicated = @(Get-DedicatedPages $nodeGroup.Name $jpFiles)
    foreach ($path in @($enDedicated)) {
        $counterpart = $path -replace '^content/en/', 'content/jp/'
        if (Test-Path -LiteralPath (Join-Path $RepositoryRoot $counterpart)) { $jpDedicated += $counterpart }
    }
    foreach ($path in @($jpDedicated)) {
        $counterpart = $path -replace '^content/jp/', 'content/en/'
        if (Test-Path -LiteralPath (Join-Path $RepositoryRoot $counterpart)) { $enDedicated += $counterpart }
    }
    $enDedicated = @($enDedicated | Sort-Object -Unique)
    $jpDedicated = @($jpDedicated | Sort-Object -Unique)
    $enRelated = @(Get-RelatedPages $nodeGroup.Name $enFiles)
    $jpRelated = @(Get-RelatedPages $nodeGroup.Name $jpFiles)
    $missing = @($active | Where-Object DescriptionStatus -eq 'missing').Count
    $imported = @($active | Where-Object DescriptionStatus -eq 'imported-needs-review').Count
    $verified = @($active | Where-Object DescriptionStatus -eq 'verified').Count
    $actionCount = @($active | Where-Object Type -eq 'Action').Count
    $connectionCount = @($active | Where-Object { $_.ParameterRole -match 'pin-direction-unresolved' }).Count
    $score = [Math]::Min($active.Count, 40) + [Math]::Min($enRelated.Count, 5) * 2 + $actionCount
    if ($enDedicated.Count -eq 0) { $score += 15 }
    if ($nodeGroup.Name -in $priorityNodes) { $score += 100 }
    $priority = if ($score -ge 100) { 'P0' } elseif ($score -ge 45) { 'P1' } elseif ($score -ge 25) { 'P2' } else { 'P3' }
    $coverageState = if ($enDedicated.Count -gt 0) { 'english-dedicated' } elseif ($enRelated.Count -gt 0) { 'english-mentioned-no-dedicated-page' } else { 'english-list-only-or-uncovered' }
    [pscustomobject][ordered]@{
        Node = $nodeGroup.Name
        Priority = $priority
        PriorityScore = $score
        CoverageState = $coverageState
        TotalExportedParameters = $rows.Count
        ActiveParameters = $active.Count
        ActiveMissingDescriptions = $missing
        ActiveImportedDescriptions = $imported
        VerifiedDescriptions = $verified
        ActionParameters = $actionCount
        UnresolvedConnectionParameters = $connectionCount
        EnglishDedicatedPages = $enDedicated.Count
        JapaneseDedicatedPages = $jpDedicated.Count
        EnglishRelatedPages = $enRelated.Count
        JapaneseRelatedPages = $jpRelated.Count
        EnglishDedicatedPaths = $enDedicated -join '; '
        JapaneseDedicatedPaths = $jpDedicated -join '; '
        EnglishRelatedPaths = $enRelated -join '; '
        JapaneseRelatedPaths = $jpRelated -join '; '
    }
}

$coverage = @($coverage | Sort-Object -Property @{ Expression = 'Priority'; Ascending = $true }, @{ Expression = 'PriorityScore'; Descending = $true }, @{ Expression = 'Node'; Ascending = $true })
$coverage | Export-Csv -LiteralPath $outputCsv -NoTypeInformation -Encoding utf8

$builder = [System.Text.StringBuilder]::new()
[void]$builder.AppendLine('# Screenberry node documentation coverage')
[void]$builder.AppendLine()
[void]$builder.AppendLine('English-first coverage and prioritization audit derived from the active node-parameter KB and exact node-name markup in English MDX. Mention counts exclude the complete node-list page. They identify candidate related coverage, not proof that a node is explained adequately. Japanese path counts remain in the CSV for future reference but do not affect current scope or completion.')
[void]$builder.AppendLine()
[void]$builder.AppendLine("- Nodes: $($coverage.Count)")
[void]$builder.AppendLine("- English dedicated coverage: $(@($coverage | Where-Object CoverageState -eq 'english-dedicated').Count)")
[void]$builder.AppendLine("- English mentions without a dedicated page: $(@($coverage | Where-Object CoverageState -eq 'english-mentioned-no-dedicated-page').Count)")
[void]$builder.AppendLine("- English list-only or uncovered: $(@($coverage | Where-Object CoverageState -eq 'english-list-only-or-uncovered').Count)")
[void]$builder.AppendLine("- Generated: $((Get-Date).ToString('yyyy-MM-dd HH:mm:ss K'))")
[void]$builder.AppendLine()
[void]$builder.AppendLine('## Priority model')
[void]$builder.AppendLine()
[void]$builder.AppendLine('- P0 is an explicit English pilot/core workflow set: primary output/playback, key integrations, 3D, and calibration nodes.')
[void]$builder.AppendLine('- P1–P3 are provisional scores based on active parameter count, action count, related-guide presence, and lack of a dedicated English page.')
[void]$builder.AppendLine('- Priority is an editorial planning signal and must be adjusted for support volume, product roadmap, safety, and actual user frequency.')
[void]$builder.AppendLine()
foreach ($priority in @('P0', 'P1', 'P2', 'P3')) {
    $items = @($coverage | Where-Object Priority -eq $priority)
    [void]$builder.AppendLine("## $priority — $($items.Count) nodes")
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('| Node | Coverage | Active params | Missing | Imported | EN/JP dedicated | EN/JP related |')
    [void]$builder.AppendLine('| --- | --- | ---: | ---: | ---: | ---: | ---: |')
    foreach ($item in $items) {
        [void]$builder.AppendLine("| $($item.Node -replace '\|', '\|') | $($item.CoverageState) | $($item.ActiveParameters) | $($item.ActiveMissingDescriptions) | $($item.ActiveImportedDescriptions) | $($item.EnglishDedicatedPages)/$($item.JapaneseDedicatedPages) | $($item.EnglishRelatedPages)/$($item.JapaneseRelatedPages) |")
    }
    [void]$builder.AppendLine()
}
Set-Content -LiteralPath $outputMd -Value $builder.ToString() -Encoding utf8
Write-Host "Created coverage CSV for $($coverage.Count) nodes: $outputCsv"
Write-Host "Created coverage report: $outputMd"
