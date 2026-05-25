# App State Requirements

## Purpose

The prototype should feel like authored browsing, not a menu of puzzle nodes. State exists to decide which app surfaces, posts, receipts, and report states are currently available.

## Initial State

State ID: `state.start`

Available:

- Frame app.
- Mina profile surface.
- Empty fifth-chair story.
- Supper Four highlight.
- Old Supper Five warmth content.
- Rhea profile snippet.

Not available:

- Loop.
- Threadline.
- Blink.
- Report.
- Cedar Room meaning as a clear pressure point.

Player can:

- Scroll Frame.
- Tap profiles and stories.
- Save S02-R01, S02-R02, and S02-R03.
- Follow the Dax repost sticker/reference to unlock Loop.

## App Unlock Conditions

| Unlock ID | Produces | Trigger | In-world cue | New question |
|---|---|---|---|---|
| `unlock.loop.from_frame` | `state.loop_unlocked` | View or tap Dax repost/reference from S02-R01 | "Dax reposted this to Loop." | What did the table clip actually show? |
| `unlock.threadline.from_loop` | `state.threadline_unlocked` | Tap @porchwatch reference in Loop comments | "@porchwatch is where people are quoting the screenshot." | Where did the cropped chat come from? |
| `unlock.blink.from_threadline` | `state.blink_unlocked` | View Threadline crop questions and group-chat name | "Supper Five Planning appears in Blink." | What was outside the crop? |
| `unlock.frame_return.from_blink` | `state.frame_return_after_blink` | Save or view S02-R10 credit-pressure DM | "Thursday points back to Mina's Frame." | What changed before Cedar Room posted? |
| `unlock.report.from_receipt_bundle` | `state.report_ready` | Save enough cross-app receipts to support all report slots | "Your saved receipts can hold a report now." | Which version actually adds up? |

## Content Reveal Conditions

### Frame

Visible at `state.start`:

- `content.frame.mina_profile`
- `content.frame.empty_chair_story`
- `content.frame.supper_four_highlight`
- `content.frame.supper_five_warmth`
- `content.frame.rhea_profile_snippet`

Visible at `state.loop_unlocked`:

- `content.frame.dinner_grid_post`

Visible at `state.threadline_unlocked`:

- `content.frame.cedar_low_signal`

Visible at `state.frame_return_after_blink`:

- `content.frame.early_cedar_bio`
- `content.frame.cedar_announcement`

Visible at `state.report_ready`:

- `content.frame.softening_reactions`

### Loop

Visible at `state.loop_unlocked`:

- `content.loop.table_clip`
- `content.loop.tuesday_comment_friction`
- `content.loop.spread_reactions`
- `content.loop.threadline_pointer`

Loop should remain available after later states so players can recheck the Tuesday timestamp.

### Threadline

Visible at `state.threadline_unlocked`:

- `content.threadline.porchwatch_crop`
- `content.threadline.porchwatch_profile`
- `content.threadline.source_chain`
- `content.threadline.public_quote_pile`
- `content.threadline.mina_table_language`
- `content.threadline.blink_crop_questions`

Visible at `state.report_ready`:

- `content.threadline.locked_replies_update`

### Blink

Visible at `state.blink_unlocked`:

- `content.blink.uncropped_group_chat`
- `content.blink.credit_dm`
- `content.blink.crop_source_bundle`
- `content.blink.nia_sol_side_dm`
- `content.blink.frame_return_prompt`

`content.blink.crop_source_bundle` should only make full sense after S02-R06, S02-R07, and S02-R09 are available, even if the UI shows the comparison surface earlier.

### Report

Available at `state.report_ready`.

The report can open with partial receipt coverage, but it should not validate a correct ending unless all required slots and receipt bundles are present.

## Receipt Save States

Each receipt should support these states:

- `unseen`: player has not encountered the source content.
- `seen_unsaved`: player has encountered the source content but has not saved it.
- `saved`: player saved it.
- `meaning_updated`: another receipt changed or strengthened its meaning.
- `used_in_report`: player placed it in the report.

Meaning update examples:

- S02-R01 updates after S02-R02 and S02-R09 show the public frame started early.
- S02-R04 updates after S02-R05 shows the Tuesday timestamp friction.
- S02-R06 updates after S02-R09 shows missing context.
- S02-R10 updates after S02-R12 shows why Thursday mattered.
- S02-R11 requires the saved crop/full-chat/source path bundle to become strong.

## Report Completion States

- `report.closed`: report is not yet available.
- `report.available`: player can assemble a report.
- `report.in_progress`: at least one slot selected.
- `report.missing_slots`: player attempted report without all WHO / WHY / WHEN / HOW slots.
- `report.missing_receipts`: selected report lacks required receipt support.
- `report.partial_ready`: selected report matches a partial validation pattern.
- `report.correct_ready`: selected report matches the full validation pattern.
- `report.submitted`: ending has been chosen.

## Ending States

| Ending state | Trigger |
|---|---|
| `ending.correct` | Correct WHO, WHY, WHEN, HOW, and minimum winning bundle. |
| `ending.partial.weak_pressure` | Mina and crop path selected, but Cedar Room/shared-credit receipts missing. |
| `ending.partial.timeline_wrong_source` | Early timeline break selected, but central source path is assigned to a louder surface. |
| `ending.wrong.surface_story` | Rhea leak story selected with only early public receipts. |
| `ending.wrong.noise_not_pattern` | Dax, @porchwatch, Cedar Room, or group-level answer selected as central. |

## Persistence Requirements

Persist:

- Current unlock states.
- Seen content IDs.
- Saved receipt IDs and meaning update state.
- Report slot selections.
- Receipt IDs placed in report.
- Submitted ending ID.

Do not require:

- Infinite feed state.
- Real-time content generation.
- Networked content.
- User-created public posts.

## State Risks

- If unlocks are too explicit, browsing feels tutorial-like. Use in-world references.
- If report unlock waits for every required receipt, players lose partial-report feedback. Let the report appear once all slots are conceptually reachable.
- If saved receipts do not update meaning, the content feels like a checklist instead of a social re-read.
- If optional receipts look identical to required receipts, players may save everything without forming a theory.
