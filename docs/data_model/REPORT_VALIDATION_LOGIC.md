# Report Validation Logic

## Purpose

Validation should reward a coherent social read, not a lucky WHO guess. The correct report needs all four slots plus receipts that support the crop path, timing break, and Cedar Room pressure.

## Correct Report Requirements

Correct slot selections:

- WHO: Mina Saye.
- WHY: Cedar Room pressure and shared Supper Five credit.
- WHEN: Mina's public frame started before the Threadline crop spread; the Loop clip was from Tuesday and later read as reaction.
- HOW: Mina cropped a Blink chat from her side, let @porchwatch carry it, then used Frame and the out-of-order Loop clip to make Rhea look disloyal.

Minimum required receipts:

- S02-R01: Empty Fifth Chair.
- S02-R02: Supper Four Rename.
- S02-R04: Table Clip.
- S02-R06: Cropped Blink Screenshot.
- S02-R07: Table Friend Source.
- S02-R09: Uncropped Group Chat.
- S02-R10: Credit Before Thursday.
- S02-R11: Crop-Source Alignment.
- S02-R12: Cedar Room Announcement.

Slot coverage:

- WHO must include S02-R07, S02-R09, and S02-R11.
- WHY must include S02-R10 and S02-R12.
- WHEN must include S02-R02 and S02-R04, with S02-R06 as public-spread anchor.
- HOW must include S02-R01, S02-R06, S02-R07, S02-R09, and S02-R11.

## Strong Winning Bundle

Add these optional supports for the strongest read:

- S02-R03: Supper Five Warmth.
- S02-R05: Tuesday Comment Friction.
- S02-R08: Mina Table Language.
- S02-R13: Nia Stays Quiet.
- S02-R14: Locked Replies.
- S02-R15: Early Cedar Bio.

These should improve confidence and ending nuance, but they should not be required for the correct ending.

## Partial Report Requirements

### Partial: Right Person, Weak Pressure

Selected:

- WHO: Mina Saye.
- HOW: Mina crop path.

Likely receipts:

- S02-R02.
- S02-R06.
- S02-R07.
- S02-R09.
- S02-R11.

Missing:

- S02-R10.
- S02-R12.

Ending:

- `ending.partial.weak_pressure`

Feedback principle:

Point to the missing Thursday/shared-credit pressure without naming the exact missing receipt.

### Partial: Right Timeline, Wrong Source

Selected:

- WHEN: early Frame curation and Tuesday Loop clip.
- WHO: @porchwatch or Dax.

Likely receipts:

- S02-R01.
- S02-R02.
- S02-R04.
- S02-R05.
- S02-R06.
- S02-R14.

Missing:

- S02-R07.
- S02-R09.
- S02-R10.
- S02-R11.
- S02-R12.

Ending:

- `ending.partial.timeline_wrong_source`

Feedback principle:

Confirm the timing wobble while pushing the player toward source path and benefit.

### Partial: Right Pressure, Weak Method

Selected:

- WHO: Mina Saye.
- WHY: Cedar Room pressure and shared credit.

Likely receipts:

- S02-R03.
- S02-R10.
- S02-R12.
- S02-R15.

Missing:

- S02-R06.
- S02-R09.
- S02-R11.

Ending:

- Can reuse `ending.partial.weak_pressure` only if copy is adjusted, or create `ending.partial.weak_method` in a later pass.

Feedback principle:

Confirm motive strength but ask how the feed got pushed toward Rhea.

## Wrong Report Patterns

### Surface-Story Wrong

Selected:

- WHO: Rhea Vale.
- WHY: Rhea was jealous or resentful.
- WHEN: Rhea leaked after the dinner walkout.
- HOW: Rhea directly leaked the private chat.

Likely receipts:

- S02-R01.
- S02-R04.
- S02-R06.

Ending:

- `ending.wrong.surface_story`

Why it fails:

- Missing early Frame timing.
- Missing uncropped Blink context.
- Missing source path.
- Missing Cedar Room pressure.

### Wrong Individual / Wrong Pressure

Selected central answer:

- @porchwatch.
- Dax.
- Cedar Room.
- The whole group.

Likely receipts:

- S02-R04.
- S02-R06.
- S02-R07.
- S02-R12.
- S02-R14.

Ending:

- `ending.wrong.noise_not_pattern`

Why it fails:

- Explains spread or pressure, not the person who sits across timing, crop, and benefit.

## Substitute Receipt Rules

- S02-R05 can strengthen S02-R04 for timing, but it cannot replace S02-R04.
- S02-R08 can strengthen WHO, but it cannot replace S02-R11.
- S02-R03 can support WHY, but S02-R10 and S02-R12 are still needed together.
- S02-R15 can support WHEN and WHY, but it cannot replace S02-R12.
- S02-R13 can soften the group-silence read, but it should not be required.
- S02-R14 can support source wobble, but it cannot replace S02-R07.

## Feedback Rules

Use feedback that points to missing context categories:

- Missing source path: "The report still follows the loudest surfaces. Save receipts that show how the crop traveled."
- Missing pressure: "The source path is strong, but the reason still reads thin. Look for what made Thursday matter."
- Missing timing: "The story fits the feed order, but the dates are not holding together."
- Missing full context: "The screenshot is real. The report needs what the crop left out."

Avoid:

- Naming an unselected correct option directly.
- Using professional or procedural wording.
- Treating the report like a pass/fail quiz without social context.
- Rewarding WHO alone.

## Brute-Force Prevention

- Require all four slots before any full ending.
- Require minimum receipt support for each correct slot.
- Do not accept Mina as correct without S02-R10 and S02-R12 for WHY.
- Do not accept Mina as correct without S02-R09 and S02-R11 for HOW.
- Keep @porchwatch and Dax as valid partial reads when source/spread receipts are present.
- Rate-limit repeated report submissions or require at least one newly saved receipt before retry after weak attempts.
- Keep feedback categorical instead of naming the exact missing option.

## Evaluation Order

1. If any required slot is empty, return `report.missing_slots`.
2. If selected options match the full correct set but required receipts are missing, return `report.missing_receipts` with categorical feedback.
3. If selected options and receipts match the full correct set, return `ending.correct`.
4. Check partial rules from strongest to weakest.
5. Check known wrong patterns.
6. Fall back to `ending.wrong.noise_not_pattern`.
