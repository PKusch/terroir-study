// ─── Taste mode ──────────────────────────────────────────────────────────────
// Pure logic, no React and no DOM access, so node can test it.
//
// The app names a wine (a grape from a region it knows), the learner fills in
// its body, acidity, tannin and aromas, and the answer is marked against the
// grape profile in src/data/grapes.js. This is the exam's Systematic Approach
// to Tasting cut down to the fields this app has data for.
//
// Randomness is injected: every function that picks something takes an `rng`
// returning a number in [0, 1), so tests can pass a fixed sequence.

export const LEVELS = ["low", "medium", "high"];
export const AROMA_CHOICES = 8;
export const STORAGE_KEY = "terroir-taste-v1";

// ── Name resolution ──────────────────────────────────────────────────────────
// Region files write grapes the way labels do ("Malbec (Côt)", "Moscato
// Bianco"); profiles carry aliases. This mirrors grapeFor() in grapes.js but
// works on whichever `grapes` table is passed in, so tests can use a small one.

const normalise = (s) =>
  String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

function buildIndex(grapes) {
  const idx = new Map();
  for (const [slug, g] of Object.entries(grapes)) {
    idx.set(normalise(g.name), slug);
    for (const a of g.aliases ?? []) idx.set(normalise(a), slug);
  }
  return idx;
}

function slugIn(index, nameAsWritten) {
  if (!nameAsWritten) return null;
  const whole = normalise(nameAsWritten);
  if (index.has(whole)) return index.get(whole);
  const m = whole.match(/^([^(]+)\(([^)]+)\)/);
  if (m) {
    const outside = m[1].trim();
    const inside = m[2].trim();
    if (index.has(outside)) return index.get(outside);
    if (index.has(inside)) return index.get(inside);
  }
  return null;
}

// ── Picking ──────────────────────────────────────────────────────────────────

function pickRandom(list, rng) {
  const r = Number(rng());
  const i = Number.isFinite(r) ? Math.floor(Math.min(Math.max(r, 0), 0.999999) * list.length) : 0;
  return list[i];
}

// Fisher–Yates with the injected rng; returns a new array.
function shuffle(list, rng) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const r = Number(rng());
    const j = Number.isFinite(r) ? Math.floor(Math.min(Math.max(r, 0), 0.999999) * (i + 1)) : 0;
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// Every (region, grape name, profile) triple the region files offer, keeping
// only grapes that have a profile. Order is stable: region file order, reds
// then whites.
function candidatesFor(regionKey, region, grapes, index) {
  const out = [];
  for (const colour of ["red", "white"]) {
    for (const name of region?.keyGrapes?.[colour] ?? []) {
      const slug = slugIn(index, name);
      if (!slug) continue;
      out.push({ regionKey, grapeName: name, slug, profile: { slug, ...grapes[slug] } });
    }
  }
  return out;
}

// Aroma words from other profiles of the same colour that are not in `correct`.
// Unique, in profile order, so the rng alone decides the final shuffle.
function distractorPool(grapes, slug, colour, correct) {
  const taken = new Set(correct.map(normalise));
  const pool = [];
  for (const [otherSlug, g] of Object.entries(grapes)) {
    if (otherSlug === slug || g.colour !== colour) continue;
    for (const a of g.aromas ?? []) {
      const key = normalise(a);
      if (taken.has(key)) continue;
      taken.add(key);
      pool.push(a);
    }
  }
  return pool;
}

// ── Building an exercise ─────────────────────────────────────────────────────
// Picks a region (the preferred one when it has a grape with a profile, else a
// random one) and one of that region's grapes that has a profile, then lays
// out 8 aroma words: every aroma of the grape plus distractors from other
// grapes of the same colour. Returns null only when no region has any grape
// with a profile.

export function buildExercise(regions, grapes, rng = Math.random, preferredRegionKey = null) {
  const index = buildIndex(grapes ?? {});
  const byRegion = Object.entries(regions ?? {})
    .map(([key, r]) => ({ key, region: r, candidates: candidatesFor(key, r, grapes, index) }))
    .filter((e) => e.candidates.length > 0);
  if (byRegion.length === 0) return null;

  const preferred = preferredRegionKey ? byRegion.find((e) => e.key === preferredRegionKey) : null;
  const chosen = preferred ?? pickRandom(byRegion, rng);
  const pick = pickRandom(chosen.candidates, rng);
  const { profile } = pick;

  const correct = [...profile.aromas];
  const needed = Math.max(0, AROMA_CHOICES - correct.length);
  const distractors = shuffle(distractorPool(grapes, pick.slug, profile.colour, correct), rng).slice(0, needed);
  const aromaChoices = shuffle([...correct, ...distractors], rng);

  const answers = { body: profile.body, acidity: profile.acidity };
  if (profile.colour === "red") answers.tannin = profile.tannin;

  return {
    regionKey: chosen.key,
    regionName: chosen.region.name ?? chosen.key,
    typicalStyle: chosen.region.typicalStyle ?? "",
    grapeName: pick.grapeName,
    profile,
    colour: profile.colour,
    answers,
    aromaChoices
  };
}

