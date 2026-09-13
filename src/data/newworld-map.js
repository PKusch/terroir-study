// ─── New World: six countries, six tiles ─────────────────────────────────────
// One world map cannot show California and New Zealand at a size you can
// click, so each country gets a tile with its own projection, drawn from real
// lon/lat like the other maps. The wine area is the coloured shape; the
// country outline, a city and the Andes are there for orientation.
import { makeProjection } from "../geo.js";

const TILE_W = 166;
const TILE_H = 210;
const PAD = 16;

// Coast and border points, clockwise, traced from real coordinates.
export const OUTLINES = {
  usaWest: [[-124.7, 48.4], [-124.0, 46.3], [-124.4, 43.0], [-124.2, 41.8], [-123.8, 39.7], [-122.5, 37.8], [-121.9, 36.6], [-120.6, 34.5], [-118.5, 34.0], [-117.1, 32.5], [-114.7, 32.7], [-111.0, 31.3], [-106.5, 31.8], [-105.0, 37.0], [-105.0, 49.0]],
  southernCone: [[-70.4, -18.4], [-70.4, -23.6], [-71.4, -29.9], [-71.6, -33.0], [-73.1, -36.8], [-74.0, -42.5], [-75.5, -46.7], [-74.5, -50.0], [-68.7, -50.0], [-67.5, -45.9], [-65.1, -43.3], [-63.6, -42.5], [-64.9, -40.8], [-62.2, -38.7], [-57.5, -38.0], [-56.7, -36.3], [-58.4, -34.6], [-58.2, -30.5], [-54.6, -25.6], [-58.6, -27.3], [-57.6, -25.3], [-62.6, -22.2], [-66.2, -21.8], [-67.2, -22.8], [-69.6, -17.5]],
  andes: [[-67.2, -22.8], [-68.5, -27.0], [-70.0, -30.0], [-70.1, -33.0], [-70.9, -36.0], [-71.5, -39.0], [-71.8, -43.0], [-72.2, -46.0], [-73.0, -50.0]],
  southAfrica: [[16.5, -28.6], [18.0, -32.0], [18.4, -33.9], [18.5, -34.4], [20.0, -34.8], [22.0, -34.0], [25.6, -33.9], [27.9, -33.0], [31.0, -29.9], [32.4, -28.4], [32.9, -26.9], [31.9, -25.5], [31.3, -22.4], [29.4, -22.2], [26.4, -24.6], [24.5, -25.8], [20.0, -25.9], [20.0, -28.4]],
  australia: [[113.2, -22.0], [114.0, -26.5], [115.0, -34.4], [117.9, -35.1], [123.5, -33.9], [131.0, -31.5], [134.0, -32.8], [135.6, -34.9], [138.5, -35.1], [139.7, -37.0], [141.0, -38.3], [143.5, -38.8], [146.4, -38.9], [149.9, -37.5], [151.2, -33.9], [153.6, -28.2], [153.2, -25.3], [150.8, -22.4], [146.8, -19.2], [145.3, -15.5], [142.5, -10.7], [140.8, -17.5], [135.9, -15.0], [136.8, -12.3], [130.8, -12.4], [129.7, -15.0], [126.0, -14.0], [122.2, -17.9], [118.6, -20.3]],
  tasmania: [[144.7, -40.7], [148.3, -40.8], [148.0, -43.2], [146.0, -43.6], [144.6, -42.0]],
  nzNorth: [[172.7, -34.4], [174.3, -35.5], [174.8, -36.8], [175.9, -37.4], [177.2, -37.9], [178.5, -37.7], [177.0, -39.3], [176.2, -40.9], [174.9, -41.4], [175.0, -40.7], [173.75, -39.3], [174.6, -37.5], [174.2, -36.4], [173.3, -35.5]],
  nzSouth: [[172.7, -40.5], [173.3, -41.3], [174.0, -41.0], [174.1, -41.5], [173.7, -42.4], [173.1, -43.9], [171.2, -44.4], [170.7, -45.9], [168.4, -46.6], [166.5, -46.0], [167.9, -44.6], [169.0, -43.9], [170.9, -42.7], [171.6, -41.7], [172.1, -41.2]]
};

