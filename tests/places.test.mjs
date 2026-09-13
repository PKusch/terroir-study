import { test } from "node:test";
import assert from "node:assert/strict";

import { REGIONS } from "../src/data/regions.js";
import { PLACES } from "../src/data/places.js";
import { pathFor, projectionFor, countryOf } from "../src/data/projections.js";
import { bboxOfPath, zoomViewBox, nearPath, MAP_W, MAP_H } from "../src/zoom.js";
import { NEW_WORLD_TILES } from "../src/data/newworld-map.js";

// The zoomed map marks a region's places. Every marked place must be one the
// region lists, and must land on or near the region's shape once projected
// with the map's own projection; otherwise the marker is a lie.

test("every marked place is one the region lists, and lands on the region", () => {
  const misses = [];
  for (const [key, places] of Object.entries(PLACES)) {
    assert.ok(REGIONS[key], `${key} is not a region`);
    const path = pathFor(key);
    const project = projectionFor(key);
    assert.ok(path && project, `${key}: no polygon or projection`);
    for (const [name, at] of Object.entries(places)) {
      if (!REGIONS[key].subRegions.includes(name)) misses.push(`${key}: "${name}" is not in its sub-region list`);
      assert.equal(at.length, 2, `${key}/${name}: needs [lon, lat]`);
      const [x, y] = project(at[0], at[1]);
      const tile = NEW_WORLD_TILES.find((t) => t.key === key);
      // A New World "region" is a whole country whose wine belt is one shape;
      // its far districts (Margaret River, Salta) need only be inside the tile.
      const ok = tile
        ? x >= tile.x && x <= tile.x + tile.width && y >= tile.y && y <= tile.y + tile.height
        : nearPath(path.d, [x, y]);
      if (!ok) misses.push(`${key}: "${name}" at ${at} lands away from the region`);
    }
  }
  assert.deepEqual(misses, []);
});

test("every region with places has its country and projection", () => {
  for (const key of Object.keys(PLACES)) assert.ok(countryOf(key), key);
});

test("the zoom box contains the region and its markers, and keeps the map's shape", () => {
  for (const key of Object.keys(REGIONS)) {
    const d = pathFor(key).d;
    const b = bboxOfPath(d);
    const pts = Object.values(PLACES[key] ?? {}).map(([lon, lat]) => projectionFor(key)(lon, lat));
    const z = zoomViewBox(d, 0.35, 50, pts);
    for (const [x, y] of pts) assert.ok(x >= z.x && x <= z.x + z.w && y >= z.y && y <= z.y + z.h, `${key}: a marker falls outside the zoom box`);
    assert.ok(z.x <= b.x && z.y <= b.y && z.x + z.w >= b.x + b.w && z.y + z.h >= b.y + b.h, `${key}: box does not contain the region`);
    assert.ok(Math.abs(z.w / z.h - MAP_W / MAP_H) < 0.01, `${key}: aspect`);
    assert.ok(z.w >= 50, `${key}: too tight to read`);
  }
});
