[CmdletBinding()]
param(
    [ValidateSet('Import', 'Status', 'Next', 'Apply', 'Validate', 'ReportImported', 'ReportNeedsUpdate', 'ReportMissingDrafts', 'ReportSharedCandidates')]
    [string]$Action = 'Status',
    [string]$SourceCsv = 'C:\Users\andre\Downloads\Root_parameters (1).csv',
    [string]$KnowledgeBase = (Join-Path $PSScriptRoot '..\.local\node-parameter-kb'),
    [int]$BatchSize = 50,
    [string]$ReviewFile = ''
)

$ErrorActionPreference = 'Stop'
$KnowledgeBase = [System.IO.Path]::GetFullPath($KnowledgeBase)
$RawCsv = Join-Path $KnowledgeBase 'source.csv'
$CatalogCsv = Join-Path $KnowledgeBase 'parameters.csv'
$RejectedCsv = Join-Path $KnowledgeBase 'rejected-source-rows.csv'
$QueueCsv = Join-Path $KnowledgeBase 'current-batch.csv'
$SummaryMd = Join-Path $KnowledgeBase 'README.md'
$ImportedReviewMd = Join-Path $KnowledgeBase 'existing-descriptions-review.md'
$NeedsUpdateMd = Join-Path $KnowledgeBase 'descriptions-needing-update.md'
$MissingDraftsMd = Join-Path $KnowledgeBase 'missing-descriptions-drafts.md'
$SharedCandidatesMd = Join-Path $KnowledgeBase 'shared-parameter-candidates.md'

function Convert-ToKeyPart([string]$Value) {
    if ($null -eq $Value) { return '' }
    return ($Value.Trim().ToLowerInvariant() -replace '\s+', ' ')
}

function Get-RowId($Row) {
    $identity = '{0}|{1}|{2}' -f (Convert-ToKeyPart $Row.Node), (Convert-ToKeyPart $Row.Group), (Convert-ToKeyPart $Row.Parameter)
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($identity)
    $sha = [System.Security.Cryptography.SHA256]::Create()
    try { return ([System.BitConverter]::ToString($sha.ComputeHash($bytes))).Replace('-', '').Substring(0, 16).ToLowerInvariant() }
    finally { $sha.Dispose() }
}

function Test-SuspiciousNodeName([string]$Node) {
    if ([string]::IsNullOrWhiteSpace($Node)) { return $true }
    return ($Node -match '[{};=]' -or $Node -match '^\s*(for|if|while|return|var|float|int|vec[234]|void)\s*\(' -or $Node.Length -gt 100)
}

function Import-Catalog {
    if (-not (Test-Path -LiteralPath $SourceCsv)) { throw "Source CSV not found: $SourceCsv" }
    New-Item -ItemType Directory -Force -Path $KnowledgeBase | Out-Null
    Copy-Item -LiteralPath $SourceCsv -Destination $RawCsv -Force
    $allSourceRows = @(Import-Csv -LiteralPath $RawCsv -Delimiter ';')
    $sourceRows = @($allSourceRows | Where-Object { -not [string]::IsNullOrWhiteSpace($_.Node) -and -not [string]::IsNullOrWhiteSpace($_.Parameter) -and -not (Test-SuspiciousNodeName $_.Node) })
    $rejectedRows = @($allSourceRows | Where-Object { [string]::IsNullOrWhiteSpace($_.Node) -or [string]::IsNullOrWhiteSpace($_.Parameter) -or (Test-SuspiciousNodeName $_.Node) })
    if ($sourceRows.Count -eq 0) { throw 'Source CSV contains no data rows.' }

    $rejectedRows | Export-Csv -LiteralPath $RejectedCsv -NoTypeInformation -Encoding utf8

    $duplicateIds = $sourceRows | Group-Object Node, Group, Parameter | Where-Object Count -gt 1
    $duplicateKeys = @{}
    foreach ($duplicate in $duplicateIds) {
        foreach ($item in $duplicate.Group) { $duplicateKeys[(Get-RowId $item)] = $true }
    }
    $parameterCounts = @{}
    foreach ($parameterGroup in ($sourceRows | Group-Object Parameter)) { $parameterCounts[$parameterGroup.Name] = $parameterGroup.Count }

    $catalog = foreach ($row in $sourceRows) {
        $description = [string]$row.Description
        $isInternal = ([string]$row.Parameter).StartsWith('$')
        $isSharedEnabled = ([string]$row.Parameter) -ceq 'Enabled'
        $workScope = if ($isInternal) { 'excluded-internal-current-stage' } elseif ($isSharedEnabled) { 'excluded-shared-enabled' } else { 'active' }
        $parameterRole = if ($isInternal) { 'internal' } elseif ($isSharedEnabled) { 'shared-editable-node-state' } elseif ($row.Type -eq 'Action') { 'action-trigger' } elseif ($row.Type -eq 'Messages') { 'messages-pin-direction-unresolved' } elseif ($row.Type -match '^(Image|Audio|Patch|Camera|Object|Matrix|TimeCode|Display|Blender|3D Camera)$') { 'resource-pin-direction-unresolved' } elseif ($row.Parameter -in @('Initialized', 'Last Error') -or $row.Parameter -match ' Status$') { 'read-only-status-candidate' } else { 'setting-or-status-unresolved' }
        $documentationDisposition = if ($isInternal) { 'not-for-docs-current-stage' } elseif ($isSharedEnabled) { 'shared-reference' } else { 'unresolved' }
        $evidenceStatus = if ([string]::IsNullOrWhiteSpace($description)) { 'no-description' } else { 'imported-unverified' }
        [pscustomobject][ordered]@{
            Id                = Get-RowId $row
            Node              = $row.Node
            Group             = $row.Group
            Parameter         = $row.Parameter
            Type              = $row.Type
            Default           = $row.Default
            Min               = $row.Min
            Max               = $row.Max
            Description       = $description
            Hint              = $row.Hint
            Scope             = if ($isInternal) { 'internal' } elseif ($isSharedEnabled) { 'shared-node-state' } else { 'user-facing' }
            WorkScope         = $workScope
            ClassificationReason = if ($isInternal) { 'User decision: dollar-prefixed parameters are internal and ignored at this stage.' } elseif ($isSharedEnabled) { 'User decision: Enabled is the common node-processing state and is documented once, not per node.' } else { '' }
            ParameterRole     = $parameterRole
            SharedNameCount   = $parameterCounts[[string]$row.Parameter]
            SharedCandidate   = if (-not $isInternal -and -not $isSharedEnabled -and $parameterCounts[[string]$row.Parameter] -ge 5) { 'yes-needs-semantic-review' } else { 'no' }
            DocumentationDisposition = $documentationDisposition
            EvidenceStatus    = $evidenceStatus
            DescriptionStatus = if ([string]::IsNullOrWhiteSpace($description)) { 'missing' } else { 'imported-needs-review' }
            DescriptionSource = if ([string]::IsNullOrWhiteSpace($description)) { '' } else { 'Root_parameters export' }
            ReviewNotes       = if ($duplicateKeys.ContainsKey((Get-RowId $row))) { 'Duplicate Node/Group/Parameter key in source export.' } else { '' }
            ReviewedAt        = ''
        }
    }
    $catalog | Export-Csv -LiteralPath $CatalogCsv -NoTypeInformation -Encoding utf8
    Write-Summary -Catalog $catalog -SourceName ([System.IO.Path]::GetFileName($SourceCsv)) -RejectedCount $rejectedRows.Count
    Write-Host "Imported $($catalog.Count) parameter rows into $CatalogCsv; quarantined $($rejectedRows.Count) malformed source rows."
}

