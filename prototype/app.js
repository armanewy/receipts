const RECEIPTS = {
  "S02-R01": {
    title: "Empty Fifth Chair",
    app: "Frame",
    slots: ["HOW", "CONTEXT"],
    required: true,
    apparent: "Mina is reacting to Rhea being absent from dinner.",
    actual: "The empty chair helps set a public frame before the full context is visible.",
    dependencies: ["S02-R02", "S02-R09"]
  },
  "S02-R02": {
    title: "Supper Four Rename",
    app: "Frame",
    slots: ["WHO", "WHEN"],
    required: true,
    apparent: "The group updated its image after Rhea caused trouble.",
    actual: "The public curation starts before the screenshot becomes the loudest story.",
    dependencies: ["S02-R01"]
  },
  "S02-R03": {
    title: "Supper Five Warmth",
    app: "Frame",
    slots: ["WHY", "CONTEXT"],
    required: false,
    apparent: "Old group photos are just nostalgia.",
    actual: "Rhea was a real contributor to the supper concept.",
    dependencies: []
  },
  "S02-R04": {
    title: "Table Clip",
    app: "Loop",
    slots: ["WHEN", "HOW"],
    required: true,
    apparent: "Rhea stormed out during Mina's toast.",
    actual: "The tense clip is real, but it happened Tuesday and gets used out of order.",
    dependencies: ["S02-R05"]
  },
  "S02-R05": {
    title: "Tuesday Comment Friction",
    app: "Loop",
    slots: ["WHEN"],
    required: false,
    apparent: "Commenters are arguing over details.",
    actual: "People noticed the clip timing does not match the public story.",
    dependencies: ["S02-R04"]
  },
  "S02-R06": {
    title: "Cropped Blink Screenshot",
    app: "Threadline",
    slots: ["HOW", "WHEN"],
    required: true,
    apparent: "Rhea was trying to drag the group in private.",
    actual: "The screenshot is real but starts mid-conversation.",
    dependencies: ["S02-R09"]
  },
  "S02-R07": {
    title: "Table Friend Source",
    app: "Threadline",
    slots: ["WHO", "HOW"],
    required: true,
    apparent: "@porchwatch had a source near the dinner.",
    actual: "The source path points inside Mina's circle, not to Rhea alone.",
    dependencies: ["S02-R11"]
  },
  "S02-R08": {
    title: "Mina Table Language",
    app: "Threadline",
    slots: ["WHO", "CONTEXT"],
    required: false,
    apparent: "Mina talks about table rules a lot.",
    actual: "Her phrasing rhymes with the source path but does not replace the source bundle.",
    dependencies: ["S02-R07", "S02-R11"]
  },
  "S02-R09": {
    title: "Uncropped Group Chat",
    app: "Blink",
    slots: ["WHO", "HOW"],
    required: true,
    apparent: "The private chat is messier than the crop.",
    actual: "The missing lines change what Rhea was asking for and what Mina removed.",
    dependencies: ["S02-R06"]
  },
  "S02-R10": {
    title: "Credit Before Thursday",
    app: "Blink",
    slots: ["WHY"],
    required: true,
    apparent: "Rhea and Mina were arguing about credit.",
    actual: "Rhea asked for shared credit before Mina's Thursday opportunity.",
    dependencies: ["S02-R12"]
  },
  "S02-R11": {
    title: "Crop-Source Alignment",
    app: "Blink",
    slots: ["WHO", "HOW"],
    required: true,
    apparent: "The crop and full chat can be compared.",
    actual: "Source, crop, missing context, and phrasing point back toward Mina's side.",
    dependencies: ["S02-R06", "S02-R07", "S02-R09"]
  },
  "S02-R12": {
    title: "Cedar Room Announcement",
    app: "Frame",
    slots: ["WHY"],
    required: true,
    apparent: "Mina got a nice venue feature.",
    actual: "Cedar Room explains what Mina had to protect on Thursday.",
    dependencies: ["S02-R10"]
  },
  "S02-R13": {
    title: "Nia Stays Quiet",
    app: "Blink",
    slots: ["WHY", "CONTEXT"],
    required: false,
    apparent: "The rest of the group did not want to get dragged in.",
    actual: "The group silence helped the public read stick even though some people had doubts.",
    dependencies: ["S02-R06", "S02-R12"]
  },
  "S02-R14": {
    title: "Locked Replies",
    app: "Threadline",
    slots: ["WHEN", "CONTEXT"],
    required: false,
    apparent: "@porchwatch is avoiding pile-on replies.",
    actual: "The public account cannot hold source and timing questions once the story wobbles.",
    dependencies: ["S02-R05", "S02-R07"]
  },
  "S02-R15": {
    title: "Early Cedar Bio",
    app: "Frame",
    slots: ["WHY", "WHEN"],
    required: false,
    apparent: "Mina updated her profile for a new opportunity.",
    actual: "Mina knew Cedar Room mattered before the public story fully spread.",
    dependencies: ["S02-R12"]
  }
};

