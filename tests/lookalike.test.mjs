import test from "node:test";
import assert from "node:assert/strict";
import { GRAPES } from "../src/data/grapes.js";
import { buildPairQuestion, compare, drillGrapes, lookAlike, ownAromas, sharedAromas, structureGap } from "../src/lookalike.js";

test("a good set of common grapes have a look-alike", () => {
  const pool = drillGrapes();
  assert.ok(pool.length >= 20, `only ${pool.length}`);
  for (const s of ["merlot", "pinotNoir", "syrah", "riesling", "chardonnay"].filter((k) => GRAPES[k])) assert.ok(pool.includes(s), s);
});

test("a look-alike is the same colour, close in structure, with something shared and something different", () => {
  for (const s of drillGrapes()) {
    const o = lookAlike(s);
    assert.equal(GRAPES[o].colour, GRAPES[s].colour, s);
    assert.ok(structureGap(s, o) <= 1, s);
    assert.ok(sharedAromas(s, o).length >= 1, s);
    assert.ok(ownAromas(s, o).length >= 2 && ownAromas(o, s).length >= 2, s);
  }
});

test("a question's clue describes the right grape and can be answered", () => {
  for (let k = 0; k < 300; k++) {
    const q = buildPairQuestion(Math.random);
    const other = q.options[1 - q.answer];
    assert.equal(q.options[q.answer], q.mystery);
    assert.equal(new Set(q.options).size, 2);
    const g = GRAPES[q.mystery];
    for (const a of q.clue.aromas) assert.ok(g.aromas.includes(a), `${a} is not a ${g.name} aroma`);
    const telling = q.clue.aromas.filter((a) => !GRAPES[other].aromas.includes(a));
    assert.ok(telling.length >= 2, "at least two aromas point to the right grape");
    assert.equal(q.clue.body, g.body);
    assert.equal(q.clue.tannin, g.colour === "red" ? g.tannin : null);
  }
});

test("compare lists structure rows and splits the aromas three ways", () => {
  const s = drillGrapes()[0];
  const o = lookAlike(s);
  const c = compare(s, o);
  assert.ok(c.rows.length >= 2);
  assert.deepEqual([...c.shared, ...c.onlyA].sort(), [...GRAPES[s].aromas].sort());
  assert.deepEqual([...c.shared, ...c.onlyB].sort(), [...GRAPES[o].aromas].sort());
});
