# Content Data Schema

## Scope

This schema describes the MVP prototype data needed to represent The Empty Fifth Chair as a finite, authored social-browsing scenario. It is a data contract, not app code or final architecture.

The model should preserve the player-as-lurker framing: the player scrolls fictional app surfaces, saves receipts, compares context, and assembles a report.

## ID Rules

- IDs are stable strings, not display copy.
- Scenario-scoped IDs should use the prefix `s02`.
- Content artifact IDs should preserve Wave 9 artifact names where possible.
- Receipt IDs must stay `S02-R01` through `S02-R15`.
- App IDs should be lowercase: `frame`, `loop`, `threadline`, `blink`, `report`.
- Timestamps should store both machine-sortable values and display labels when display timing matters.

Example:

```json
{
  "id": "content.frame.empty_chair_story",
  "artifactId": "FRAME-01-EMPTY-CHAIR-STORY",
  "scenarioId": "scenario.empty_fifth_chair"
}
```

## Scenario

Represents one finite authored scenario.

Fields:

- `id`: stable scenario ID.
- `title`: display title.
- `category`: scenario category.
- `tone`: short tone label.
- `estimatedPlaytimeMinutes`: range object with `min` and `max`.
- `startingAppId`: app available at launch.
- `appIds`: ordered app IDs used by the scenario.
- `surfaceEventContentId`: first major public artifact.
- `truthSummary`: internal design summary of the actual causal chain.
- `publicInterpretationSummary`: internal design summary of the feed's early read.
- `reportSlotIds`: report slots available for validation.
- `endingIds`: available ending states.
- `sourceDocs`: links to planning docs used to author the data.
- `constraints`: product constraints relevant to this scenario.

Required: `id`, `title`, `startingAppId`, `appIds`, `surfaceEventContentId`.

Example:

```json
{
  "id": "scenario.empty_fifth_chair",
  "title": "The Empty Fifth Chair",
  "category": "Friend-group betrayal",
  "startingAppId": "frame",
  "appIds": ["frame", "loop", "threadline", "blink", "report"],
  "surfaceEventContentId": "content.frame.empty_chair_story"
}
```

## AppSurface

Represents a fictional app surface and its content texture.

Fields:

- `id`: app ID.
- `displayName`: fictional app name.
- `surfaceType`: `photo_story`, `short_video`, `public_text`, `private_ephemeral`, or `report`.
- `roleInScenario`: design role in this scenario.
- `startsUnlocked`: boolean.
- `unlockId`: optional unlock rule that makes the app available.
- `contentOrder`: ordered content IDs visible on the surface.
- `defaultSort`: `authored`, `reverse_chronological`, or `threaded`.
- `uiNotes`: prototype display notes.

Required: `id`, `displayName`, `surfaceType`, `contentOrder`.

## Account / Profile

Represents a fictional person, group, account, or venue profile.

Fields:

- `id`: stable profile ID.
- `displayName`: display name.
- `handle`: fictional handle.
- `profileType`: `person`, `group`, `venue`, or `anonymous_account`.
- `avatarAssetId`: optional media asset.
- `bio`: display bio for the current reveal state.
- `bioByState`: optional state-specific bio changes.
- `appsPresent`: app IDs where the profile appears.
- `publicRole`: how the feed initially frames this profile.
- `actualRole`: internal role in the actual causal chain.
- `voiceNotes`: writing guidance.
- `connectedReceiptIds`: receipt IDs tied to the profile.

Required: `id`, `displayName`, `handle`, `profileType`.

## ContentItem

Represents one post, story, clip, thread, carousel, profile surface, report prompt, or system-like in-world unlock cue.

Fields:

