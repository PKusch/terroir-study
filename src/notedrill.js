// ─── Spot the errors: tasting-note drill ────────────────────────────────────
// Pure logic, no React, so node can test it.
//
// WSET's blog "How to ace the WSET Level 3 Award in Wines tasting exam" lists
// the wording mistakes that lose marks in the tasting paper. This builds a
// written tasting note for a named grape, breaks two or three of its lines with
// those mistakes, and marks which lines the learner flagged. It tests the
// wording rules, not whether the description fits the wine.
//
// Randomness is injected: `rng` returns a number in [0, 1).

// Each rule, in plain words, from WSET's own list of common errors.
export const RULES = {
  colourWord: {
    title: "Use the tasting grid's words",
    why: "WSET's example: 'lemon' earns the colour mark, 'yellow' does not."
  },
  pronounced: {
    title: "Use the tasting grid's words",
    why: "WSET's example: 'pronounced intensity' earns the mark, 'high intensity' does not."
  },
  range: {
    title: "Pick one answer, not a range",
    why: "'Medium(+) to high acidity' earns nothing, even if the wine fits the range. Choose one."
  },
  readiness: {
    title: "Finish the readiness answer",
    why: "'Drink now' alone earns nothing. Add whether it has potential for ageing or is not suitable for ageing."
  },
  vague: {
    title: "Be specific",
    why: "Vague words lose marks: 'raspberry', not 'berries'; 'black pepper', not 'spice'."
  },
  fewAromas: {
    title: "Give at least five aromas",
    why: "There are five marks for aromas, so write at least five specific descriptors."
  },
  sameAsNose: {
    title: "Write the flavours out",
    why: "'Same as nose' earns no marks. Write at least three specific flavours."
  },
  blank: {
    title: "Comment on every point",
    why: "Every heading of the grid needs an answer, such as development on the nose and sweetness on the palate."
  },
  threeLevel: {
    title: "No (+) or (−) here",
    why: "Alcohol and colour intensity use a three-level scale (low/pale, medium, high/deep), so medium(+) or medium(−) is wrong."
  }
};

const BODY = { low: "light", medium: "medium", high: "full" };
const ACID = { low: "low", medium: "medium", high: "high" };

function pick(list, rng) {
  const r = Number(rng());
  const i = Number.isFinite(r) ? Math.floor(Math.min(Math.max(r, 0), 0.999999) * list.length) : 0;
  return list[i];
}

function shuffle(list, rng) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const r = Number(rng());
    const j = Number.isFinite(r) ? Math.floor(Math.min(Math.max(r, 0), 0.999999) * (i + 1)) : 0;
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Grapes with at least five aromas, so a correct aroma line can be written.
export function drillGrapes(grapes) {
  return Object.entries(grapes)
    .filter(([, g]) => (g.aromas ?? []).length >= 5 && (g.colour === "red" || g.colour === "white"))
    .map(([slug, g]) => ({ slug, ...g }));
}

// The correct note: every line uses the grid's words and one answer.
export function correctNote(g) {
  const red = g.colour === "red";
  const lines = [
    { id: "app-intensity", section: "Appearance", label: "Intensity", text: red ? "deep" : "medium" },
    { id: "app-colour", section: "Appearance", label: "Colour", text: red ? "ruby" : "lemon" },
    { id: "nose-condition", section: "Nose", label: "Condition", text: "clean" },
    { id: "nose-intensity", section: "Nose", label: "Intensity", text: "medium(+)" },
    { id: "nose-aromas", section: "Nose", label: "Aroma characteristics", text: g.aromas.slice(0, 5).join(", ") },
    { id: "nose-development", section: "Nose", label: "Development", text: "youthful" },
    { id: "pal-sweetness", section: "Palate", label: "Sweetness", text: "dry" },
    { id: "pal-acidity", section: "Palate", label: "Acidity", text: ACID[g.acidity] ?? "medium" }
  ];
  if (red) lines.push({ id: "pal-tannin", section: "Palate", label: "Tannin", text: ACID[g.tannin] ?? "medium" });
  lines.push(
    { id: "pal-alcohol", section: "Palate", label: "Alcohol", text: "medium" },
    { id: "pal-body", section: "Palate", label: "Body", text: BODY[g.body] ?? "medium" },
    { id: "pal-flavour-intensity", section: "Palate", label: "Flavour intensity", text: "medium(+)" },
    { id: "pal-flavours", section: "Palate", label: "Flavour characteristics", text: g.aromas.slice(0, 3).join(", ") },
    { id: "pal-finish", section: "Palate", label: "Finish", text: "medium(+)" },
    { id: "con-quality", section: "Conclusions", label: "Quality", text: "good" },
    { id: "con-readiness", section: "Conclusions", label: "Readiness for drinking", text: "can drink now, but has potential for ageing" }
  );
  return lines;
}