// The structure fields this exercise asks for, in screen order.
export function structureFields(exercise) {
  return Object.keys(exercise?.answers ?? {});
}

// ── Marking ──────────────────────────────────────────────────────────────────
// `given` = { body, acidity, tannin?, aromas: [] }. Each structure field is
// right or wrong. The aromas count as one point when at least half of the
// grape's aromas were picked and no more than one wrong word was picked.
// Score is out of the number of structure fields plus one.

export function markExercise(exercise, given = {}) {
  const fields = {};
  let score = 0;
  for (const field of structureFields(exercise)) {
    const expected = exercise.answers[field];
    const got = given?.[field] ?? null;
    const right = got === expected;
    fields[field] = { given: got, expected, right };
    if (right) score += 1;
  }

  const correctSet = new Set(exercise.profile.aromas.map(normalise));
  const picked = [...new Set((given?.aromas ?? []).map(normalise))];
  const correctPicked = picked.filter((a) => correctSet.has(a)).length;
  const wrongPicked = picked.length - correctPicked;
  const missed = exercise.profile.aromas.length - correctPicked;
  const aromasRight = correctPicked * 2 >= exercise.profile.aromas.length && wrongPicked <= 1;
  if (aromasRight) score += 1;

  const outOf = Object.keys(fields).length + 1;
  return {
    fields,
    aromas: { correctPicked, wrongPicked, missed, right: aromasRight },
    score,
    outOf,
    allRight: score === outOf
  };
}

// ── Explaining ───────────────────────────────────────────────────────────────
// Two sentences. The first names the grape's structure and gives the first
// sentence of its profile notes (why it tastes like that). The second gives
// the region's typical style.

const firstSentence = (s) => {
  const t = String(s ?? "").trim();
  const m = t.match(/^.*?[.!?](?=\s|$)/);
  return m ? m[0] : t;
};

const sentence = (s) => {
  const t = String(s ?? "").trim();
  if (!t) return "";
  return /[.!?]$/.test(t) ? t : `${t}.`;
};

export function explain(exercise) {
  if (!exercise) return "";
  const { profile, grapeName, regionName, typicalStyle } = exercise;
  const structure = [`${profile.body} body`, `${profile.acidity} acidity`];
  if (profile.colour === "red") structure.push(`${profile.tannin} tannin`);
  const first = sentence(`${grapeName} (${structure.join(", ")}): ${firstSentence(profile.notes)}`);
  const second = typicalStyle
    ? sentence(`In ${regionName} the typical style is: ${typicalStyle}`)
    : sentence(`${regionName} is one of the regions that grows it`);
  return `${first} ${second}`.trim();
}

// ── Session results in localStorage ──────────────────────────────────────────
// Same guard as progress.js: storage may be missing or throw, and that is
// treated as "nothing saved" without ever throwing.

function storage() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

// Two running totals. Negative counts, or more wines fully right than wines
// tasted, cannot be true, so they are not trusted: the pair is reset, not patched.
export function cleanTasteResults(raw) {
  const ok = (n) => Number.isInteger(n) && n >= 0;
  const wines = ok(raw?.wines) ? raw.wines : 0;
  const fullyRight = ok(raw?.fullyRight) && raw.fullyRight <= wines ? raw.fullyRight : 0;
  return { wines, fullyRight };
}

export function loadTasteResults() {
  try {
    const s = storage();
    if (!s) return { wines: 0, fullyRight: 0 };
    const raw = s.getItem(STORAGE_KEY);
    if (!raw) return { wines: 0, fullyRight: 0 };
    return cleanTasteResults(JSON.parse(raw));
  } catch {
    return { wines: 0, fullyRight: 0 };
  }
}

export function saveTasteResults(results) {
  try {
    const s = storage();
    if (!s) return false;
    s.setItem(STORAGE_KEY, JSON.stringify(results));
    return true;
  } catch {
    return false;
  }
}

export function resetTasteResults() {
  try {
    const s = storage();
    if (s) s.removeItem(STORAGE_KEY);
  } catch {
    // nothing to clear
  }
  return { wines: 0, fullyRight: 0 };
}
