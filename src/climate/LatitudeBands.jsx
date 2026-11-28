import { WORLD_COUNTRIES, WORLD_VIEWBOX, WORLD_FIT } from "../data/world-map.js";
import { WINE_COUNTRIES } from "../WorldMap.jsx";
import { toMap } from "../projection.js";
import { Figure, gold, ink } from "./Figure.jsx";

const y = (lat) => toMap([0, lat], WORLD_FIT)[1];

// The world with the 30° to 50° bands shaded in each hemisphere.
export const LatitudeBands = () => (
  <Figure
    title="The wine bands"
    idea="Most of the world's quality vineyards sit between about 30° and 50° from the equator, north and south. The gold countries are the ones in this app."
    remember="Nearer the equator it is usually too hot; nearer the poles too cool for grapes to ripen. Height can move a vineyard outside the band: it is cooler up a mountain.">
    <svg viewBox={WORLD_VIEWBOX} role="img" aria-label="World map with the bands from 30 to 50 degrees north and south shaded. The wine countries in the app sit inside or close to them."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      {[[30, 50], [-50, -30]].map(([a, b]) => (
        <rect key={a} x="0" width="1000" y={y(b)} height={y(a) - y(b)} fill={gold} opacity="0.2" />
      ))}
      {WORLD_COUNTRIES.map((c) => (
        <path key={c.id + c.name} d={c.d} fill={WINE_COUNTRIES[c.id] ? gold : "#2a2a2e"} stroke="#101418" strokeWidth="0.5" />
      ))}
      {[50, 30, 0, -30, -50].map((lat) => (
        <g key={lat}>
          <line x1="0" x2="1000" y1={y(lat)} y2={y(lat)} stroke={lat === 0 ? ink.faint : gold} strokeWidth="0.8" strokeDasharray={lat === 0 ? "4 4" : "none"} opacity="0.8" />
          <text x="6" y={y(lat) - 3} fontSize="11" fill={lat === 0 ? ink.soft : gold} fontFamily="'Source Sans 3', sans-serif">
            {lat === 0 ? "Equator" : `${Math.abs(lat)}° ${lat > 0 ? "N" : "S"}`}
          </text>
        </g>
      ))}
    </svg>
  </Figure>
);