function Read-Catalog {
    if (-not (Test-Path -LiteralPath $CatalogCsv)) { throw "Knowledge base is not initialized. Run with -Action Import first: $CatalogCsv" }
    return @(Import-Csv -LiteralPath $CatalogCsv)
}

function Write-Summary($Catalog, [string]$SourceName = 'source.csv', [int]$RejectedCount = -1) {
    $rows = @($Catalog)
    $nodes = @($rows | Group-Object Node).Count
    $missing = @($rows | Where-Object DescriptionStatus -eq 'missing').Count
    $activeMissing = @($rows | Where-Object { $_.WorkScope -eq 'active' -and $_.DescriptionStatus -eq 'missing' }).Count
    $reviewed = @($rows | Where-Object DescriptionStatus -eq 'verified').Count
    $internal = @($rows | Where-Object Scope -eq 'internal').Count
    $sharedEnabled = @($rows | Where-Object Scope -eq 'shared-node-state').Count
    $generated = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss K')
    if ($RejectedCount -lt 0) {
        $RejectedCount = if (Test-Path -LiteralPath $RejectedCsv) { @(Import-Csv -LiteralPath $RejectedCsv).Count } else { 0 }
    }
    $text = @"
# Screenberry node-parameter knowledge base

Local, Git-excluded working data for writing and reviewing node documentation.

- Source snapshot: $SourceName
- Parameter rows: $($rows.Count)
- Nodes: $nodes
- Missing descriptions: $missing
- Active missing descriptions after current exclusions: $activeMissing
- Verified descriptions: $reviewed
- Internal dollar-prefixed parameters: $internal
- Shared Enabled rows excluded from node-specific work: $sharedEnabled
- Quarantined malformed source rows: $RejectedCount
- Last regenerated: $generated

## Files

- source.csv — immutable snapshot of the supplied export; re-created only by Import.
- parameters.csv — canonical working catalog, including stable IDs and review status.
- rejected-source-rows.csv — unescaped multiline/code fragments that do not have both a node and parameter name.
- current-batch.csv — the next review packet created by Next; edit only the review columns and apply it with Apply.

## Status model

- missing: no description is available.
- draft: a description has been written but still needs product verification.
- imported-needs-review: description came from the source export and needs editorial/product review.
- verified: description is accepted for use in published documentation.
- not-for-docs: internal or implementation-only parameter confirmed as unsuitable for user documentation.

Run pwsh -File tools/update-node-parameter-kb.ps1 -Action Status from the repository root for current counts.
"@
    Set-Content -LiteralPath $SummaryMd -Value $text -Encoding utf8
}

function Show-Status($Catalog) {
    $rows = @($Catalog)
    [pscustomobject]@{
        Parameters = $rows.Count
        Nodes = @($rows | Group-Object Node).Count
        UserFacing = @($rows | Where-Object Scope -eq 'user-facing').Count
        Internal = @($rows | Where-Object Scope -eq 'internal').Count
        SharedEnabled = @($rows | Where-Object Scope -eq 'shared-node-state').Count
        ActiveWorkScope = @($rows | Where-Object WorkScope -eq 'active').Count
        ExcludedCurrentStage = @($rows | Where-Object WorkScope -ne 'active').Count
        Missing = @($rows | Where-Object DescriptionStatus -eq 'missing').Count
        Draft = @($rows | Where-Object DescriptionStatus -eq 'draft').Count
        ImportedNeedsReview = @($rows | Where-Object DescriptionStatus -eq 'imported-needs-review').Count
        Verified = @($rows | Where-Object DescriptionStatus -eq 'verified').Count
        NotForDocs = @($rows | Where-Object DescriptionStatus -eq 'not-for-docs').Count
    } | Format-List
}

function New-ReviewBatch($Catalog) {
    if ($BatchSize -lt 1) { throw 'BatchSize must be greater than zero.' }
    $priorityNodes = @('Media Player', 'Canvas', 'Display', 'Render Target', 'TouchEngine', 'Notch Playback', '3D Camera', '3D Scene', '3D Primitive', 'Projection Mapper')
    $priority = @{}
    for ($i = 0; $i -lt $priorityNodes.Count; $i++) { $priority[$priorityNodes[$i]] = $i }
    $candidates = @($Catalog | Where-Object { $_.WorkScope -eq 'active' -and $_.DescriptionStatus -in @('missing', 'draft', 'imported-needs-review') })
    $sortProperties = @(
        @{ Expression = { if ($_.Scope -eq 'user-facing') { 0 } else { 1 } } }
        @{ Expression = { if ($priority.ContainsKey($_.Node)) { $priority[$_.Node] } else { 999 } } }
        @{ Expression = { if ($_.DescriptionStatus -eq 'draft') { 0 } elseif ($_.DescriptionStatus -eq 'imported-needs-review') { 1 } else { 2 } } }
        'Node'
        'Group'
        'Parameter'
    )
    $batch = $candidates | Sort-Object -Property $sortProperties | Select-Object -First $BatchSize
    $batch | Export-Csv -LiteralPath $QueueCsv -NoTypeInformation -Encoding utf8
    Write-Host "Created review batch with $(@($batch).Count) rows: $QueueCsv"
}

