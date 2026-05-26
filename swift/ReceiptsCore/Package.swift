// swift-tools-version: 6.0

import PackageDescription

let package = Package(
    name: "ReceiptsCore",
    platforms: [
        .macOS(.v14)
    ],
    products: [
        .library(
            name: "ReceiptsCore",
            targets: ["ReceiptsCore"]
        )
    ],
    targets: [
        .target(
            name: "ReceiptsCore"
        ),
        .testTarget(
            name: "ReceiptsCoreTests",
            dependencies: ["ReceiptsCore"]
        )
    ]
)
