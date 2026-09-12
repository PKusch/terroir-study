import { test } from "node:test";
import assert from "node:assert/strict";

import { GRAPES, grapeFor, regionsGrowing } from "../src/data/grapes.js";
import { REGIONS } from "../src/data/regions.js";

// The region files name grapes the way labels do ("Malbec (Côt)", "Moscato
// Bianco"); the profiles are keyed by slug and carry aliases. These checks make
// sure the two sides agree, so the Grapes tab never shows a grape with no profile.

const FIELDS = ["name", "aliases", "colour", "body", "acidity", "aromas", "notes"];
const LEVELS = ["low", "medium", "high"];

test("every grape named in every region resolves to a profile", () => {
  const misses = [];
  for (const [key, r] of Object.entries(REGIONS)) {
    for (const g of [...r.keyGrapes.red, ...r.keyGrapes.white]) {
      if (!grapeFor(g)) misses.push(`${key}: "${g}"`);
    }
  }
  assert.deepEqual(misses, [], `grapes with no profile (add one to src/data/grapes.js or an alias):\n  ${misses.join("\n  ")}`);
});

test("a red grape in a region is a red profile, and a white a white", () => {
  for (const [key, r] of Object.entries(REGIONS)) {
    for (const colour of ["red", "white"]) {
      for (const g of r.keyGrapes[colour]) {
        const p = grapeFor(g);
        if (p) assert.equal(p.colour, colour, `${key} lists "${g}" as ${colour} but its profile says ${p.colour}`);
      }
    }
  }
});

test("every profile has the required fields with allowed values, and nothing else", () => {
  for (const [slug, g] of Object.entries(GRAPES)) {
    assert.match(slug, /^[a-z][A-Za-z]*$/, `${slug}: slug should be a plain camelCase word`);
    const expected = g.colour === "red" ? [...FIELDS, "tannin"] : FIELDS;
    assert.deepEqual(Object.keys(g).sort(), [...expected].sort(), `${slug}: field set`);
    assert.ok(g.name.trim().length > 1, `${slug}: name`);
    assert.ok(Array.isArray(g.aliases), `${slug}: aliases must be an array`);
    assert.ok(["red", "white"].includes(g.colour), `${slug}: colour`);
    assert.ok(LEVELS.includes(g.body), `${slug}: body '${g.body}'`);
    assert.ok(LEVELS.includes(g.acidity), `${slug}: acidity '${g.acidity}'`);
    if (g.colour === "red") assert.ok(LEVELS.includes(g.tannin), `${slug}: tannin '${g.tannin}'`);
    assert.ok(Array.isArray(g.aromas) && g.aromas.length >= 4 && g.aromas.length <= 6, `${slug}: 4 to 6 aromas`);
    for (const a of g.aromas) assert.ok(typeof a === "string" && a.trim().length > 1, `${slug}: aroma '${a}'`);
    assert.ok(typeof g.notes === "string" && g.notes.trim().length > 20, `${slug}: notes`);
    assert.doesNotMatch(g.notes, /\d/, `${slug}: notes should carry no numbers`);
  }
});

test("names and aliases are unique across profiles", () => {
  const seen = new Map();
  for (const [slug, g] of Object.entries(GRAPES)) {
    for (const n of [g.name, ...g.aliases]) {
      const key = n.toLowerCase();
      assert.ok(!seen.has(key), `"${n}" is used by both ${seen.get(key)} and ${slug}`);
      seen.set(key, slug);
    }
  }
});

test("grapeFor matches exact names, aliases and bracketed names, ignoring case", () => {
  assert.equal(grapeFor("Pinot Noir").slug, "pinotNoir");
  assert.equal(grapeFor("pinot noir").slug, "pinotNoir");
  assert.equal(grapeFor("Spätburgunder").slug, "pinotNoir");
  assert.equal(grapeFor("Malbec (Côt)").slug, "malbec");
  assert.equal(grapeFor("Côt").slug, "malbec");
  assert.equal(grapeFor("Rolle (Vermentino)").slug, "vermentino");
  assert.equal(grapeFor("Moscato Bianco").slug, "muscat");
  assert.equal(grapeFor("Pinot Grigio").slug, "pinotGris");
  assert.equal(grapeFor("Tinto Fino").slug, "tempranillo");
  assert.equal(grapeFor("Mazuelo").slug, "carignan");
  assert.equal(grapeFor("Garnacha").slug, "grenache");
  assert.equal(grapeFor("Melon de Bourgogne").slug, "melonDeBourgogne");
  assert.equal(grapeFor("Not A Grape"), null);
  assert.equal(grapeFor(""), null);
});

test("regionsGrowing finds the regions that name a grape by any alias", () => {
  const pn = regionsGrowing("pinotNoir", REGIONS);
  assert.ok(pn.red.includes("burgundy") && pn.red.includes("champagne"), `Pinot Noir: ${pn.red}`);
  assert.deepEqual(pn.white, []);

  const gr = regionsGrowing("grenache", REGIONS);
  for (const k of ["rhoneSouth", "languedocRoussillon", "provence"]) assert.ok(gr.red.includes(k), `Grenache missing ${k}: ${gr.red}`);
  assert.ok(!gr.white.includes("rhoneSouth"), "Grenache Blanc is its own grape, not white Grenache");

  assert.deepEqual(regionsGrowing("vermentino", REGIONS).white, ["provence"], "Rolle should count as Vermentino");
  assert.deepEqual(regionsGrowing("malbec", REGIONS).red, ["southWest", "argentina"], "Malbec (Côt) should count as Malbec");
});