function Apply-Review($Catalog) {
    $path = if ([string]::IsNullOrWhiteSpace($ReviewFile)) { $QueueCsv } else { [System.IO.Path]::GetFullPath($ReviewFile) }
    if (-not (Test-Path -LiteralPath $path)) { throw "Review file not found: $path" }
    $reviews = @(Import-Csv -LiteralPath $path)
    $byId = @{}
    foreach ($review in $reviews) {
        if ([string]::IsNullOrWhiteSpace($review.Id)) { throw 'Every review row must have an Id.' }
        if ($byId.ContainsKey($review.Id)) { throw "Duplicate review Id: $($review.Id)" }
        $byId[$review.Id] = $review
    }
    $allowed = @('missing', 'draft', 'imported-needs-review', 'verified', 'not-for-docs')
    $applied = 0
    foreach ($row in $Catalog) {
        if (-not $byId.ContainsKey($row.Id)) { continue }
        $review = $byId[$row.Id]
        if ($review.Node -ne $row.Node -or $review.Group -ne $row.Group -or $review.Parameter -ne $row.Parameter) {
            throw "Identity columns changed for review Id $($row.Id)."
        }
        if ($review.DescriptionStatus -notin $allowed) { throw "Invalid DescriptionStatus '$($review.DescriptionStatus)' for $($row.Id)." }
        if ($review.DescriptionStatus -in @('draft', 'verified') -and [string]::IsNullOrWhiteSpace($review.Description)) {
            throw "Status '$($review.DescriptionStatus)' requires a description for $($row.Id)."
        }
        $row.Description = $review.Description
        $row.DescriptionStatus = $review.DescriptionStatus
        $row.DescriptionSource = $review.DescriptionSource
        $row.ReviewNotes = $review.ReviewNotes
        $row.ReviewedAt = if ($review.DescriptionStatus -in @('verified', 'not-for-docs')) { (Get-Date).ToString('yyyy-MM-dd') } else { $review.ReviewedAt }
        $applied++
    }
    $Catalog | Export-Csv -LiteralPath $CatalogCsv -NoTypeInformation -Encoding utf8
    Write-Summary -Catalog $Catalog
    Write-Host "Applied $applied review rows to $CatalogCsv"
}

function Test-Catalog($Catalog) {
    $errors = [System.Collections.Generic.List[string]]::new()
    $ids = @{}
    foreach ($row in $Catalog) {
        if ([string]::IsNullOrWhiteSpace($row.Node)) { $errors.Add("Missing Node for Id $($row.Id)") }
        if ([string]::IsNullOrWhiteSpace($row.Parameter)) { $errors.Add("Missing Parameter for Id $($row.Id)") }
        if ($ids.ContainsKey($row.Id)) { $errors.Add("Duplicate stable Id $($row.Id)") } else { $ids[$row.Id] = $true }
        if ($row.DescriptionStatus -in @('draft', 'verified') -and [string]::IsNullOrWhiteSpace($row.Description)) { $errors.Add("$($row.DescriptionStatus) row has no description: $($row.Id)") }
        if ($row.DescriptionStatus -eq 'verified' -and [string]::IsNullOrWhiteSpace($row.DescriptionSource)) { $errors.Add("Verified row has no source: $($row.Id)") }
        if ($row.WorkScope -notin @('active', 'excluded-internal-current-stage', 'excluded-shared-enabled')) { $errors.Add("Invalid WorkScope '$($row.WorkScope)': $($row.Id)") }
        if ($row.Parameter -eq 'Enabled' -and $row.WorkScope -ne 'excluded-shared-enabled') { $errors.Add("Enabled row is not excluded as shared: $($row.Id)") }
        if ($row.Parameter.StartsWith('$') -and $row.WorkScope -ne 'excluded-internal-current-stage') { $errors.Add("Dollar-prefixed row is not excluded as internal: $($row.Id)") }
        if ([string]::IsNullOrWhiteSpace($row.ParameterRole)) { $errors.Add("Missing ParameterRole: $($row.Id)") }
        if ([string]::IsNullOrWhiteSpace($row.DocumentationDisposition)) { $errors.Add("Missing DocumentationDisposition: $($row.Id)") }
        if ([string]::IsNullOrWhiteSpace($row.EvidenceStatus)) { $errors.Add("Missing EvidenceStatus: $($row.Id)") }
    }
    if ($errors.Count -gt 0) { $errors | ForEach-Object { Write-Error $_ }; throw "Validation failed with $($errors.Count) error(s)." }
    Write-Host "Validation passed for $(@($Catalog).Count) rows."
}

function Write-ImportedDescriptionReport($Catalog) {
    $rows = @($Catalog | Where-Object { $_.WorkScope -eq 'active' -and $_.DescriptionStatus -eq 'imported-needs-review' } | Sort-Object Node, Group, Parameter)
    $nodeGroups = @($rows | Group-Object Node)
    $builder = [System.Text.StringBuilder]::new()
    [void]$builder.AppendLine('# Existing node-parameter descriptions requiring review')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('Detailed local checklist generated from the imported Screenberry node-parameter catalog. This report is Git-excluded and must not be treated as verified product documentation.')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine("- Descriptions requiring review: $($rows.Count)")
    [void]$builder.AppendLine("- Nodes represented: $($nodeGroups.Count)")
    [void]$builder.AppendLine("- Generated: $((Get-Date).ToString('yyyy-MM-dd HH:mm:ss K'))")
    [void]$builder.AppendLine('- Canonical editable data: parameters.csv')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('## Review criteria')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('- [ ] Confirm the parameter exists under the stated node and group in the current Screenberry build.')
    [void]$builder.AppendLine('- [ ] Confirm the description explains behavior, not merely the parameter label.')
    [void]$builder.AppendLine('- [ ] Confirm defaults, units, ranges, option meanings, side effects, and platform/version limitations where relevant.')
    [void]$builder.AppendLine('- [ ] Correct grammar and terminology while preserving technical meaning.')
    [void]$builder.AppendLine('- [ ] Record an authoritative source in DescriptionSource before changing the status to verified.')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('## Node index')
    [void]$builder.AppendLine()
    foreach ($group in $nodeGroups) {
        $anchor = ($group.Name.ToLowerInvariant() -replace '[^a-z0-9]+', '-').Trim('-')
        [void]$builder.AppendLine("- [$($group.Name)](#$anchor) — $($group.Count)")
    }

    foreach ($group in $nodeGroups) {
        [void]$builder.AppendLine()
        [void]$builder.AppendLine("## $($group.Name)")
        [void]$builder.AppendLine()
        [void]$builder.AppendLine("Imported descriptions: $($group.Count)")
        foreach ($row in $group.Group) {
            $parameterTitle = if ([string]::IsNullOrWhiteSpace($row.Group)) { $row.Parameter } else { "$($row.Group) / $($row.Parameter)" }
            [void]$builder.AppendLine()
            [void]$builder.AppendLine("### $parameterTitle")
            [void]$builder.AppendLine()
            [void]$builder.AppendLine("- ID: $($row.Id)")
            [void]$builder.AppendLine("- Type: $(if ([string]::IsNullOrWhiteSpace($row.Type)) { '(empty)' } else { $row.Type })")
            [void]$builder.AppendLine("- Default: $(if ([string]::IsNullOrWhiteSpace($row.Default)) { '(empty)' } else { $row.Default })")
            [void]$builder.AppendLine("- Min/options: $(if ([string]::IsNullOrWhiteSpace($row.Min)) { '(empty)' } else { $row.Min })")
            [void]$builder.AppendLine("- Max: $(if ([string]::IsNullOrWhiteSpace($row.Max)) { '(empty)' } else { $row.Max })")
            [void]$builder.AppendLine("- Hint: $(if ([string]::IsNullOrWhiteSpace($row.Hint)) { '(empty)' } else { $row.Hint })")
            [void]$builder.AppendLine('- Status: imported-needs-review')
            [void]$builder.AppendLine()
            [void]$builder.AppendLine('**Imported description**')
            [void]$builder.AppendLine()
            [void]$builder.AppendLine(($row.Description.Trim() -replace "`r?`n", ' '))
            [void]$builder.AppendLine()
            [void]$builder.AppendLine('**Review**')
            [void]$builder.AppendLine()
            [void]$builder.AppendLine('- [ ] Product behavior verified')
            [void]$builder.AppendLine('- [ ] Wording and terminology reviewed')
            [void]$builder.AppendLine('- [ ] Source recorded in parameters.csv')
            [void]$builder.AppendLine('- Notes:')
        }
    }
    Set-Content -LiteralPath $ImportedReviewMd -Value $builder.ToString() -Encoding utf8
    Write-Host "Created detailed review report for $($rows.Count) descriptions across $($nodeGroups.Count) nodes: $ImportedReviewMd"
}

