param(
    [string]$ContentRoot = "content/en",
    [string]$OutputRoot = ".local/screenberry-task-inventory"
)

$ErrorActionPreference = "Stop"

function Get-StableId {
    param([string]$Value, [string]$Prefix)

    $bytes = [System.Text.Encoding]::UTF8.GetBytes($Value.ToLowerInvariant())
    $sha = [System.Security.Cryptography.SHA256]::Create()
    try {
        $hash = $sha.ComputeHash($bytes)
    }
    finally {
        $sha.Dispose()
    }

    return "$Prefix-$(([System.BitConverter]::ToString($hash).Replace('-', '').Substring(0, 10)).ToUpperInvariant())"
}

function Remove-MdxMarkup {
    param([string]$Text)

    $value = $Text
    $value = $value -replace '<[^>]+>', ' '
    $value = $value -replace '!\[([^\]]*)\]\([^\)]*\)', '$1'
    $value = $value -replace '\[([^\]]+)\]\([^\)]*\)', '$1'
    $value = $value -replace '[*_`~]', ''
    $value = $value -replace '\s+', ' '
    return $value.Trim()
}

function Get-Route {
    param([string]$RelativePath)

    $path = $RelativePath -replace '\\', '/'
    $path = $path -replace '\.mdx$', ''
    if ($path -match '(^|/)index$') {
        $path = $path -replace '(^|/)index$', ''
    }
    return "/en/$($path.Trim('/'))"
}

function Get-Journey {
    param([string]$RelativePath, [string]$Heading)

    $key = "$RelativePath $Heading".ToLowerInvariant()
    switch -Regex ($key) {
        'getting-started|software|licens|hardware|platform|first-project|screenberry-overview' { return 'onboarding-and-system-setup' }
        'organizing-media|media library|media item|folder|playlist' { return 'media-ingest-and-organization' }
        'automatic-calibration|calibrat|projector|camera' { return 'automatic-calibration' }
        'display-editor|displays-control|display output|edid|mosaic|frame sync' { return 'display-and-output-configuration' }
        '3d-scene|3d |projection-mapper' { return '3d-scene-and-projection' }
        'warping-alignment|warp|mask|blend|patch' { return 'warping-mapping-and-alignment' }
        'working-with-nodes|node graph|node parameter|linking-nodes' { return 'node-graph-authoring' }
        'patch-editor' { return 'patch-authoring' }
        'audio' { return 'audio-routing-and-playback' }
        'web-panel' { return 'remote-control-and-web-panel' }
        'node-reference' { return 'node-reference' }
        'release-note|whats-new' { return 'release-and-upgrade-information' }
        default { return 'product-operation-general' }
    }
}

function Get-SectionKind {
    param(
        [string]$RelativePath,
        [string]$Heading,
        [int]$StepCount,
        [string]$Body
    )

    $key = "$RelativePath $Heading".ToLowerInvariant()
    $actionPattern = '^(add|adding|activate|activating|adjust|adjusting|allow|allowing|apply|applying|arrange|arranging|build|building|change|changing|check|checking|choose|choosing|configure|configuring|connect|connecting|copy|copying|create|creating|define|defining|delete|deleting|disable|disabling|edit|editing|enable|enabling|export|exporting|force|forcing|identify|identifying|import|importing|inspect|inspecting|install|installing|launch|launching|link|linking|load|loading|manage|managing|move|moving|navigate|navigating|open|opening|organize|organizing|play|playing|position|positioning|prepare|preparing|preview|previewing|remove|removing|rename|renaming|review|reviewing|rotate|rotating|route|routing|run|running|save|saving|scale|scaling|search|searching|select|selecting|set|setting|start|starting|stop|stopping|swap|swapping|turn|turning|upload|uploading|use|using|verify|verifying|work|working|zoom|zooming)\b'

    if ($RelativePath -match '(^|[\\/])whats-new([\\/]|$)') { return 'release-note' }
    if ($RelativePath -match '(privacy-policy|terms-and-conditions)') { return 'legal' }
    if ($RelativePath -match 'screenberry-json-api') { return 'api-reference' }
    if ($key -match 'troubleshoot|problem|error|fail|recover|restore|diagnos|not work|no output') { return 'troubleshooting' }
    if ($key -match 'first-project|tutorial|quick start') { return 'tutorial' }
    if ($StepCount -gt 0 -and $Heading -match $actionPattern) { return 'how-to' }
    if ($StepCount -gt 0 -and $Body -match '(?im)^\s*\d+\.\s+(open|select|add|create|enter|connect|choose|start|launch|press|click|drag|ensure|verify|navigate|run|set|turn|use)\b') { return 'how-to' }
    if ($Heading -match $actionPattern) { return 'task-fragment' }
    if ($RelativePath -match '(^|[\\/])node-reference([\\/]|$)' -or $Heading -match '(?i)parameters|settings|controls|supported|types at a glance') { return 'reference' }
    if ($Heading -match '(?i)overview|basics|about|difference|stages|concept|architecture|how .* works') { return 'explanation' }
    return 'reference-or-explanation'
}

