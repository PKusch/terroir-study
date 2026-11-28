// ─── Equal Earth projection ──────────────────────────────────────────────────
// Šavrič, Patterson and Jenny (2018). Used by scripts/build-world.mjs to draw
// the world map, and by the climate diagrams to put lines of latitude and
// ocean currents on that same map.
const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, M = Math.sqrt(3) / 2;

export function project([lon, lat]) {
  const l = (lon * Math.PI) / 180;
  const t = Math.asin(M * Math.sin((lat * Math.PI) / 180));
  const t2 = t * t, t6 = t2 * t2 * t2;
  const x = (2 * Math.sqrt(3) * l * Math.cos(t)) / (3 * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2)));
  const y = t * (A1 + A2 * t2 + t6 * (A3 + A4 * t2));
  return [x, y];
}

// A longitude and latitude as a point on the world map, given the fit the
// build wrote out (WORLD_FIT in src/data/world-map.js).
export function toMap([lon, lat], fit) {
  const [x, y] = project([lon, lat]);
  return [(x - fit.minX) * fit.k, (fit.maxY - y) * fit.k];
}
