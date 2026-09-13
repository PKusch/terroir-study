import { REGIONS } from "./data/regions.js";
import { MAPS } from "./maps.jsx";
import { PLACES } from "./data/places.js";
import { countryOf, pathFor, projectionFor } from "./data/projections.js";
import { zoomViewBox } from "./zoom.js";

// ─── Zoomed view of one region ───────────────────────────────────────────────
// The country map, cropped to the region and with its places marked. Labels
// on the country map are hidden (quizMode) because they would be huge at
// this scale; the region's own places carry the names instead.
export const DetailMap = ({ regionKey }) => {
  const country = countryOf(regionKey);
  const path = pathFor(regionKey);
  const project = projectionFor(regionKey);
  const CountryMap = country ? MAPS[country] : null;
  if (!CountryMap || !path || !project) return null;

  const places = Object.entries(PLACES[regionKey] ?? {});
  const vb = zoomViewBox(path.d, 0.35, 50, places.map(([, [lon, lat]]) => project(lon, lat)));
  const r = vb.w / 110;          // marker radius, in map units, so it stays the same on screen
  const fs = vb.w / 32;          // label size, likewise
  const colour = REGIONS[regionKey]?.color ?? "#C4A962";

  return (
    <CountryMap activeRegion={regionKey} onRegionClick={() => {}} quizMode viewBox={vb.box}>
      {places.map(([name, [lon, lat]], i) => {
        const [x, y] = project(lon, lat);
        // Labels alternate sides so close neighbours do not write over each other.
        const left = i % 2 === 1;
        return (
          <g key={name} style={{ pointerEvents: "none" }}>
            <circle cx={x} cy={y} r={r} fill="#1a1a1a" stroke={colour} strokeWidth={r * 0.6} />
            <text x={left ? x - r * 1.8 : x + r * 1.8} y={y + fs * 0.35} textAnchor={left ? "end" : "start"} fontSize={fs} fill="#1a1a1a" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="600"
              style={{ paintOrder: "stroke", stroke: "#E8E4D9", strokeWidth: fs * 0.25, strokeLinejoin: "round" }}>
              {name}
            </text>
          </g>
        );
      })}
    </CountryMap>
  );
};
