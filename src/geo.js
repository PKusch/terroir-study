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
export const makeProjection = ({ lonMin, lonMax, latMin, latMax, width = 500, height = 420, equal = false, offsetX = 0, offsetY = 0 }) => {
  // `equal` keeps one unit per degree in both directions and centres the
  // map, so a wide world strip is not stretched tall to fill the box.
  const sx = width / (lonMax - lonMin);
  const sy = height / (latMax - latMin);
  const s = equal ? Math.min(sx, sy) : null;
  const dx = offsetX + (equal ? (width - (lonMax - lonMin) * s) / 2 : 0);
  const dy = offsetY + (equal ? (height - (latMax - latMin) * s) / 2 : 0);
  const geoToSvg = (lon, lat) => {
    const x = dx + (lon - lonMin) * (equal ? s : sx);
    const y = dy + (latMax - lat) * (equal ? s : sy);
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  };
  const pt = (lon, lat) => { const [x, y] = geoToSvg(lon, lat); return `${x},${y}`; };
  return { geoToSvg, pt };
};

// Italy spans ~6.5°..18.8° lon, ~36.5°..47.2° lat (Alps to the south of Sicily)
const italy = makeProjection({ lonMin: 6.5, lonMax: 18.8, latMin: 36.5, latMax: 47.2 });
export const geoToSvgItaly = italy.geoToSvg;
export const ptItaly = italy.pt;

// Spain spans ~-9.5°..4.5° lon, ~35.8°..44.0° lat (Cape Finisterre to Cap de Creus, Bay of Biscay to Tarifa)
const spain = makeProjection({ lonMin: -9.5, lonMax: 4.5, latMin: 35.8, latMax: 44.0 });
export const geoToSvgSpain = spain.geoToSvg;
export const ptSpain = spain.pt;
// Germany spans ~5.5°..15.5° lon, ~47.0°..55.2° lat (the Alps to the Danish border)
const germany = makeProjection({ lonMin: 5.5, lonMax: 15.5, latMin: 47.0, latMax: 55.2 });
export const geoToSvgGermany = germany.geoToSvg;
export const ptGermany = germany.pt;

// Austria spans ~9.5°..17.2° lon, ~46.4°..49.0° lat. The box is taller than the
// country so one degree of longitude is drawn about two thirds as wide as one of
// latitude, as it is at this latitude, rather than stretched.
const austria = makeProjection({ lonMin: 9.4, lonMax: 17.3, latMin: 45.5, latMax: 49.9 });
export const geoToSvgAustria = austria.geoToSvg;
export const ptAustria = austria.pt;
// Portugal spans ~-9.5°..-6.2° lon, ~37.0°..42.2° lat. The box is wide so the
// country keeps its narrow shape, with Spain beside it, and one degree of
// longitude is drawn about three quarters as wide as one of latitude.
const portugal = makeProjection({ lonMin: -11.95, lonMax: -3.75, latMin: 36.9, latMax: 42.2 });
export const geoToSvgPortugal = portugal.geoToSvg;
export const ptPortugal = portugal.pt;

// Hungary spans ~16.1°..22.9° lon, ~45.7°..48.6° lat. The box is a little taller
// than the country so one degree of longitude is drawn about two thirds as wide
// as one of latitude, as it is at this latitude.
const hungary = makeProjection({ lonMin: 15.7, lonMax: 23.1, latMin: 45.1, latMax: 49.3 });
export const geoToSvgHungary = hungary.geoToSvg;
export const ptHungary = hungary.pt;
// Greece spans ~19.4°..28.2° lon, ~34.8°..41.8° lat, with Crete in the south.
// One degree of longitude is drawn about four fifths as wide as one of latitude.
const greece = makeProjection({ lonMin: 18.3, lonMax: 29.3, latMin: 34.6, latMax: 41.9 });
export const geoToSvgGreece = greece.geoToSvg;
export const ptGreece = greece.pt;
