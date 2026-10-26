// ─── Mock exam ───────────────────────────────────────────────────────────────
// Pure logic, no React and no DOM, so node can test it.
//
// A mock exam is a fixed set of the multiple-choice questions, answered against
// a clock with no feedback until the end, like the real paper. It does not touch
// quiz progress: a mock is a test of what you know now, not a way to learn it.
//
// Modelled on the multiple-choice part of the WSET Level 3 theory exam, as WSET
// publishes it (wsetglobal.com, Level 3 Award in Wines): 50 questions, closed
// book, one mark each with nothing taken off for a wrong answer, and a pass mark
// of 55% in each part. WSET gives two hours for the whole written paper (these 50
// questions plus four short written answers) and sets no time for the
// multiple-choice part alone, so the clock below, 72 seconds a question, is this
// app's own choice. The questions are this app's own too.
import { poolFor, countryOfQuestion } from "./progress.js";
import { shuffled } from "./random.js";

export const PASS_MARK = 0.55;
export const FULL_LENGTH = 50;
export const SECONDS_PER_QUESTION = 72; // this app's own limit: 50 questions in 60 minutes
export const EXAM_SIZES = [10, 25, FULL_LENGTH];

// Map questions are answered by clicking the map, so they are not multiple choice.
export const multipleChoice = (questions) => questions.filter((q) => Array.isArray(q.options));

// How many multiple-choice questions there are to draw from for this country.
export function examPoolSize(questions, country = "All") {
  return poolFor(multipleChoice(questions), country).length;
}

// The exam: a random sample of the multiple-choice questions (all of them if
// there are fewer than `length`), each with its options in a random order so a
// question cannot be learned by where its answer sits.
//   entries[i] = { id, order }, where order[k] is the original index of the
//   option shown in position k.
//   seconds = the time allowed.
export function buildExam(questions, { length = FULL_LENGTH, country = "All", rng = Math.random, only = null } = {}) {
  let pool = poolFor(multipleChoice(questions), country);
  if (only) {
    const keep = new Set(only);
    pool = pool.filter((q) => keep.has(q.id));
  }
  const entries = shuffled(pool, rng)
    .slice(0, Math.max(0, length))
    .map((q) => ({ id: q.id, order: shuffled(q.options.map((_, i) => i), rng) }));
  return { entries, seconds: entries.length * SECONDS_PER_QUESTION };
}

// The options of one question in the order the exam shows them.
export function shownOptions(entry, question) {
  return entry.order.map((i) => question.options[i]);
}

// ── Kinds of paper ───────────────────────────────────────────────────────────
// A random mix is different every time. A numbered paper is the same every time
// (for the current question bank), so a score on Paper 1 can be compared with
// last month's. "Missed before" and "Not yet seen" are built from quiz progress.
export const PAPERS = [
  { id: "random", label: "Random mix", note: "A new draw every time" },
  { id: "paper1", label: "Paper 1", note: "The same questions every time", index: 0 },
  { id: "paper2", label: "Paper 2", note: "The same questions every time", index: 1 },
  { id: "paper3", label: "Paper 3", note: "The questions left over", index: 2 },
  { id: "paper4", label: "Paper 4", note: "More, as the bank grows", index: 3 },
  { id: "paper5", label: "Paper 5", note: "More, as the bank grows", index: 4 },
  { id: "paper6", label: "Paper 6", note: "More, as the bank grows", index: 5 },
  { id: "paper7", label: "Paper 7", note: "More, as the bank grows", index: 6 },
  { id: "paper8", label: "Paper 8", note: "More, as the bank grows", index: 7 },
  { id: "paper9", label: "Paper 9", note: "More, as the bank grows", index: 8 },
  { id: "missed", label: "Missed before", note: "Questions you often get wrong in the quiz", history: "missed" },
  { id: "unseen", label: "Not yet seen", note: "Questions you have not met in the quiz", history: "unseen" }
];
export const isFixedPaper = (id) => PAPERS.find((p) => p.id === id)?.index !== undefined;

// A small seeded random generator (mulberry32): the same seed gives the same run.
export function seededRng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PAPER_SEED = 20261018;

// Papers 1 and 2 are frozen: these are the question ids they were first cut with.
// They never change, so a score on Paper 1 stays comparable however many
// questions are added to the bank later. (A question that is later removed just
// drops out of its paper.) Paper 3 is everything else, so new questions land
// there. Papers never share a question.
const FROZEN_PAPERS = [
  [
    "at-06", "de-04", "fr-13", "es-05", "fr-56", "it-18", "es-16", "pt-08", "nw-36", "it-21",
    "fr-57", "fr-53", "fr-12", "it-15", "fr-50", "de-06", "es-17", "it-24", "fr-02", "it-12",
    "fr-30", "it-22", "nw-12", "es-12", "nw-29", "pt-04", "nw-05", "it-05", "fr-36", "fr-37",
    "it-17", "it-16", "nw-30", "fr-45", "pt-05", "es-21", "fr-17", "hu-08", "es-22", "fr-14",
    "fr-49", "es-10", "fr-47", "de-05", "es-09", "it-03", "hu-07", "fr-27", "fr-33", "de-15"
  ],
  [
    "gr-05", "nw-06", "es-15", "nw-22", "fr-10", "nw-16", "fr-46", "gr-04", "nw-23", "nw-15",
    "fr-08", "hu-05", "fr-04", "es-24", "pt-07", "nw-11", "nw-27", "nw-10", "fr-54", "fr-26",
    "de-09", "it-04", "it-11", "de-12", "fr-28", "gr-08", "nw-21", "nw-09", "hu-06", "fr-20",
    "nw-18", "de-17", "es-18", "fr-29", "at-07", "nw-24", "nw-34", "gr-07", "fr-48", "at-05",
    "fr-16", "de-18", "fr-58", "nw-28", "es-23", "nw-03", "nw-17", "es-06", "fr-22", "fr-44"
  ]
];