// One tile per region: where it sits, what it shows, and the wine area.
const TILES = [
  { key: "california", col: 0, row: 0, bounds: [-125.5, -113, 31.5, 42.5], outlines: ["usaWest"],
    city: { name: "San Francisco", lon: -122.42, lat: 37.77 },
    wine: [[-123.8, 39.5], [-121.5, 39.0], [-120.0, 37.5], [-118.5, 35.2], [-119.6, 34.3], [-121.0, 34.5], [-122.6, 36.6], [-124.0, 38.2]] },
  { key: "chile", col: 1, row: 0, bounds: [-77, -65, -45, -25], outlines: ["southernCone"], line: "andes",
    city: { name: "Santiago", lon: -70.65, lat: -33.45 },
    wine: [[-72.2, -32.3], [-70.3, -32.4], [-70.5, -35.5], [-72.6, -35.6]] },
  { key: "argentina", col: 2, row: 0, bounds: [-73, -57, -44, -25], outlines: ["southernCone"], line: "andes",
    city: { name: "Buenos Aires", lon: -58.4, lat: -34.6 },
    wine: [[-69.6, -32.2], [-67.8, -32.3], [-67.9, -34.6], [-69.8, -34.4]] },
  { key: "southAfrica", col: 0, row: 1, bounds: [15, 33, -36, -21], outlines: ["southAfrica"],
    city: { name: "Cape Town", lon: 18.42, lat: -33.93 },
    wine: [[18.2, -32.6], [20.4, -32.9], [20.6, -34.1], [19.2, -34.6], [18.3, -34.2]] },
  { key: "australia", col: 1, row: 1, bounds: [112, 156, -45, -9], outlines: ["australia", "tasmania"],
    city: { name: "Adelaide", lon: 138.6, lat: -34.93 },
    wine: [[136, -33], [140, -33], [145, -34.5], [149, -33.5], [149, -37.5], [146, -38.5], [142, -38], [138, -35.8], [136, -34.5]] },
  { key: "newZealand", col: 2, row: 1, bounds: [165, 179, -48, -34], outlines: ["nzNorth", "nzSouth"],
    city: { name: "Wellington", lon: 174.78, lat: -41.29 },
    wine: [[171.5, -39], [176, -39], [176, -42], [173.5, -44.5], [171, -46], [167, -46], [167, -43.5], [169.5, -41]] }
];

const toPath = (pt, points) => "M" + points.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";
const toLine = (pt, points) => "M" + points.map(([lon, lat]) => pt(lon, lat)).join(" L");

export const NEW_WORLD_TILES = TILES.map((t) => {
  const [lonMin, lonMax, latMin, latMax] = t.bounds;
  const x0 = t.col * (TILE_W + 1);
  const y0 = t.row * TILE_H;
  const { geoToSvg, pt } = makeProjection({
    lonMin, lonMax, latMin, latMax,
    width: TILE_W - 2 * PAD, height: TILE_H - 2 * PAD, equal: true,
    offsetX: x0 + PAD, offsetY: y0 + PAD
  });
  return {
    key: t.key,
    geoToSvg,
    x: x0, y: y0, width: TILE_W, height: TILE_H,
    outlines: t.outlines.map((name) => toPath(pt, OUTLINES[name])),
    line: t.line ? toLine(pt, OUTLINES[t.line]) : null,
    city: { name: t.city.name, at: geoToSvg(t.city.lon, t.city.lat) },
    wine: toPath(pt, t.wine),
    label: [x0 + 10, y0 + TILE_H - 10]
  };
});

export const NEW_WORLD_REGION_PATHS = Object.fromEntries(
  NEW_WORLD_TILES.map((t) => [t.key, { d: t.wine, label: t.label }])
);

/** Each tile's own projection, so a zoomed view can place markers on it. */
export const NEW_WORLD_PROJECTIONS = Object.fromEntries(NEW_WORLD_TILES.map((t) => [t.key, t.geoToSvg]));
