[CmdletBinding()]
param(
    [string]$KnowledgeBase = (Join-Path $PSScriptRoot '..\.local\node-parameter-kb'),
    [string]$RepositoryRoot = (Join-Path $PSScriptRoot '..')
)

$ErrorActionPreference = 'Stop'
$RepositoryRoot = [System.IO.Path]::GetFullPath($RepositoryRoot)
$catalogPath = Join-Path ([System.IO.Path]::GetFullPath($KnowledgeBase)) 'parameters.csv'
$outputPath = Join-Path $RepositoryRoot '.local\p0-node-page-reconciliation.md'
$catalog = @(Import-Csv -LiteralPath $catalogPath)

$targets = @(
    @{ Node = 'Canvas'; Page = 'content/en/node-reference/primary-nodes/canvas.mdx' }
    @{ Node = 'Display'; Page = 'content/en/node-reference/primary-nodes/display.mdx' }
    @{ Node = 'Render Target'; Page = 'content/en/node-reference/primary-nodes/rendertarget.mdx' }
    @{ Node = 'Touch Engine'; Page = 'content/en/node-reference/integration-nodes/touchengine.mdx' }
    @{ Node = 'Notch Playback'; Page = 'content/en/node-reference/integration-nodes/notchplayback.mdx' }
    @{ Node = '3D Camera'; Page = 'content/en/3d-scene/3d-camera.mdx' }
    @{ Node = '3D Primitive'; Page = 'content/en/3d-scene/3d-primitive.mdx' }
    @{ Node = 'Projection Mapper'; Page = 'content/en/3d-scene/projection-mapper.mdx' }
)

function Read-ParameterTable([string]$Path) {
    $rows = @()
    foreach ($line in (Get-Content -LiteralPath $Path)) {
        if ($line -notmatch '^\|\s*([^|]+?)\s*\|\s*(.*?)\s*\|\s*$') { continue }
        $name = $Matches[1].Trim()
        $description = $Matches[2].Trim()
        if ($name -match '^[-: ]+$' -or $name -match '^<small>' -or [string]::IsNullOrWhiteSpace($description)) { continue }
        $rows += [pscustomobject]@{ Name = $name; Description = $description }
    }
    return @($rows)
}

$builder = [System.Text.StringBuilder]::new()
[void]$builder.AppendLine('# P0 dedicated-page reconciliation')
[void]$builder.AppendLine()
[void]$builder.AppendLine('Exact-name comparison between active KB parameters and existing English parameter-table rows. Exact matching is deliberately conservative; probable aliases remain visible for manual verification rather than being merged automatically.')
[void]$builder.AppendLine()
[void]$builder.AppendLine("Generated: $((Get-Date).ToString('yyyy-MM-dd HH:mm:ss K'))")
[void]$builder.AppendLine()

foreach ($target in $targets) {
    $pagePath = Join-Path $RepositoryRoot $target.Page
    if (-not (Test-Path -LiteralPath $pagePath)) { throw "Page not found: $pagePath" }
    $docRows = @(Read-ParameterTable $pagePath)
    $kbRows = @($catalog | Where-Object { $_.Node -eq $target.Node -and $_.WorkScope -eq 'active' })
    $docNames = @($docRows.Name)
    $kbNames = @($kbRows.Parameter)
    $exact = @($docRows | Where-Object { $kbNames -contains $_.Name })
    $draftCandidates = @($kbRows | Where-Object { $_.DescriptionStatus -eq 'missing' -and $docNames -contains $_.Parameter })
    $docOnly = @($docRows | Where-Object { $kbNames -notcontains $_.Name })
    $kbOnly = @($kbRows | Where-Object { $docNames -notcontains $_.Parameter })
    [void]$builder.AppendLine("## $($target.Node)")
    [void]$builder.AppendLine()
    [void]$builder.AppendLine("- Page: $($target.Page)")
    [void]$builder.AppendLine("- Active KB parameters: $($kbRows.Count)")
    [void]$builder.AppendLine("- Documentation table rows: $($docRows.Count)")
    [void]$builder.AppendLine("- Exact matches: $($exact.Count)")
    [void]$builder.AppendLine("- Exact missing-description import candidates: $($draftCandidates.Count)")
    [void]$builder.AppendLine("- Guide-only labels: $($docOnly.Count)")
    [void]$builder.AppendLine("- KB-only labels: $($kbOnly.Count)")
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('### Exact import candidates')
    if ($draftCandidates.Count -eq 0) { [void]$builder.AppendLine('- None.') }
    else { foreach ($row in $draftCandidates) { [void]$builder.AppendLine("- $($row.Parameter) ($($row.Type))") } }
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('### Guide-only labels — removed, renamed, moved, conditional, or absent from this export')
    if ($docOnly.Count -eq 0) { [void]$builder.AppendLine('- None.') }
    else { foreach ($row in $docOnly) { [void]$builder.AppendLine("- $($row.Name)") } }
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('### KB-only labels — missing from the current table or represented by another name')
    if ($kbOnly.Count -eq 0) { [void]$builder.AppendLine('- None.') }
    else { foreach ($row in $kbOnly) { [void]$builder.AppendLine("- $($row.Parameter) ($($row.Type); group: $(if ([string]::IsNullOrWhiteSpace($row.Group)) { 'none' } else { $row.Group }))") } }
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('### Required decision')
    [void]$builder.AppendLine('- Verify source/product version, exact UI labels, role/direction, and option semantics before resolving guide-only or KB-only rows.')
    [void]$builder.AppendLine()
}

Set-Content -LiteralPath $outputPath -Value $builder.ToString() -Encoding utf8
Write-Host "Created P0 reconciliation report: $outputPath"
