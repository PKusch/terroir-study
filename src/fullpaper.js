// ─── Full theory paper ───────────────────────────────────────────────────────
// Pure logic, no React, so node can test it.
//
// The WSET Level 3 theory paper takes two hours: 50 multiple-choice questions,
// then four written questions of 25 marks each. Each part needs 55% on its
// own to pass. Study guides describe the written questions as two on still
// wines, a third that adds service, and a fourth on sparkling and fortified
// wine with service; WSET's sample paper follows that pattern. This builds one
// such paper from the app's own questions and notes.
import { buildExam, marksToPass, FULL_LENGTH } from "./mockexam.js";
import { buildFull, fullChoices, fullRegions, TOTAL } from "./fullwritten.js";
import { countryOf } from "./data/projections.js";
import { shuffled } from "./random.js";

export const PAPER_SECONDS = 2 * 60 * 60;
export const WRITTEN_QUESTIONS = 4;
export const WRITTEN_TOTAL = WRITTEN_QUESTIONS * TOTAL;

// Regions whose story is sparkling or fortified wine, for question 4.
export const SPARKLING_FORTIFIED = ["champagne", "cava", "franciacorta", "douro", "sherry", "madeira"];

function pick(list, rng) {
  const r = Number(rng());
  const i = Number.isFinite(r) ? Math.floor(Math.min(Math.max(r, 0), 0.999999) * list.length) : 0;
  return list[i];
}

// Four written questions: three still-wine regions from different countries
// where possible, then one sparkling or fortified region.
export function pickWritten(rng = Math.random) {
  const ready = fullRegions();
  const still = shuffled(ready.filter((k) => !SPARKLING_FORTIFIED.includes(k)), rng);
  const chosen = [];
  const countries = new Set();
  for (const k of still) {
    if (chosen.length === 3) break;
    if (countries.has(countryOf(k))) continue;
    chosen.push(k);
    countries.add(countryOf(k));
  }
  for (const k of still) if (chosen.length < 3 && !chosen.includes(k)) chosen.push(k);
  const last = pick(SPARKLING_FORTIFIED.filter((k) => ready.includes(k)), rng);
  return [...chosen, last].map((k) => buildFull(k, pick(fullChoices(k), rng)));
}

export function buildFullPaper(questions, rng = Math.random) {
  const mcq = buildExam(questions, { length: FULL_LENGTH, rng });
  return { mcq, written: pickWritten(rng), seconds: PAPER_SECONDS };
}

// Both parts are judged on their own: 28 of 50, and 55 of 100.
export function judgePaper({ mcqCorrect, mcqTotal = FULL_LENGTH, writtenGot }) {
  const mcqNeed = marksToPass(mcqTotal);
  const writtenNeed = marksToPass(WRITTEN_TOTAL);
  const mcqPass = mcqCorrect >= mcqNeed;
  const writtenPass = writtenGot >= writtenNeed;
  return {
    mcq: { got: mcqCorrect, total: mcqTotal, need: mcqNeed, pass: mcqPass },
    written: { got: writtenGot, total: WRITTEN_TOTAL, need: writtenNeed, pass: writtenPass },
    passed: mcqPass && writtenPass
  };
}
