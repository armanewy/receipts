$ErrorActionPreference = "Stop"

$swiftRoot = Join-Path $env:LOCALAPPDATA "Programs\Swift"
$toolchainBin = Join-Path $swiftRoot "Toolchains\6.3.2+Asserts\usr\bin"
$runtimeBin = Join-Path $swiftRoot "Runtimes\6.3.2\usr\bin"
$sdk = Join-Path $swiftRoot "Platforms\6.3.2\Windows.platform\Developer\SDKs\Windows.sdk"

if (!(Test-Path (Join-Path $toolchainBin "swift.exe"))) {
    throw "Swift 6.3.2 is not installed at $toolchainBin"
}

if (!(Test-Path $sdk)) {
    throw "Swift Windows SDK was not found at $sdk"
}

$env:Path = "$toolchainBin;$runtimeBin;" + [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

$vswhere = Join-Path ${env:ProgramFiles(x86)} "Microsoft Visual Studio\Installer\vswhere.exe"
if (!(Test-Path $vswhere)) {
    throw "vswhere.exe was not found. Visual Studio Build Tools are required for Swift on Windows."
}

$vsPath = & $vswhere -latest -products * -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath
if (!$vsPath) {
    throw "Visual Studio C++ build tools were not found. Install Microsoft.VisualStudio.Component.VC.Tools.x86.x64."
}

$vcvars64 = Join-Path $vsPath "VC\Auxiliary\Build\vcvars64.bat"
if (!(Test-Path $vcvars64)) {
    throw "vcvars64.bat was not found at $vcvars64"
}

cmd /c "`"$vcvars64`" > nul && set" | ForEach-Object {
    if ($_ -match "^(.*?)=(.*)$") {
        [System.Environment]::SetEnvironmentVariable($matches[1], $matches[2], "Process")
    }
}

$env:Path = "$toolchainBin;$runtimeBin;$env:Path"
$env:SDKROOT = $sdk

Push-Location (Join-Path $PSScriptRoot "..\swift\ReceiptsCore")
try {
    swift test
}
finally {
    Pop-Location
}