const APPS = [
  { id: "frame", name: "Frame", subtitle: "photo / story", lockedText: "" },
  { id: "loop", name: "Loop", subtitle: "short video", lockedText: "Dax reposted this to Loop." },
  { id: "threadline", name: "Threadline", subtitle: "public text", lockedText: "@porchwatch is where people are quoting the screenshot." },
  { id: "blink", name: "Blink", subtitle: "private / ephemeral", lockedText: "Supper Five Planning appears in Blink." },
  { id: "report", name: "Report", subtitle: "WHO / WHY / WHEN / HOW", lockedText: "Your saved receipts can hold a report now." }
];

const CONTENT = [
  {
    id: "frame-profile",
    app: "frame",
    author: "Mina Saye",
    handle: "@minasupper",
    title: "Mina's Frame",
    time: "Wed morning",
    type: "profile",
    body: ["Supper host. Menu cards, borrowed chairs, long tables.", "Active story: one seat missing."],
    comments: ["@niabell: your table always looks unreal", "@solpark: save me the corner seat"],
    receipts: []
  },
  {
    id: "empty-chair",
    app: "frame",
    author: "Mina Saye",
    handle: "@minasupper",
    title: "Story carousel",
    time: "Wed 10:19 AM",
    media: "table",
    body: ["some seats stay empty for a reason.", "Repost sticker: Dax caught the table moment on Loop."],
    comments: ["@saltedmiri: wait who is missing?", "@daxplates: I posted the clip because people were asking", "@localplateclub: this dinner got loud fast"],
    receipts: ["S02-R01"],
    unlocks: ["loop"]
  },
  {
    id: "supper-four",
    app: "frame",
    author: "Mina Saye",
    handle: "@minasupper",
    title: "Supper Four highlight",
    time: "Updated Wed 10:12 AM",
    body: ["Highlight name changed from Supper Five Planning Night to Supper Four.", "The older card still shows five name tags on the table."],
    comments: ["@greenroommara: already renamed?", "@solpark: the timing on this is weird"],
    receipts: ["S02-R02"]
  },
  {
    id: "supper-five-warmth",
    app: "frame",
    author: "Rhea Vale",
    handle: "@rheavale",
    title: "Old menu-card carousel",
    time: "Last month",
    body: ["Rhea's sketches and Mina's captions appear on the same supper mockup.", "Caption: five people can make a small table feel like a room."],
    comments: ["@minasupper: still my favorite card", "@niabell: Rhea made the tiny herbs look expensive"],
    receipts: ["S02-R03"]
  },
  {
    id: "rhea-profile",
    app: "frame",
    author: "Rhea Vale",
    handle: "@rheavale",
    title: "Rhea's Frame",
    time: "Wed",
    body: ["Menu notes, messy drafts, no new story since Tuesday night.", "Bio line: credit the table, not just the host."],
    comments: ["@localplateclub: that bio is doing a lot"],
    receipts: []
  },
  {
    id: "frame-dinner-grid",
    app: "frame",
    requires: ["loop"],
    author: "Mina Saye",
    handle: "@minasupper",
    title: "Dinner grid post",
    time: "Wed afternoon",
    body: ["Four plates, five shadows, comments limited.", "Caption: grateful for the people who stay."],
    comments: ["@daxplates: table looked good before it got weird", "@niabell: Mina please"],
    receipts: []
  },
  {
    id: "cedar-low",
    app: "frame",
    requires: ["threadline"],
    author: "Cedar Room",
    handle: "@cedarroom",
    title: "Low-signal venue tile",
    time: "Wed evening",
    body: ["A quiet tile mentions Thursday supper programming.", "Mina likes the post. No one in comments connects it yet."],
    comments: ["@greenroommara: cedar doing supper nights now?"],
    receipts: []
  },
  {
    id: "early-cedar-bio",
    app: "frame",
    requires: ["frameReturn"],
    author: "Mina Saye",
    handle: "@minasupper",
    title: "Profile bio update",
    time: "Wed 9:44 AM",
    body: ["Bio snapshot: Cedar Room Thursday. Supper table by Mina Saye.", "The timestamp is before the public crop gets loud."],
    comments: [],
    receipts: ["S02-R15"]
  },
  {
    id: "cedar-announcement",
    app: "frame",
    requires: ["frameReturn"],
    author: "Cedar Room",
    handle: "@cedarroom",
    title: "Thursday announcement",
    time: "Thu 9:00 AM",
    body: ["Introducing Mina Saye's supper-table night.", "Post credits Mina by name and uses the same table language."],
    comments: ["@rheavale: the table was never one person's idea", "@localplateclub: wait this is what Thursday was?"],
    receipts: ["S02-R12"]
  },
  {
    id: "table-clip",
    app: "loop",
    requires: ["loop"],
    author: "Dax Moreno",
    handle: "@daxplates",
    title: "The table clip",
    time: "Tue 9:18 PM",
    media: "clip",
    body: ["A short clip catches Rhea standing as Mina starts a toast.", "Caption: when the table goes quiet all at once."],
    comments: ["@saltedmiri: that is not a normal exit", "@greenroommara: wait this is Tuesday?", "@localplateclub: screenshot thread was Wednesday though"],
    receipts: ["S02-R04", "S02-R05"]
  },
  {
    id: "loop-spread",
    app: "loop",
    requires: ["loop"],
    author: "Loop reposts",
    handle: "@tablewatch",
    title: "Clip reactions",
    time: "Wed",
    body: ["People remix the walkout into a clean story.", "Dax replies that he posted a moment, not a timeline."],
    comments: ["@daxplates: I didn't post a timeline", "@porchwatch has the screenshot side of it"],
    receipts: [],
    unlocks: ["threadline"]
  },
  {
    id: "porchwatch-crop",
    app: "threadline",
    requires: ["threadline"],
    author: "porchwatch",
    handle: "@porchwatch",
    title: "Cropped Blink screenshot",
    time: "Wed 11:02 AM",
    media: "crop",
    body: ["Posted screenshot from Supper Five Planning starts mid-chat.", "Visible line from Rhea: if Mina posts it like it was only hers, I am done pretending."],
    comments: ["@saltedmiri: so Rhea was always planning to make it public?", "@greenroommara: why does this start in the middle?", "@localplateclub: who sent you this?"],
    receipts: ["S02-R06"]
  },
  {
    id: "source-chain",
    app: "threadline",
    requires: ["threadline"],
    author: "porchwatch",
    handle: "@porchwatch",
    title: "Source-chain reply",
    time: "Wed 11:31 AM",
    body: ["Reply: came from a table friend, not Rhea.", "Another reply: close enough to see the dinner before it got cleaned up."],
    comments: ["@localplateclub: table friend as in Mina's table?", "@porchwatch: not naming people"],
    receipts: ["S02-R07"]
  },
  {
    id: "quote-pile",
    app: "threadline",
    requires: ["threadline"],
    author: "public replies",
    handle: "@threadline",
    title: "Quote-post pile",
    time: "Wed noon",
    body: ["The public version fuses the Loop clip and Blink crop into one easy read.", "Rhea becomes the simple answer in most replies."],
    comments: ["@greenroommara: the clip plus crop is too much", "@niabell: people are flattening this"],
    receipts: []
  },
  {
    id: "mina-table-language",
    app: "threadline",
    requires: ["threadline"],
    author: "Mina Saye",
    handle: "@minasupper",
    title: "Older table post",
    time: "Two weeks ago",
    body: ["Mina: some people want a seat after the table is already built.", "The phrasing echoes the later source language."],
    comments: ["@solpark: Mina and table metaphors, name a pair"],
    receipts: ["S02-R08"]
  },
  {
    id: "blink-questions",
    app: "threadline",
    requires: ["threadline"],
    author: "replies",
    handle: "@threadline",
    title: "Crop questions",
    time: "Wed afternoon",
    body: ["Replies zoom in on the group name: Supper Five Planning.", "People ask what messages came before the crop."],
    comments: ["@localplateclub: if the thread name is Supper Five then why is Frame already Supper Four?", "@greenroommara: someone needs the full Blink context"],
    receipts: [],
    unlocks: ["blink"]
  },
  {
    id: "locked-replies",
    app: "threadline",
    requires: ["reportReady"],
    author: "porchwatch",
    handle: "@porchwatch",
    title: "Replies locked",
    time: "Thu",
    body: ["Update: locking replies because the timeline is getting messy.", "The account does not answer source questions after the full chat circulates."],
    comments: [],
    receipts: ["S02-R14"]
  },
  {
    id: "uncropped-chat",
    app: "blink",
    requires: ["blink"],
    author: "Supper Five Planning",
    handle: "Blink group",
    title: "Uncropped group chat",
    time: "Tue night",
    media: "chat",
    body: ["The lines above the crop show Mina pushing to post solo credit.", "Rhea asks to slow the public post, not to make the fight public."],
    comments: [],
    receipts: ["S02-R09"]
  },
  {
    id: "credit-dm",
    app: "blink",
    requires: ["blink"],
    author: "Rhea / Mina",
    handle: "Blink DM",
    title: "Credit before Thursday",
    time: "Wed 8:41 AM",
    body: ["Rhea: if Cedar is Thursday, please do not post the table as only yours.", "Mina: this is my booking. Do not make it weird."],
    comments: [],
    receipts: ["S02-R10"],
    unlocks: ["frameReturn"]
  },
  {
    id: "crop-source-bundle",
    app: "blink",
    requires: ["blink"],
    author: "Saved comparison",
    handle: "Blink compare",
    title: "Crop-source alignment",
    time: "After comparing",
    body: ["The crop starts after Mina's lines, matches the Threadline screenshot, and works with the table-friend source.", "It is not one tiny detail; it is the crop, the full chat, the source, and timing together."],
    comments: [],
    receipts: ["S02-R11"]
  },
  {
    id: "nia-sol",
    app: "blink",
    requires: ["blink"],
    author: "Nia / Sol",
    handle: "Blink DM",
    title: "Why no one corrected it",
    time: "Wed night",
    body: ["Nia says correcting the public story would risk the Cedar Room invite.", "Sol says the feed already decided Rhea was the messy one."],
    comments: [],
    receipts: ["S02-R13"]
  }
];

