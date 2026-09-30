[CmdletBinding()]
param(
    [string]$KnowledgeBase = (Join-Path $PSScriptRoot '..\.local\node-parameter-kb'),
    [string]$RepositoryRoot = (Join-Path $PSScriptRoot '..')
)

$ErrorActionPreference = 'Stop'
$RepositoryRoot = [System.IO.Path]::GetFullPath($RepositoryRoot)
$catalog = @(Import-Csv -LiteralPath (Join-Path ([System.IO.Path]::GetFullPath($KnowledgeBase)) 'parameters.csv'))
$coverage = @(Import-Csv -LiteralPath (Join-Path $RepositoryRoot '.local\node-documentation-coverage.csv'))
$outputPath = Join-Path $RepositoryRoot '.local\p0-missing-node-page-briefs.md'
$targets = @('Calibrator', '3D Scene', 'Projector', 'CalibratorPatch')

$builder = [System.Text.StringBuilder]::new()
[void]$builder.AppendLine('# P0 missing dedicated-page briefs')
[void]$builder.AppendLine()
[void]$builder.AppendLine('Planning briefs for core nodes that have related workflow coverage but no dedicated node page. Parameter counts exclude common `Enabled` and internal `$` parameters. Suggested sections are editorial structure, not permission to publish unverified parameter behavior.')
[void]$builder.AppendLine()
[void]$builder.AppendLine("Generated: $((Get-Date).ToString('yyyy-MM-dd HH:mm:ss K'))")
[void]$builder.AppendLine()

foreach ($node in $targets) {
    $rows = @($catalog | Where-Object { $_.Node -eq $node -and $_.WorkScope -eq 'active' } | Sort-Object Group, Parameter)
    $coverageRow = $coverage | Where-Object Node -eq $node | Select-Object -First 1
    $parameterGroups = @($rows | Group-Object { if ([string]::IsNullOrWhiteSpace($_.Group)) { '(ungrouped)' } else { $_.Group } } | Sort-Object Count -Descending)
    $imported = @($rows | Where-Object { $_.DescriptionStatus -in @('imported-needs-review', 'draft') })
    $actions = @($rows | Where-Object Type -eq 'Action')
    $connections = @($rows | Where-Object { $_.ParameterRole -match 'pin-direction-unresolved' })
    [void]$builder.AppendLine("## $node")
    [void]$builder.AppendLine()
    [void]$builder.AppendLine("- Active parameters: $($rows.Count)")
    [void]$builder.AppendLine("- Missing descriptions: $(@($rows | Where-Object DescriptionStatus -eq 'missing').Count)")
    [void]$builder.AppendLine("- Imported/draft descriptions: $($imported.Count)")
    [void]$builder.AppendLine("- Actions: $($actions.Count)")
    [void]$builder.AppendLine("- Connection parameters with unresolved direction: $($connections.Count)")
    [void]$builder.AppendLine("- English related pages: $($coverageRow.EnglishRelatedPages)")
    [void]$builder.AppendLine("- Japanese related pages: $($coverageRow.JapaneseRelatedPages)")
    [void]$builder.AppendLine("- English related paths: $(if ([string]::IsNullOrWhiteSpace($coverageRow.EnglishRelatedPaths)) { '(none)' } else { $coverageRow.EnglishRelatedPaths })")
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('### Parameter groups')
    foreach ($group in $parameterGroups) { [void]$builder.AppendLine("- $($group.Name): $($group.Count)") }
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('### Existing descriptions that can seed verification')
    if ($imported.Count -eq 0) { [void]$builder.AppendLine('- None.') }
    else {
        foreach ($row in $imported) {
            [void]$builder.AppendLine("- **$($row.Parameter)** — $(([string]$row.Description -replace '<br\s*/?>', ' ' -replace '\s+', ' ').Trim())")
        }
    }
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('### Recommended dedicated-page structure')
    [void]$builder.AppendLine("1. Purpose of **$node** and when to use it.")
    [void]$builder.AppendLine('2. Prerequisites and minimal node-graph connection.')
    [void]$builder.AppendLine('3. Verified input and output pins, separated by direction.')
    [void]$builder.AppendLine('4. Essential setup parameters grouped by the actual Settings panel.')
    [void]$builder.AppendLine('5. Advanced parameters with performance, calibration, hardware, or version implications.')
    [void]$builder.AppendLine('6. Observable expected result and node status/error interpretation.')
    [void]$builder.AppendLine('7. Troubleshooting and links to existing task-oriented workflows.')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('### Required verification before authoring')
    [void]$builder.AppendLine('- Confirm the exact current UI groups and which parameters are hidden by default.')
    [void]$builder.AppendLine('- Identify every input/output pin and distinguish editable settings from read-only results.')
    [void]$builder.AppendLine('- Confirm units, normalized scales, option meanings, defaults, and cross-parameter dependencies.')
    [void]$builder.AppendLine('- Reconcile existing workflow terminology with the current export and release-note renames.')
    [void]$builder.AppendLine('- Decide which advanced controls belong in the main page, troubleshooting, or not-for-docs.')
    if ($actions.Count -gt 0) {
        [void]$builder.AppendLine('- For each action, confirm prerequisites, side effects, completion signal, cancellation, and failure behavior.')
    }
    [void]$builder.AppendLine()
}

Set-Content -LiteralPath $outputPath -Value $builder.ToString() -Encoding utf8
Write-Host "Created P0 missing-page briefs: $outputPath"
