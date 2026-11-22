// ─── Study plan ──────────────────────────────────────────────────────────────
// Pure logic, no React. Storage is touched only through the load and save
// functions, which never throw.
//
// Two small things kept in this browser: the days on which you answered a quiz
// question (for a streak), and the date of your exam (for a countdown and a
// daily target). The daily target leaves the last week before the exam free
// for mock papers and revision of what you got wrong.
export const DAYS_KEY = "terroir-study-days-v1";
export const EXAM_KEY = "terroir-exam-date-v1";
export const MAX_DAYS = 400;
export const REVISION_DAYS = 7;

const pad = (n) => String(n).padStart(2, "0");

// A local calendar day as "YYYY-MM-DD".
export function dayKey(ts = Date.now()) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const isDay = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(`${s}T12:00:00`));

// Midday on a day, so a clock change never moves it to the next or last day.
const noon = (day) => new Date(`${day}T12:00:00`).getTime();
const shift = (day, n) => dayKey(noon(day) + n * 86400000);

// The days list with one more day in it: sorted, no repeats, the newest kept.
export function addStudyDay(days, ts = Date.now()) {
  const all = new Set((Array.isArray(days) ? days : []).filter(isDay));
  all.add(dayKey(ts));
  return [...all].sort().slice(-MAX_DAYS);
}

// Days in a row ending today, or ending yesterday if today is not done yet, so
// a streak is not shown as lost first thing in the morning.
export function streak(days, now = Date.now()) {
  const set = new Set((Array.isArray(days) ? days : []).filter(isDay));
  const today = dayKey(now);
  let day = set.has(today) ? today : shift(today, -1);
  let n = 0;
  while (set.has(day)) {
    n++;
    day = shift(day, -1);
  }
  return { days: n, today: set.has(today) };
}

// How many of the last seven days, today included, had any study.
export function lastWeek(days, now = Date.now()) {
  const set = new Set((Array.isArray(days) ? days : []).filter(isDay));
  const today = dayKey(now);
  let n = 0;
  for (let i = 0; i < 7; i++) if (set.has(shift(today, -i))) n++;
  return n;
}

// Whole days from today to the exam (0 on the day itself), or null.
export function daysUntil(examDay, now = Date.now()) {
  if (!isDay(examDay)) return null;
  return Math.round((noon(examDay) - noon(dayKey(now))) / 86400000);
}

// A plain daily target: new questions a day to meet every question once before
// the last week, which is left for mock papers and what you got wrong.
export function dailyTarget(unseen, daysLeft) {
  if (daysLeft === null || daysLeft < 0) return { phase: "none" };
  if (daysLeft === 0) return { phase: "today" };
  if (daysLeft <= REVISION_DAYS) return { phase: "revise", daysLeft };
  if (unseen <= 0) return { phase: "allSeen", daysLeft };
  const studyDays = daysLeft - REVISION_DAYS;
  return { phase: "learn", daysLeft, studyDays, perDay: Math.ceil(unseen / studyDays) };
}

// ── Storage ──────────────────────────────────────────────────────────────────
function storage() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

export function loadDays() {
  try {
    const raw = storage()?.getItem(DAYS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? [...new Set(list.filter(isDay))].sort().slice(-MAX_DAYS) : [];
  } catch {
    return [];
  }
}

export function saveDays(days) {
  try {
    storage()?.setItem(DAYS_KEY, JSON.stringify(days));
    return true;
  } catch {
    return false;
  }
}

// Record that you studied today; returns the new list.
export function markStudied(now = Date.now()) {
  const next = addStudyDay(loadDays(), now);
  saveDays(next);
  return next;
}

export function loadExamDate() {
  try {
    const raw = storage()?.getItem(EXAM_KEY);
    return isDay(raw) ? raw : null;
  } catch {
    return null;
  }
}

export function saveExamDate(day) {
  try {
    const s = storage();
    if (!s) return false;
    if (isDay(day)) s.setItem(EXAM_KEY, day);
    else s.removeItem(EXAM_KEY);
    return true;
  } catch {
    return false;
  }
}
