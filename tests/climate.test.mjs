import test from "node:test";
import assert from "node:assert/strict";
import { continentality, coolerBy, sunShare, tempAt } from "../src/climate/logic.js";

test("air cools about 0.6 °C every 100 m", () => {
  assert.equal(coolerBy(1000), 6);
  assert.equal(tempAt(30, 1000), 24);
  assert.equal(tempAt(30, 0), 30);
});

test("continentality is warmest month minus coldest", () => {
  assert.equal(continentality([1, 2, 5, 9, 13, 17, 20, 19, 15, 10, 5, 2]), 19);
  assert.equal(continentality([1, 2, 3]), null);
});

test("a slope facing the sun gets more light than flat ground; one facing away gets less", () => {
  assert.ok(sunShare(30, 20) > 1);
  assert.ok(sunShare(30, -20) < 1);
  assert.equal(Math.round(sunShare(30, 0) * 100), 100);
  assert.equal(sunShare(20, -30), 0);
});

import { PLACES, seasonal, GST_BANDS, GST_GRAPES, CURRENTS } from "../src/climate/data.js";

test("each place has twelve months, a day above its night, and a source", () => {
  for (const p of PLACES) {
    assert.equal(p.months.length, 12, p.id);
    assert.ok(p.day > p.night, p.id);
    assert.match(p.url, /^https:\/\//, p.id);
    // The warmest month's mean should sit between its night low and day high.
    const warm = Math.max(...p.months);
    assert.ok(warm > p.night && warm < p.day, `${p.id}: ${warm} not between ${p.night} and ${p.day}`);
  }
});

test("the continental place has a bigger gap than the maritime one", () => {
  const gap = (id) => continentality(PLACES.find((p) => p.id === id).months);
  assert.ok(gap("dijon") > gap("bordeaux"));
});

test("southern places are shifted so midwinter comes first", () => {
  const m = PLACES.find((p) => p.south);
  const s = seasonal(m);
  assert.equal(s[0], m.months[6]);
  assert.ok(s[0] < s[6], "winter first, summer in the middle");
});

test("climate bands run on from each other, and grape ranges sit inside them", () => {
  for (let i = 1; i < GST_BANDS.length; i++) assert.equal(GST_BANDS[i].from, GST_BANDS[i - 1].to);
  for (const g of GST_GRAPES) assert.ok(g.from < g.to && g.from >= 13 && g.to <= 21, g.name);
});

test("current paths are real longitudes and latitudes", () => {
  for (const c of CURRENTS) for (const [lon, lat] of c.path) assert.ok(Math.abs(lon) <= 180 && Math.abs(lat) <= 90, c.name);
});
