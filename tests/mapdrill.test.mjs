import { test } from "node:test";
import assert from "node:assert/strict";

import {
  ROUND_LENGTH, DRILLS, regionKeys, buildFindRound, nameQuestion, buildNameRound,
  placeTargets, buildPlaceRound, placeView, targetPoint, hitTolerance, closeTolerance,
  judgePlacement, summariseRound
} from "../src/mapdrill.js";
import { REGIONS, COUNTRIES } from "../src/data/regions.js";
import { PLACES } from "../src/data/places.js";
import { countryOf } from "../src/data/projections.js";

// A deterministic rng that counts up and wraps, so shuffles are reproducible.
const counter = () => { let i = 0; return () => ((i++ * 0.37) % 1); };

test("the four drills are listed with a name and what to do", () => {
  assert.deepEqual(DRILLS.map((d) => d.id), ["find", "name", "place", "recall"]);
  for (const d of DRILLS) assert.ok(d.label && d.note);
});

test("every region in the app can be asked about, and a country filter keeps to that country", () => {
  assert.equal(regionKeys("All").length, Object.keys(REGIONS).length);
  assert.deepEqual(regionKeys("Austria").sort(), [...COUNTRIES.Austria].sort());
  assert.deepEqual(regionKeys("Nowhere"), []);
});

test("a find round has the length asked for, no repeats, and stays in the country", () => {
  const round = buildFindRound("Italy", 3, counter());
  assert.equal(round.length, 3);
  assert.equal(new Set(round).size, 3);
  assert.ok(round.every((k) => countryOf(k) === "Italy"));
  assert.equal(buildFindRound("All").length, ROUND_LENGTH);
});

test("a round longer than the list gives every region once", () => {
  const round = buildFindRound("Austria", 50, counter());
  assert.deepEqual([...round].sort(), [...COUNTRIES.Austria].sort());
});

test("a name question has four distinct options and the right one is among them", () => {
  for (const key of Object.keys(REGIONS)) {
    const q = nameQuestion(key, counter());
    assert.equal(q.options.length, 4, key);
    assert.equal(new Set(q.options).size, 4, key);
    assert.equal(q.options[q.answer], key, key);
  }
});

test("wrong options come from the same country first", () => {
  const q = nameQuestion("bordeaux", counter()); // France has many regions
  assert.ok(q.options.every((k) => countryOf(k) === "France"));
  // Austria has three regions, so it must borrow one from elsewhere.
  const a = nameQuestion("burgenland", counter());
  const same = a.options.filter((k) => countryOf(k) === "Austria");
  assert.equal(same.length, 3);
  assert.equal(a.options.filter((k) => countryOf(k) !== "Austria").length, 1);
});

test("a name round is made of valid questions", () => {
  const round = buildNameRound("Spain", 4, counter());
  assert.equal(round.length, 4);
  assert.ok(round.every((q) => q.options[q.answer] === q.key));
});

test("every place on the map becomes a target, with its region and a point", () => {
  const targets = placeTargets("All");
  assert.equal(targets.length, Object.values(PLACES).reduce((n, p) => n + Object.keys(p).length, 0));
  for (const t of targets) {
    assert.ok(REGIONS[t.region], t.region);
    assert.ok(Number.isFinite(t.lon) && Number.isFinite(t.lat), t.name);
  }
  assert.ok(placeTargets("Hungary").every((t) => countryOf(t.region) === "Hungary"));
  assert.deepEqual(placeTargets("Nowhere"), []);
});

test("every place can be judged: its point is inside the zoomed map it is shown on", () => {
  for (const t of placeTargets("All")) {
    const { view } = placeView(t.region);
    const [x, y] = targetPoint(t);
    assert.ok(x >= view.x && x <= view.x + view.w && y >= view.y && y <= view.y + view.h, `${t.region}/${t.name}`);
  }
});

test("a place round has the length asked for, with no repeats", () => {
  const round = buildPlaceRound("France", 5, counter());
  assert.equal(round.length, 5);
  assert.equal(new Set(round.map((t) => `${t.region}/${t.name}`)).size, 5);
});

test("a click is a hit within a twelfth of the map's width, close within a sixth, else a miss", () => {
  const w = 120;
  assert.equal(hitTolerance(w), 10);
  assert.equal(closeTolerance(w), 20);
  const target = [100, 100];
  assert.equal(judgePlacement([100, 100], target, w).result, "hit");
  assert.equal(judgePlacement([106, 108], target, w).result, "hit"); // distance 10
  assert.equal(judgePlacement([100, 115], target, w).result, "close");
  assert.equal(judgePlacement([100, 150], target, w).result, "miss");
  assert.equal(judgePlacement([103, 104], target, w).distance, 5);
});

test("a round is summarised as a score, with the misses kept", () => {
  const r = summariseRound([
    { key: "a", label: "A", correct: true },
    { key: "b", label: "B", correct: false },
    { key: "c", label: "C", correct: true },
    { key: "d", label: "D", correct: false }
  ]);
  assert.equal(r.total, 4);
  assert.equal(r.correct, 2);
  assert.equal(r.percent, 50);
  assert.deepEqual(r.missed.map((m) => m.key), ["b", "d"]);
  assert.deepEqual(summariseRound([]), { total: 0, correct: 0, percent: 0, missed: [] });
});

test("recall: a typed name matches the region, its parts, and small slips", async () => {
  const { matchesRegion, acceptedNames, DRILLS, buildRecallRound } = await import("../src/mapdrill.js");
  assert.ok(DRILLS.some((d) => d.id === "recall"));
  assert.ok(matchesRegion("Bordeaux", "bordeaux"));
  assert.ok(matchesRegion("  bordeaux ", "bordeaux"));
  assert.ok(matchesRegion("Bordaux", "bordeaux"), "one slip is forgiven");
  assert.ok(!matchesRegion("Burgundy", "bordeaux"));
  assert.ok(matchesRegion("Jerez", "sherry") && matchesRegion("sherry", "sherry"));
  assert.ok(matchesRegion("Alto Adige", "trentinoAltoAdige") && matchesRegion("trentino alto adige", "trentinoAltoAdige"));
  assert.ok(!matchesRegion("Northern Rhone", "rhoneSouth") && matchesRegion("Northern Rhone", "rhoneNorth"));
  assert.ok(matchesRegion("Penedes", "penedes"), "accents are ignored");
  assert.ok(!matchesRegion("", "bordeaux"));
  assert.ok(!matchesRegion("Tok", "tokaj"), "too short to count");
  assert.equal(buildRecallRound("All", 10).length, 10);
});

test("recall: every region has at least one name to type, and none answers for another", async () => {
  const { acceptedNames, matchesRegion, regionKeys } = await import("../src/mapdrill.js");
  const keys = regionKeys("All");
  for (const k of keys) {
    const names = acceptedNames(k);
    assert.ok(names.length > 0, k);
    for (const other of keys) if (other !== k) assert.ok(!matchesRegion(names[0], other), `typing ${names[0]} also answers ${other}`);
  }
});