function Get-DescriptionIssues($Row) {
    $description = ([string]$Row.Description).Trim()
    $issues = [System.Collections.Generic.List[string]]::new()
    function Add-Issue([string]$Text) {
        if (-not $issues.Contains($Text)) { $issues.Add($Text) }
    }

    if ($Row.Scope -eq 'internal') {
        Add-Issue 'Internal-looking dollar-prefixed parameter: confirm whether it belongs in user documentation; the current text should not be published without explaining its public role.'
    }
    if ($description.Length -lt 45 -or @($description -split '\s+' | Where-Object { $_ }).Count -lt 7) {
        Add-Issue 'Too terse to be independently useful: it mostly labels the value or gives an instruction without explaining effect, context, or constraints.'
    }
    if ($description -notmatch '[.!?]$') {
        Add-Issue 'Editorial consistency: the description is not a complete, punctuated sentence.'
    }
    if ($description -match '<br\s*/?>|<br[^>]') {
        Add-Issue 'Contains raw or malformed HTML line-break markup; rewrite as clean prose or Markdown before reuse in MDX.'
    }
    if ($description -match '(?i)andgenerate|projeting|paramters|automaticly|configurad|indside|occurence|gracefull|coumn|framerate|time code|it''s UUID|objects scaling|pixels count|neighbours cells|request\.$|WebRequest') {
        Add-Issue 'Contains a spelling, grammar, spacing, possessive, or terminology defect that requires direct copyediting.'
    }
    if ($description -match '(?i)^Only for (adaptive|fixed)\.?$|^Experimental\.?$|^(Result|Output|Input) (value|matrix|image)\.?$| range value|^Select .{0,45}\.?$|^Set .{0,45}\.?$|^Process .{0,45}\.?$|^Enable port') {
        Add-Issue 'Vague or label-restating wording: it does not explain when the parameter matters or what changing/using it actually does.'
    }
    if ($Row.Type -eq 'Combo' -and $description -notmatch '(?i):|,|\bor\b|option|mode|type|choice|select') {
        Add-Issue 'Combo parameter does not explain the available choices or how their behavior differs.'
    }
    if ($description -match '(?i)DomeSDK|Dome SDK Saver|DomeSDKSaver|MediaPlayer|DeckLinkInput|DeltacastCapture|NDIIn|\bVision\b|UvToMesh') {
        Add-Issue 'Uses a legacy, code-style, or potentially renamed product term; reconcile it with current Screenberry UI terminology and add a migration alias if needed.'
    }
    if ($description -match '(?i)experimental|in our tests|new Nvidia|new NVIDIA|Quadro|only works on|not compatible with|may not work on|requires the .* driver|7 async copy engines') {
        Add-Issue 'Version-, platform-, hardware-, or experimental behavior may have changed; verify it against the current supported build before preserving the claim.'
    }
    if ($description -match '%' -and $description -notmatch '(?i)0\.0?1 is 1%|1\.0 is 100%') {
        Add-Issue 'Percentage semantics are underspecified: clarify whether the stored value is a percentage number or a normalized 0–1 fraction.'
    }
    if ($description -match '(?i)\b(ms|FPS)\b' -and $description -notmatch '(?i)milliseconds|frames per second') {
        Add-Issue 'Uses an abbreviated unit without defining it; spell out the unit on first use and confirm the value scale.'
    }
    if ($description -match '(?i)\b(automatic|automatically|initial|default|current|selected|configured)\b' -and $description.Length -lt 75) {
        Add-Issue 'Depends on an implicit state or reference (“automatic,” “current,” “selected,” or similar) that should be named explicitly.'
    }
    return @($issues)
}

