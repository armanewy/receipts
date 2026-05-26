# ReceiptsCore

ReceiptsCore is a pure-Swift package for scenario state that can be reused by a later SwiftUI app. It currently models the MVP report validation rules for The Empty Fifth Chair.

This package deliberately avoids SwiftUI so it can compile on Windows with the installed Swift toolchain. Apple-platform UI work still requires Xcode on macOS.

Run tests from the repository root:

```powershell
.\scripts\test-swift-core.ps1
```
