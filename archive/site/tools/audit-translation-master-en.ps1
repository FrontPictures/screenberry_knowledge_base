param(
    [string]$InputPath = ".local/reference/translations-3.4.0-master.csv",
    [string]$OutputRoot = ".local/translation-master-en-audit"
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Get-StableId {
    param([string]$Value)

    $bytes = [System.Text.Encoding]::UTF8.GetBytes($Value)
    $sha = [System.Security.Cryptography.SHA256]::Create()
    try {
        return "ENUX-$(([System.BitConverter]::ToString($sha.ComputeHash($bytes)).Replace('-', '').Substring(0, 10)).ToUpperInvariant())"
    }
    finally {
        $sha.Dispose()
    }
}

function Get-NormalizedText {
    param([string]$Value)

    if ([string]::IsNullOrWhiteSpace($Value)) {
        return ""
    }

    return (($Value.ToLowerInvariant() -replace '[\p{P}\p{S}]+', ' ') -replace '\s+', ' ').Trim()
}

function Add-Candidate {
    param(
        [object]$Row,
        [string]$Category,
        [string]$Priority,
        [string]$Reason,
        [string]$SuggestedReview
    )

    [void]$script:findings.Add([pscustomobject]@{
        FindingId = Get-StableId "$($Row.Record)|$($Row.Location)|$($Row.English)|$Category|$Reason"
        Priority = $Priority
        Category = $Category
        Record = $Row.Record
        Location = $Row.Location
        English = $Row.English
        Description = $Row.Description
        Reason = $Reason
        SuggestedReview = $SuggestedReview
    })
}

function Add-QuestionCandidate {
    param(
        [object]$Row,
        [string]$Topic,
        [string]$QuestionType,
        [string]$WhyItMatters
    )

    [void]$script:questionCandidates.Add([pscustomobject]@{
        CandidateId = Get-StableId "$($Row.Record)|$($Row.Location)|$($Row.English)|$Topic|$QuestionType"
        Topic = $Topic
        QuestionType = $QuestionType
        Record = $Row.Record
        Location = $Row.Location
        English = $Row.English
        Description = $Row.Description
        WhyItMatters = $WhyItMatters
    })
}

$resolvedInput = (Resolve-Path -LiteralPath $InputPath).Path
$rawRows = @(Import-Csv -LiteralPath $resolvedInput -Encoding UTF8)
if ($rawRows.Count -eq 0) {
    throw "The translation master contains no records: $resolvedInput"
}

$requiredColumns = @('Location', 'English', 'Description')
$actualColumns = @($rawRows[0].PSObject.Properties.Name)
foreach ($column in $requiredColumns) {
    if ($column -notin $actualColumns) {
        throw "Required column '$column' is missing from $resolvedInput"
    }
}

New-Item -ItemType Directory -Force -Path $OutputRoot | Out-Null

$currentLocation = ""
$rows = [System.Collections.Generic.List[object]]::new()
for ($index = 0; $index -lt $rawRows.Count; $index++) {
    $raw = $rawRows[$index]
    if (-not [string]::IsNullOrWhiteSpace([string]$raw.Location)) {
        $currentLocation = [string]$raw.Location
    }

    $english = [string]$raw.English
    $description = [string]$raw.Description
    $rows.Add([pscustomobject]@{
        Record = $index + 2
        Location = $currentLocation
        English = $english
        Description = $description
        Normalized = Get-NormalizedText $english
        CharacterCount = $english.Length
        PlaceholderCount = @([regex]::Matches($english, '%(?:L?\d+|n)')).Count
    })
}

$findings = [System.Collections.Generic.List[object]]::new()
$questionCandidates = [System.Collections.Generic.List[object]]::new()

$knownCorrections = @(
    @{ Pattern = '\bFroward\b'; Replacement = 'Forward'; Reason = 'Misspelling of “Forward”.' },
    @{ Pattern = '\boccured\b'; Replacement = 'occurred'; Reason = 'Misspelling of “occurred”.' },
    @{ Pattern = '\bTransfered\b'; Replacement = 'Transferred'; Reason = 'Misspelling of “Transferred”.' },
    @{ Pattern = '\bFramerate\b'; Replacement = 'Refresh Rate or Frame Rate, according to domain'; Reason = 'Nonstandard compound obscures the distinction between display refresh rate and media frame rate.' }
)

foreach ($row in $rows) {
    $source = $row.English

    if ([string]::IsNullOrWhiteSpace($source)) {
        Add-Candidate $row 'blank-record' 'P3' 'English and the accompanying record may be empty.' 'Remove a separator record or document why it must exist in the export.'
        continue
    }

    if ($source -ne $source.Trim()) {
        Add-Candidate $row 'whitespace' 'P1' 'Leading or trailing whitespace.' 'Remove unintended surrounding whitespace.'
    }
    if ($source -match '[^\r\n] {2,}[^\r\n]') {
        Add-Candidate $row 'whitespace' 'P1' 'Repeated spaces inside a UI string.' 'Use one space unless the rendered control demonstrably requires alignment spacing.'
    }
    if ($source -match '\.\.\.') {
        Add-Candidate $row 'ellipsis-style' 'P2' 'Three periods are used instead of the catalog Unicode ellipsis convention.' 'Use an ellipsis only for continuation or an action requiring more input.'
    }
    if ($source -match '\s+[?!,.;:]$') {
        Add-Candidate $row 'punctuation-spacing' 'P1' 'Whitespace appears immediately before terminal punctuation.' 'Remove unintended punctuation spacing.'
    }
    if ($source -match '[\r\n]') {
        Add-Candidate $row 'multiline-layout' 'P3' 'The source contains a manual line break.' 'Verify that wrapping should be controlled by copy rather than layout.'
    }

    foreach ($correction in $knownCorrections) {
        if ($source -cmatch $correction.Pattern) {
            Add-Candidate $row 'known-copy-correction' 'P1' $correction.Reason "Review and replace with: $($correction.Replacement)."
        }
    }

    if ($source -match '(?i)\b(error|success|warning|failed|failure|unable|invalid)\b' -and $source.Length -le 38) {
        Add-Candidate $row 'generic-or-terse-feedback' 'P2' 'Short feedback may not identify the affected operation, cause, or recovery.' 'Verify the rendered context and add the object, consequence, and next action where missing.'
    }
    if ($source -match '(?i)^Are you sure(?: you want)?') {
        Add-Candidate $row 'generic-confirmation' 'P2' 'Generic confirmation framing may delay the actual action and consequence.' 'Prefer a direct question naming the action, target, consequence, and reversibility.'
    }
    if ($source -match '^\[.+\]$') {
        Add-Candidate $row 'bracketed-state' 'P2' 'Bracketed state text may be placeholder-like or unclear to users.' 'Confirm what is saved or selected and use a concrete accessible state label.'
    }
    if ($source -match '(?i)\b(File Name|Filename)\b') {
        Add-Candidate $row 'word-form-family' 'P2' 'Filename terminology varies between closed and open compounds.' 'Choose the form by copy role and apply it consistently across equivalent roles.'
    }
    if ($source -match '(?i)\b(HASP Time|HASP time)\b') {
        Add-Candidate $row 'technical-time-label' 'P2' 'HASP time may be inconsistent and unfamiliar to users.' 'Standardize capitalization and confirm whether local/UTC display or explanatory help is needed.'
    }
    if ($source -match '(?i)\b(Sign In|Sign Out|Forgot Password|Remember Me|Group By|Unable to Paste)\b') {
        Add-Candidate $row 'sentence-case' 'P2' 'Capitalization conflicts with the English sentence-case policy or a catalog sibling.' 'Verify the control role, then use sentence case.'
    }
    if ($source -match '(?i)\b(Recipient File|Transfer File|Transferred License File|Rehost(?:ed)? Key|Fingerprint File|Deploy Licenses|Install Key|Restore License)\b') {
        Add-Candidate $row 'license-transfer-vocabulary' 'P1' 'The license workflow exposes several overlapping artifact and operation names.' 'Map each term to a user goal, machine role, artifact, consequence, and next step before rewriting.'
    }
    if ($source.Length -ge 120) {
        Add-Candidate $row 'long-copy' 'P3' 'Long UI copy may wrap poorly or hide the key action/consequence.' 'Review in the actual control at supported sizes and front-load the decision-critical information.'
    }
    if ($source -match '(?i)\b(permanently|cannot be undone|deactivate|overwrite|delete|remove|reset|shutdown|shut down|reboot|restart|close)\b') {
        Add-QuestionCandidate $row 'Destructive or disruptive action' 'Consequence and recovery' 'The best confirmation copy depends on the exact target, reversibility, downtime, side effects, and recovery path.'
    }
    if ($source -match '(?i)\b(disabled|enabled|available|unavailable|not available|not found|missing|empty|invalid|requires? (?:an? )?license)\b') {
        Add-QuestionCandidate $row 'Unavailable, empty, or invalid state' 'Cause and next action' 'Useful state copy needs the reason, whether the condition is expected, and the action that resolves it.'
    }
    if ($source -match '(?i)\b(progress|processing|loading|uploading|collecting|consolidating|saving|installing|connecting|updating|generating|calibrating)\b|…$') {
        Add-QuestionCandidate $row 'Progress state' 'Duration, cancellation, and completion' 'Progress copy depends on duration, whether cancellation is safe, what remains usable, and how success or partial failure is reported.'
    }
    if ($source -match '(?i)\b(license|HASP|recipient file|transfer file|rehost|fingerprint|key ID|activation|deploy)\b') {
        Add-QuestionCandidate $row 'Licensing' 'User goal and system model' 'Licensing copy depends on license type, source/destination machine, entitlement, connectivity, reversibility, and vendor terminology users must recognize.'
    }
    if ($source -match '(?i)\b(server|panel|remote|host|client|IP address|port)\b') {
        Add-QuestionCandidate $row 'Panel, Server, and remote context' 'Ownership and execution location' 'The correct subject and warning depend on which machine performs the action, where state is stored, and who can observe the result.'
    }
    if ($source -match '(?i)\b(frame rate|framerate|refresh rate|resolution|display|output|EDID|mosaic|GPU|BNC|sync|timing)\b') {
        Add-QuestionCandidate $row 'Displays and output' 'Domain meaning and disruption' 'Display copy depends on whether a value describes media cadence, display timing, physical connection, logical topology, or a disruptive driver operation.'
    }
    if ($source -match '(?i)\b(file|folder|path|destination|browse|select|choose|open|save|export|import|upload|download)\b') {
        Add-QuestionCandidate $row 'Files and destinations' 'Picker role and persistence' 'Labels and ellipses depend on whether the control opens a picker, commits immediately, overwrites data, remembers a location, or produces a recoverable result.'
    }
    if ($source -match '(?i)\b(auto|automatic|default|current|existing|selected|active|in use|only|all)\b') {
        Add-QuestionCandidate $row 'Scope, defaults, and automation' 'Definition and boundary' 'The copy may be ambiguous unless the affected scope, default source, selection rule, and automatic trigger are explicit.'
    }
    if ($source -match '(?i)\b(calibrat|camera|marker|tracking|fixture|patch|canvas|playlist|workspace|project|resource|media item|node)\b') {
        Add-QuestionCandidate $row 'Product workflow and object model' 'Object identity and lifecycle' 'The best label depends on the object lifecycle, containment, persistence, dependencies, and relationship to similarly named objects.'
    }
    if ($source -match '(?i)\b(password|email|sign in|sign out|account|profile|remember me|paid license|purchases)\b') {
        Add-QuestionCandidate $row 'Account and authentication' 'Destination, security, and persistence' 'Authentication copy depends on whether the flow creates an account, resets credentials, stores them, changes the active identity, or opens an external service.'
    }
}

$variantGroups = @($rows |
    Where-Object { -not [string]::IsNullOrWhiteSpace($_.English) } |
    Group-Object Normalized |
    Where-Object { @($_.Group.English | Sort-Object -Unique).Count -gt 1 } |
    ForEach-Object {
        [pscustomobject]@{
            Normalized = $_.Name
            Variants = @($_.Group.English | Sort-Object -Unique) -join ' || '
            Records = @($_.Group.Record) -join ', '
            Locations = @($_.Group.Location | Sort-Object -Unique) -join '; '
            Count = $_.Count
        }
    })

$duplicateContextGroups = @($rows |
    Where-Object { -not [string]::IsNullOrWhiteSpace($_.English) } |
    Group-Object English |
    Where-Object { $_.Count -gt 1 -and @($_.Group.Description | Sort-Object -Unique).Count -gt 1 } |
    ForEach-Object {
        [pscustomobject]@{
            English = $_.Name
            Records = @($_.Group.Record) -join ', '
            Locations = @($_.Group.Location | Sort-Object -Unique) -join '; '
            DescriptionCount = @($_.Group.Description | Sort-Object -Unique).Count
            Count = $_.Count
        }
    })

$rows |
    Select-Object Record,Location,English,Description,CharacterCount,PlaceholderCount |
    Export-Csv -LiteralPath (Join-Path $OutputRoot 'inventory.csv') -NoTypeInformation -Encoding UTF8
$findings |
    Sort-Object Priority,Category,Location,Record |
    Export-Csv -LiteralPath (Join-Path $OutputRoot 'automated-candidates.csv') -NoTypeInformation -Encoding UTF8
$variantGroups |
    Sort-Object Normalized |
    Export-Csv -LiteralPath (Join-Path $OutputRoot 'normalized-variants.csv') -NoTypeInformation -Encoding UTF8
$duplicateContextGroups |
    Sort-Object @{ Expression = 'Count'; Descending = $true },English |
    Export-Csv -LiteralPath (Join-Path $OutputRoot 'duplicate-contexts.csv') -NoTypeInformation -Encoding UTF8
$questionCandidates |
    Sort-Object Topic,Location,Record |
    Export-Csv -LiteralPath (Join-Path $OutputRoot 'question-candidates.csv') -NoTypeInformation -Encoding UTF8

$uniqueEnglish = @($rows.English | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Sort-Object -Unique).Count
$locations = @($rows.Location | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Sort-Object -Unique).Count
$summaryLines = [System.Collections.Generic.List[string]]::new()
$summaryLines.Add('# Translation master 3.4.0 — automated English UX audit')
$summaryLines.Add('')
$summaryLines.Add("Source: $resolvedInput")
$summaryLines.Add('')
$summaryLines.Add('Automated outputs are review candidates, not approved copy changes. Control role and runtime behavior remain authoritative.')
$summaryLines.Add('')
$summaryLines.Add('## Inventory')
$summaryLines.Add('')
$summaryLines.Add("- Records: $($rows.Count)")
$summaryLines.Add("- Nonblank distinct English strings: $uniqueEnglish")
$summaryLines.Add("- Source locations: $locations")
$summaryLines.Add("- Automated candidates: $($findings.Count)")
$summaryLines.Add("- Normalized variant groups: $($variantGroups.Count)")
$summaryLines.Add("- Duplicate strings with multiple described contexts: $($duplicateContextGroups.Count)")
$summaryLines.Add("- Question candidates: $($questionCandidates.Count)")
$summaryLines.Add('')
$summaryLines.Add('## Candidate counts')
$summaryLines.Add('')
$summaryLines.Add('| Category | Count |')
$summaryLines.Add('| --- | ---: |')
foreach ($group in ($findings | Group-Object Category | Sort-Object Name)) {
    $summaryLines.Add("| $($group.Name) | $($group.Count) |")
}
$summaryLines.Add('')
$summaryLines.Add('## Question-candidate counts')
$summaryLines.Add('')
$summaryLines.Add('| Topic | Count |')
$summaryLines.Add('| --- | ---: |')
foreach ($group in ($questionCandidates | Group-Object Topic | Sort-Object Name)) {
    $summaryLines.Add("| $($group.Name) | $($group.Count) |")
}
$summaryLines.Add('')
$summaryLines.Add('## Review boundary')
$summaryLines.Add('')
$summaryLines.Add('- English only; other language columns are intentionally excluded.')
$summaryLines.Add('- A normalized variant can be correct when component roles differ.')
$summaryLines.Add('- A duplicate string can be correct across many contexts.')
$summaryLines.Add('- Tooltip presence, accessibility names, truncation, reachability, and interaction behavior require runtime evidence.')
$summaryLines -join "`r`n" | Set-Content -LiteralPath (Join-Path $OutputRoot 'summary.md') -Encoding UTF8

Write-Host "Audited $($rows.Count) records across $locations locations."
Write-Host "Generated $($findings.Count) copy candidates, $($variantGroups.Count) normalized variant groups, and $($questionCandidates.Count) question candidates."
Write-Host "Outputs: $OutputRoot"