function Test-ProceduralList {
    param([string[]]$Lines)

    $numbered = @($Lines | Where-Object { $_ -match '^\s*\d+\.\s+(.+)$' })
    if ($numbered.Count -eq 0) { return $false }

    $actionPattern = '(?i)^\s*\d+\.\s+(open|select|add|create|enter|connect|choose|start|launch|press|click|drag|ensure|verify|navigate|run|set|turn|use|review|activate|change|enable|disable|delete|remove|rename|copy|save|install|configure|route|position|move|rotate|scale|upload|load|import|export|apply|check|make|switch|right-click|double-click)\b'
    $actionCount = @($numbered | Where-Object { $_ -match $actionPattern }).Count
    return ($actionCount -ge [Math]::Max(1, [Math]::Ceiling($numbered.Count * 0.5)))
}

function Get-UserGoal {
    param([string]$Heading, [string]$PageTitle, [string]$Kind)

    $clean = Remove-MdxMarkup $Heading
    if ($clean -match '^(Overview|General settings|Settings|Parameters|Controls)$') {
        $clean = Remove-MdxMarkup $PageTitle
    }

    if ($Kind -in @('how-to', 'tutorial', 'task-fragment', 'troubleshooting')) {
        return $clean
    }
    return ''
}

function Get-Priority {
    param([string]$Journey, [string]$Kind, [string]$Heading)

    $key = "$Heading".ToLowerInvariant()
    if ($Kind -eq 'tutorial' -or $key -match 'install|licens|first|connect|save|output|calibrat|play media|no output|restore') { return 'P0-candidate' }
    if ($Journey -in @('onboarding-and-system-setup', 'media-ingest-and-organization', 'display-and-output-configuration', 'node-graph-authoring', 'automatic-calibration')) { return 'P1-candidate' }
    if ($Kind -in @('how-to', 'troubleshooting')) { return 'P2-candidate' }
    return 'P3-candidate'
}

function Get-UiTerms {
    param([string]$Body)

    $matches = [regex]::Matches($Body, '\*\*([^*\r\n]+)\*\*')
    $terms = foreach ($match in $matches) {
        $term = (Remove-MdxMarkup $match.Groups[1].Value).Trim()
        if ($term.Length -gt 1 -and $term.Length -lt 100) { $term }
    }
    return (@($terms | Sort-Object -Unique) -join '; ')
}

function Get-QualityGaps {
    param([string]$Kind, [int]$StepCount, [string]$Body)

    if ($Kind -notin @('how-to', 'tutorial', 'troubleshooting')) { return '' }

    $gaps = [System.Collections.Generic.List[string]]::new()
    if ($Kind -ne 'troubleshooting' -and $StepCount -eq 0) { $gaps.Add('no-numbered-procedure') }
    if ($Body -notmatch '(?i)prerequisite|before you|make sure|ensure|require|must already|you need') { $gaps.Add('prerequisites-not-explicit') }
    if ($Body -notmatch '(?i)result|consequently|confirm|verify|check|you should see|displayed|appears|output') { $gaps.Add('success-verification-not-explicit') }
    if ($Body -notmatch '(?i)if |error|fail|problem|troubleshoot|recover|restore|undo|warning|caution') { $gaps.Add('failure-or-recovery-not-covered') }
    if ($Body -notmatch '(?i)screenberry|windows|linux|macos|version|supported') { $gaps.Add('applicability-not-explicit') }
    return ($gaps -join '; ')
}

