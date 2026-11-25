// ─── Weak spots on the map ───────────────────────────────────────────────────
// Pure logic, no React, so node can test it.
//
// Each region is shaded by how often you answer its quiz questions right, from
// the record the quiz already keeps in this browser. A region needs at least
// two answers before it is judged, since one answer says nothing yet.
import { regionOf } from "./progress.js";

export const MIN_ANSWERS = 2;
export const BANDS = [
  { id: "weak", label: "Under 50% right", colour: "#C47B7B", below: 0.5 },
  { id: "middling", label: "50 to 74% right", colour: "#C4A962", below: 0.75 },
  { id: "strong", label: "75% or more right", colour: "#7BC47B", below: Infinity }
];
export const UNSEEN = { id: "unseen", label: "Fewer than two answers yet", colour: "#4A4540" };

// Answers and right answers per region, from the quiz record.
export function regionTotals(questions, progress) {
  const totals = {};
  for (const q of questions) {
    const r = progress?.[q.id];
    if (!r || !r.attempts) continue;
    const key = regionOf(q);
    if (!key) continue;
    const t = totals[key] ?? (totals[key] = { attempts: 0, correct: 0 });
    t.attempts += r.attempts;
    t.correct += r.correct ?? 0;
  }
  return totals;
}

export function bandFor(total) {
  if (!total || total.attempts < MIN_ANSWERS) return UNSEEN;
  const share = total.correct / total.attempts;
  return BANDS.find((b) => share < b.below);
}

// The colour of every region, and how many regions fall in each band.
export function buildHeat(questions, progress, regionKeys) {
  const totals = regionTotals(questions, progress);
  const colours = {};
  const counts = { weak: 0, middling: 0, strong: 0, unseen: 0 };
  for (const key of regionKeys) {
    const band = bandFor(totals[key]);
    colours[key] = band.colour;
    counts[band.id]++;
  }
  return { colours, counts, totals };
}