function Get-SuggestedDescription($Row, [string[]]$Issues) {
    $text = ([string]$Row.Description).Trim()
    $requiresVerification = $false

    # Mechanical cleanup that preserves the imported meaning.
    $text = $text -replace '<br\s*/?>', ' '
    $text = $text -replace '<br(?=[A-Z])', ' '
    $text = $text -replace '\s+', ' '
    $text = $text -replace '(?i)andgenerate', 'and generate them'
    $text = $text -replace '(?i)projeting', 'projecting'
    $text = $text -replace '(?i)paramters', 'parameters'
    $text = $text -replace '(?i)automaticly', 'automatically'
    $text = $text -replace '(?i)configurad', 'configured'
    $text = $text -replace '(?i)indside', 'inside'
    $text = $text -replace '(?i)occurence', 'occurrence'
    $text = $text -replace '(?i)gracefull', 'graceful'
    $text = $text -replace '(?i)\bcoumn\b', 'column'
    $text = $text -replace "(?i)identified by it's UUID", 'identified by their UUIDs'
    $text = $text -replace '(?i)objects scaling', 'scaling objects'
    $text = $text -replace '(?i)pixels count', 'pixel count'
    $text = $text -replace '(?i)neighbours cells', 'neighboring cells'
    $text = $text -replace '(?i)\bframerate\b', 'frame rate'
    $text = $text -replace '(?i)\btime code\b', 'timecode'

    # Turn common UI-style fragments into descriptive sentences.
    if ($text -match '(?i)^Only for adaptive\.?$') {
        $text = 'Applies only when adaptive subdivision is selected; describe how this value affects subdivision quality and performance after verification.'
        $requiresVerification = $true
    } elseif ($text -match '(?i)^Only for fixed\.?$') {
        $text = 'Applies only when fixed subdivision is selected; describe how this value determines the subdivision result after verification.'
        $requiresVerification = $true
    } elseif ($text -match '(?i)^Experimental\.?$') {
        $text = "Controls the experimental $($Row.Parameter) behavior; document its effect and limitations after verifying the current build."
        $requiresVerification = $true
    } elseif ($text -match '(?i)^Result value\.?$') {
        $text = 'Outputs the value calculated by the node.'
    } elseif ($text -match '(?i)^Output matrix\.?$') {
        $text = 'Outputs the matrix created by the node.'
    } elseif ($text -match '(?i)^Input matrix value\.?$') {
        $text = 'Accepts the matrix that the node processes.'
    } elseif ($text -match '(?i)^Aperture range value\.?$') {
        $text = 'Reports the minimum and maximum aperture values supported by the selected camera.'
        $requiresVerification = $true
    } elseif ($text -match '(?i)^ISO value range\.?$') {
        $text = 'Reports the minimum and maximum ISO values supported by the selected camera.'
        $requiresVerification = $true
    } elseif ($text -match '(?i)^Gain range value\.?$') {
        $text = 'Reports the minimum and maximum gain values supported by the selected camera.'
        $requiresVerification = $true
    } elseif ($text -match '(?i)^Exposure range value,? in seconds\.?$') {
        $text = 'Reports, in seconds, the minimum and maximum exposure values supported by the selected camera.'
        $requiresVerification = $true
    } elseif ($text -match '(?i)^Shutter speed range value,? in seconds\.?$') {
        $text = 'Reports, in seconds, the minimum and maximum shutter-speed values supported by the selected camera.'
        $requiresVerification = $true
    } else {
        $text = $text -replace '^Shows if the model has UV map for selected UV set\.?$', 'Indicates whether the model has a UV map for the selected UV set.'
        $text = $text -replace '^Disable this parameter to skip loading normals from the object file and generate them at runtime when needed\.?$', 'When disabled, the node skips normals stored in the object file and generates normals at runtime when needed.'
        $text = $text -replace '^Disable this parameter to skip loading UV map from the object file\.?$', 'When disabled, the node does not load the UV map stored in the object file.'
        $text = $text -replace '^Model units will be used to scale model to 3D Scene units\.?$', 'Uses the selected model units to scale the model to the units configured for the 3D Scene.'
        $text = $text -replace '^frame rate of outgoing timecode\.', 'Sets the frame rate of outgoing timecode.'
        $text = $text -replace '^Shows if\b', 'Indicates whether'
        $text = $text -replace '^Show if\b', 'Indicates whether'
        $text = $text -replace '^Select\b', 'Selects'
        $text = $text -replace '^Set\b', 'Sets'
        $text = $text -replace '^Define\b', 'Defines'
        $text = $text -replace '^Configure\b', 'Configures'
        $text = $text -replace '^Calculate\b', 'Calculates'
        $text = $text -replace '^Apply\b', 'Applies'
        $text = $text -replace '^Save\b', 'Saves'
        $text = $text -replace '^Enable this option to\b', 'Enabling this option'
        $text = $text -replace '^Enable to\b', 'When enabled, the node'
        $text = $text -replace '^Enable\b', 'Enables'
        $text = $text -replace '^Process\b', 'Processes'
        $text = $text -replace '^Output\b', 'Outputs'
        $text = $text -replace '^Input\b', 'Accepts'
        $text = $text -replace '^Grab exclusive access to device\.', 'Gives this node exclusive access to the selected device.'
    }

    foreach ($issue in $Issues) {
        if ($issue -match 'confirm|underspecified|does not explain|may have changed|implicit state|legacy|available choices|abbreviated unit') {
            $requiresVerification = $true
        }
    }
    if ($text -notmatch '[.!?]$') { $text += '.' }

    $originalNormalized = (([string]$Row.Description).Trim() -replace "`r?`n", ' ' -replace '\s+', ' ')
    if ($text -eq $originalNormalized -and $requiresVerification) {
        $text += " [Expand this draft after verifying the referenced state, options, units, and current-build behavior.]"
    }
    return [pscustomobject]@{
        Text = $text
        ReviewLevel = if ($requiresVerification) { 'Draft — product confirmation required' } else { 'Copyedit — verify meaning before approval' }
    }
}

function Write-NeedsUpdateReport($Catalog) {
    $reviewRows = @($Catalog | Where-Object { $_.WorkScope -eq 'active' -and $_.DescriptionStatus -eq 'imported-needs-review' } | Sort-Object Node, Group, Parameter)
    $flagged = foreach ($row in $reviewRows) {
        $issues = @(Get-DescriptionIssues $row)
        if ($issues.Count -gt 0) {
            [pscustomobject]@{ Row = $row; Issues = $issues; Suggestion = Get-SuggestedDescription $row $issues }
        }
    }
    $flagged = @($flagged)
    $nodeGroups = @($flagged | Group-Object { $_.Row.Node })
    $builder = [System.Text.StringBuilder]::new()
    [void]$builder.AppendLine('# Imported descriptions that should be updated')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('Editorial assessment of imported Screenberry parameter descriptions. Entries not listed here still require factual verification before they can be marked verified; this file identifies descriptions with a concrete reason to rewrite, expand, or reconcile terminology.')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine("- Imported descriptions assessed: $($reviewRows.Count)")
    [void]$builder.AppendLine("- Descriptions flagged for update: $($flagged.Count)")
    [void]$builder.AppendLine("- Nodes represented: $($nodeGroups.Count)")
    [void]$builder.AppendLine("- Generated: $((Get-Date).ToString('yyyy-MM-dd HH:mm:ss K'))")
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('## How to use this list')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('- “Should be updated” means the current wording has an identifiable documentation-quality risk; it does not mean the proposed behavior can be inferred safely from the label.')
    [void]$builder.AppendLine('- Reasons concerning product behavior, platform support, defaults, or legacy names require current-build verification before rewriting.')
    [void]$builder.AppendLine('- Apply accepted text in parameters.csv, record DescriptionSource, and change status to draft or verified as appropriate.')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('## Node index')
    [void]$builder.AppendLine()
    foreach ($group in $nodeGroups) {
        $anchor = ($group.Name.ToLowerInvariant() -replace '[^a-z0-9]+', '-').Trim('-')
        [void]$builder.AppendLine("- [$($group.Name)](#$anchor) — $($group.Count)")
    }
    foreach ($group in $nodeGroups) {
        [void]$builder.AppendLine()
        [void]$builder.AppendLine("## $($group.Name)")
        foreach ($item in $group.Group) {
            $row = $item.Row
            $title = if ([string]::IsNullOrWhiteSpace($row.Group)) { $row.Parameter } else { "$($row.Group) / $($row.Parameter)" }
            [void]$builder.AppendLine()
            [void]$builder.AppendLine("### $title")
            [void]$builder.AppendLine()
            [void]$builder.AppendLine("- ID: $($row.Id)")
            [void]$builder.AppendLine("- Type: $(if ([string]::IsNullOrWhiteSpace($row.Type)) { '(empty)' } else { $row.Type })")
            [void]$builder.AppendLine("- Current description: $((([string]$row.Description).Trim() -replace "`r?`n", ' '))")
            [void]$builder.AppendLine('- Why update:')
            foreach ($issue in $item.Issues) { [void]$builder.AppendLine("  - $issue") }
            [void]$builder.AppendLine("- Suggested edit: $($item.Suggestion.Text)")
            [void]$builder.AppendLine("- Suggested-edit status: $($item.Suggestion.ReviewLevel)")
        }
    }
    Set-Content -LiteralPath $NeedsUpdateMd -Value $builder.ToString() -Encoding utf8
    Write-Host "Created update-candidate report for $($flagged.Count) of $($reviewRows.Count) imported descriptions: $NeedsUpdateMd"
}