$resolvedContentRoot = (Resolve-Path -LiteralPath $ContentRoot).Path
New-Item -ItemType Directory -Force -Path $OutputRoot | Out-Null

$pageRows = [System.Collections.Generic.List[object]]::new()
$sectionRows = [System.Collections.Generic.List[object]]::new()

$files = Get-ChildItem -LiteralPath $resolvedContentRoot -Recurse -File -Filter '*.mdx' | Sort-Object FullName
foreach ($file in $files) {
    $relativePath = [System.IO.Path]::GetRelativePath($resolvedContentRoot, $file.FullName)
    $route = Get-Route $relativePath
    $lines = @(Get-Content -LiteralPath $file.FullName -Encoding UTF8)
    $h1 = @($lines | Where-Object { $_ -match '^#\s+(.+)$' } | Select-Object -First 1)
    $pageTitle = if ($h1.Count -gt 0) { Remove-MdxMarkup ([regex]::Match($h1[0], '^#\s+(.+)$').Groups[1].Value) } else { [System.IO.Path]::GetFileNameWithoutExtension($file.Name) }

    $headings = [System.Collections.Generic.List[object]]::new()
    for ($i = 0; $i -lt $lines.Count; $i++) {
        $match = [regex]::Match($lines[$i], '^(#{1,6})\s+(.+?)\s*$')
        if ($match.Success) {
            $headings.Add([pscustomobject]@{
                Index = $i
                Level = $match.Groups[1].Value.Length
                Text = Remove-MdxMarkup $match.Groups[2].Value
            })
        }
    }

    $pageStepCount = @($lines | Where-Object { $_ -match '^\s*\d+\.\s+' }).Count
    $pageRows.Add([pscustomobject]@{
        PageId = Get-StableId $relativePath 'PAGE'
        SourcePath = "content/en/$($relativePath -replace '\\', '/')"
        Route = $route
        PageTitle = $pageTitle
        HeadingCount = $headings.Count
        NumberedItemCount = $pageStepCount
        Journey = Get-Journey $relativePath $pageTitle
        PageClass = if ($relativePath -match 'whats-new') { 'release-notes' } elseif ($relativePath -match 'node-reference') { 'node-reference' } elseif ($relativePath -match 'privacy-policy|terms-and-conditions') { 'legal' } else { 'guide' }
    })

    for ($h = 0; $h -lt $headings.Count; $h++) {
        $heading = $headings[$h]
        $endIndex = if ($h + 1 -lt $headings.Count) { $headings[$h + 1].Index } else { $lines.Count }

        $bodyLines = if ($endIndex -gt ($heading.Index + 1)) { @($lines[($heading.Index + 1)..($endIndex - 1)]) } else { @() }
        $body = $bodyLines -join "`n"
        $stepLines = @($bodyLines | Where-Object { $_ -match '^\s*\d+\.\s+' })
        $isProcedural = Test-ProceduralList $bodyLines
        $kind = Get-SectionKind $relativePath $heading.Text $stepLines.Count $body
        if ($stepLines.Count -gt 0 -and -not $isProcedural -and $kind -eq 'how-to') {
            $kind = 'reference-or-explanation'
        }

        $parent = ''
        for ($p = $h - 1; $p -ge 0; $p--) {
            if ($headings[$p].Level -lt $heading.Level) {
                $parent = $headings[$p].Text
                break
            }
        }

        $candidate = $kind -in @('how-to', 'tutorial', 'task-fragment', 'troubleshooting')
        $confidence = if ($kind -in @('how-to', 'tutorial') -and $isProcedural) { 'high' } elseif ($candidate) { 'medium' } else { 'not-a-task' }
        $journey = Get-Journey $relativePath $heading.Text
        $sectionKey = "$relativePath|$($heading.Level)|$($heading.Text)|$($heading.Index + 1)"
        $sectionRows.Add([pscustomobject]@{
            SectionId = Get-StableId $sectionKey 'SEC'
            TaskId = if ($candidate) { Get-StableId $sectionKey 'TASK' } else { '' }
            SourcePath = "content/en/$($relativePath -replace '\\', '/')"
            Route = $route
            PageTitle = $pageTitle
            Heading = $heading.Text
            HeadingLevel = $heading.Level
            ParentHeading = $parent
            SourceLine = $heading.Index + 1
            SectionKind = $kind
            IsTaskCandidate = $candidate
            Confidence = $confidence
            UserGoal = Get-UserGoal $heading.Text $pageTitle $kind
            Journey = $journey
            Priority = Get-Priority $journey $kind $heading.Text
            HasProceduralList = $isProcedural
            StepCount = $stepLines.Count
            UiTerms = Get-UiTerms $body
            QualityGaps = Get-QualityGaps $kind $stepLines.Count $body
            Excerpt = (Remove-MdxMarkup (($bodyLines | Where-Object { $_.Trim() -ne '' } | Select-Object -First 2) -join ' ')).Substring(0, [Math]::Min(350, (Remove-MdxMarkup (($bodyLines | Where-Object { $_.Trim() -ne '' } | Select-Object -First 2) -join ' ')).Length))
        })
    }
}

