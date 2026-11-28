import { WORLD_COUNTRIES, WORLD_VIEWBOX, WORLD_FIT } from "../data/world-map.js";
import { WINE_COUNTRIES } from "../WorldMap.jsx";
import { toMap } from "../projection.js";
import { CURRENTS } from "./data.js";
import { Figure, ink, COLD, WARM } from "../Figure.jsx";

const pt = (ll) => toMap(ll, WORLD_FIT).map((v) => v.toFixed(1)).join(",");

// Cold currents along three New World coasts, and the warm Gulf Stream
// heading for Europe. Below it, how a cold current makes fog.
export const Currents = () => (
  <Figure
    title="Oceans and currents"
    idea="Water warms and cools more slowly than land, so the sea evens out the temperature near the coast. Currents add to that: a cold one cools the coast next to it, a warm one warms it."
    remember="Cold currents cool coastal vineyards in California (California Current), Chile (Humboldt) and South Africa (Benguela). The warm Gulf Stream and North Atlantic Drift make Western Europe milder than its latitude suggests, though scientists argue about how much."
    source={{ note: "Paths drawn roughly.", links: [
      { title: "Wikipedia: California Current (upwelling and coastal fog)", url: "https://en.wikipedia.org/wiki/California_Current" },
      { title: "Napa Master Gardeners: the climate of Napa County", url: "https://ccfruitandnuts.ucanr.edu/sites/default/files/2021-07/153431.pdf" },
      { title: "Wikipedia: Gulf Stream", url: "https://en.wikipedia.org/wiki/Gulf_Stream" }] }}>
    <svg viewBox={WORLD_VIEWBOX} role="img"
      aria-label="World map: cold currents run along the coasts of California, Chile and South Africa; the warm Gulf Stream runs from the Caribbean towards Western Europe."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <defs>
        {[["cur-cold", COLD], ["cur-warm", WARM]].map(([id, c]) => (
          <marker key={id} id={id} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill={c} />
          </marker>
        ))}
      </defs>
      {WORLD_COUNTRIES.map((c) => (
        <path key={c.id + c.name} d={c.d} fill={WINE_COUNTRIES[c.id] ? "#6b5c3a" : "#2a2a2e"} stroke="#101418" strokeWidth="0.5" />
      ))}
      {CURRENTS.map((c) => (
        <g key={c.name}>
          <polyline points={c.path.map(pt).join(" ")} fill="none" stroke={c.cold ? COLD : WARM} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#cur-${c.cold ? "cold" : "warm"})`} />
          <text x={toMap(c.label, WORLD_FIT)[0]} y={toMap(c.label, WORLD_FIT)[1]} fontSize="14" fontWeight="600" fill={c.cold ? COLD : WARM}
            textAnchor="middle" fontFamily="'Source Sans 3', sans-serif">{c.name.replace(" and North Atlantic Drift", "")}</text>
        </g>
      ))}
    </svg>
    <h4 style={{ fontSize: "14px", color: ink.head, margin: "14px 0 6px", fontWeight: 600 }}>How a cold current makes fog</h4>
    <svg viewBox="0 0 640 180" role="img"
      aria-label="Cold water rises along the coast and chills the air above it into fog. On summer afternoons cool sea air and fog flow inland through gaps in the coastal hills, cooling the vineyards."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <rect x="0" y="120" width="230" height="60" fill="#1d3b5a" />
      <path d="M40 175 C 80 150, 120 140, 170 128" stroke={COLD} strokeWidth="3" fill="none" markerEnd="url(#cur-cold)" />
      <polygon points="230,180 230,130 300,95 360,130 640,130 640,180" fill="#3b3326" />
      {[[60, 100], [120, 92], [180, 98], [250, 88], [320, 104], [400, 112]].map(([cx, cy], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="46" ry="14" fill="#cfd8dc" opacity={i < 4 ? 0.5 : 0.3} />
      ))}
      <path d="M200 70 L 470 70" stroke={COLD} strokeWidth="2.5" strokeDasharray="6 5" markerEnd="url(#cur-cold)" />
      {[460, 500, 540, 580].map((x) => (
        <g key={x}>
          <line x1={x} y1="130" x2={x} y2="118" stroke="#8B7355" strokeWidth="2" />
          <circle cx={x} cy="114" r="5" fill="#5f8a4a" />
        </g>
      ))}
      <circle cx="600" cy="30" r="12" fill="#F2C94C" />
      <g fontFamily="'Source Sans 3', sans-serif" fontSize="12">
        <text x="10" y="140" fill={COLD}>cold water wells up</text>
        <text x="10" y="74" fill={ink.text}>cold sea chills the air: fog</text>
        <text x="300" y="60" fill={COLD}>cool air and fog flow inland through gaps</text>
        <text x="520" y="160" fill={ink.text} textAnchor="middle">vineyards cooled</text>
        <text x="300" y="172" fill={ink.soft} textAnchor="middle" fontSize="11">coastal hills</text>
      </g>
    </svg>
    <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>
      In California, sea breezes through the Petaluma Gap and the Golden Gate cool the south of Napa County, around Carneros.
    </p>
  </Figure>
);