function Convert-ToDescriptionLabel([string]$Parameter) {
    $label = $Parameter.Trim().TrimStart('$')
    $label = $label -creplace '([a-z0-9])([A-Z])', '$1 $2'
    $label = $label -replace '[_-]+', ' '
    $label = $label -replace '\s+', ' '
    return $label.Trim()
}

function Convert-ToSentenceLabel([string]$Label) {
    $words = foreach ($word in ($Label -split '\s+')) {
        if ($word -cmatch '^[A-Z][a-z]+$') { $word.ToLowerInvariant() } else { $word }
    }
    return ($words -join ' ')
}

function Get-UniqueDescriptionMaps($Catalog) {
    $described = @($Catalog | Where-Object { -not [string]::IsNullOrWhiteSpace($_.Description) })
    $groupMap = @{}
    $parameterMap = @{}
    $groupedByFullSignature = $described | Group-Object { '{0}|{1}|{2}' -f (Convert-ToKeyPart $_.Group), (Convert-ToKeyPart $_.Parameter), (Convert-ToKeyPart $_.Type) }
    foreach ($group in $groupedByFullSignature) {
        $unique = @($group.Group.Description | ForEach-Object { $_.Trim() } | Sort-Object -Unique)
        if ($unique.Count -eq 1) { $groupMap[$group.Name] = $unique[0] }
    }
    $groupedByParameterSignature = $described | Group-Object { '{0}|{1}' -f (Convert-ToKeyPart $_.Parameter), (Convert-ToKeyPart $_.Type) }
    foreach ($group in $groupedByParameterSignature) {
        $unique = @($group.Group.Description | ForEach-Object { $_.Trim() } | Sort-Object -Unique)
        if ($unique.Count -eq 1) { $parameterMap[$group.Name] = $unique[0] }
    }
    return [pscustomobject]@{ Full = $groupMap; Parameter = $parameterMap }
}

function Get-MissingDescriptionDraft($Row, $DescriptionMaps) {
    $label = Convert-ToDescriptionLabel $Row.Parameter
    $labelLower = if ([string]::IsNullOrWhiteSpace($label)) { 'this parameter' } else { Convert-ToSentenceLabel $label }
    $fullKey = '{0}|{1}|{2}' -f (Convert-ToKeyPart $Row.Group), (Convert-ToKeyPart $Row.Parameter), (Convert-ToKeyPart $Row.Type)
    $parameterKey = '{0}|{1}' -f (Convert-ToKeyPart $Row.Parameter), (Convert-ToKeyPart $Row.Type)
    $basis = 'Name/type inference'
    $confidence = 'Low — context confirmation required'
    $draft = ''

    if ($DescriptionMaps.Full.ContainsKey($fullKey)) {
        $draft = $DescriptionMaps.Full[$fullKey]
        $basis = 'Unique existing analogue with the same group, parameter name, and type'
        $confidence = 'Medium — verify node-specific behavior'
    } elseif ($DescriptionMaps.Parameter.ContainsKey($parameterKey)) {
        $draft = $DescriptionMaps.Parameter[$parameterKey]
        $basis = 'Unique existing analogue with the same parameter name and type'
        $confidence = 'Medium-low — verify that behavior is shared by this node'
    } else {
        switch -Regex ([string]$Row.Type) {
            '^Bool$' {
                if ($label -match '^(?i)Enable\s+(.+)$') { $draft = "Enables $($Matches[1])." }
                elseif ($label -match '^(?i)Disable\s+(.+)$') { $draft = "Disables $($Matches[1])." }
                elseif ($label -match '^(?i)Use\s+(.+)$') { $draft = "Uses $($Matches[1]) when processing the node." }
                elseif ($label -match '^(?i)Show\s+(.+)$') { $draft = "Shows $($Matches[1])." }
                elseif ($label -match '^(?i)Ignore\s+(.+)$') { $draft = "Ignores $($Matches[1]) when enabled." }
                elseif ($label -match '^(?i)Lock\s+(.+)$') { $draft = "Locks $($Matches[1]) when enabled." }
                elseif ($label -match '^(?i)Keep\s+(.+)$') { $draft = "Keeps $($Matches[1]) when enabled." }
                elseif ($label -match '^(?i)Allow\s+(.+)$') { $draft = "Allows $($Matches[1]) when enabled." }
                else { $draft = "Controls whether $labelLower is enabled." }
                break
            }
            '^Action$' { $draft = "Triggers the $labelLower action."; break }
            '^Combo$' { $draft = "Selects the $labelLower mode or option."; break }
            '^(Int|Double)$' { $draft = "Sets the $labelLower value."; break }
            '^(DVec[234]|IVec[234]|DQuat|DMat4)$' { $draft = "Sets the $labelLower components."; break }
            'Array$' { $draft = "Provides the array of values used for $labelLower."; break }
            '^String$' {
                if ($label -match '(?i)path|file|folder|directory|filename') { $draft = "Specifies the $labelLower path or name." }
                else { $draft = "Sets the text value used for $labelLower." }
                break
            }
            '^(Image|Audio|Messages|Patch|Camera|Object|Matrix|TimeCode|Display|Blender|3D Camera)$' {
                $draft = "Provides the $labelLower $(([string]$Row.Type).ToLowerInvariant()) connection or value."
                break
            }
            '^$' { $draft = "Provides the $labelLower value used by the node."; break }
            default { $draft = "Provides the $labelLower value used by the node."; break }
        }
    }
    $draft = $draft -replace '<br\s*/?>', ' ' -replace '<br(?=[A-Z])', ' ' -replace '\s+', ' '
    if ($draft -notmatch '[.!?]$') { $draft += '.' }

    $nameProblems = [System.Collections.Generic.List[string]]::new()
    if ($Row.Scope -eq 'internal') { $nameProblems.Add('Dollar-prefixed name looks internal or implementation-specific; confirm whether it is user-visible and documentable.') }
    if ([string]::IsNullOrWhiteSpace($Row.Type)) { $nameProblems.Add('The parameter type is missing from the export.') }
    if ($Row.Parameter -cmatch '^[a-z]') { $nameProblems.Add('Name begins with a lowercase letter and may not match current UI capitalization.') }
    if ($Row.Parameter -match '[_]' -or $Row.Parameter -cmatch '[a-z][A-Z]') { $nameProblems.Add('Name appears code-style rather than user-facing; confirm the exact UI label.') }
    if ($Row.Parameter -match ':') { $nameProblems.Add('Name repeats or embeds group/context using a colon; confirm whether the prefix is part of the visible parameter label.') }
    if ($label -match '^(?i)(Type|Mode|Value|Data|Input|Output|Image|Audio|Events|Status|Name|File|Path|Size|Count|Result|Source|Target|Enabled)$') { $nameProblems.Add('Name is generic and does not identify its node-specific role without additional context.') }

    $contextProblems = [System.Collections.Generic.List[string]]::new()
    $questions = [System.Collections.Generic.List[string]]::new()
    if ($Row.Node -match '[{};=]' -or $Row.Node -match '^\s*(for|if|while|return|var|float|int|vec[234]|void)\s*\(' -or $Row.Node.Length -gt 100) {
        $contextProblems.Add('The exported node name looks like a code/help-text fragment rather than a real Screenberry node; this record may be another malformed multiline CSV row.')
        $questions.Add('Is this record a real node parameter? If not, which preceding node/parameter help field should this source fragment belong to?')
        $confidence = 'Unusable until malformed-source context is resolved'
    }
    if ($basis -eq 'Name/type inference') {
        $contextProblems.Add('No unambiguous existing description was found for this parameter signature; the draft is inferred only from its name and type.')
    } else {
        $contextProblems.Add('The draft is borrowed from a matching parameter elsewhere; shared naming does not prove identical behavior in this node.')
        $questions.Add("Does $($Row.Node) use $($Row.Parameter) exactly like the existing analogue, including defaults, side effects, and limitations?")
    }
    if ($Row.Scope -eq 'internal') { $questions.Add('Is this parameter visible or linkable in the supported UI, or should it be classified as not-for-docs?') }
    if ([string]::IsNullOrWhiteSpace($Row.Type)) { $questions.Add('What is the actual data type, and is this a real parameter or a structural/export row?') }
    if ($Row.Type -eq 'Bool') {
        $questions.Add('Is this an editable setting or a read-only status output, and what exactly happens in the true and false states?')
    } elseif ($Row.Type -eq 'Action') {
        $questions.Add('What operation is triggered, what prerequisites or side effects does it have, and how is completion or failure reported?')
    } elseif ($Row.Type -eq 'Combo') {
        $options = if ([string]::IsNullOrWhiteSpace($Row.Min)) { 'the available choices' } else { "these exported choices: $($Row.Min)" }
        $questions.Add("What does each of $options do, and which choice is recommended for common use cases?")
    } elseif ($Row.Type -match '^(Int|Double)$') {
        $questions.Add('What unit and scale does the value use, how does increasing or decreasing it affect behavior, and are the exported limits meaningful or sentinel values?')
    } elseif ($Row.Type -match '^(DVec[234]|IVec[234]|DQuat|DMat4|.*Array)$') {
        $questions.Add('What does each component or array element represent, in what order, and with what units or coordinate system?')
    } elseif ($Row.Type -match '^(Image|Audio|Messages|Patch|Camera|Object|Matrix|TimeCode|Display|Blender|3D Camera)$') {
        $questions.Add('Is this an input, output, or bidirectional/linkable resource, and what data does the node expect or produce?')
    } elseif ($Row.Type -eq 'String') {
        $questions.Add('What format is accepted, what does an empty value mean, and are paths, tokens, encodings, or substitutions supported?')
    } else {
        $questions.Add('What user-visible behavior does this parameter control or report, and how should a user know when to use it?')
    }
    if ($nameProblems.Count -gt 0) { $questions.Add('What is the exact current UI label, including capitalization, spacing, and group placement?') }

    return [pscustomobject]@{
        Draft = $draft
        Basis = $basis
        Confidence = $confidence
        NameProblems = @($nameProblems)
        ContextProblems = @($contextProblems)
        Questions = @($questions | Select-Object -Unique)
    }
}