- `id`: stable content ID.
- `artifactId`: Wave 9 artifact ID.
- `scenarioId`: scenario ID.
- `appId`: app surface ID.
- `authorProfileId`: optional author/source profile.
- `contentType`: `profile`, `story`, `carousel`, `grid_post`, `short_video`, `text_post`, `reply_thread`, `dm_excerpt`, `message_bundle`, `report_prompt`, or `ending`.
- `unlockStateRequired`: state ID required before this item appears.
- `timestamp`: optional sortable timestamp.
- `displayTimestamp`: in-world timestamp label.
- `body`: short display copy or content summary.
- `mediaAssetIds`: linked media assets.
- `commentIds`: comments/replies attached to this content.
- `messageThreadId`: linked private/ephemeral message thread when applicable.
- `embeddedReceiptIds`: receipts available from this item.
- `apparentMeaning`: what the player likely thinks at first.
- `actualMeaning`: how meaning changes with context.
- `unlockIdsTriggered`: app/content unlocks this item can trigger.
- `sourceDoc`: planning doc and section reference.
- `productionNotes`: asset and continuity notes.

Required: `id`, `artifactId`, `scenarioId`, `appId`, `contentType`, `unlockStateRequired`.

## Comment

Represents a comment, reply, quote-post snippet, or reaction attached to a content item.

Fields:

- `id`: stable comment ID.
- `contentItemId`: parent content ID.
- `authorProfileId`: optional profile ID.
- `authorHandle`: display-only handle for lightweight commenters.
- `body`: display copy.
- `timestamp`: optional sortable timestamp.
- `displayTimestamp`: display label.
- `replyToCommentId`: optional parent comment.
- `tone`: short internal label such as `piling_on`, `questioning`, `context`, `unlock_hint`, or `ambient`.
- `embeddedReceiptIds`: optional receipt IDs.
- `unlockIdsTriggered`: optional unlock rules this comment can trigger.

Required: `id`, `contentItemId`, `body`.

## MessageThread

Represents a private/ephemeral conversation surface.

Fields:

- `id`: stable thread ID.
- `appId`: usually `blink`.
- `title`: in-world thread title.
- `participantProfileIds`: known participants.
- `displayParticipantLabels`: display labels when not all participants need profiles.
- `unlockStateRequired`: required state.
- `messageIds`: ordered messages.
- `embeddedReceiptIds`: receipts tied to the thread.
- `apparentMeaning`: first read.
- `actualMeaning`: later read.

Required: `id`, `appId`, `title`, `messageIds`.

## Message

Represents a DM/chat line or ephemeral exchange.

Fields:

- `id`: stable message ID.
- `threadId`: parent message thread ID.
- `senderProfileId`: optional profile ID.
- `senderLabel`: display fallback.
- `body`: message copy.
- `timestamp`: optional sortable timestamp.
- `displayTimestamp`: display label.
- `isVisibleInCrop`: boolean for crop/full-chat comparison.
- `mediaAssetIds`: optional attached assets.
- `receiptIds`: optional receipts enabled by this message.

Required: `id`, `threadId`, `senderLabel`, `body`.

## MediaAsset

Represents a placeholder or final media asset.

Fields:

- `id`: stable media ID.
- `assetType`: `photo`, `story_image`, `video`, `screenshot`, `profile_image`, `text_render`, or `placeholder`.
- `status`: `placeholder`, `draft`, `approved`, or `final`.
- `description`: production-facing description.
- `altText`: accessibility text.
- `linkedContentIds`: content using the asset.
- `linkedReceiptIds`: receipts supported by the asset.
- `continuityRequirements`: people, objects, location, timestamp, and crop constraints.
- `mustNotDependOnTinyDetail`: boolean.
- `rightsLog`: object with `fictionalPeopleConfirmed`, `noRealBranding`, `source`, `createdBy`, and `reviewedBy`.

Required: `id`, `assetType`, `status`, `description`.

## Receipt

Represents a saved social artifact.

Fields:

- `id`: receipt ID.
- `title`: player-facing receipt title.
- `scenarioId`: scenario ID.
- `sourceAppId`: app where the receipt is saved.
- `sourceContentItemId`: content item that contains the receipt.
- `contentType`: type of artifact saved.
- `requiredForCorrectReport`: boolean.
- `reportSlotsSupported`: array containing `WHO`, `WHY`, `WHEN`, `HOW`, or `CONTEXT`.
- `apparentMeaning`: first read.
- `actualMeaning`: later read.
- `dependencyIds`: receipt IDs that change or strengthen this receipt.
- `acceptableSubstituteIds`: optional substitute/support IDs.
- `wrongTheoryIdsDisproved`: wrong or partial theories this helps limit.
- `productionRequirements`: content and asset requirements.

