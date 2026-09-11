// ─── Geo projection helper ───────────────────────────────────────────────────
// Maps real lat/lon to SVG coordinates. France spans ~-5°..9.5° lon, ~42°..51.5° lat
// We map to a viewBox of 0,0 500,420
export const geoToSvg = (lon, lat) => {
  const x = ((lon - (-5.5)) / (10 - (-5.5))) * 500;
  const y = ((51.5 - lat) / (51.5 - 41.5)) * 420;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
};

export const pt = (lon, lat) => { const [x, y] = geoToSvg(lon, lat); return `${x},${y}`; };
