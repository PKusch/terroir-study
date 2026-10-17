// ─── Mock exam ───────────────────────────────────────────────────────────────
// Pure logic, no React and no DOM, so node can test it.
//
// A mock exam is a fixed set of the multiple-choice questions, answered against
// a clock with no feedback until the end, like the real paper. It does not touch
// quiz progress: a mock is a test of what you know now, not a way to learn it.
//
// Modelled on the multiple-choice part of the WSET Level 3 exam: 50 questions in
// 60 minutes, and a pass mark of 55%. The questions here are this app's own.
import { poolFor, countryOfQuestion } from "./progress.js";

export const PASS_MARK = 0.55;
export const FULL_LENGTH = 50;
export const SECONDS_PER_QUESTION = 72; // 50 questions in 60 minutes
export const EXAM_SIZES = [10, 25, FULL_LENGTH];

// Map questions are answered by clicking the map, so they are not multiple choice.
export const multipleChoice = (questions) => questions.filter((q) => Array.isArray(q.options));

// A copy of the list in random order (Fisher-Yates). Never changes the original.
function shuffled(list, rng) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

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
export function buildExam(questions, { length = FULL_LENGTH, country = "All", rng = Math.random } = {}) {
  const pool = poolFor(multipleChoice(questions), country);
  const entries = shuffled(pool, rng)
    .slice(0, Math.max(0, length))
    .map((q) => ({ id: q.id, order: shuffled(q.options.map((_, i) => i), rng) }));
  return { entries, seconds: entries.length * SECONDS_PER_QUESTION };
}

// The options of one question in the order the exam shows them.
export function shownOptions(entry, question) {
  return entry.order.map((i) => question.options[i]);
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