const OPTIONS = {
  who: [
    ["mina", "Mina Saye"],
    ["rhea", "Rhea Vale"],
    ["porchwatch", "@porchwatch"],
    ["dax", "Dax Moreno"],
    ["group", "The whole supper group"],
    ["cedar", "Cedar Room booker"]
  ],
  why: [
    ["cedar_credit", "Cedar Room pressure and shared supper credit"],
    ["rhea_jealous", "Rhea was jealous and lashed out"],
    ["dax_engagement", "Dax wanted clip engagement"],
    ["porchwatch_growth", "@porchwatch wanted account growth"],
    ["group_rebrand", "The group wanted to rebrand without Rhea"]
  ],
  when: [
    ["early_frame", "Frame shifted early, and the Loop clip was Tuesday"],
    ["rhea_after", "Rhea leaked after the dinner walkout"],
    ["after_crop", "The group cut Rhea after the crop went public"],
    ["after_cedar", "Everything happened after Cedar Room posted"]
  ],
  how: [
    ["mina_crop", "Mina used a cropped Blink chat, @porchwatch spread, Frame curation, and the out-of-order Loop clip"],
    ["rhea_leak", "Rhea directly leaked the private chat"],
    ["porchwatch_made", "@porchwatch invented the story"],
    ["dax_clip", "Dax's Loop clip shaped everything"],
    ["group_cut", "The whole group coordinated the cut"]
  ]
};

