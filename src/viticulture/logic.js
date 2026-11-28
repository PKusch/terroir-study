// ─── Vineyard sums ───────────────────────────────────────────────────────────
// Small, testable pieces behind the viticulture diagrams.

// Vines per hectare (10,000 m²) for a row width and a gap between vines, in
// metres: each vine has rowWidth × gap square metres to itself.
export function vinesPerHectare(rowWidth, gap) {
  if (!(rowWidth > 0 && gap > 0)) return null;
  return Math.round(10000 / (rowWidth * gap));
}

// Skin per millilitre of juice, compared with a reference berry: a sphere's
// surface over its volume is 6 ÷ diameter, so it scales as 1 ÷ diameter.
export const skinPerJuice = (diameter, reference) => reference / diameter;
