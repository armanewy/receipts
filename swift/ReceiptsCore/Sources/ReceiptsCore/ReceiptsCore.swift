import Foundation

public enum ReportSlot: String, Codable, Sendable, CaseIterable {
    case who = "WHO"
    case why = "WHY"
    case when = "WHEN"
    case how = "HOW"
}

public enum ReportOutcome: Equatable, Sendable {
    case correct
    case partial(PartialOutcome)
    case wrong(WrongOutcome)
    case incomplete(IncompleteReason)
}

public enum PartialOutcome: String, Sendable {
    case rightPersonWeakPressure
    case rightTimelineWrongSource
    case rightPressureWeakMethod
}

public enum WrongOutcome: String, Sendable {
    case surfaceStory
    case noiseNotPattern
}

public enum IncompleteReason: String, Sendable {
    case missingSlots
    case missingReceipts
}

public struct ReportSelection: Equatable, Sendable {
    public var who: String?
    public var why: String?
    public var when: String?
    public var how: String?
    public var receiptIDs: Set<String>

    public init(
        who: String? = nil,
        why: String? = nil,
        when: String? = nil,
        how: String? = nil,
        receiptIDs: Set<String> = []
    ) {
        self.who = who
        self.why = why
        self.when = when
        self.how = how
        self.receiptIDs = receiptIDs
    }

    public var hasAllSlots: Bool {
        who != nil && why != nil && when != nil && how != nil
    }
}

public struct ReceiptDefinition: Equatable, Sendable {
    public var id: String
    public var title: String
    public var slots: Set<ReportSlot>
    public var isRequiredForCorrectReport: Bool

    public init(
        id: String,
        title: String,
        slots: Set<ReportSlot>,
        isRequiredForCorrectReport: Bool
    ) {
        self.id = id
        self.title = title
        self.slots = slots
        self.isRequiredForCorrectReport = isRequiredForCorrectReport
    }
}

public enum EmptyFifthChairScenario {
    public static let correctWho = "mina"
    public static let correctWhy = "cedar_credit"
    public static let correctWhen = "early_frame"
    public static let correctHow = "mina_crop"

    public static let minimumWinningBundle: Set<String> = [
        "S02-R01",
        "S02-R02",
        "S02-R04",
        "S02-R06",
        "S02-R07",
        "S02-R09",
        "S02-R10",
        "S02-R11",
        "S02-R12"
    ]

    public static let receipts: [ReceiptDefinition] = [
        .init(id: "S02-R01", title: "Empty Fifth Chair", slots: [.how], isRequiredForCorrectReport: true),
        .init(id: "S02-R02", title: "Supper Four Rename", slots: [.who, .when], isRequiredForCorrectReport: true),
        .init(id: "S02-R03", title: "Supper Five Warmth", slots: [.why], isRequiredForCorrectReport: false),
        .init(id: "S02-R04", title: "Table Clip", slots: [.when, .how], isRequiredForCorrectReport: true),
        .init(id: "S02-R05", title: "Tuesday Comment Friction", slots: [.when], isRequiredForCorrectReport: false),
        .init(id: "S02-R06", title: "Cropped Blink Screenshot", slots: [.how, .when], isRequiredForCorrectReport: true),
        .init(id: "S02-R07", title: "Table Friend Source", slots: [.who, .how], isRequiredForCorrectReport: true),
        .init(id: "S02-R08", title: "Mina Table Language", slots: [.who], isRequiredForCorrectReport: false),
        .init(id: "S02-R09", title: "Uncropped Group Chat", slots: [.who, .how], isRequiredForCorrectReport: true),
        .init(id: "S02-R10", title: "Credit Before Thursday", slots: [.why], isRequiredForCorrectReport: true),
        .init(id: "S02-R11", title: "Crop-Source Alignment", slots: [.who, .how], isRequiredForCorrectReport: true),
        .init(id: "S02-R12", title: "Cedar Room Announcement", slots: [.why], isRequiredForCorrectReport: true),
        .init(id: "S02-R13", title: "Nia Stays Quiet", slots: [.why], isRequiredForCorrectReport: false),
        .init(id: "S02-R14", title: "Locked Replies", slots: [.when], isRequiredForCorrectReport: false),
        .init(id: "S02-R15", title: "Early Cedar Bio", slots: [.why, .when], isRequiredForCorrectReport: false)
    ]

    public static func validate(_ selection: ReportSelection) -> ReportOutcome {
        guard selection.hasAllSlots else {
            return .incomplete(.missingSlots)
        }

        if selection.who == correctWho,
           selection.why == correctWhy,
           selection.when == correctWhen,
           selection.how == correctHow {
            guard minimumWinningBundle.isSubset(of: selection.receiptIDs) else {
                return .incomplete(.missingReceipts)
            }
            return .correct
        }

        if selection.who == correctWho,
           selection.how == correctHow,
           ["S02-R06", "S02-R07", "S02-R09", "S02-R11"].allSatisfy(selection.receiptIDs.contains),
           !["S02-R10", "S02-R12"].allSatisfy(selection.receiptIDs.contains) {
            return .partial(.rightPersonWeakPressure)
        }

        if selection.when == correctWhen,
           selection.who == "porchwatch" || selection.who == "dax" {
            return .partial(.rightTimelineWrongSource)
        }

        if selection.who == correctWho,
           selection.why == correctWhy,
           !["S02-R06", "S02-R09", "S02-R11"].allSatisfy(selection.receiptIDs.contains) {
            return .partial(.rightPressureWeakMethod)
        }

        if selection.who == "rhea",
           selection.why == "rhea_jealous",
           selection.when == "rhea_after",
           selection.how == "rhea_leak" {
            return .wrong(.surfaceStory)
        }

        return .wrong(.noiseNotPattern)
    }
}
