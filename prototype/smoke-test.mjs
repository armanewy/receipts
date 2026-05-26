import { spawn } from "node:child_process";
import { once } from "node:events";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "..");
const prototypeUrl = "file:///" + join(repoRoot, "prototype", "index.html").replaceAll("\\", "/");
const port = 9231;
const userDataDir = mkdtempSync(join(tmpdir(), "receipts-chrome-smoke-"));

const browserPath = findBrowser();
const browser = spawn(browserPath, [
  "--headless=new",
  "--disable-gpu",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  prototypeUrl
], {
  stdio: "ignore",
  windowsHide: true
});

try {
  await wait(1200);
  const result = await runSmokePath();
  console.log(JSON.stringify(result, null, 2));
} finally {
  if (!browser.killed) {
    browser.kill("SIGKILL");
    await Promise.race([
      once(browser, "exit"),
      wait(2000)
    ]);
  }
  rmSync(userDataDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 });
}

function findBrowser() {
  const candidates = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
  ];
  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error("Smoke test needs Chrome or Edge installed in a standard location.");
  }
  return found;
}

async function runSmokePath() {
  const pages = await retry(async () => {
    const response = await fetch(`http://127.0.0.1:${port}/json`);
    if (!response.ok) throw new Error(`Chrome debug endpoint returned ${response.status}`);
    return response.json();
  });
  const page = pages.find((entry) => entry.type === "page");
  if (!page) throw new Error("No page target found.");

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  const send = makeSender(ws);
  await new Promise((resolveOpen, rejectOpen) => {
    ws.addEventListener("open", resolveOpen, { once: true });
    ws.addEventListener("error", rejectOpen, { once: true });
  });

  await send("Runtime.enable");
  const result = await send("Runtime.evaluate", {
    expression: smokeExpression(),
    awaitPromise: true,
    returnByValue: true
  });

  ws.close();

  if (result.exceptionDetails) {
    const description = result.exceptionDetails.exception?.description || result.exceptionDetails.text;
    throw new Error(description);
  }

  const value = result.result.value;
  if (value.saved !== "15/15") {
    throw new Error(`Expected 15/15 saved receipts, got ${value.saved}`);
  }
  if (!value.title.includes("holds together")) {
    throw new Error(`Expected correct ending, got ${value.title}`);
  }
  if (value.tabs.some((tab) => tab.disabled)) {
    throw new Error(`Expected every app unlocked, got ${JSON.stringify(value.tabs)}`);
  }
  return value;
}

function makeSender(ws) {
  let nextId = 1;
  const pending = new Map();
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve: finish, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else finish(message.result);
  });
  return (method, params = {}) => new Promise((resolveSend, rejectSend) => {
    const id = nextId++;
    pending.set(id, { resolve: resolveSend, reject: rejectSend });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

function smokeExpression() {
  return String.raw`
(() => {
  const click = (selector) => {
    const el = document.querySelector(selector);
    if (!el) throw new Error("Missing selector: " + selector);
    el.click();
  };
  const save = (id) => click('[data-save="' + id + '"]');
  save("S02-R01");
  save("S02-R02");
  save("S02-R03");
  click('[data-unlock="loop"]');
  save("S02-R04");
  save("S02-R05");
  click('[data-unlock="threadline"]');
  save("S02-R06");
  save("S02-R07");
  save("S02-R08");
  click('[data-unlock="blink"]');
  save("S02-R09");
  save("S02-R10");
  click('[data-unlock="frameReturn"]');
  click('[data-app="blink"]');
  save("S02-R11");
  save("S02-R13");
  click('[data-app="frame"]');
  save("S02-R15");
  save("S02-R12");
  click('[data-app="threadline"]');
  save("S02-R14");
  click('[data-app="report"]');
  click('[data-slot="who"][data-value="mina"]');
  click('[data-slot="why"][data-value="cedar_credit"]');
  click('[data-slot="when"][data-value="early_frame"]');
  click('[data-slot="how"][data-value="mina_crop"]');
  click('[data-submit-report="true"]');
  return {
    saved: document.querySelector(".dockToggle span")?.textContent || "",
    title: document.querySelector(".ending h2")?.textContent || "",
    tabs: Array.from(document.querySelectorAll(".tab")).map((el) => ({
      text: el.textContent,
      disabled: el.disabled
    }))
  };
})()
`;
}

async function retry(fn) {
  let lastError;
  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      await wait(150);
    }
  }
  throw lastError;
}

function wait(ms) {
  return new Promise((resolveWait) => setTimeout(resolveWait, ms));
}
