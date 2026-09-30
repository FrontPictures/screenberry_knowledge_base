param(
    [Parameter(Mandatory = $true)]
    [string[]]$InputPath,
    [string]$OutputRoot = ".local/panel-en-ux-audit"
)

$ErrorActionPreference = "Stop"

function Get-StableId {
    param([string]$Value)

    $bytes = [System.Text.Encoding]::UTF8.GetBytes($Value)
    $sha = [System.Security.Cryptography.SHA256]::Create()
    try {
        return "UXSTR-$(([System.BitConverter]::ToString($sha.ComputeHash($bytes)).Replace('-', '').Substring(0, 10)).ToUpperInvariant())"
    }
    finally {
        $sha.Dispose()
    }
}

function Normalize-ForVariantCheck {
    param([string]$Text)

    return (($Text.ToLowerInvariant() -replace '[\s\p{P}\p{S}]+', ' ').Trim())
}

New-Item -ItemType Directory -Force -Path $OutputRoot | Out-Null

$rows = [System.Collections.Generic.List[object]]::new()
foreach ($candidate in $InputPath) {
    $resolved = (Resolve-Path -LiteralPath $candidate).Path
    [xml]$xml = Get-Content -LiteralPath $resolved -Raw -Encoding UTF8

    foreach ($context in @($xml.TS.context)) {
        foreach ($message in @($context.message)) {
            $source = [string]$message.source
            $translation = [string]$message.translation
            $locations = @($message.location | ForEach-Object { "$($_.filename):$($_.line)" }) -join '; '
            $rows.Add([pscustomobject]@{
                Id = Get-StableId "$resolved|$($context.name)|$source|$locations"
                InputFile = $resolved
                Language = [string]$xml.TS.language
                Context = [string]$context.name
                Source = $source
                Translation = $translation
                TranslationType = [string]$message.translation.type
                Comment = [string]$message.comment
                ExtraComment = [string]$message.extracomment
                Locations = $locations
                Normalized = Normalize-ForVariantCheck $source
            })
        }
    }
}

$findings = [System.Collections.Generic.List[object]]::new()
function Add-Finding {
    param(
        [object]$Row,
        [string]$Category,
        [string]$Severity,
        [string]$Reason,
        [string]$Suggestion
    )

    $findings.Add([pscustomobject]@{
        FindingId = Get-StableId "$($Row.Id)|$Category|$Reason"
        StringId = $Row.Id
        Severity = $Severity
        Category = $Category
        Context = $Row.Context
        Source = $Row.Source
        Reason = $Reason
        SuggestedReview = $Suggestion
        Locations = $Row.Locations
        InputFile = $Row.InputFile
    })
}

foreach ($row in $rows) {
    $source = $row.Source

    if ($source -ne $source.Trim()) {
        Add-Finding $row 'whitespace' 'medium' 'Leading or trailing whitespace in a UI string.' 'Remove unintended surrounding whitespace or document why layout requires it.'
    }
    if ($source -match '[^\r\n] {2,}[^\r\n]') {
        Add-Finding $row 'whitespace' 'medium' 'Repeated spaces in prose.' 'Use one space unless alignment is intentionally rendered as plain text.'
    }
    if ($source -match '\.\.\.') {
        Add-Finding $row 'ellipsis-style' 'low' 'Three periods are used instead of the Unicode ellipsis used elsewhere.' 'Standardize action/progress ellipses according to the product UI convention.'
    }
    if ($source -match '(?i)\bframerate\b') {
        Add-Finding $row 'terminology' 'high' '“Framerate” conflicts with the dominant “Frame Rate” terminology.' 'Use “Frame Rate” unless an external API or exact file-format term requires otherwise.'
    }
    if ($source -match '(?i)\bauto save\b') {
        Add-Finding $row 'terminology' 'medium' '“Auto Save” is inconsistent with “Auto-Save” strings.' 'Choose one approved noun/adjective form; “auto-save” is recommended for a setting name.'
    }
    if ($source -match '(?i)\bscreenbery\b') {
        Add-Finding $row 'spelling' 'high' 'Product name appears misspelled.' 'Use “Screenberry”.'
    }
    if ($source -match '(?i)\bresent(ly)?\b') {
        Add-Finding $row 'spelling' 'high' 'Possible misspelling of “recent/recently”.' 'Review and correct the intended word.'
    }
    if ($source -match '(?i)\bNvidia\b' -and $source -notmatch '\bNVIDIA\b') {
        Add-Finding $row 'brand-capitalization' 'medium' 'NVIDIA brand capitalization may be inconsistent.' 'Use “NVIDIA” in user-facing prose unless an exact third-party identifier differs.'
    }
    if ($source -match '(?i)\bEmpty Project\b') {
        Add-Finding $row 'approved-ux-rename' 'high' 'Current UX backlog requests renaming “Empty Project” to “Blank Project”.' 'Coordinate the product-wide “Blank Project” rename and preserve compatibility aliases.'
    }
}

