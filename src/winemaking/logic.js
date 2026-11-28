// ─── Winemaking sums ─────────────────────────────────────────────────────────
// Small, testable pieces behind the winemaking diagrams.

// Grams of sugar per litre that ferment to 1% alcohol by volume. The EU's
// legal conversion is 16.83 g/L; 17 is the usual rule of thumb.
export const SUGAR_PER_ABV = 16.83;

// Part-way through fermentation: how much alcohol has formed and how much
// sugar is left, from the starting sugar (g/L) and the share used (0 to 1).
export function fermentAt(startSugar, share) {
  const used = startSugar * Math.min(1, Math.max(0, share));
  return { alcohol: used / SUGAR_PER_ABV, sugar: startSugar - used };
}

// Fortifying: litres of spirit at `spirit`% to add to one litre of wine at
// `wine`% to reach `target`%. (Ignores the small shrink when they mix.)
export function spiritFor(wine, spirit, target) {
  if (!(spirit > target && target > wine)) return null;
  return (target - wine) / (spirit - target);
}
// The strength after fortifying, and how much the sugar is diluted.
export function afterFortify(wine, sugar, spirit, litres) {
  const total = 1 + litres;
  return { alcohol: (wine + spirit * litres) / total, sugar: sugar / total };
}

// Wood touching each litre, compared with a 225-litre barrique, for barrels
// of the same shape: surface grows with the square of size, volume with the
// cube, so wood per litre falls as size^(-1/3).
export const woodPerLitre = (litres) => Math.cbrt(225 / litres);
