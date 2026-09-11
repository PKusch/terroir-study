// ─── Quiz progress ───────────────────────────────────────────────────────────
// Pure logic, no React and no DOM access at import time, so node can test it.
//
// One record per question id, all stored under a single localStorage key:
//   { attempts, correct, box, lastAnswered }
//
// Boxes work like a Leitner card box. A question starts in box 0 (never seen).
// A correct answer moves it up one box, to a maximum of 3. A wrong answer sends
// it back to box 1. Low boxes are asked often, high boxes rarely.

export const STORAGE_KEY = "terroir-progress-v1";
export const MAX_BOX = 3;

// ── Storage ──────────────────────────────────────────────────────────────────
// localStorage may be missing (node, tests) or throw (private mode, quota).
// Every path below treats that as "no progress" and never throws.

function storage() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

export function loadProgress() {
  try {
    const s = storage();
    if (!s) return {};
    const raw = s.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export function saveProgress(progress) {
  try {
    const s = storage();
    if (!s) return false;
    s.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}

export function resetProgress() {
  try {
    const s = storage();
    if (s) s.removeItem(STORAGE_KEY);
  } catch {
    // nothing to clear
  }
  return {};
}

// ── Records ──────────────────────────────────────────────────────────────────

export function boxOf(progress, id) {
  const r = progress?.[id];
  return r && Number.isInteger(r.box) ? Math.min(Math.max(r.box, 0), MAX_BOX) : 0;
}

// Returns a new progress object; the one passed in is not changed.
export function recordAnswer(progress, id, correct, now = Date.now()) {
  const prev = progress?.[id] ?? { attempts: 0, correct: 0, box: 0, lastAnswered: 0 };
  const box = correct ? Math.min(boxOf(progress, id) + 1, MAX_BOX) : 1;
  return {
    ...progress,
    [id]: {
      attempts: (prev.attempts ?? 0) + 1,
      correct: (prev.correct ?? 0) + (correct ? 1 : 0),
      box,
      lastAnswered: now
    }
  };
}

// ── Choosing the next question ───────────────────────────────────────────────
// Plain-English rule, in priority order:
//   1. A question you have never seen.
//   2. A box-2 question that is "due": every box-1 question has been answered
//      since you last saw it. So box 2 only comes round once you have worked
//      through everything in box 1.
//   3. Any box-1 question (the ones you got wrong recently).
//   4. A box-3 question that is due: every box-1 AND box-2 question has been
//      answered since you last saw it. That is why box 3 is rare.
//   5. Anything left (only happens when the pool is tiny).
// Within a step the pick is random, using the rng you pass in, and the question
// on screen is never picked again while another question exists.

function lastSeen(progress, id) {
  return progress?.[id]?.lastAnswered ?? 0;
}

// True when every question in `lowerIds` has been answered after `id` was.
function everyAnsweredSince(progress, id, lowerIds) {
  const t = lastSeen(progress, id);
  return lowerIds.every((other) => lastSeen(progress, other) > t);
}

export function dueQuestions(questions, progress) {
  const byBox = { 0: [], 1: [], 2: [], 3: [] };
  for (const q of questions) byBox[boxOf(progress, q.id)].push(q.id);
  const due = new Set(byBox[1]);
  for (const id of byBox[2]) if (everyAnsweredSince(progress, id, byBox[1])) due.add(id);
  for (const id of byBox[3]) if (everyAnsweredSince(progress, id, [...byBox[1], ...byBox[2]])) due.add(id);
  return due;
}

export function pickNext(questions, progress, currentId = null, rng = Math.random) {
  if (!questions || questions.length === 0) return null;
  const pool = questions.length > 1 ? questions.filter((q) => q.id !== currentId) : questions;

  const byBox = { 0: [], 1: [], 2: [], 3: [] };
  for (const q of pool) byBox[boxOf(progress, q.id)].push(q);
  // "Answered since" is judged against the whole set, including the current question.
  const allBox1 = questions.filter((q) => boxOf(progress, q.id) === 1).map((q) => q.id);
  const allBox2 = questions.filter((q) => boxOf(progress, q.id) === 2).map((q) => q.id);

  const dueBox2 = byBox[2].filter((q) => everyAnsweredSince(progress, q.id, allBox1));
  const dueBox3 = byBox[3].filter((q) => everyAnsweredSince(progress, q.id, [...allBox1, ...allBox2]));

  const steps = [byBox[0], dueBox2, byBox[1], dueBox3, byBox[2], byBox[3]];
  for (const cands of steps) {
    if (cands.length > 0) return pickRandom(cands, rng);
  }
  return pool[0];
}

function pickRandom(list, rng) {
  const r = Number(rng());
  const i = Number.isFinite(r) ? Math.floor(Math.min(Math.max(r, 0), 0.999999) * list.length) : 0;
  return list[i];
}

// ── Summaries for the screen ─────────────────────────────────────────────────

export function progressSummary(questions, progress) {
  let answered = 0;
  let unseen = 0;
  for (const q of questions) {
    const r = progress?.[q.id];
    if (!r || boxOf(progress, q.id) === 0) unseen += 1;
    answered += r?.attempts ?? 0;
  }
  return { answered, unseen, due: dueQuestions(questions, progress).size };
}

export function regionOf(q) {
  return q.type === "map" ? q.answer : q.region;
}

// Per region: attempts and accuracy, weakest first. Regions with fewer than two
// attempts are left out because one answer says nothing yet.
export function weakAreas(questions, progress, regions = {}, minAttempts = 2) {
  const totals = {};
  for (const q of questions) {
    const r = progress?.[q.id];
    if (!r || !r.attempts) continue;
    const key = regionOf(q);
    if (!key) continue;
    const t = totals[key] ?? (totals[key] = { key, name: regions[key]?.name ?? key, attempts: 0, correct: 0 });
    t.attempts += r.attempts;
    t.correct += r.correct ?? 0;
  }
  return Object.values(totals)
    .filter((t) => t.attempts >= minAttempts)
    .map((t) => ({ ...t, accuracy: t.correct / t.attempts }))
    .sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts || a.name.localeCompare(b.name));
}