$tasks = @($sectionRows | Where-Object IsTaskCandidate)
$pageRows | Export-Csv -LiteralPath (Join-Path $OutputRoot 'pages.csv') -NoTypeInformation -Encoding UTF8
$sectionRows | Export-Csv -LiteralPath (Join-Path $OutputRoot 'sections.csv') -NoTypeInformation -Encoding UTF8
$tasks | Export-Csv -LiteralPath (Join-Path $OutputRoot 'tasks.csv') -NoTypeInformation -Encoding UTF8

$taskGroups = $tasks | Group-Object Journey | Sort-Object Name
$kindCounts = $sectionRows | Group-Object SectionKind | Sort-Object Name
$priorityCounts = $tasks | Group-Object Priority | Sort-Object Name
$gapCounts = foreach ($gap in @('no-numbered-procedure', 'prerequisites-not-explicit', 'success-verification-not-explicit', 'failure-or-recovery-not-covered', 'applicability-not-explicit')) {
    [pscustomobject]@{ Gap = $gap; Count = @($tasks | Where-Object { $_.QualityGaps -match [regex]::Escape($gap) }).Count }
}

$inventory = [System.Text.StringBuilder]::new()
[void]$inventory.AppendLine('# English User Guide — complete user-task inventory')
[void]$inventory.AppendLine()
[void]$inventory.AppendLine("Generated by ``tools/build-english-task-inventory.ps1`` from $($pageRows.Count) English MDX pages. Stable IDs are derived from source path, heading, level, and source line; they are inventory identifiers, not proof that the procedure is complete or current.")
[void]$inventory.AppendLine()
[void]$inventory.AppendLine('## Summary')
[void]$inventory.AppendLine()
[void]$inventory.AppendLine("- Pages scanned: $($pageRows.Count)")
[void]$inventory.AppendLine("- Sections classified: $($sectionRows.Count)")
[void]$inventory.AppendLine("- User-task candidates: $($tasks.Count)")
[void]$inventory.AppendLine("- High-confidence procedural candidates: $(@($tasks | Where-Object Confidence -eq 'high').Count)")
[void]$inventory.AppendLine("- Medium-confidence task fragments: $(@($tasks | Where-Object Confidence -eq 'medium').Count)")
[void]$inventory.AppendLine()
[void]$inventory.AppendLine('The inventory is exhaustive for task signals present in the current English MDX. It is not yet exhaustive for all tasks supported by Screenberry; missing product tasks are discovered through the gap and journey workstream.')
[void]$inventory.AppendLine()