function Write-MissingDescriptionDraftReport($Catalog) {
    $missing = @($Catalog | Where-Object { $_.WorkScope -eq 'active' -and $_.DescriptionStatus -eq 'missing' } | Sort-Object Node, Group, Parameter)
    $maps = Get-UniqueDescriptionMaps $Catalog
    $records = foreach ($row in $missing) {
        [pscustomobject]@{ Row = $row; Assessment = Get-MissingDescriptionDraft $row $maps }
    }
    $records = @($records)
    $nodeGroups = @($records | Group-Object { $_.Row.Node })
    $nameIssueCount = @($records | Where-Object { $_.Assessment.NameProblems.Count -gt 0 }).Count
    $analogueCount = @($records | Where-Object { $_.Assessment.Basis -ne 'Name/type inference' }).Count
    $builder = [System.Text.StringBuilder]::new()
    [void]$builder.AppendLine('# Drafts for all missing node-parameter descriptions')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('Complete local working list for parameters whose imported Description field is empty. Suggested descriptions are conservative drafts, not verified product documentation. Bracket-free prose may still be wrong if the export does not reveal direction, units, lifecycle, or node-specific behavior.')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine("- Missing descriptions covered: $($records.Count)")
    [void]$builder.AppendLine("- Nodes represented: $($nodeGroups.Count)")
    [void]$builder.AppendLine("- Drafts based on a unique existing analogue: $analogueCount")
    [void]$builder.AppendLine("- Records with a parameter-name concern: $nameIssueCount")
    [void]$builder.AppendLine("- Generated: $((Get-Date).ToString('yyyy-MM-dd HH:mm:ss K'))")
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('## Node index')
    [void]$builder.AppendLine()
    foreach ($group in $nodeGroups) {
        $anchor = ($group.Name.ToLowerInvariant() -replace '[^a-z0-9]+', '-').Trim('-')
        [void]$builder.AppendLine("- [$($group.Name)](#$anchor) — $($group.Count)")
    }
    foreach ($group in $nodeGroups) {
        [void]$builder.AppendLine()
        [void]$builder.AppendLine("## $($group.Name)")
        foreach ($record in $group.Group) {
            $row = $record.Row
            $assessment = $record.Assessment
            $title = if ([string]::IsNullOrWhiteSpace($row.Group)) { $row.Parameter } else { "$($row.Group) / $($row.Parameter)" }
            [void]$builder.AppendLine()
            [void]$builder.AppendLine("### $title")
            [void]$builder.AppendLine()
            [void]$builder.AppendLine("- ID: $($row.Id)")
            [void]$builder.AppendLine("- Type: $(if ([string]::IsNullOrWhiteSpace($row.Type)) { '(empty)' } else { $row.Type })")
            [void]$builder.AppendLine("- Default: $(if ([string]::IsNullOrWhiteSpace($row.Default)) { '(empty)' } else { $row.Default })")
            [void]$builder.AppendLine("- Min/options: $(if ([string]::IsNullOrWhiteSpace($row.Min)) { '(empty)' } else { $row.Min })")
            [void]$builder.AppendLine("- Max: $(if ([string]::IsNullOrWhiteSpace($row.Max)) { '(empty)' } else { $row.Max })")
            [void]$builder.AppendLine("- Hint: $(if ([string]::IsNullOrWhiteSpace($row.Hint)) { '(empty)' } else { $row.Hint })")
            [void]$builder.AppendLine("- Suggested description: $($assessment.Draft)")
            [void]$builder.AppendLine("- Draft basis: $($assessment.Basis)")
            [void]$builder.AppendLine("- Confidence: $($assessment.Confidence)")
            [void]$builder.AppendLine('- Parameter-name problem:')
            if ($assessment.NameProblems.Count -eq 0) { [void]$builder.AppendLine('  - None identified from the export.') }
            else { foreach ($problem in $assessment.NameProblems) { [void]$builder.AppendLine("  - $problem") } }
            [void]$builder.AppendLine('- Context/understanding problem:')
            foreach ($problem in $assessment.ContextProblems) { [void]$builder.AppendLine("  - $problem") }
            [void]$builder.AppendLine('- Questions required to finalize the description:')
            foreach ($question in $assessment.Questions) { [void]$builder.AppendLine("  - $question") }
        }
    }
    Set-Content -LiteralPath $MissingDraftsMd -Value $builder.ToString() -Encoding utf8
    Write-Host "Created missing-description draft report for $($records.Count) parameters across $($nodeGroups.Count) nodes: $MissingDraftsMd"
}

