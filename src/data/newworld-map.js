// ─── New World: eleven regions, eleven tiles ─────────────────────────────────────
// One world map cannot show California and New Zealand at a size you can
// click, so each country gets a tile with its own projection, drawn from real
// lon/lat like the other maps. The wine area is the coloured shape; the
// country outline, a city and the Andes are there for orientation.
import { makeProjection } from "../geo.js";

const TILE_W = 124;
const TILE_H = 140;
const PAD = 12;

// Coast and border points, clockwise, traced from real coordinates.
export const OUTLINES = {
  usaWest: [[-124.7, 48.4], [-124.0, 46.3], [-124.4, 43.0], [-124.2, 41.8], [-123.8, 39.7], [-122.5, 37.8], [-121.9, 36.6], [-120.6, 34.5], [-118.5, 34.0], [-117.1, 32.5], [-114.7, 32.7], [-111.0, 31.3], [-106.5, 31.8], [-105.0, 37.0], [-105.0, 49.0]],
  southernCone: [[-70.4, -18.4], [-70.4, -23.6], [-71.4, -29.9], [-71.6, -33.0], [-73.1, -36.8], [-74.0, -42.5], [-75.5, -46.7], [-74.5, -50.0], [-68.7, -50.0], [-67.5, -45.9], [-65.1, -43.3], [-63.6, -42.5], [-64.9, -40.8], [-62.2, -38.7], [-57.5, -38.0], [-56.7, -36.3], [-58.4, -34.6], [-58.2, -30.5], [-54.6, -25.6], [-58.6, -27.3], [-57.6, -25.3], [-62.6, -22.2], [-66.2, -21.8], [-67.2, -22.8], [-69.6, -17.5]],
  andes: [[-67.2, -22.8], [-68.5, -27.0], [-70.0, -30.0], [-70.1, -33.0], [-70.9, -36.0], [-71.5, -39.0], [-71.8, -43.0], [-72.2, -46.0], [-73.0, -50.0]],
  southAfrica: [[16.5, -28.6], [18.0, -32.0], [18.4, -33.9], [18.5, -34.4], [20.0, -34.8], [22.0, -34.0], [25.6, -33.9], [27.9, -33.0], [31.0, -29.9], [32.4, -28.4], [32.9, -26.9], [31.9, -25.5], [31.3, -22.4], [29.4, -22.2], [26.4, -24.6], [24.5, -25.8], [20.0, -25.9], [20.0, -28.4]],
  australia: [[113.2, -22.0], [114.0, -26.5], [115.0, -34.4], [117.9, -35.1], [123.5, -33.9], [131.0, -31.5], [134.0, -32.8], [135.6, -34.9], [138.5, -35.1], [139.7, -37.0], [141.0, -38.3], [143.5, -38.8], [146.4, -38.9], [149.9, -37.5], [151.2, -33.9], [153.6, -28.2], [153.2, -25.3], [150.8, -22.4], [146.8, -19.2], [145.3, -15.5], [142.5, -10.7], [140.8, -17.5], [135.9, -15.0], [136.8, -12.3], [130.8, -12.4], [129.7, -15.0], [126.0, -14.0], [122.2, -17.9], [118.6, -20.3]],
  tasmania: [[144.7, -40.7], [148.3, -40.8], [148.0, -43.2], [146.0, -43.6], [144.6, -42.0]],
  nzNorth: [[172.7, -34.4], [174.3, -35.5], [174.8, -36.8], [175.9, -37.4], [177.2, -37.9], [178.5, -37.7], [177.0, -39.3], [176.2, -40.9], [174.9, -41.4], [175.0, -40.7], [173.75, -39.3], [174.6, -37.5], [174.2, -36.4], [173.3, -35.5]],
  usaNorthwestOr: [[-124.0, 46.2], [-123.9, 45.0], [-124.5, 43.5], [-124.3, 42.0], [-117.0, 42.0], [-117.0, 44.0], [-116.9, 45.5], [-117.2, 46.0], [-119.0, 46.0], [-121.2, 45.6], [-122.8, 45.7], [-123.5, 46.2]],
  usaNorthwestWa: [[-124.1, 46.3], [-124.7, 48.4], [-122.8, 48.1], [-122.5, 49.0], [-117.0, 49.0], [-117.0, 46.4], [-118.9, 46.0], [-121.2, 45.6], [-122.8, 45.7], [-123.5, 46.2]],
  newYork: [[-79.76, 42.27], [-79.05, 42.9], [-79.05, 43.25], [-77.5, 43.3], [-76.2, 43.55], [-76.2, 44.0], [-75.0, 44.9], [-74.7, 45.0], [-73.35, 45.0], [-73.4, 43.6], [-73.25, 42.75], [-73.5, 42.05], [-73.7, 41.1], [-74.7, 41.35], [-75.35, 42.0], [-79.76, 42.0]],
  ontarioSouth: [[-83.0, 42.3], [-82.4, 43.0], [-81.7, 43.9], [-81.4, 44.7], [-80.9, 45.5], [-76.3, 45.5], [-76.3, 44.2], [-77.5, 43.95], [-79.4, 43.62], [-79.1, 43.25], [-79.05, 42.9], [-80.0, 42.65], [-81.2, 42.65], [-82.5, 41.95]],
  bcSouth: [[-125.0, 48.4], [-123.3, 48.4], [-122.8, 49.0], [-117.0, 49.0], [-117.0, 51.0], [-125.0, 51.0]],
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
  { key: "southAfrica", col: 3, row: 0, bounds: [15, 33, -36, -21], outlines: ["southAfrica"],
    city: { name: "Cape Town", lon: 18.42, lat: -33.93 },
    wine: [[18.2, -32.6], [20.4, -32.9], [20.6, -34.1], [19.2, -34.6], [18.3, -34.2]] },
  { key: "australia", col: 0, row: 1, bounds: [112, 156, -45, -9], outlines: ["australia", "tasmania"],
    city: { name: "Adelaide", lon: 138.6, lat: -34.93 },
    wine: [[136, -33], [140, -33], [145, -34.5], [149, -33.5], [149, -37.5], [146, -38.5], [142, -38], [138, -35.8], [136, -34.5]] },
  { key: "newZealand", col: 1, row: 1, bounds: [165, 179, -48, -34], outlines: ["nzNorth", "nzSouth"],
    city: { name: "Wellington", lon: 174.78, lat: -41.29 },
    wine: [[171.5, -39], [176, -39], [176, -42], [173.5, -44.5], [171, -46], [167, -46], [167, -43.5], [169.5, -41]] },
  { key: "oregon", col: 2, row: 1, bounds: [-124.5, -121, 43.6, 46.2], outlines: ["usaNorthwestOr"],
    city: { name: "Portland", lon: -122.68, lat: 45.52 },
    wine: [[-123.5, 45.6], [-122.6, 45.6], [-122.7, 44.2], [-123.1, 43.9], [-123.4, 44.3]] },
  { key: "washington", col: 3, row: 1, bounds: [-122.5, -117.5, 45.6, 48.2], outlines: ["usaNorthwestWa"],
    city: { name: "Seattle", lon: -122.33, lat: 47.61 },
    wine: [[-120.4, 47.5], [-119.0, 47.0], [-118.2, 46.0], [-119.6, 45.8], [-120.8, 46.2], [-120.9, 47.0]] },
  { key: "newYork", col: 0, row: 2, bounds: [-79.5, -75.5, 41.8, 44.2], outlines: ["newYork"],
    city: { name: "Syracuse", lon: -76.15, lat: 43.05 },
    wine: [[-77.3, 42.9], [-76.7, 42.95], [-76.6, 42.4], [-77.3, 42.3]] },
  { key: "ontario", col: 1, row: 2, bounds: [-80.6, -76.5, 42.5, 44.6], outlines: ["ontarioSouth"],
    city: { name: "Toronto", lon: -79.38, lat: 43.65 },
    wine: [[-79.7, 43.3], [-79.0, 43.28], [-79.0, 43.0], [-79.6, 43.05]] },
  { key: "britishColumbia", col: 2, row: 2, bounds: [-121, -118, 48.8, 50.4], outlines: ["bcSouth"],
    city: { name: "Kelowna", lon: -119.5, lat: 49.89 },
    wine: [[-119.9, 50.1], [-119.2, 50.1], [-119.3, 49.0], [-119.8, 49.0]] }
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
