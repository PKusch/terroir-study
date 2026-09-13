// ─── One-page summary of a region ────────────────────────────────────────────
// Everything the Explore and Connect screens show, in one list of labelled
// paragraphs, so it can be printed on a single sheet for revision. Pure: it
// reads the region table and returns text, nothing else.

export function summaryFor(regionKey, regions) {
  const r = regions[regionKey];
  if (!r) return null;
  const grapes = [
    r.keyGrapes.red.length ? `Red: ${r.keyGrapes.red.join(", ")}` : null,
    r.keyGrapes.white.length ? `White: ${r.keyGrapes.white.join(", ")}` : null
  ].filter(Boolean).join(". ");
  return {
    title: r.name,
    country: r.country ?? "France",
    subtitle: r.climate,
    sections: [
      ["Climate", r.climateDetail],
      ["Soils", r.soils],
      ["Grapes", grapes],
      ["In the vineyard", r.viticultureNotes],
      ["In the winery", r.winemaking],
      ["Typical style", r.typicalStyle],
      ["Why it works", r.whyConnection],
      ["Sub-regions", r.subRegions.join(" · ")],
      ["Quality levels", r.qualityLevels.join(" → ")]
    ]
  };
}
