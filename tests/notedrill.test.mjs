import test from "node:test";
import assert from "node:assert/strict";
import { RULES, BREAKS, buildNote, markNote, correctNote, drillGrapes } from "../src/notedrill.js";
import { GRAPES } from "../src/data/grapes.js";

// A fixed sequence of "random" numbers, so a note is the same every run.
const seq = (...xs) => { let i = 0; return () => xs[i++ % xs.length]; };

test("every break names a rule that has an explanation", () => {
  for (const b of BREAKS) assert.ok(RULES[b.rule]?.why, b.rule);
});

test("a correct note breaks none of WSET's wording rules", () => {
  for (const g of drillGrapes(GRAPES)) {
    for (const l of correctNote(g)) {
      assert.ok(l.text.trim(), `${g.name}: ${l.label} is blank`);
      assert.doesNotMatch(l.text, / to /, `${g.name}: ${l.label} is a range`);
      assert.doesNotMatch(l.text, /yellow|same as nose|^drink now$/i, `${g.name}: ${l.label}`);
      if (l.id === "nose-intensity") assert.notEqual(l.text, "high");
      if (l.id === "pal-alcohol" || l.id === "app-intensity") assert.doesNotMatch(l.text, /[+−-]\)/);
      if (l.id === "nose-aromas") assert.ok(l.text.split(", ").length >= 5, `${g.name}: fewer than five aromas`);
      if (l.id === "pal-flavours") assert.ok(l.text.split(", ").length >= 3, `${g.name}: fewer than three flavours`);
    }
  }
});

test("a note has two or three broken lines, never two on one line", () => {
  for (let k = 0; k < 200; k++) {
    const note = buildNote(GRAPES, Math.random);
    const broken = note.lines.filter((l) => l.error);
    assert.ok(broken.length === 2 || broken.length === 3, `${broken.length} errors`);
    assert.equal(new Set(note.lines.map((l) => l.id)).size, note.lines.length);
  }
});

test("'yellow' is only used to break a white wine's colour", () => {
  for (let k = 0; k < 300; k++) {
    const note = buildNote(GRAPES, Math.random);
    const colour = note.lines.find((l) => l.id === "app-colour");
    if (colour.text === "yellow") assert.equal(note.colour, "white");
  }
});

test("the same random numbers build the same note", () => {
  const a = buildNote(GRAPES, seq(0.1, 0.7, 0.3, 0.9, 0.5));
  const b = buildNote(GRAPES, seq(0.1, 0.7, 0.3, 0.9, 0.5));
  assert.deepEqual(a, b);
});

test("marking: caught, missed and wrong flags are counted", () => {
  const note = buildNote(GRAPES, seq(0.2, 0.9, 0.4, 0.6), 2);
  const broken = note.lines.filter((l) => l.error).map((l) => l.id);
  const fine = note.lines.find((l) => !l.error).id;
  const all = markNote(note, broken);
  assert.equal(all.caught, 2);
  assert.ok(all.allRight);
  const some = markNote(note, [broken[0], fine]);
  assert.equal(some.caught, 1);
  assert.equal(some.wrongFlags, 1);
  assert.equal(some.lines.find((l) => l.id === broken[1]).status, "missed");
  assert.ok(!some.allRight);
});