// Each way of breaking a line: which line, which rule, and the broken text.
// `fits` says whether it can apply to this grape.
export const BREAKS = [
  { rule: "colourWord", line: "app-colour", fits: (g) => g.colour === "white", text: () => "yellow" },
  { rule: "threeLevel", line: "app-intensity", fits: () => true, text: () => "medium(−)" },
  { rule: "pronounced", line: "nose-intensity", fits: () => true, text: () => "high" },
  { rule: "fewAromas", line: "nose-aromas", fits: () => true, text: (g) => g.aromas.slice(0, 3).join(", ") },
  { rule: "vague", line: "nose-aromas", fits: () => true, text: (g) => [...g.aromas.slice(0, 4), g.colour === "red" ? "berries" : "spice"].join(", ") },
  { rule: "blank", line: "nose-development", fits: () => true, text: () => "" },
  { rule: "blank", line: "pal-sweetness", fits: () => true, text: () => "" },
  { rule: "range", line: "pal-acidity", fits: () => true, text: () => "medium(+) to high" },
  { rule: "threeLevel", line: "pal-alcohol", fits: () => true, text: () => "medium(+)" },
  { rule: "sameAsNose", line: "pal-flavours", fits: () => true, text: () => "same as nose" },
  { rule: "readiness", line: "con-readiness", fits: () => true, text: () => "drink now" }
];

// A note with `count` broken lines (two or three by default), never two
// breaks on the same line.
export function buildNote(grapes, rng = Math.random, count = null) {
  const pool = drillGrapes(grapes);
  if (!pool.length) return null;
  const g = pick(pool, rng);
  const n = count ?? (rng() < 0.5 ? 2 : 3);
  const used = new Set();
  const chosen = [];
  for (const b of shuffle(BREAKS.filter((b) => b.fits(g)), rng)) {
    if (chosen.length >= n) break;
    if (used.has(b.line)) continue;
    used.add(b.line);
    chosen.push(b);
  }
  const lines = correctNote(g).map((line) => {
    const b = chosen.find((c) => c.line === line.id);
    return b ? { ...line, text: b.text(g), error: b.rule } : { ...line, error: null };
  });
  return { grape: g.name, colour: g.colour, lines };
}

// Mark the learner's flags: each line is caught (broken and flagged), missed
// (broken, not flagged), wrongFlag (fine but flagged) or fine.
export function markNote(note, flagged) {
  const set = new Set(flagged);
  const lines = note.lines.map((l) => {
    const f = set.has(l.id);
    const status = l.error ? (f ? "caught" : "missed") : f ? "wrongFlag" : "fine";
    return { ...l, status };
  });
  const errors = lines.filter((l) => l.error).length;
  const caught = lines.filter((l) => l.status === "caught").length;
  const wrongFlags = lines.filter((l) => l.status === "wrongFlag").length;
  return { lines, errors, caught, wrongFlags, allRight: caught === errors && wrongFlags === 0 };
}