foreach ($group in $taskGroups) {
    [void]$inventory.AppendLine("## $($group.Name)")
    [void]$inventory.AppendLine()
    foreach ($task in ($group.Group | Sort-Object SourcePath, SourceLine)) {
        [void]$inventory.AppendLine("### $($task.TaskId) — $($task.UserGoal)")
        [void]$inventory.AppendLine()
        [void]$inventory.AppendLine("- **Source:** ``$($task.SourcePath):$($task.SourceLine)``")
        [void]$inventory.AppendLine("- **Route:** ``$($task.Route)``")
        [void]$inventory.AppendLine("- **Classification:** $($task.SectionKind); confidence $($task.Confidence); $($task.Priority)")
        [void]$inventory.AppendLine("- **Procedure evidence:** $($task.StepCount) numbered items; procedural list = $($task.HasProceduralList)")
        if ($task.UiTerms) { [void]$inventory.AppendLine("- **Observed UI terms:** $($task.UiTerms)") }
        if ($task.QualityGaps) { [void]$inventory.AppendLine("- **Detected quality gaps:** $($task.QualityGaps)") }
        if ($task.Excerpt) { [void]$inventory.AppendLine("- **Source excerpt (normalized):** $($task.Excerpt)") }
        [void]$inventory.AppendLine()
    }
}

$inventory.ToString() | Set-Content -LiteralPath (Join-Path $OutputRoot 'task-inventory.md') -Encoding UTF8

$audit = [System.Text.StringBuilder]::new()
[void]$audit.AppendLine('# English User Guide — task coverage and quality audit')
[void]$audit.AppendLine()
[void]$audit.AppendLine('## What this audit measures')
[void]$audit.AppendLine()
[void]$audit.AppendLine('This is a structural first pass over the current English source. It detects task signals and common omissions; it does not certify behavioral accuracy. Every high-priority procedure still requires claim review and current-product verification.')
[void]$audit.AppendLine()
[void]$audit.AppendLine('## Section classification')
[void]$audit.AppendLine()
[void]$audit.AppendLine('| Class | Count |')
[void]$audit.AppendLine('| --- | ---: |')
foreach ($entry in $kindCounts) { [void]$audit.AppendLine("| $($entry.Name) | $($entry.Count) |") }
[void]$audit.AppendLine()
[void]$audit.AppendLine('## Candidate priority')
[void]$audit.AppendLine()
[void]$audit.AppendLine('| Priority | Count |')
[void]$audit.AppendLine('| --- | ---: |')
foreach ($entry in $priorityCounts) { [void]$audit.AppendLine("| $($entry.Name) | $($entry.Count) |") }
[void]$audit.AppendLine()
[void]$audit.AppendLine('## Structural quality gaps')
[void]$audit.AppendLine()
[void]$audit.AppendLine('| Gap signal | Affected task candidates |')
[void]$audit.AppendLine('| --- | ---: |')
foreach ($entry in $gapCounts) { [void]$audit.AppendLine("| $($entry.Gap) | $($entry.Count) |") }
[void]$audit.AppendLine()
[void]$audit.AppendLine('## Journey coverage')
[void]$audit.AppendLine()
[void]$audit.AppendLine('| Journey | Tasks | High confidence | Medium confidence | P0/P1 candidates |')
[void]$audit.AppendLine('| --- | ---: | ---: | ---: | ---: |')
foreach ($group in $taskGroups) {
    [void]$audit.AppendLine("| $($group.Name) | $($group.Count) | $(@($group.Group | Where-Object Confidence -eq 'high').Count) | $(@($group.Group | Where-Object Confidence -eq 'medium').Count) | $(@($group.Group | Where-Object { $_.Priority -in @('P0-candidate','P1-candidate') }).Count) |")
}
[void]$audit.AppendLine()
[void]$audit.AppendLine('## Interpretation rules')
[void]$audit.AppendLine()
[void]$audit.AppendLine('- A heading plus a procedural numbered list is strong evidence of an existing documented task, but not of factual freshness or completeness.')
[void]$audit.AppendLine('- A task fragment has an action-oriented heading without a sufficiently clear numbered procedure; it needs manual review or consolidation.')
[void]$audit.AppendLine('- Numbered UI legends, option lists, calibration stages, and component descriptions are not counted as tasks unless most items begin with user actions.')
[void]$audit.AppendLine('- Release notes, legal pages, reference, and explanation remain in `sections.csv` so future task discovery can trace their facts, but they are excluded from the task count.')
[void]$audit.AppendLine('- Automated gap signals are prompts for editorial review, not final judgments. Context can satisfy a requirement without using the expected keyword.')

