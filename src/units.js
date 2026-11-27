// ─── Alcohol units ───────────────────────────────────────────────────────────
// The NHS formula: strength (ABV) × volume (ml) ÷ 1,000 = UK units, where one
// unit is 10 ml (8 g) of pure alcohol. A US standard drink is 14 g of pure
// alcohol (CDC). Pure logic, so node can test it.

export const UNIT_ML = 10;
export const UNIT_GRAMS = 8;
export const US_DRINK_GRAMS = 14;
export const UK_WEEKLY_GUIDELINE = 14;

// Common measures, for the calculator's quick buttons.
export const SERVES = [
  { label: "Small glass", ml: 125 },
  { label: "Medium glass", ml: 175 },
  { label: "Large glass", ml: 250 },
  { label: "Bottle", ml: 750 }
];

// UK units in a drink, or null when the numbers make no sense.
export function units(abv, ml) {
  const a = Number(abv);
  const v = Number(ml);
  if (!Number.isFinite(a) || !Number.isFinite(v) || a < 0 || a > 100 || v < 0) return null;
  return (a * v) / 1000;
}

// The same drink as US standard drinks (14 g of alcohol each).
export function usDrinks(abv, ml) {
  const u = units(abv, ml);
  return u === null ? null : (u * UNIT_GRAMS) / US_DRINK_GRAMS;
}

// One decimal place, as labels show it.
export const round1 = (n) => Math.round(n * 10) / 10;
