import { useState } from "react";
import { WORLD_COUNTRIES, WORLD_VIEWBOX } from "./data/world-map.js";
import { COUNTRIES, REGIONS } from "./data/regions.js";

// ─── World map on the home page ──────────────────────────────────────────────
// Every country is drawn; the ones the app covers are coloured and can be
// clicked. A European country opens its own map; a New World country opens
// the New World map on its region. "Europe" zooms in, because the eight
// European countries are small at world scale.

const gold = "#C4A962";

// Natural Earth country id → the app's country, and the region to open on.
export const WINE_COUNTRIES = {
  "250": { country: "France" },
  "380": { country: "Italy" },
  "724": { country: "Spain" },
  "276": { country: "Germany" },
  "040": { country: "Austria" },
  "620": { country: "Portugal" },
  "348": { country: "Hungary" },
  "300": { country: "Greece" },
  "840": { country: "New World", region: "california", regions: ["california", "oregon", "washington", "newYork"], label: "USA" },
  "124": { country: "New World", region: "ontario", regions: ["ontario", "britishColumbia"], label: "Canada" },
  "152": { country: "New World", region: "chile", label: "Chile" },
  "032": { country: "New World", region: "argentina", label: "Argentina" },
  "036": { country: "New World", region: "australia", label: "Australia" },
  "554": { country: "New World", region: "newZealand", label: "New Zealand" },
  "710": { country: "New World", region: "southAfrica", label: "South Africa" }
};

const VIEWS = {
  world: { label: "World", box: WORLD_VIEWBOX },
  europe: { label: "Europe", box: "455 40 125 78" }
};

export const regionsOf = (w) => w.regions ?? (w.region ? [w.region] : COUNTRIES[w.country] ?? []);
const regionCount = (w) => regionsOf(w).length;

export const WorldMap = ({ onCountry, onRegion }) => {
  const [view, setView] = useState("world");
  const [hover, setHover] = useState(null);
  const europe = view === "europe";
  const lineScale = europe ? 0.15 : 1;

  const open = (id) => {
    const w = WINE_COUNTRIES[id];
    if (!w) return;
    if (w.region) onRegion(w.region);
    else onCountry(w.country);
  };
  const hovered = hover ? WINE_COUNTRIES[hover] : null;
  const hoveredName = hovered ? hovered.label ?? hovered.country : null;

  return (
    <div>
      <div role="group" aria-label="Map view" style={{ display: "flex", gap: "6px", justifyContent: "center", marginBottom: "8px" }}>
        {Object.entries(VIEWS).map(([id, v]) => (
          <button key={id} aria-pressed={view === id} onClick={() => setView(id)} style={{
            padding: "5px 14px", borderRadius: "6px", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
            background: view === id ? gold : "transparent", color: view === id ? "#1a1a1a" : "#8B7355",
            border: view === id ? "none" : "1px solid #2a2520", fontWeight: view === id ? 600 : 400
          }}>{v.label}</button>
        ))}
      </div>
      <svg viewBox={VIEWS[view].box} role="group" aria-label="World map of the wine countries in this app"
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "10px" }}>
        {WORLD_COUNTRIES.map((c) => {
          const w = WINE_COUNTRIES[c.id];
          if (!w) return <path key={c.id + c.name} d={c.d} fill="#2a2a2e" stroke="#101418" strokeWidth={0.5 * lineScale} />;
          const lit = hover === c.id;
          const name = w.label ?? w.country;
          return (
            <path key={c.id} d={c.d} role="button" tabIndex={0}
              aria-label={`${name}: ${regionCount(w)} region${regionCount(w) === 1 ? "" : "s"} to study`}
              fill={lit ? "#E3C77A" : gold} stroke="#101418" strokeWidth={0.6 * lineScale}
              style={{ cursor: "pointer", transition: "fill 0.15s" }}
              onMouseEnter={() => setHover(c.id)} onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(c.id)} onBlur={() => setHover(null)}
              onClick={() => open(c.id)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(c.id); } }} />
          );
        })}
        {europe && WORLD_COUNTRIES.filter((c) => WINE_COUNTRIES[c.id] && !WINE_COUNTRIES[c.id].region && c.label).map((c) => (
          <text key={"l" + c.id} x={c.label[0]} y={c.label[1]} fontSize="2.6" textAnchor="middle" fill="#1a1a1a"
            fontFamily="'Source Sans 3', sans-serif" fontWeight="600" style={{ pointerEvents: "none" }}>
            {WINE_COUNTRIES[c.id].country}
          </text>
        ))}
      </svg>
      <div aria-live="polite" style={{ minHeight: "20px", textAlign: "center", fontSize: "12px", color: "#B8B0A0", marginTop: "6px" }}>
        {hoveredName
          ? `${hoveredName}: ${regionsOf(hovered).map((k) => REGIONS[k]?.name ?? k).join(", ")}. Click to explore.`
          : "Click a gold country to explore its regions."}
      </div>
    </div>
  );
};
