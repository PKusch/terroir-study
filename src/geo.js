// ─── Geo projection helper ───────────────────────────────────────────────────
// Maps real lat/lon to SVG coordinates. France spans ~-5°..9.5° lon, ~42°..51.5° lat
// We map to a viewBox of 0,0 500,420
export const geoToSvg = (lon, lat) => {
  const x = ((lon - (-5.5)) / (10 - (-5.5))) * 500;
  const y = ((51.5 - lat) / (51.5 - 41.5)) * 420;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
};

export const pt = (lon, lat) => { const [x, y] = geoToSvg(lon, lat); return `${x},${y}`; };

// ─── Projection factory ──────────────────────────────────────────────────────
// Each country map gets its own bounds but the same 500×420 viewBox, so the
// maps swap in and out of the same slot without the layout moving.
export const makeProjection = ({ lonMin, lonMax, latMin, latMax, width = 500, height = 420 }) => {
  const geoToSvg = (lon, lat) => {
    const x = ((lon - lonMin) / (lonMax - lonMin)) * width;
    const y = ((latMax - lat) / (latMax - latMin)) * height;
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  };
  const pt = (lon, lat) => { const [x, y] = geoToSvg(lon, lat); return `${x},${y}`; };
  return { geoToSvg, pt };
};

// Italy spans ~6.5°..18.8° lon, ~36.5°..47.2° lat (Alps to the south of Sicily)
const italy = makeProjection({ lonMin: 6.5, lonMax: 18.8, latMin: 36.5, latMax: 47.2 });
export const geoToSvgItaly = italy.geoToSvg;
export const ptItaly = italy.pt;
