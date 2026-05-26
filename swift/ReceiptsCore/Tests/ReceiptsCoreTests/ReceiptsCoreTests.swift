import Testing
@testable import ReceiptsCore

@Test func correctReportNeedsTheMinimumWinningBundle() {
    let result = EmptyFifthChairScenario.validate(
        ReportSelection(
            who: "mina",
            why: "cedar_credit",
            when: "early_frame",
            how: "mina_crop",
            receiptIDs: EmptyFifthChairScenario.minimumWinningBundle
        )
    )

    #expect(result == .correct)
}

@Test func correctSlotsWithoutRequiredReceiptsDoNotPass() {
    let result = EmptyFifthChairScenario.validate(
        ReportSelection(
            who: "mina",
            why: "cedar_credit",
            when: "early_frame",
            how: "mina_crop",
            receiptIDs: ["S02-R01", "S02-R02", "S02-R04"]
        )
    )

    #expect(result == .incomplete(.missingReceipts))
}

@Test func missingSlotsStayIncomplete() {
    let result = EmptyFifthChairScenario.validate(
        ReportSelection(
            who: "mina",
            receiptIDs: EmptyFifthChairScenario.minimumWinningBundle
        )
    )

    #expect(result == .incomplete(.missingSlots))
}

@Test func sourcePathWithoutPressureIsPartial() {
    let result = EmptyFifthChairScenario.validate(
        ReportSelection(
            who: "mina",
            why: "dax_engagement",
            when: "early_frame",
            how: "mina_crop",
            receiptIDs: ["S02-R02", "S02-R06", "S02-R07", "S02-R09", "S02-R11"]
        )
    )

    #expect(result == .partial(.rightPersonWeakPressure))
}

@Test func surfaceStoryProducesWrongEnding() {
    let result = EmptyFifthChairScenario.validate(
        ReportSelection(
            who: "rhea",
            why: "rhea_jealous",
            when: "rhea_after",
            how: "rhea_leak",
            receiptIDs: ["S02-R01", "S02-R04", "S02-R06"]
        )
    )

    #expect(result == .wrong(.surfaceStory))
}