function Write-SharedParameterCandidateReport($Catalog) {
    $active = @($Catalog | Where-Object WorkScope -eq 'active')
    $groups = @($active | Group-Object Parameter | Where-Object Count -ge 5 | Sort-Object -Property @{ Expression = 'Count'; Descending = $true }, @{ Expression = 'Name'; Descending = $false })
    $builder = [System.Text.StringBuilder]::new()
    [void]$builder.AppendLine('# Shared parameter candidates')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine('Audit of active parameter names appearing on at least five nodes. Repetition identifies a review candidate, not shared semantics. Generic pin names and family-specific controls must not be centralized without confirming role, direction, and behavior.')
    [void]$builder.AppendLine()
    [void]$builder.AppendLine("- Active parameter rows: $($active.Count)")
    [void]$builder.AppendLine("- Repeated names to review: $($groups.Count)")
    [void]$builder.AppendLine("- Generated: $((Get-Date).ToString('yyyy-MM-dd HH:mm:ss K'))")
    [void]$builder.AppendLine()
    foreach ($group in $groups) {
        $rows = @($group.Group)
        $types = @($rows.Type | Sort-Object -Unique)
        $nodeNames = @($rows.Node | Sort-Object -Unique)
        $groupNames = @($rows.Group | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Sort-Object -Unique)
        $descriptions = @($rows | Where-Object { -not [string]::IsNullOrWhiteSpace($_.Description) } | ForEach-Object { $_.Description.Trim() } | Sort-Object -Unique)
        $missingCount = @($rows | Where-Object DescriptionStatus -eq 'missing').Count
        $roleValues = @($rows.ParameterRole | Sort-Object -Unique)
        $assessment = if ($group.Name -in @('Initialized', 'Last Error')) {
            'Strong global-infrastructure candidate because it occurs on 280 nodes with a status-like name; verify common read-only semantics once.'
        } elseif ($group.Name -match '^(Input( [0-9]+)?|Output|Out|Image|Audio|Messages|Patch|Port|Device|Source|Target|Value|Mode|Type)$') {
            'Do not centralize by name alone: this is a generic label whose direction and meaning are likely node-specific.'
        } elseif ($types.Count -eq 1 -and $descriptions.Count -le 1) {
            'Potential canonical shared or family-shared parameter; identical type and non-conflicting imported text support deeper semantic review.'
        } elseif ($types.Count -gt 1) {
            'Name collision across multiple types; separate semantics by type and node family before considering reuse.'
        } else {
            'Repeated name with description variation; compare behavior by node family and document exceptions explicitly.'
        }
        [void]$builder.AppendLine("## $($group.Name)")
        [void]$builder.AppendLine()
        [void]$builder.AppendLine("- Occurrences/nodes: $($rows.Count) / $($nodeNames.Count)")
        [void]$builder.AppendLine("- Types: $($types -join ', ')")
        [void]$builder.AppendLine("- Role candidates: $($roleValues -join ', ')")
        [void]$builder.AppendLine("- Missing descriptions: $missingCount")
        [void]$builder.AppendLine("- Distinct imported descriptions: $($descriptions.Count)")
        [void]$builder.AppendLine("- Groups: $(if ($groupNames.Count -eq 0) { '(none)' } else { $groupNames -join ', ' })")
        [void]$builder.AppendLine("- Initial assessment: $assessment")
        [void]$builder.AppendLine("- Nodes: $($nodeNames -join ', ')")
        if ($descriptions.Count -gt 0) {
            [void]$builder.AppendLine('- Imported description variants:')
            foreach ($description in $descriptions) { [void]$builder.AppendLine("  - $($description -replace '<br\s*/?>', ' ' -replace '\s+', ' ')") }
        }
        [void]$builder.AppendLine('- Questions before canonicalization:')
        [void]$builder.AppendLine('  - Is the parameter user-visible on every listed node, and is it editable or read-only?')
        [void]$builder.AppendLine('  - Does it have the same input/output direction, units, default semantics, side effects, and availability conditions?')
        [void]$builder.AppendLine('  - Should it be global, shared only within a node family, or documented separately with exceptions?')
        [void]$builder.AppendLine()
    }
    Set-Content -LiteralPath $SharedCandidatesMd -Value $builder.ToString() -Encoding utf8
    Write-Host "Created shared-parameter audit for $($groups.Count) repeated names: $SharedCandidatesMd"
}

switch ($Action) {
    'Import' { Import-Catalog }
    'Status' { Show-Status (Read-Catalog) }
    'Next' { New-ReviewBatch (Read-Catalog) }
    'Apply' { Apply-Review (Read-Catalog) }
    'Validate' { Test-Catalog (Read-Catalog) }
    'ReportImported' { Write-ImportedDescriptionReport (Read-Catalog) }
    'ReportNeedsUpdate' { Write-NeedsUpdateReport (Read-Catalog) }
    'ReportMissingDrafts' { Write-MissingDescriptionDraftReport (Read-Catalog) }
    'ReportSharedCandidates' { Write-SharedParameterCandidateReport (Read-Catalog) }
}