Required: `id`, `title`, `scenarioId`, `sourceAppId`, `sourceContentItemId`, `reportSlotsSupported`.

## ReceiptDependency

Represents a formal relationship between receipts.

Fields:

- `id`: stable dependency ID.
- `fromReceiptId`: receipt being interpreted.
- `toReceiptId`: receipt that changes or strengthens it.
- `dependencyType`: `required_pair`, `strengthens`, `unlocks_meaning`, `contradicts_surface`, or `substitute_support`.
- `description`: why the relationship matters.

Required: `id`, `fromReceiptId`, `toReceiptId`, `dependencyType`.

## AppUnlock

Represents app or content availability caused by in-world browsing.

Fields:

- `id`: stable unlock ID.
- `scenarioId`: scenario ID.
- `unlocksAppId`: optional app ID.
- `unlocksStateId`: state ID produced by this unlock.
- `triggerType`: `content_viewed`, `receipt_saved`, `comment_tapped`, `profile_tapped`, `message_thread_opened`, or `report_ready`.
- `triggerContentIds`: content IDs that can trigger it.
- `triggerReceiptIds`: receipt IDs that can trigger it.
- `inWorldCopy`: short non-tutorial availability copy.
- `newQuestion`: what the player should wonder.
- `guards`: optional prerequisites.

Required: `id`, `scenarioId`, `unlocksStateId`, `triggerType`.

## ReportSlot

Represents one report slot.

Fields:

- `id`: `report.slot.who`, `report.slot.why`, `report.slot.when`, or `report.slot.how`.
- `scenarioId`: scenario ID.
- `slotType`: `WHO`, `WHY`, `WHEN`, or `HOW`.
- `prompt`: player-facing prompt.
- `optionIds`: report options available for the slot.
- `requiredForCompletion`: boolean.

Required: `id`, `scenarioId`, `slotType`, `optionIds`.

## ReportOption

Represents one selectable report answer.

Fields:

- `id`: stable option ID.
- `slotId`: report slot ID.
- `label`: player-facing option label.
- `status`: `correct`, `partial`, or `wrong`.
- `requiresReceiptIds`: receipts required for this option to validate as correct or partial.
- `supportedByReceiptIds`: receipts that make this option plausible.
- `failsBecause`: internal reason a wrong or partial option fails.
- `feedbackCopy`: feedback text that avoids naming the answer directly.

Required: `id`, `slotId`, `label`, `status`.

## ReportValidationRule

Represents a complete report evaluation rule.

Fields:

- `id`: stable rule ID.
- `scenarioId`: scenario ID.
- `ruleType`: `correct`, `partial`, `wrong`, or `guard`.
- `requiredOptionIds`: selected options required by the rule.
- `requiredReceiptIds`: saved receipts required by the rule.
- `missingReceiptIds`: optional receipts whose absence can route to a partial ending.
- `missingReceiptFeedback`: keyed feedback for missing receipt groups.
- `endingId`: ending produced by the rule.
- `priority`: integer, lower number evaluates first.

Required: `id`, `scenarioId`, `ruleType`, `priority`.

## Ending

Represents post-report outcome copy and feed reactions.

Fields:

- `id`: stable ending ID.
- `scenarioId`: scenario ID.
- `endingType`: `correct`, `partial`, or `wrong`.
- `title`: internal label.
- `triggerRuleId`: validation rule ID.
- `resultCopy`: main report result copy.
- `feedReactionItems`: short in-world reactions.
- `finalButtonCopy`: button label.
- `unlocksStateId`: optional post-report state.

Required: `id`, `scenarioId`, `endingType`, `resultCopy`.

## Compact Object Examples

These examples are intentionally small. They show shape and relationships; final copy should come from Wave 9 content docs.

### AppSurface