// The question ids of a numbered paper (index 0 is Paper 1). Paper 3 is the
// multiple-choice questions on neither frozen paper, in a fixed shuffled order.
export function fixedPaperIds(questions, index) {
  const have = new Set(multipleChoice(questions).map((q) => q.id));
  if (index < FROZEN_PAPERS.length) return FROZEN_PAPERS[index].filter((id) => have.has(id));
  const frozen = new Set(FROZEN_PAPERS.flat());
  const rest = [...have].filter((id) => !frozen.has(id)).sort();
  const n = index - FROZEN_PAPERS.length;
  return shuffled(rest, seededRng(PAPER_SEED)).slice(n * FULL_LENGTH, (n + 1) * FULL_LENGTH);
}

// Questions picked out by what the quiz has recorded: ones you often get wrong
// (answered at least once, under 70% right) or ones with no answer on record.
export function historyIds(questions, progress, kind) {
  return multipleChoice(questions)
    .filter((q) => {
      const r = progress?.[q.id];
      if (kind === "unseen") return !r || r.attempts === 0;
      return Boolean(r) && r.attempts > 0 && r.correct / r.attempts < 0.7;
    })
    .map((q) => q.id);
}

// The ids a kind of paper may draw from, or null for "any".
function idsFor(questions, paperId, progress) {
  const paper = PAPERS.find((p) => p.id === paperId);
  if (!paper || paper.id === "random") return null;
  if (paper.index !== undefined) return fixedPaperIds(questions, paper.index);
  return historyIds(questions, progress, paper.history);
}

// How many questions a kind of paper can offer (the country filter applies to
// everything except a numbered paper).
export function paperPoolSize(questions, paperId, { progress = {}, country = "All" } = {}) {
  const only = idsFor(questions, paperId, progress);
  const filter = isFixedPaper(paperId) ? "All" : country;
  return only ? buildExam(questions, { length: 1000, country: filter, only }).entries.length : examPoolSize(questions, filter);
}

// The exam for a kind of paper. A numbered paper is fully fixed: its questions,
// their order and the order of their options.
export function buildPaper(questions, paperId, { progress = {}, length = FULL_LENGTH, country = "All", rng = Math.random } = {}) {
  const only = idsFor(questions, paperId, progress);
  if (isFixedPaper(paperId)) {
    const index = PAPERS.find((p) => p.id === paperId).index;
    return buildExam(questions, { length: FULL_LENGTH, only, rng: seededRng(PAPER_SEED + 1 + index) });
  }
  return buildExam(questions, { length, country, rng, only });
}

// Marks the exam. `answers[i]` is the position the student picked for question
// i (or null / missing if they left it). `questions` is the full question list.
export function scoreExam(exam, answers, questions) {
  const byId = new Map(questions.map((q) => [q.id, q]));
  const total = exam.entries.length;
  const countries = new Map();
  const missed = [];
  let correct = 0;
  let answered = 0;

  exam.entries.forEach((entry, i) => {
    const q = byId.get(entry.id);
    const country = countryOfQuestion(q);
    const row = countries.get(country) ?? { country, correct: 0, total: 0 };
    row.total++;
    countries.set(country, row);

    const picked = answers[i];
    const given = Number.isInteger(picked) && picked >= 0 && picked < entry.order.length;
    if (given) answered++;
    if (given && entry.order[picked] === q.answer) {
      correct++;
      row.correct++;
    } else {
      missed.push({
        id: q.id,
        country,
        question: q.question,
        yourAnswer: given ? q.options[entry.order[picked]] : null,
        correctAnswer: q.options[q.answer],
        explanation: q.explanation
      });
    }
  });

  const fraction = total === 0 ? 0 : correct / total;
  return {
    total,
    correct,
    answered,
    unanswered: total - answered,
    percent: Math.round(fraction * 1000) / 10,
    passed: total > 0 && fraction >= PASS_MARK,
    byCountry: [...countries.values()],
    missed
  };
}

// How many right answers a pass needs out of `total`.
export const marksToPass = (total) => Math.ceil(total * PASS_MARK - 1e-9);

// Seconds as "mm:ss" (minutes can pass 59: a full paper starts at 60:00).
export function formatClock(seconds) {
  const s = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