$variantGroups = $rows |
    Where-Object { -not [string]::IsNullOrWhiteSpace($_.Source) } |
    Group-Object Normalized |
    Where-Object { @($_.Group.Source | Sort-Object -Unique).Count -gt 1 }

$variantRows = foreach ($group in $variantGroups) {
    [pscustomobject]@{
        Normalized = $group.Name
        Variants = @($group.Group.Source | Sort-Object -Unique) -join ' || '
        Contexts = @($group.Group.Context | Sort-Object -Unique) -join '; '
        Count = $group.Count
    }
}

$rows | Select-Object Id,InputFile,Language,Context,Source,Translation,TranslationType,Comment,ExtraComment,Locations |
    Export-Csv -LiteralPath (Join-Path $OutputRoot 'messages.csv') -NoTypeInformation -Encoding UTF8
$findings | Export-Csv -LiteralPath (Join-Path $OutputRoot 'automated-findings.csv') -NoTypeInformation -Encoding UTF8
$variantRows | Export-Csv -LiteralPath (Join-Path $OutputRoot 'normalized-variants.csv') -NoTypeInformation -Encoding UTF8

$contexts = @($rows.Context | Sort-Object -Unique).Count
$uniqueSources = @($rows.Source | Sort-Object -Unique).Count
$emptyTranslations = @($rows | Where-Object { [string]::IsNullOrEmpty($_.Translation) }).Count
$nonEmptyTranslations = $rows.Count - $emptyTranslations

$summary = [System.Text.StringBuilder]::new()
[void]$summary.AppendLine('# Qt English UX strings — automated audit summary')
[void]$summary.AppendLine()
[void]$summary.AppendLine('This report identifies consistency candidates; it does not treat every candidate as an error. Empty English translations are expected when the Qt source string is the English UI text.')
[void]$summary.AppendLine()
[void]$summary.AppendLine('## Inventory')
[void]$summary.AppendLine()
[void]$summary.AppendLine("- Input files: $(@($rows.InputFile | Sort-Object -Unique).Count)")
[void]$summary.AppendLine("- Contexts: $contexts")
[void]$summary.AppendLine("- Messages: $($rows.Count)")
[void]$summary.AppendLine("- Unique source strings: $uniqueSources")
[void]$summary.AppendLine("- Empty translations: $emptyTranslations")
[void]$summary.AppendLine("- Non-empty translations: $nonEmptyTranslations")
[void]$summary.AppendLine("- Automated findings: $($findings.Count)")
[void]$summary.AppendLine("- Normalized variant groups: $(@($variantRows).Count)")
[void]$summary.AppendLine()
[void]$summary.AppendLine('## Automated findings by category')
[void]$summary.AppendLine()
[void]$summary.AppendLine('| Category | Count |')
[void]$summary.AppendLine('| --- | ---: |')
foreach ($entry in ($findings | Group-Object Category | Sort-Object Name)) {
    [void]$summary.AppendLine("| $($entry.Name) | $($entry.Count) |")
}
[void]$summary.AppendLine()
[void]$summary.AppendLine('## Manual-review boundary')
[void]$summary.AppendLine()
[void]$summary.AppendLine('- Review duplicate variants in context; title case versus sentence case can be intentional.')
[void]$summary.AppendLine('- Review placeholders, shortcuts, brands, and file-format terminology against their source APIs before changing them.')
[void]$summary.AppendLine('- Treat blank English translations as normal unless build configuration requires explicit translations.')
[void]$summary.AppendLine('- Validate every accepted UI string change in the actual dialog/menu, including truncation, accelerators, and accessibility names.')

$summary.ToString() | Set-Content -LiteralPath (Join-Path $OutputRoot 'summary.md') -Encoding UTF8

Write-Host "Audited $($rows.Count) messages across $contexts contexts."
Write-Host "Generated $($findings.Count) automated findings and $(@($variantRows).Count) normalized variant groups."
Write-Host "Outputs: $OutputRoot"