```json
{
  "id": "frame",
  "displayName": "Frame",
  "surfaceType": "photo_story",
  "startsUnlocked": true,
  "contentOrder": ["content.frame.empty_chair_story"]
}
```

### Account / Profile

```json
{
  "id": "profile.mina",
  "displayName": "Mina Saye",
  "handle": "@minasupper",
  "profileType": "person",
  "appsPresent": ["frame", "threadline", "blink"],
  "connectedReceiptIds": ["S02-R01", "S02-R02", "S02-R11"]
}
```

### ContentItem

```json
{
  "id": "content.frame.empty_chair_story",
  "artifactId": "FRAME-01-EMPTY-CHAIR-STORY",
  "appId": "frame",
  "contentType": "story",
  "embeddedReceiptIds": ["S02-R01"],
  "unlockIdsTriggered": ["unlock.loop.from_frame"]
}
```

### Comment

```json
{
  "id": "comment.loop.table_clip.001",
  "contentItemId": "content.loop.table_clip",
  "authorHandle": "@localplateclub",
  "body": "wasn't this before the screenshot thread?",
  "tone": "questioning",
  "embeddedReceiptIds": ["S02-R05"]
}
```

### MessageThread

```json
{
  "id": "thread.blink.supper_five_planning",
  "appId": "blink",
  "title": "Supper Five Planning",
  "participantProfileIds": ["profile.mina", "profile.rhea", "profile.nia", "profile.sol"],
  "messageIds": ["message.blink.supper_five.001"]
}
```

### Message

```json
{
  "id": "message.blink.supper_five.001",
  "threadId": "thread.blink.supper_five_planning",
  "senderProfileId": "profile.rhea",
  "senderLabel": "Rhea",
  "body": "I am asking to slow the post, not blow this up.",
  "isVisibleInCrop": false,
  "receiptIds": ["S02-R09"]
}
```

### MediaAsset

```json
{
  "id": "asset.threadline.cropped_blink",
  "assetType": "screenshot",
  "status": "placeholder",
  "description": "Cropped Blink screenshot that starts mid-conversation.",
  "linkedReceiptIds": ["S02-R06"],
  "mustNotDependOnTinyDetail": true
}
```

### Receipt

```json
{
  "id": "S02-R11",
  "title": "Crop-Source Alignment",
  "sourceAppId": "blink",
  "sourceContentItemId": "content.blink.crop_source_bundle",
  "reportSlotsSupported": ["WHO", "HOW"],
  "dependencyIds": ["S02-R06", "S02-R07", "S02-R09"]
}
```

### ReceiptDependency

```json
{
  "id": "dep.S02-R06.S02-R09",
  "fromReceiptId": "S02-R06",
  "toReceiptId": "S02-R09",
  "dependencyType": "contradicts_surface"
}
```

### AppUnlock

```json
{
  "id": "unlock.threadline.from_loop",
  "unlocksAppId": "threadline",
  "unlocksStateId": "state.threadline_unlocked",
  "triggerType": "comment_tapped",
  "triggerContentIds": ["content.loop.threadline_pointer"]
}
```

### ReportSlot

```json
{
  "id": "report.slot.who",
  "slotType": "WHO",
  "optionIds": ["report.option.who.mina", "report.option.who.rhea"],
  "requiredForCompletion": true
}
```

### ReportOption

```json
{
  "id": "report.option.who.mina",
  "slotId": "report.slot.who",
  "label": "Mina Saye",
  "status": "correct",
  "requiresReceiptIds": ["S02-R07", "S02-R09", "S02-R11"]
}
```

### ReportValidationRule

```json
{
  "id": "validation.correct.full",
  "ruleType": "correct",
  "requiredReceiptIds": ["S02-R01", "S02-R02", "S02-R04", "S02-R06", "S02-R07", "S02-R09", "S02-R10", "S02-R11", "S02-R12"],
  "endingId": "ending.correct",
  "priority": 1
}
```

### Ending

```json
{
  "id": "ending.correct",
  "endingType": "correct",
  "title": "Correct report",
  "triggerRuleId": "validation.correct.full",
  "finalButtonCopy": "Save report"
}
```