const REQUIRED = ["S02-R01", "S02-R02", "S02-R04", "S02-R06", "S02-R07", "S02-R09", "S02-R10", "S02-R11", "S02-R12"];

const DEFAULT_STATE = {
  activeApp: "frame",
  unlocked: ["frame"],
  flags: [],
  saved: [],
  included: [],
  receiptOpen: false,
  selections: { who: "", why: "", when: "", how: "" },
  ending: null,
  feedback: ""
};

let state = loadState();

function loadState() {
  const raw = localStorage.getItem("receipts.prototype.state");
  if (!raw) return structuredClone(DEFAULT_STATE);
  try {
    return { ...structuredClone(DEFAULT_STATE), ...JSON.parse(raw) };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem("receipts.prototype.state", JSON.stringify(state));
}

function resetState() {
  state = structuredClone(DEFAULT_STATE);
  saveState();
  render();
}

function hasUnlock(key) {
  return state.unlocked.includes(key) || state.flags.includes(key);
}

function addUnlock(key) {
  if (["loop", "threadline", "blink", "report"].includes(key) && !state.unlocked.includes(key)) {
    state.unlocked.push(key);
  } else if (!state.flags.includes(key)) {
    state.flags.push(key);
  }
  if (key === "frameReturn") {
    addUnlock("frame");
  }
  evaluateReportAvailability();
}

function saveReceipt(id) {
  if (!state.saved.includes(id)) state.saved.push(id);
  if (!state.included.includes(id)) state.included.push(id);
  evaluateReportAvailability();
  saveState();
  render();
}

function evaluateReportAvailability() {
  const saved = new Set(state.saved);
  const canReport = hasUnlock("frameReturn") && ["S02-R09", "S02-R10", "S02-R11"].some((id) => saved.has(id));
  const strongEnough = REQUIRED.every((id) => saved.has(id));
  if ((canReport || strongEnough || state.saved.length >= 9) && !state.unlocked.includes("report")) {
    state.unlocked.push("report");
  }
  if (state.unlocked.includes("report") && !state.flags.includes("reportReady")) {
    state.flags.push("reportReady");
  }
}

function requirementsMet(item) {
  return (item.requires || []).every((key) => hasUnlock(key));
}

function currentItems() {
  return CONTENT.filter((item) => item.app === state.activeApp && requirementsMet(item));
}

function render() {
  saveState();
  const app = document.getElementById("app");
  app.innerHTML = `
    <main class="shell">
      ${renderTopbar()}
      <section class="feed">
        ${renderSurface()}
      </section>
      ${renderReceiptDock()}
    </main>
  `;
}

function renderTopbar() {
  const tabs = APPS.map((app) => {
    const unlocked = state.unlocked.includes(app.id);
    const cls = ["tab", app.id, state.activeApp === app.id ? "active" : "", unlocked ? "" : "locked"].join(" ");
    return `<button class="${cls}" ${unlocked ? "" : "disabled"} data-app="${app.id}">${app.name}</button>`;
  }).join("");
  return `
    <header class="topbar">
      <div class="brandRow">
        <div class="brand">
          <strong>Receipts</strong>
          <span>The Empty Fifth Chair</span>
        </div>
        <button class="resetBtn" data-reset="true">Reset</button>
      </div>
      <nav class="appTabs">${tabs}</nav>
    </header>
  `;
}

function renderSurface() {
  const appInfo = APPS.find((app) => app.id === state.activeApp);
  if (state.activeApp === "report") return renderReport();
  return `
    <div class="surfaceHeader">
      <div>
        <h1>${appInfo.name}</h1>
        <p>${appInfo.subtitle}</p>
      </div>
      <div class="counter"><strong>${state.saved.length}</strong><span>saved</span></div>
    </div>
    ${renderUnlockNotices()}
    ${currentItems().map(renderPost).join("")}
  `;
}

function renderUnlockNotices() {
  const locked = APPS.filter((app) => !state.unlocked.includes(app.id) && app.lockedText);
  if (!locked.length) return "";
  return `<div class="unlockNotice">${locked[0].lockedText}</div>`;
}

function renderPost(item) {
  const receiptButtons = (item.receipts || []).map((id) => {
    const saved = state.saved.includes(id);
    return `<button class="actionBtn saveBtn ${saved ? "saved" : ""}" data-save="${id}">${saved ? "Saved" : "Save"} ${id}</button>`;
  }).join("");
  const unlockButtons = (item.unlocks || []).map((id) => {
    const label = id === "frameReturn" ? "Return to Frame" : `Open ${nameForApp(id)}`;
    return `<button class="actionBtn" data-unlock="${id}">${label}</button>`;
  }).join("");
  return `
    <article class="post">
      <div class="postHead">
        <div><strong>${item.author}</strong><div class="handle">${item.handle}</div></div>
        <div class="time">${item.time || ""}</div>
      </div>
      ${renderMedia(item)}
      <div class="body">
        <h2>${item.title}</h2>
        ${(item.body || []).map((line) => `<p>${line}</p>`).join("")}
      </div>
      ${renderComments(item.comments)}
      ${(receiptButtons || unlockButtons) ? `<div class="actions">${receiptButtons}${unlockButtons}</div>` : ""}
    </article>
  `;
}

function renderMedia(item) {
  if (item.media === "table") {
    return `
      <div class="media table">
        <div class="tableScene">
          <span class="plate p1"></span><span class="plate p2"></span><span class="plate p3"></span><span class="plate p4"></span>
          <span class="chair c1"></span><span class="chair c2"></span><span class="chair c3"></span><span class="chair c4"></span><span class="chair c5"></span>
        </div>
      </div>
    `;
  }
  if (item.media === "clip") {
    return `<div class="media clip"><strong>Loop clip still</strong><span>Rhea stands as Mina starts a toast.</span><div class="clipBar"></div></div>`;
  }
  if (item.media === "crop") {
    return `
      <div class="media screenshot cropped">
        <div class="chatBubble mine">if Mina posts it like it was only hers, I am done pretending</div>
        <div class="chatBubble">then say it with your whole chest?</div>
      </div>
    `;
  }
  if (item.media === "chat") {
    return `
      <div class="media screenshot">
        <div class="chatBubble">Mina: I need the Cedar post clean tomorrow.</div>
        <div class="chatBubble mine">Rhea: credit the table. that's all I am asking.</div>
        <div class="chatBubble">Mina: please do not make it weird tonight.</div>
        <div class="chatBubble mine">Rhea: if it posts like it was only yours, I am done pretending.</div>
      </div>
    `;
  }
  return "";
}

function renderComments(comments = []) {
  if (!comments.length) return "";
  return `<div class="comments">${comments.map((comment) => {
    const [handle, text] = comment.includes(":") ? comment.split(/:(.*)/s) : ["", comment];
    return `<div class="comment">${handle ? `<b>${handle}</b>: ` : ""}${text.trim()}</div>`;
  }).join("")}</div>`;
}

function renderReceiptDock() {
  const list = state.saved.length
    ? state.saved.map((id) => renderReceiptCard(id)).join("")
    : `<p class="small">No receipts saved yet.</p>`;
  return `
    <aside class="receiptDock">
      <button class="dockToggle" data-toggle-receipts="true">
        <strong>Saved receipts</strong>
        <span>${state.saved.length}/15</span>
      </button>
      ${state.receiptOpen ? `<div class="receiptList">${list}</div>` : ""}
    </aside>
  `;
}

function renderReceiptCard(id) {
  const receipt = RECEIPTS[id];
  const updated = receipt.dependencies.some((dep) => state.saved.includes(dep));
  return `
    <div class="receiptCard">
      <h3>${id} - ${receipt.title}</h3>
      <div class="receiptMeta">
        <span class="pill">${receipt.app}</span>
        ${receipt.slots.map((slot) => `<span class="pill">${slot}</span>`).join("")}
        <span class="pill">${receipt.required ? "required" : "optional"}</span>
      </div>
      <div class="meaning">${updated ? receipt.actual : receipt.apparent}</div>
    </div>
  `;
}

function renderReport() {
  const reportUnlocked = state.unlocked.includes("report");
  if (!reportUnlocked) {
    return `
      <div class="surfaceHeader"><div><h1>Report</h1><p>Not enough saved context yet.</p></div></div>
      <div class="feedback">Keep comparing the feed across apps.</div>
    `;
  }
  return `
    <div class="surfaceHeader">
      <div><h1>Report</h1><p>WHO / WHY / WHEN / HOW</p></div>
      <div class="counter"><strong>${state.included.length}</strong><span>used</span></div>
    </div>
    <div class="reportGrid">
      ${["who", "why", "when", "how"].map(renderSlot).join("")}
      <section class="slot">
        <h2>Receipts</h2>
        <div class="reportReceipts">
          ${state.saved.map((id) => `<button class="chip ${state.included.includes(id) ? "included" : ""}" data-include="${id}">${id}</button>`).join("")}
        </div>
      </section>
      <button class="submitReport" data-submit-report="true">Submit report</button>
      ${state.feedback ? `<div class="feedback">${state.feedback}</div>` : ""}
      ${state.ending ? renderEnding(state.ending) : ""}
    </div>
  `;
}

function renderSlot(slot) {
  return `
    <section class="slot">
      <h2>${slot.toUpperCase()}</h2>
      <div class="optionGrid">
        ${OPTIONS[slot].map(([value, label]) => {
          const selected = state.selections[slot] === value;
          return `<button class="option ${selected ? "selected" : ""}" data-slot="${slot}" data-value="${value}">${label}</button>`;
        }).join("")}
      </div>
    </section>
  `;
}

function renderEnding(type) {
  const ending = ENDINGS[type];
  return `
    <section class="ending ${ending.kind}">
      <h2>${ending.title}</h2>
      ${ending.copy.map((line) => `<p>${line}</p>`).join("")}
      <div class="comments">${ending.reactions.map((line) => `<div class="comment">${line}</div>`).join("")}</div>
    </section>
  `;
}

const ENDINGS = {
  correct: {
    kind: "correct",
    title: "Your report holds together.",
    copy: [
      "The empty chair was not just a reaction. It was part of a public frame that started before the feed had the full story.",
      "Mina had the pressure, the timing, and the view of the chat. @porchwatch made it travel. Dax made it feel obvious."
    ],
    reactions: ["@localplateclub: wait the Supper Four update was BEFORE the screenshot thread??", "@porchwatch: locking this for now. timeline getting messy."]
  },
  weakPressure: {
    kind: "partial",
    title: "Close, but the reason is thin.",
    copy: ["The source path is strong, but Mina still reads like a hurt host unless Thursday and shared credit are part of the report."],
    reactions: ["@saltedmiri: the crop looks worse now but idk what Mina gets from this"]
  },
  timelineWrongSource: {
    kind: "partial",
    title: "The order is wobbling.",
    copy: ["The report catches the timing break, but it still stays too close to the loudest accounts."],
    reactions: ["@greenroommara: ok the Tuesday clip changes things", "@niabell: the timeline is not as simple as people made it."]
  },
  surfaceStory: {
    kind: "wrong",
    title: "This is the version the feed gives you first.",
    copy: ["It has a clean shape, but the timing is off, the crop is incomplete, and the private context changes what Rhea was asking for."],
    reactions: ["@localplateclub: still feels like nobody has the whole chat"]
  },
  noiseNotPattern: {
    kind: "wrong",
    title: "This explains the noise, not the pattern.",
    copy: ["@porchwatch, Dax, Cedar Room, and the group silence are real parts of the feed. They do not explain the person who sits across timing, crop, and benefit."],
    reactions: ["@daxplates: I didn't post a timeline, I posted a moment.", "@cedarroom: comments limited while we keep this page focused on programming."]
  }
};

function submitReport() {
  const { who, why, when, how } = state.selections;
  const included = new Set(state.included);
  if (!who || !why || !when || !how) {
    state.feedback = "The report needs every slot filled before it can hold.";
    state.ending = null;
    return;
  }
  const allRequired = REQUIRED.every((id) => included.has(id));
  if (who === "mina" && why === "cedar_credit" && when === "early_frame" && how === "mina_crop" && allRequired) {
    state.feedback = "";
    state.ending = "correct";
    return;
  }
  if (who === "mina" && how === "mina_crop" && ["S02-R06", "S02-R07", "S02-R09", "S02-R11"].every((id) => included.has(id))) {
    state.feedback = "The source path is strong. The report still needs what made Thursday matter.";
    state.ending = "weakPressure";
    return;
  }
  if (when === "early_frame" && ["porchwatch", "dax"].includes(who)) {
    state.feedback = "The timing wobble is real. The report still follows the loudest surface.";
    state.ending = "timelineWrongSource";
    return;
  }
  if (who === "rhea" && why === "rhea_jealous" && when === "rhea_after" && how === "rhea_leak") {
    state.feedback = "";
    state.ending = "surfaceStory";
    return;
  }
  if (who === "mina" || why === "cedar_credit" || how === "mina_crop") {
    state.feedback = "Some pieces point the right way, but the report needs timing, pressure, and crop context together.";
  } else {
    state.feedback = "";
  }
  state.ending = "noiseNotPattern";
}

function nameForApp(id) {
  if (id === "frameReturn") return "Frame";
  const app = APPS.find((item) => item.id === id);
  return app ? app.name : id;
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.reset) {
    resetState();
    return;
  }
  if (target.dataset.app) {
    state.activeApp = target.dataset.app;
    state.feedback = "";
    saveState();
    render();
    return;
  }
  if (target.dataset.save) {
    saveReceipt(target.dataset.save);
    return;
  }
  if (target.dataset.unlock) {
    const key = target.dataset.unlock;
    addUnlock(key);
    state.activeApp = key === "frameReturn" ? "frame" : key;
    saveState();
    render();
    return;
  }
  if (target.dataset.toggleReceipts) {
    state.receiptOpen = !state.receiptOpen;
    saveState();
    render();
    return;
  }
  if (target.dataset.slot) {
    state.selections[target.dataset.slot] = target.dataset.value;
    state.feedback = "";
    state.ending = null;
    saveState();
    render();
    return;
  }
  if (target.dataset.include) {
    const id = target.dataset.include;
    state.included = state.included.includes(id)
      ? state.included.filter((item) => item !== id)
      : [...state.included, id];
    saveState();
    render();
    return;
  }
  if (target.dataset.submitReport) {
    submitReport();
    saveState();
    render();
  }
});

render();
