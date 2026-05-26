# Swift Toolchain Notes

## Current Local State

This Windows workspace has the official Swift toolchain installed through winget:

- Package: `Swift.Toolchain`
- Installed version: Swift 6.3.2
- Target: `x86_64-unknown-windows-msvc`

Visual Studio Build Tools 2022 are already installed and provide the MSVC linker required by Swift on Windows.

## What Works Here

Pure Swift packages can compile and test locally. The current package is:

- `swift/ReceiptsCore`

Run it from the repository root:

```powershell
.\scripts\test-swift-core.ps1
```

The script loads:

- Swift toolchain and runtime paths.
- Visual Studio `vcvars64.bat`.
- `SDKROOT` pointing at the installed Swift Windows SDK.

`SDKROOT` is required in this environment because SwiftPM manifest compilation otherwise cannot find the Windows Swift standard library.

## What Does Not Work Here

This Windows setup does not provide Xcode, iOS SDKs, the iOS simulator, or SwiftUI runtime support for Apple platforms. Native iOS SwiftUI development and simulator testing still require macOS with Xcode.

## Apple Developer Account Timing

Apple developer account work can wait. A future macOS/Xcode setup can develop and run locally in simulator before App Store or TestFlight distribution decisions. The account becomes important for device signing, TestFlight, App Store distribution, and related Apple services.

## Recommended Path

Use this Windows setup for:

- Pure Swift scenario/domain logic.
- Report validation rules.
- Data model experiments.
- Tests that should later be shared by the SwiftUI app.

Use a macOS/Xcode setup later for:

- SwiftUI screens.
- iOS simulator verification.
- Device builds.
- Apple-platform packaging.
