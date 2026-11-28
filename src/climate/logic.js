// ─── Climate sums ────────────────────────────────────────────────────────────
// Small, testable pieces behind the climate diagrams.

// Air cools by about 0.6 °C for every 100 m of height (an average: the real
// rate changes with the weather).
export const LAPSE_PER_100M = 0.6;
export const coolerBy = (metres) => (metres / 100) * LAPSE_PER_100M;
export const tempAt = (seaLevel, metres) => Math.round((seaLevel - coolerBy(metres)) * 10) / 10;

// Continentality: the warmest month's average minus the coldest month's.
export function continentality(months) {
  if (!Array.isArray(months) || months.length !== 12) return null;
  return Math.round((Math.max(...months) - Math.min(...months)) * 10) / 10;
}

// The same beam of sunlight spreads over more ground when it hits at a low
// angle. Returns the share of a flat surface's energy per square metre that
// a slope gets, for the sun at `sun` degrees above the horizon and a slope
// tilted `tilt` degrees towards it (negative: tilted away).
export function sunShare(sun, tilt) {
  const rad = (d) => (d * Math.PI) / 180;
  const flat = Math.sin(rad(sun));
  const slope = Math.max(0, Math.sin(rad(sun + tilt)));
  return slope / flat;
}
