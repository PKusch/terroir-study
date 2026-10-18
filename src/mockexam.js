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

// The question ids of a numbered paper: the multiple-choice questions, in id
// order, shuffled with a fixed seed, then cut into papers of 50 (the last one
// holds whatever is left). Papers never share a question.
export function fixedPaperIds(questions, index, size = FULL_LENGTH) {
  const ids = multipleChoice(questions).map((q) => q.id).sort();
  return shuffled(ids, seededRng(PAPER_SEED)).slice(index * size, (index + 1) * size);
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
