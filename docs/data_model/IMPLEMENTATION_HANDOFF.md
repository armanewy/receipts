# Implementation Handoff

## Scope

This handoff is for a future SwiftUI prototype wave. It does not implement the app. It defines what the first coding pass should build from the planning and content data.

## Product Constraints

- The player is a lurker.
- The experience should feel like browsing fictional social apps, not a conventional puzzle interface.
- Use fictional app names and fictional people only.
- Do not use real platform branding or exact UI.
- Use receipts, threads, theory, report, source, post, clip, story, DM, profile, comment, WHO, WHY, WHEN, and HOW.
- Avoid professional inquiry and law-enforcement framing in product-facing copy.
- The report should feel like assembling a social read from saved receipts.

## App Archetypes

| App | Prototype role |
|---|---|
| Frame | Photo/story/profile surface. Starts unlocked and carries the surface event, timeline wobble, old group context, and Cedar Room return. |
| Loop | Short-video surface. Unlocks from Frame and carries Dax's table clip and timestamp friction. |
| Threadline | Public text/discourse surface. Unlocks from Loop and carries @porchwatch, the cropped screenshot, source-chain wobble, and Blink pointer. |
| Blink | Private/ephemeral surface. Unlocks from Threadline and carries full chat context, credit pressure, and crop-source alignment. |
| Report | Structured theory/report surface. Unlocks once enough cross-app context is reachable. |

## Expected Screens

First coding wave should include:

- Scenario shell screen with app switcher.
- Frame feed/profile/story screen.
- Loop clip feed screen.
- Threadline post/thread screen.
- Blink message-thread screen.
- Receipt tray or saved receipts screen.
- Report assembly screen with WHO / WHY / WHEN / HOW slots and receipt placement.
- Ending screen with feed reaction copy.

Keep screens mobile-first. Dense and familiar is better than decorative.

## What To Implement First

1. Static data loading from a local JSON or bundled Swift data file.
2. App unlock state transitions.
3. Authored content rendering for Frame, Loop, Threadline, and Blink.
4. Save-receipt interaction with a visible receipt tray.
5. Receipt meaning update states when dependencies are met.
6. Report slot selections and receipt placement.
7. Validation rules and endings.
8. Minimal progress persistence.

## What Not To Implement Yet

- Final image or video generation.
- Infinite feed generation.
- Real networked social content.
- User-created posts.
- Accounts, login, sharing, or moderation systems.
- Monetization.
- Full app architecture beyond the MVP prototype needs.
- Final app names, final visual identity, or exact platform mimicry.

## Data Files To Use

- `docs/data_model/CONTENT_DATA_SCHEMA.md`
- `docs/data_model/MVP_CONTENT_JSON_DRAFT.md`
- `docs/data_model/APP_STATE_REQUIREMENTS.md`
- `docs/data_model/REPORT_VALIDATION_LOGIC.md`
- `docs/scenarios/wave9_full_content/FULL_CONTENT_INDEX.md`
- `docs/scenarios/wave9_full_content/FRAME_CONTENT.md`
- `docs/scenarios/wave9_full_content/LOOP_CONTENT.md`
- `docs/scenarios/wave9_full_content/THREADLINE_CONTENT.md`
- `docs/scenarios/wave9_full_content/BLINK_CONTENT.md`
- `docs/scenarios/wave9_full_content/RECEIPTS_FINAL.md`
- `docs/scenarios/wave9_full_content/REPORT_OPTIONS.md`
- `docs/scenarios/wave9_full_content/ENDING_COPY.md`

## Known Risks

- Mina may become too guessable if Frame and Cedar Room surfaces are too polished.
- Blink may feel like an answer dump if message excerpts are too long.
- Threadline can become text-heavy on mobile.
- S02-R11 must be a comparison bundle, not a tiny visual detail.
- Optional receipts need lower weight so players do not treat every item as equally critical.
- Unlock copy must feel like social browsing, not tutorial copy.
- Endings should avoid a triumphant public pile-on.

## Acceptance Criteria For MVP Prototype

- A tester can start in Frame and reach Loop, Threadline, Blink, and Report through in-world content references.
- The first 5-8 minutes preserve the Wave 7 first-slice hook.
- The player can save all 15 receipts.
- Required receipts visibly support WHO, WHY, WHEN, and HOW.
- The report rejects WHO-only guessing.
- The correct ending requires the minimum winning bundle.
- At least two partial endings and two wrong endings are reachable.
- No product-facing copy uses blocked professional or law-enforcement framing.
- All people, handles, venues, and apps are fictional.
- The prototype can be completed in roughly 20-40 minutes.

## Missing Decisions

- Final app names and visual identity.
- Whether report should be a standalone surface or an in-world expose draft.
- Exact mobile UI treatment for S02-R11 comparison.
- Exact threshold for report availability.
- Whether report retries require newly saved receipts.
- How much visual polish is needed before the first playtest.

## Recommended First Coding Tasks

1. Convert `MVP_CONTENT_JSON_DRAFT.md` into a typed local fixture.
2. Build the app-shell navigation and unlock state model.
3. Render Frame first-slice content and receipt saving.
4. Add Loop and Threadline unlocks.
5. Add Blink message rendering and receipt dependency updates.
6. Add report validation with the minimum winning bundle.
7. Add ending rendering.

Ready for coding wave: yes, for a local prototype based on static content data.
