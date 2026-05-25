# MVP Content JSON Draft

## Scope

This is a JSON-like draft for The Empty Fifth Chair. It maps Wave 9 authored content into stable objects close enough for prototype implementation. Long authored copy remains in Wave 9 docs and can be copied into `body`, `comments`, and `messages` during content entry.

```jsonc
{
  "scenario": {
    "id": "scenario.empty_fifth_chair",
    "title": "The Empty Fifth Chair",
    "category": "friend_group_betrayal",
    "tone": "internet-native, intimate, socially messy",
    "estimatedPlaytimeMinutes": { "min": 30, "max": 40 },
    "startingAppId": "frame",
    "appIds": ["frame", "loop", "threadline", "blink", "report"],
    "surfaceEventContentId": "content.frame.empty_chair_story",
    "publicInterpretationSummary": "Rhea left dinner angry, leaked a private chat, and got cut from the group.",
    "truthSummary": "Mina shaped the public read before the full context was visible because Cedar Room pressure made shared supper credit risky for her.",
    "sourceDocs": [
      "docs/scenarios/wave9_full_content/FULL_CONTENT_INDEX.md",
      "docs/scenarios/wave9_full_content/FRAME_CONTENT.md",
      "docs/scenarios/wave9_full_content/LOOP_CONTENT.md",
      "docs/scenarios/wave9_full_content/THREADLINE_CONTENT.md",
      "docs/scenarios/wave9_full_content/BLINK_CONTENT.md",
      "docs/scenarios/wave9_full_content/RECEIPTS_FINAL.md",
      "docs/scenarios/wave9_full_content/REPORT_OPTIONS.md",
      "docs/scenarios/wave9_full_content/ENDING_COPY.md"
    ]
  },

  "appSurfaces": [
    {
      "id": "frame",
      "displayName": "Frame",
      "surfaceType": "photo_story",
      "roleInScenario": "Public image curation, old group warmth, early timeline wobble, and Cedar Room pressure.",
      "startsUnlocked": true,
      "contentOrder": [
        "content.frame.mina_profile",
        "content.frame.empty_chair_story",
        "content.frame.supper_four_highlight",
        "content.frame.supper_five_warmth",
        "content.frame.rhea_profile_snippet",
        "content.frame.dinner_grid_post",
        "content.frame.cedar_low_signal",
        "content.frame.early_cedar_bio",
        "content.frame.cedar_announcement",
        "content.frame.softening_reactions"
      ],
      "defaultSort": "authored"
    },
    {
      "id": "loop",
      "displayName": "Loop",
      "surfaceType": "short_video",
      "roleInScenario": "Amplifies one emotional table moment and exposes the Tuesday timestamp mismatch.",
      "startsUnlocked": false,
      "unlockId": "unlock.loop.from_frame",
      "contentOrder": [
        "content.loop.table_clip",
        "content.loop.tuesday_comment_friction",
        "content.loop.spread_reactions",
        "content.loop.threadline_pointer"
      ],
      "defaultSort": "authored"
    },
    {
      "id": "threadline",
      "displayName": "Threadline",
      "surfaceType": "public_text",
      "roleInScenario": "Carries the cropped Blink screenshot, source-chain wobble, quote-post pile-on, and public timing questions.",
      "startsUnlocked": false,
      "unlockId": "unlock.threadline.from_loop",
      "contentOrder": [
        "content.threadline.porchwatch_crop",
        "content.threadline.porchwatch_profile",
        "content.threadline.source_chain",
        "content.threadline.public_quote_pile",
        "content.threadline.mina_table_language",
        "content.threadline.blink_crop_questions",
        "content.threadline.locked_replies_update"
      ],
      "defaultSort": "threaded"
    },
    {
      "id": "blink",
      "displayName": "Blink",
      "surfaceType": "private_ephemeral",
      "roleInScenario": "Shows missing private context, credit pressure, crop-source alignment, and group silence.",
      "startsUnlocked": false,
      "unlockId": "unlock.blink.from_threadline",
      "contentOrder": [
        "content.blink.uncropped_group_chat",
        "content.blink.credit_dm",
        "content.blink.crop_source_bundle",
        "content.blink.nia_sol_side_dm",
        "content.blink.frame_return_prompt"
      ],
      "defaultSort": "authored"
    },
    {
      "id": "report",
      "displayName": "Report",
      "surfaceType": "report",
      "roleInScenario": "Lets the player assemble WHO, WHY, WHEN, HOW, and saved receipts.",
      "startsUnlocked": false,
      "unlockId": "unlock.report.from_receipt_bundle",
      "contentOrder": []
    }
  ],

  "profiles": [
    {
      "id": "profile.mina",
      "displayName": "Mina Saye",
      "handle": "@minasupper",
      "profileType": "person",
      "appsPresent": ["frame", "threadline", "blink"],
      "publicRole": "Hurt host holding a fractured supper group together.",
      "actualRole": "Person who shaped the public frame and benefited from the timing.",
      "connectedReceiptIds": ["S02-R01", "S02-R02", "S02-R08", "S02-R10", "S02-R11", "S02-R12", "S02-R15"]
    },
    {
      "id": "profile.rhea",
      "displayName": "Rhea Vale",
      "handle": "@rheavale",
      "profileType": "person",
      "appsPresent": ["frame", "blink", "threadline"],
      "publicRole": "Absent friend framed as disloyal and reactive.",
      "actualRole": "Contributor asking for credit and slower public framing.",
      "connectedReceiptIds": ["S02-R03", "S02-R09", "S02-R10"]
    },
    {
      "id": "profile.dax",
      "displayName": "Dax Moreno",
      "handle": "@daxplates",
      "profileType": "person",
      "appsPresent": ["loop", "frame"],
      "publicRole": "Poster of the table clip that makes Rhea look bad.",
      "actualRole": "Amplifier of one out-of-order moment.",
      "connectedReceiptIds": ["S02-R04", "S02-R05"]
    },
    {
      "id": "profile.porchwatch",
      "displayName": "porchwatch",
      "handle": "@porchwatch",
      "profileType": "anonymous_account",
      "appsPresent": ["threadline"],
      "publicRole": "Small public account carrying the crop.",
      "actualRole": "Amplifier that received a partial version from a close source.",
      "connectedReceiptIds": ["S02-R06", "S02-R07", "S02-R14"]
    },
    {
      "id": "profile.nia",
      "displayName": "Nia Bell",
      "handle": "@niabell",
      "profileType": "person",
      "appsPresent": ["blink", "frame"],
      "publicRole": "Quiet group member.",
      "actualRole": "Knows the public story is incomplete but hesitates because of access pressure.",
      "connectedReceiptIds": ["S02-R13"]
    },
    {
      "id": "profile.sol",
      "displayName": "Sol Park",
      "handle": "@solpark",
      "profileType": "person",
      "appsPresent": ["blink", "threadline"],
      "publicRole": "Quiet group member.",
      "actualRole": "Uneasy private witness to the group's silence.",
      "connectedReceiptIds": ["S02-R13"]
    },
    {
      "id": "profile.cedar_room",
      "displayName": "Cedar Room",
      "handle": "@cedarroom",
      "profileType": "venue",
      "appsPresent": ["frame", "threadline"],
      "publicRole": "Venue opportunity around Thursday.",
      "actualRole": "Pressure context, not the responsible party.",
      "connectedReceiptIds": ["S02-R12", "S02-R15"]
    }
  ],

  "contentItems": [
    {
      "id": "content.frame.mina_profile",
      "artifactId": "FRAME-00-MINA-PROFILE",
      "appId": "frame",
      "authorProfileId": "profile.mina",
      "contentType": "profile",
      "unlockStateRequired": "state.start",
      "embeddedReceiptIds": []
    },
    {
      "id": "content.frame.empty_chair_story",
      "artifactId": "FRAME-01-EMPTY-CHAIR-STORY",
      "appId": "frame",
      "authorProfileId": "profile.mina",
      "contentType": "story",
      "unlockStateRequired": "state.start",
      "displayTimestamp": "Wed 10:19 AM",
      "body": "some seats stay empty for a reason.",
      "mediaAssetIds": ["asset.frame.empty_chair_story"],
      "embeddedReceiptIds": ["S02-R01"],
      "unlockIdsTriggered": ["unlock.loop.from_frame"]
    },
    {
      "id": "content.frame.supper_four_highlight",
      "artifactId": "FRAME-02-SUPPER-FOUR-HIGHLIGHT",
      "appId": "frame",
      "contentType": "profile",
      "unlockStateRequired": "state.start",
      "displayTimestamp": "Updated Wed 10:12 AM",
      "embeddedReceiptIds": ["S02-R02"]
    },
    {
      "id": "content.frame.supper_five_warmth",
      "artifactId": "FRAME-03-SUPPER-FIVE-WARMTH",
      "appId": "frame",
      "contentType": "carousel",
      "unlockStateRequired": "state.start",
      "embeddedReceiptIds": ["S02-R03"]
    },
    {
      "id": "content.frame.rhea_profile_snippet",
      "artifactId": "FRAME-04-RHEA-PROFILE-SNIPPET",
      "appId": "frame",
      "authorProfileId": "profile.rhea",
      "contentType": "profile",
      "unlockStateRequired": "state.start",
      "embeddedReceiptIds": []
    },
    {
      "id": "content.frame.dinner_grid_post",
      "artifactId": "FRAME-05-DINNER-GRID-POST",
      "appId": "frame",
      "contentType": "grid_post",
      "unlockStateRequired": "state.loop_unlocked",
      "embeddedReceiptIds": []
    },
    {
      "id": "content.frame.cedar_low_signal",
      "artifactId": "FRAME-06-CEDAR-ROOM-LOW-SIGNAL",
      "appId": "frame",
      "authorProfileId": "profile.cedar_room",
      "contentType": "grid_post",
      "unlockStateRequired": "state.threadline_unlocked",
      "embeddedReceiptIds": []
    },
    {
      "id": "content.frame.early_cedar_bio",
      "artifactId": "FRAME-07-MINA-EARLY-CEDAR-BIO",
      "appId": "frame",
      "authorProfileId": "profile.mina",
      "contentType": "profile",
      "unlockStateRequired": "state.frame_return_after_blink",
      "embeddedReceiptIds": ["S02-R15"]
    },
    {
      "id": "content.frame.cedar_announcement",
      "artifactId": "FRAME-08-CEDAR-ROOM-ANNOUNCEMENT",
      "appId": "frame",
      "authorProfileId": "profile.cedar_room",
      "contentType": "grid_post",
      "unlockStateRequired": "state.frame_return_after_blink",
      "displayTimestamp": "Thu 9:00 AM",
      "embeddedReceiptIds": ["S02-R12"]
    },
    {
      "id": "content.frame.softening_reactions",
      "artifactId": "FRAME-09-SOFTENING-REACTIONS",
      "appId": "frame",
      "contentType": "story",
      "unlockStateRequired": "state.report_ready",
      "embeddedReceiptIds": []
    },

    {
      "id": "content.loop.table_clip",
      "artifactId": "LOOP-01-TABLE-CLIP",
      "appId": "loop",
      "authorProfileId": "profile.dax",
      "contentType": "short_video",
      "unlockStateRequired": "state.loop_unlocked",
      "displayTimestamp": "Tue 9:18 PM",
      "mediaAssetIds": ["asset.loop.table_clip"],
      "embeddedReceiptIds": ["S02-R04", "S02-R05"]
    },
    {
      "id": "content.loop.tuesday_comment_friction",
      "artifactId": "LOOP-02-TUESDAY-COMMENT-FRICTION",
      "appId": "loop",
      "contentType": "reply_thread",
      "unlockStateRequired": "state.loop_unlocked",
      "embeddedReceiptIds": ["S02-R05"]
    },
    {
      "id": "content.loop.spread_reactions",
      "artifactId": "LOOP-03-CLIP-SPREAD-REACTIONS",
      "appId": "loop",
      "contentType": "short_video",
      "unlockStateRequired": "state.loop_unlocked",
      "embeddedReceiptIds": []
    },
    {
      "id": "content.loop.threadline_pointer",
      "artifactId": "LOOP-04-THREADLINE-POINTER",
      "appId": "loop",
      "contentType": "reply_thread",
      "unlockStateRequired": "state.loop_unlocked",
      "embeddedReceiptIds": [],
      "unlockIdsTriggered": ["unlock.threadline.from_loop"]
    },

    {
      "id": "content.threadline.porchwatch_crop",
      "artifactId": "THREAD-01-PORCHWATCH-CROP",
      "appId": "threadline",
      "authorProfileId": "profile.porchwatch",
      "contentType": "text_post",
      "unlockStateRequired": "state.threadline_unlocked",
      "embeddedReceiptIds": ["S02-R06"],
      "mediaAssetIds": ["asset.threadline.cropped_blink"]
    },
    {
      "id": "content.threadline.porchwatch_profile",
      "artifactId": "THREAD-00-PORCHWATCH-PROFILE",
      "appId": "threadline",
      "authorProfileId": "profile.porchwatch",
      "contentType": "profile",
      "unlockStateRequired": "state.threadline_unlocked",
      "embeddedReceiptIds": []
    },
    {
      "id": "content.threadline.source_chain",
      "artifactId": "THREAD-02-SOURCE-CHAIN",
      "appId": "threadline",
      "contentType": "reply_thread",
      "unlockStateRequired": "state.threadline_unlocked",
      "embeddedReceiptIds": ["S02-R07"]
    },
    {
      "id": "content.threadline.public_quote_pile",
      "artifactId": "THREAD-03-PUBLIC-QUOTE-PILE",
      "appId": "threadline",
      "contentType": "reply_thread",
      "unlockStateRequired": "state.threadline_unlocked",
      "embeddedReceiptIds": []
    },
    {
      "id": "content.threadline.mina_table_language",
      "artifactId": "THREAD-04-MINA-TABLE-LANGUAGE",
      "appId": "threadline",
      "authorProfileId": "profile.mina",
      "contentType": "text_post",
      "unlockStateRequired": "state.threadline_unlocked",
      "embeddedReceiptIds": ["S02-R08"]
    },
    {
      "id": "content.threadline.blink_crop_questions",
      "artifactId": "THREAD-05-BLINK-CROP-QUESTIONS",
      "appId": "threadline",
      "contentType": "reply_thread",
      "unlockStateRequired": "state.threadline_unlocked",
      "embeddedReceiptIds": [],
      "unlockIdsTriggered": ["unlock.blink.from_threadline"]
    },
    {
      "id": "content.threadline.locked_replies_update",
      "artifactId": "THREAD-06-LOCKED-REPLIES-UPDATE",
      "appId": "threadline",
      "contentType": "text_post",
      "unlockStateRequired": "state.report_ready",
      "embeddedReceiptIds": ["S02-R14"]
    },

    {
      "id": "content.blink.uncropped_group_chat",
      "artifactId": "BLINK-01-UNCROPPED-GROUP-CHAT",
      "appId": "blink",
      "contentType": "message_bundle",
      "unlockStateRequired": "state.blink_unlocked",
      "messageThreadId": "thread.blink.supper_five_planning",
      "embeddedReceiptIds": ["S02-R09"]
    },
    {
      "id": "content.blink.credit_dm",
      "artifactId": "BLINK-02-RHEA-MINA-CREDIT-DM",
      "appId": "blink",
      "contentType": "dm_excerpt",
      "unlockStateRequired": "state.blink_unlocked",
      "messageThreadId": "thread.blink.rhea_mina_credit",
      "embeddedReceiptIds": ["S02-R10"],
      "unlockIdsTriggered": ["unlock.frame_return.from_blink"]
    },
    {
      "id": "content.blink.crop_source_bundle",
      "artifactId": "BLINK-03-CROP-SOURCE-BUNDLE",
      "appId": "blink",
      "contentType": "message_bundle",
      "unlockStateRequired": "state.blink_unlocked",
      "embeddedReceiptIds": ["S02-R11"]
    },
    {
      "id": "content.blink.nia_sol_side_dm",
      "artifactId": "BLINK-04-NIA-SOL-SIDE-DM",
      "appId": "blink",
      "contentType": "dm_excerpt",
      "unlockStateRequired": "state.blink_unlocked",
      "messageThreadId": "thread.blink.nia_sol",
      "embeddedReceiptIds": ["S02-R13"]
    },
    {
      "id": "content.blink.frame_return_prompt",
      "artifactId": "BLINK-05-FRAME-RETURN-PROMPT",
      "appId": "blink",
      "contentType": "dm_excerpt",
      "unlockStateRequired": "state.blink_unlocked",
      "embeddedReceiptIds": [],
      "unlockIdsTriggered": ["unlock.frame_return.from_blink"]
    }
  ],

  "messageThreads": [
    {
      "id": "thread.blink.supper_five_planning",
      "appId": "blink",
      "title": "Supper Five Planning",
      "participantProfileIds": ["profile.mina", "profile.rhea", "profile.nia", "profile.sol"],
      "unlockStateRequired": "state.blink_unlocked",
      "sourceContentItemIds": ["content.blink.uncropped_group_chat"],
      "embeddedReceiptIds": ["S02-R09"],
      "copySource": "docs/scenarios/wave9_full_content/BLINK_CONTENT.md#blink-01-uncropped-group-chat"
    },
    {
      "id": "thread.blink.rhea_mina_credit",
      "appId": "blink",
      "title": "Rhea / Mina",
      "participantProfileIds": ["profile.rhea", "profile.mina"],
      "unlockStateRequired": "state.blink_unlocked",
      "sourceContentItemIds": ["content.blink.credit_dm"],
      "embeddedReceiptIds": ["S02-R10"],
      "copySource": "docs/scenarios/wave9_full_content/BLINK_CONTENT.md#blink-02-rheamina-credit-dm"
    },
    {
      "id": "thread.blink.nia_sol",
      "appId": "blink",
      "title": "Nia / Sol",
      "participantProfileIds": ["profile.nia", "profile.sol"],
      "unlockStateRequired": "state.blink_unlocked",
      "sourceContentItemIds": ["content.blink.nia_sol_side_dm"],
      "embeddedReceiptIds": ["S02-R13"],
      "copySource": "docs/scenarios/wave9_full_content/BLINK_CONTENT.md#blink-04-niasol-side-dm"
    }
  ],

  "mediaAssets": [
    {
      "id": "asset.frame.empty_chair_story",
      "assetType": "story_image",
      "status": "placeholder",
      "description": "Dinner table with one conspicuously empty fifth chair; natural social story framing.",
      "linkedContentIds": ["content.frame.empty_chair_story"],
      "linkedReceiptIds": ["S02-R01"],
      "mustNotDependOnTinyDetail": true
    },
    {
      "id": "asset.loop.table_clip",
      "assetType": "video",
      "status": "placeholder",
      "description": "Short table clip of Rhea leaving during Mina's toast, with readable Tuesday timestamp context.",
      "linkedContentIds": ["content.loop.table_clip"],
      "linkedReceiptIds": ["S02-R04", "S02-R05"],
      "mustNotDependOnTinyDetail": true
    },
    {
      "id": "asset.threadline.cropped_blink",
      "assetType": "screenshot",
      "status": "placeholder",
      "description": "Cropped Blink screenshot that starts mid-conversation and leaves out Mina's prior lines.",
      "linkedContentIds": ["content.threadline.porchwatch_crop"],
      "linkedReceiptIds": ["S02-R06"],
      "mustNotDependOnTinyDetail": true
    },
    {
      "id": "asset.blink.uncropped_chat",
      "assetType": "screenshot",
      "status": "placeholder",
      "description": "Readable uncropped Blink excerpt showing the lines that change Rhea's meaning.",
      "linkedContentIds": ["content.blink.uncropped_group_chat"],
      "linkedReceiptIds": ["S02-R09", "S02-R11"],
      "mustNotDependOnTinyDetail": true
    },
    {
      "id": "asset.frame.cedar_announcement",
      "assetType": "story_image",
      "status": "placeholder",
      "description": "Cedar Room announcement naming Mina's supper concept without making the venue the main answer.",
      "linkedContentIds": ["content.frame.cedar_announcement"],
      "linkedReceiptIds": ["S02-R12"],
      "mustNotDependOnTinyDetail": true
    }
  ],

  "appUnlocks": [
    {
      "id": "unlock.loop.from_frame",
      "unlocksAppId": "loop",
      "unlocksStateId": "state.loop_unlocked",
      "triggerType": "content_viewed",
      "triggerContentIds": ["content.frame.empty_chair_story"],
      "inWorldCopy": "Dax reposted this to Loop.",
      "newQuestion": "What did the table clip actually show?"
    },
    {
      "id": "unlock.threadline.from_loop",
      "unlocksAppId": "threadline",
      "unlocksStateId": "state.threadline_unlocked",
      "triggerType": "comment_tapped",
      "triggerContentIds": ["content.loop.threadline_pointer"],
      "inWorldCopy": "@porchwatch is where people are quoting the screenshot.",
      "newQuestion": "Where did the cropped chat come from?"
    },
    {
      "id": "unlock.blink.from_threadline",
      "unlocksAppId": "blink",
      "unlocksStateId": "state.blink_unlocked",
      "triggerType": "content_viewed",
      "triggerContentIds": ["content.threadline.blink_crop_questions"],
      "inWorldCopy": "Supper Five Planning appears in Blink.",
      "newQuestion": "What was outside the crop?"
    },
    {
      "id": "unlock.frame_return.from_blink",
      "unlocksAppId": "frame",
      "unlocksStateId": "state.frame_return_after_blink",
      "triggerType": "receipt_saved",
      "triggerReceiptIds": ["S02-R10"],
      "inWorldCopy": "Thursday points back to Mina's Frame.",
      "newQuestion": "What changed before Cedar Room posted?"
    },
    {
      "id": "unlock.report.from_receipt_bundle",
      "unlocksAppId": "report",
      "unlocksStateId": "state.report_ready",
      "triggerType": "receipt_saved",
      "triggerReceiptIds": ["S02-R01", "S02-R02", "S02-R04", "S02-R06", "S02-R07", "S02-R09", "S02-R10", "S02-R11", "S02-R12"],
      "inWorldCopy": "Your saved receipts can hold a report now.",
      "newQuestion": "Which version actually adds up?"
    }
  ],

  "receipts": [
    { "id": "S02-R01", "title": "Empty Fifth Chair", "sourceAppId": "frame", "sourceContentItemId": "content.frame.empty_chair_story", "requiredForCorrectReport": true, "reportSlotsSupported": ["HOW", "CONTEXT"] },
    { "id": "S02-R02", "title": "Supper Four Rename", "sourceAppId": "frame", "sourceContentItemId": "content.frame.supper_four_highlight", "requiredForCorrectReport": true, "reportSlotsSupported": ["WHO", "WHEN"] },
    { "id": "S02-R03", "title": "Supper Five Warmth", "sourceAppId": "frame", "sourceContentItemId": "content.frame.supper_five_warmth", "requiredForCorrectReport": false, "reportSlotsSupported": ["WHY", "CONTEXT"] },
    { "id": "S02-R04", "title": "Table Clip", "sourceAppId": "loop", "sourceContentItemId": "content.loop.table_clip", "requiredForCorrectReport": true, "reportSlotsSupported": ["WHEN", "HOW"] },
    { "id": "S02-R05", "title": "Tuesday Comment Friction", "sourceAppId": "loop", "sourceContentItemId": "content.loop.tuesday_comment_friction", "requiredForCorrectReport": false, "reportSlotsSupported": ["WHEN"] },
    { "id": "S02-R06", "title": "Cropped Blink Screenshot", "sourceAppId": "threadline", "sourceContentItemId": "content.threadline.porchwatch_crop", "requiredForCorrectReport": true, "reportSlotsSupported": ["HOW", "WHEN"] },
    { "id": "S02-R07", "title": "Table Friend Source", "sourceAppId": "threadline", "sourceContentItemId": "content.threadline.source_chain", "requiredForCorrectReport": true, "reportSlotsSupported": ["WHO", "HOW"] },
    { "id": "S02-R08", "title": "Mina Table Language", "sourceAppId": "threadline", "sourceContentItemId": "content.threadline.mina_table_language", "requiredForCorrectReport": false, "reportSlotsSupported": ["WHO", "CONTEXT"] },
    { "id": "S02-R09", "title": "Uncropped Group Chat", "sourceAppId": "blink", "sourceContentItemId": "content.blink.uncropped_group_chat", "requiredForCorrectReport": true, "reportSlotsSupported": ["WHO", "HOW"] },
    { "id": "S02-R10", "title": "Credit Before Thursday", "sourceAppId": "blink", "sourceContentItemId": "content.blink.credit_dm", "requiredForCorrectReport": true, "reportSlotsSupported": ["WHY"] },
    { "id": "S02-R11", "title": "Crop-Source Alignment", "sourceAppId": "blink", "sourceContentItemId": "content.blink.crop_source_bundle", "requiredForCorrectReport": true, "reportSlotsSupported": ["WHO", "HOW"] },
    { "id": "S02-R12", "title": "Cedar Room Announcement", "sourceAppId": "frame", "sourceContentItemId": "content.frame.cedar_announcement", "requiredForCorrectReport": true, "reportSlotsSupported": ["WHY"] },
    { "id": "S02-R13", "title": "Nia Stays Quiet", "sourceAppId": "blink", "sourceContentItemId": "content.blink.nia_sol_side_dm", "requiredForCorrectReport": false, "reportSlotsSupported": ["WHY", "CONTEXT"] },
    { "id": "S02-R14", "title": "Locked Replies", "sourceAppId": "threadline", "sourceContentItemId": "content.threadline.locked_replies_update", "requiredForCorrectReport": false, "reportSlotsSupported": ["WHEN", "CONTEXT"] },
    { "id": "S02-R15", "title": "Early Cedar Bio", "sourceAppId": "frame", "sourceContentItemId": "content.frame.early_cedar_bio", "requiredForCorrectReport": false, "reportSlotsSupported": ["WHY", "WHEN"] }
  ],

  "receiptDependencies": [
    { "id": "dep.S02-R01.S02-R02", "fromReceiptId": "S02-R01", "toReceiptId": "S02-R02", "dependencyType": "unlocks_meaning", "description": "The empty-chair story reads differently once the Supper Four rename is seen as early curation." },
    { "id": "dep.S02-R04.S02-R05", "fromReceiptId": "S02-R04", "toReceiptId": "S02-R05", "dependencyType": "strengthens", "description": "Timestamp comments strengthen the Tuesday timing break." },
    { "id": "dep.S02-R06.S02-R09", "fromReceiptId": "S02-R06", "toReceiptId": "S02-R09", "dependencyType": "contradicts_surface", "description": "The uncropped Blink chat shows what the public crop left out." },
    { "id": "dep.S02-R07.S02-R11", "fromReceiptId": "S02-R07", "toReceiptId": "S02-R11", "dependencyType": "required_pair", "description": "The source-chain reply and comparison bundle together support the crop path." },
    { "id": "dep.S02-R10.S02-R12", "fromReceiptId": "S02-R10", "toReceiptId": "S02-R12", "dependencyType": "required_pair", "description": "The credit DM and Cedar Room announcement together support motive." },
    { "id": "dep.S02-R12.S02-R15", "fromReceiptId": "S02-R12", "toReceiptId": "S02-R15", "dependencyType": "strengthens", "description": "The early bio strengthens the timing of Mina's Cedar Room awareness." }
  ],

  "reportSlots": [
    { "id": "report.slot.who", "slotType": "WHO", "optionIds": ["report.option.who.mina", "report.option.who.rhea", "report.option.who.porchwatch", "report.option.who.dax", "report.option.who.group", "report.option.who.cedar"] },
    { "id": "report.slot.why", "slotType": "WHY", "optionIds": ["report.option.why.cedar_credit", "report.option.why.rhea_jealous", "report.option.why.dax_engagement", "report.option.why.porchwatch_growth", "report.option.why.group_rebrand"] },
    { "id": "report.slot.when", "slotType": "WHEN", "optionIds": ["report.option.when.early_frame_tuesday_clip", "report.option.when.rhea_after_walkout", "report.option.when.after_crop", "report.option.when.after_cedar"] },
    { "id": "report.slot.how", "slotType": "HOW", "optionIds": ["report.option.how.mina_crop_path", "report.option.how.rhea_leak", "report.option.how.porchwatch_made_it", "report.option.how.dax_clip_only", "report.option.how.group_coordinated"] }
  ],

  "reportOptions": [
    { "id": "report.option.who.mina", "slotId": "report.slot.who", "label": "Mina Saye", "status": "correct", "requiresReceiptIds": ["S02-R07", "S02-R09", "S02-R11"] },
    { "id": "report.option.who.rhea", "slotId": "report.slot.who", "label": "Rhea Vale", "status": "wrong", "supportedByReceiptIds": ["S02-R01", "S02-R04", "S02-R06"] },
    { "id": "report.option.who.porchwatch", "slotId": "report.slot.who", "label": "@porchwatch", "status": "partial", "supportedByReceiptIds": ["S02-R06", "S02-R07", "S02-R14"] },
    { "id": "report.option.who.dax", "slotId": "report.slot.who", "label": "Dax Moreno", "status": "partial", "supportedByReceiptIds": ["S02-R04", "S02-R05"] },
    { "id": "report.option.who.group", "slotId": "report.slot.who", "label": "The whole supper group", "status": "wrong", "supportedByReceiptIds": ["S02-R01", "S02-R13"] },
    { "id": "report.option.who.cedar", "slotId": "report.slot.who", "label": "Cedar Room booker", "status": "wrong", "supportedByReceiptIds": ["S02-R12", "S02-R15"] },

    { "id": "report.option.why.cedar_credit", "slotId": "report.slot.why", "label": "Cedar Room pressure and shared supper credit", "status": "correct", "requiresReceiptIds": ["S02-R10", "S02-R12"] },
    { "id": "report.option.why.rhea_jealous", "slotId": "report.slot.why", "label": "Rhea was jealous and lashed out", "status": "wrong", "supportedByReceiptIds": ["S02-R01", "S02-R04", "S02-R06"] },
    { "id": "report.option.why.dax_engagement", "slotId": "report.slot.why", "label": "Dax wanted clip engagement", "status": "partial", "supportedByReceiptIds": ["S02-R04", "S02-R05"] },
    { "id": "report.option.why.porchwatch_growth", "slotId": "report.slot.why", "label": "@porchwatch wanted account growth", "status": "partial", "supportedByReceiptIds": ["S02-R06", "S02-R14"] },
    { "id": "report.option.why.group_rebrand", "slotId": "report.slot.why", "label": "The group wanted to rebrand without Rhea", "status": "wrong", "supportedByReceiptIds": ["S02-R02", "S02-R13"] },

    { "id": "report.option.when.early_frame_tuesday_clip", "slotId": "report.slot.when", "label": "Frame shifted early, and the Loop clip was from Tuesday", "status": "correct", "requiresReceiptIds": ["S02-R02", "S02-R04", "S02-R06"] },
    { "id": "report.option.when.rhea_after_walkout", "slotId": "report.slot.when", "label": "Rhea leaked after the dinner walkout", "status": "wrong", "supportedByReceiptIds": ["S02-R01", "S02-R04", "S02-R06"] },
    { "id": "report.option.when.after_crop", "slotId": "report.slot.when", "label": "The group cut Rhea after the crop went public", "status": "partial", "supportedByReceiptIds": ["S02-R01", "S02-R06"] },
    { "id": "report.option.when.after_cedar", "slotId": "report.slot.when", "label": "Everything happened after Cedar Room posted", "status": "wrong", "supportedByReceiptIds": ["S02-R12"] },

    { "id": "report.option.how.mina_crop_path", "slotId": "report.slot.how", "label": "Mina used a cropped Blink chat, @porchwatch spread, Frame curation, and the out-of-order Loop clip", "status": "correct", "requiresReceiptIds": ["S02-R01", "S02-R06", "S02-R07", "S02-R09", "S02-R11"] },
    { "id": "report.option.how.rhea_leak", "slotId": "report.slot.how", "label": "Rhea directly leaked the private chat", "status": "wrong", "supportedByReceiptIds": ["S02-R06"] },
    { "id": "report.option.how.porchwatch_made_it", "slotId": "report.slot.how", "label": "@porchwatch invented the story", "status": "partial", "supportedByReceiptIds": ["S02-R06", "S02-R07", "S02-R14"] },
    { "id": "report.option.how.dax_clip_only", "slotId": "report.slot.how", "label": "Dax's Loop clip shaped everything", "status": "partial", "supportedByReceiptIds": ["S02-R04", "S02-R05"] },
    { "id": "report.option.how.group_coordinated", "slotId": "report.slot.how", "label": "The whole group coordinated the cut", "status": "wrong", "supportedByReceiptIds": ["S02-R01", "S02-R13"] }
  ],

  "reportValidationRules": [
    {
      "id": "validation.correct.full",
      "ruleType": "correct",
      "priority": 1,
      "requiredOptionIds": [
        "report.option.who.mina",
        "report.option.why.cedar_credit",
        "report.option.when.early_frame_tuesday_clip",
        "report.option.how.mina_crop_path"
      ],
      "requiredReceiptIds": ["S02-R01", "S02-R02", "S02-R04", "S02-R06", "S02-R07", "S02-R09", "S02-R10", "S02-R11", "S02-R12"],
      "endingId": "ending.correct"
    },
    {
      "id": "validation.partial.right_person_weak_pressure",
      "ruleType": "partial",
      "priority": 10,
      "requiredOptionIds": ["report.option.who.mina", "report.option.how.mina_crop_path"],
      "requiredReceiptIds": ["S02-R02", "S02-R06", "S02-R07", "S02-R09", "S02-R11"],
      "missingReceiptIds": ["S02-R10", "S02-R12"],
      "endingId": "ending.partial.weak_pressure"
    },
    {
      "id": "validation.partial.right_timeline_wrong_source",
      "ruleType": "partial",
      "priority": 11,
      "requiredOptionIds": ["report.option.when.early_frame_tuesday_clip"],
      "requiredReceiptIds": ["S02-R01", "S02-R02", "S02-R04", "S02-R05", "S02-R06"],
      "endingId": "ending.partial.timeline_wrong_source"
    },
    {
      "id": "validation.wrong.surface_story",
      "ruleType": "wrong",
      "priority": 90,
      "requiredOptionIds": ["report.option.who.rhea", "report.option.why.rhea_jealous", "report.option.when.rhea_after_walkout", "report.option.how.rhea_leak"],
      "endingId": "ending.wrong.surface_story"
    },
    {
      "id": "validation.wrong.noise_not_pattern",
      "ruleType": "wrong",
      "priority": 91,
      "endingId": "ending.wrong.noise_not_pattern"
    }
  ],

  "endings": [
    { "id": "ending.correct", "endingType": "correct", "source": "docs/scenarios/wave9_full_content/ENDING_COPY.md#correct-ending" },
    { "id": "ending.partial.weak_pressure", "endingType": "partial", "source": "docs/scenarios/wave9_full_content/ENDING_COPY.md#partial-ending-1-right-person-weak-pressure" },
    { "id": "ending.partial.timeline_wrong_source", "endingType": "partial", "source": "docs/scenarios/wave9_full_content/ENDING_COPY.md#partial-ending-2-right-timeline-wrong-source" },
    { "id": "ending.wrong.surface_story", "endingType": "wrong", "source": "docs/scenarios/wave9_full_content/ENDING_COPY.md#wrong-ending-1-surface-story" },
    { "id": "ending.wrong.noise_not_pattern", "endingType": "wrong", "source": "docs/scenarios/wave9_full_content/ENDING_COPY.md#wrong-ending-2-wrong-individual-wrong-pressure" }
  ]
}
```

## Content Entry Notes

- Copy exact post, comment, and message copy from the Wave 9 app content files during implementation.
- Keep report and ending copy sourced from Wave 9 unless human review revises it.
- Preserve the authored reveal order even if the prototype UI sorts individual comments inside a thread.
- Any new atmospheric content must not add new core facts, new responsible parties, or new report requirements.
