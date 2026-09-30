param(
    [string]$ContentRoot = "content/en",
    [string]$OutputRoot = ".local/screenberry-task-inventory",
    [ValidateRange(2, 60)]
    [int]$PollSeconds = 10,
    [switch]$Once
)

$ErrorActionPreference = "Stop"
$builder = Join-Path $PSScriptRoot 'build-english-task-inventory.ps1'

function Get-ContentFingerprint {
    param([string]$Root)

    $items = Get-ChildItem -LiteralPath $Root -Recurse -File -Filter '*.mdx' |
        Sort-Object FullName |
        ForEach-Object { "$($_.FullName)|$($_.Length)|$($_.LastWriteTimeUtc.Ticks)" }

    $payload = $items -join "`n"
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($payload)
    $sha = [System.Security.Cryptography.SHA256]::Create()
    try {
        return [System.BitConverter]::ToString($sha.ComputeHash($bytes)).Replace('-', '')
    }
    finally {
        $sha.Dispose()
    }
}

function Invoke-InventoryBuild {
    & $builder -ContentRoot $ContentRoot -OutputRoot $OutputRoot
    if (-not $?) {
        throw "English task inventory build failed."
    }
}

Invoke-InventoryBuild
if ($Once) {
    exit 0
}

$fingerprint = Get-ContentFingerprint $ContentRoot
Write-Host "Watching $ContentRoot for English MDX changes every $PollSeconds seconds. Press Ctrl+C to stop."

while ($true) {
    Start-Sleep -Seconds $PollSeconds
    $nextFingerprint = Get-ContentFingerprint $ContentRoot
    if ($nextFingerprint -ne $fingerprint) {
        Write-Host "English MDX change detected at $(Get-Date -Format o). Rebuilding task inventory."
        Invoke-InventoryBuild
        $fingerprint = $nextFingerprint
    }
}