$audit.ToString() | Set-Content -LiteralPath (Join-Path $OutputRoot 'coverage-audit.md') -Encoding UTF8

$pageCoverage = [System.Text.StringBuilder]::new()
[void]$pageCoverage.AppendLine('# English User Guide — page-level task coverage')
[void]$pageCoverage.AppendLine()
[void]$pageCoverage.AppendLine('This matrix shows whether a page contains an explicit task candidate. Zero does not mean the page is unnecessary: reference and explanation pages should often contain no procedure. Zero on an operational feature page is a prompt to check whether a linked how-to is missing.')
[void]$pageCoverage.AppendLine()
[void]$pageCoverage.AppendLine('| Source page | Page class | Journey | Task candidates | High | Medium |')
[void]$pageCoverage.AppendLine('| --- | --- | --- | ---: | ---: | ---: |')
foreach ($page in ($pageRows | Sort-Object SourcePath)) {
    $pageTasks = @($tasks | Where-Object SourcePath -eq $page.SourcePath)
    [void]$pageCoverage.AppendLine("| ``$($page.SourcePath)`` | $($page.PageClass) | $($page.Journey) | $($pageTasks.Count) | $(@($pageTasks | Where-Object Confidence -eq 'high').Count) | $(@($pageTasks | Where-Object Confidence -eq 'medium').Count) |")
}
$pageCoverage.ToString() | Set-Content -LiteralPath (Join-Path $OutputRoot 'page-task-coverage.md') -Encoding UTF8

$review = [System.Text.StringBuilder]::new()
[void]$review.AppendLine('# English User Guide — task-candidate editorial review queue')
[void]$review.AppendLine()
[void]$review.AppendLine('Review all medium-confidence candidates before treating them as standalone user tasks. Recommended dispositions are: promote to canonical task, merge into a parent task, retain as atomic operation, reclassify as reference/explanation, or mark superseded.')
[void]$review.AppendLine()
[void]$review.AppendLine('| Task ID | Candidate | Source | Suggested disposition | Detected gaps |')
[void]$review.AppendLine('| --- | --- | --- | --- | --- |')
foreach ($task in ($tasks | Where-Object Confidence -eq 'medium' | Sort-Object Journey, SourcePath, SourceLine)) {
    $suggested = if ($task.SectionKind -eq 'troubleshooting') { 'promote or merge into troubleshooting task' } elseif ($task.StepCount -gt 0) { 'manual procedure review' } else { 'retain as atomic operation or merge into parent task' }
    [void]$review.AppendLine("| $($task.TaskId) | $($task.UserGoal) | ``$($task.SourcePath):$($task.SourceLine)`` | $suggested | $($task.QualityGaps) |")
}
$review.ToString() | Set-Content -LiteralPath (Join-Path $OutputRoot 'editorial-review-queue.md') -Encoding UTF8

$summary = [ordered]@{
    generatedAt = (Get-Date).ToString('o')
    contentRoot = $resolvedContentRoot
    pages = $pageRows.Count
    sections = $sectionRows.Count
    tasks = $tasks.Count
    highConfidenceTasks = @($tasks | Where-Object Confidence -eq 'high').Count
    mediumConfidenceTasks = @($tasks | Where-Object Confidence -eq 'medium').Count
    outputs = @('pages.csv', 'sections.csv', 'tasks.csv', 'task-inventory.md', 'coverage-audit.md', 'page-task-coverage.md', 'editorial-review-queue.md', 'run-summary.json')
}
$summary | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $OutputRoot 'run-summary.json') -Encoding UTF8

Write-Host "Scanned $($pageRows.Count) pages and $($sectionRows.Count) sections."
Write-Host "Identified $($tasks.Count) task candidates: $(@($tasks | Where-Object Confidence -eq 'high').Count) high-confidence and $(@($tasks | Where-Object Confidence -eq 'medium').Count) medium-confidence."
Write-Host "Outputs: $OutputRoot"
