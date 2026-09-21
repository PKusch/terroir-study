// ─── Backup and restore ──────────────────────────────────────────────────────
// Progress lives only in this browser's local storage, so clearing site data, a
// new phone or a different browser starts from nothing. This turns it into one
// small file you can keep and load back in.
//
// Pure logic, no React and no DOM, so node can test it. Anything read from a file
// is checked field by field: a file is data from outside, and a hand-edited or
// damaged one must never put nonsense into the study record.

import { MAX_BOX } from "./progress.js";

export const BACKUP_APP = "terroir-study";
export const BACKUP_VERSION = 1;
export const MAX_BACKUP_BYTES = 1_000_000;

const isCount = (n) => Number.isInteger(n) && n >= 0;

// One question's record: keeps it only if every field makes sense.
function cleanRecord(r) {
  if (!r || typeof r !== "object" || Array.isArray(r)) return null;
  const { attempts, correct, box, lastAnswered } = r;
  if (!isCount(attempts) || !isCount(correct) || correct > attempts) return null;
  if (!Number.isInteger(box) || box < 0 || box > MAX_BOX) return null;
  if (typeof lastAnswered !== "number" || !Number.isFinite(lastAnswered) || lastAnswered < 0) return null;
  return { attempts, correct, box, lastAnswered };
}

export function makeBackup({ quiz, taste, now = Date.now() }) {
  return {
    app: BACKUP_APP,
    version: BACKUP_VERSION,
    savedAt: new Date(now).toISOString(),
    quiz: quiz ?? {},
    taste: taste ?? { wines: 0, fullyRight: 0 }
  };
}

// Reads the text of a backup file. Never throws.
//   { ok: true, quiz, taste, kept, dropped, unknown, savedAt }
//   { ok: false, reason }
// `knownIds` is the set of question ids this version of the app has; records for
// any other id are set aside as `unknown` rather than kept, so an old file does
// not carry questions that no longer exist.
export function readBackup(text, knownIds = null) {
  if (typeof text !== "string" || text.length === 0) return { ok: false, reason: "The file is empty." };
  if (text.length > MAX_BACKUP_BYTES) return { ok: false, reason: "That file is too big to be a progress backup." };

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    return { ok: false, reason: "That is not a progress backup: the file could not be read." };
  }
  if (!data || typeof data !== "object" || data.app !== BACKUP_APP) {
    return { ok: false, reason: "That file is not a Terroir Study backup." };
  }
  if (!Number.isInteger(data.version) || data.version > BACKUP_VERSION) {
    return { ok: false, reason: "That backup was made by a newer version of the app. Open the latest version and try again." };
  }
  if (!data.quiz || typeof data.quiz !== "object" || Array.isArray(data.quiz)) {
    return { ok: false, reason: "That backup has no quiz progress in it." };
  }

  const quiz = {};
  let dropped = 0;
  let unknown = 0;
  for (const [id, raw] of Object.entries(data.quiz)) {
    // `quiz["__proto__"] = x` would replace the object's prototype, not add a key.
    if (id === "__proto__") { dropped++; continue; }
    if (knownIds && !knownIds.has(id)) { unknown++; continue; }
    const rec = cleanRecord(raw);
    if (rec) quiz[id] = rec; else dropped++;
  }

  const t = data.taste;
  const wines = isCount(t?.wines) ? t.wines : 0;
  const fullyRight = isCount(t?.fullyRight) && t.fullyRight <= wines ? t.fullyRight : 0;

  return {
    ok: true,
    quiz,
    taste: { wines, fullyRight },
    kept: Object.keys(quiz).length,
    dropped,
    unknown,
    savedAt: typeof data.savedAt === "string" ? data.savedAt : null
  };
}

// Loading a backup on top of what is already here. For a question in both, the
// record answered more recently wins whole, so its box stays consistent with its
// own history. Nothing is added up: a file restored twice must not double count.
export function mergeProgress(local, incoming) {
  const out = { ...(local ?? {}) };
  for (const [id, rec] of Object.entries(incoming ?? {})) {
    if (id === "__proto__") continue;
    const have = out[id];
    if (!have || rec.lastAnswered > have.lastAnswered) out[id] = rec;
  }
  return out;
}

// Tasting results are two running totals with no history to compare, so the
// larger record wins whole, for the same reason.
export function mergeTaste(local, incoming) {
  const a = local ?? { wines: 0, fullyRight: 0 };
  const b = incoming ?? { wines: 0, fullyRight: 0 };
  return b.wines > a.wines ? { wines: b.wines, fullyRight: b.fullyRight } : { wines: a.wines, fullyRight: a.fullyRight };
}

// A file name with the date in it, so several backups sort in order.
export function backupFileName(now = Date.now()) {
  return `terroir-study-progress-${new Date(now).toISOString().slice(0, 10)}.json`;
}

// ── When was the last backup? ────────────────────────────────────────────────
// A reminder is only honest if it knows. Same storage guard as progress.js:
// missing or throwing storage means "never", and nothing here ever throws.

export const LAST_BACKUP_KEY = "terroir-last-backup-v1";

function storage() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

export function loadLastBackup() {
  try {
    const raw = storage()?.getItem(LAST_BACKUP_KEY);
    const n = Number(raw);
    return raw && Number.isFinite(n) && n > 0 ? n : null;
  } catch {
    return null;
  }
}

export function saveLastBackup(now = Date.now()) {
  try {
    const s = storage();
    if (!s) return false;
    s.setItem(LAST_BACKUP_KEY, String(now));
    return true;
  } catch {
    return false;
  }
}

// "Never saved", "Saved today", "Saved yesterday", "Saved 9 days ago".
export function lastBackupLabel(last, now = Date.now()) {
  if (!last) return "Never saved";
  const days = Math.floor((now - last) / 86_400_000);
  if (days <= 0) return "Saved today";
  if (days === 1) return "Saved yesterday";
  return `Saved ${days} days ago`;
}
