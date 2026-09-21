import { REGIONS } from "./data/regions.js";
import { regionProps, mapProps } from "./a11y.js";
import { NEW_WORLD_TILES } from "./data/newworld-map.js";

const serif = "'Cormorant Garamond', Georgia, serif";

// ─── New World map: six tiles ────────────────────────────────────────────────
// Same props and the same look as the country maps. Each tile is its own small
// map: a faint outline for orientation, a city, the Andes where they matter,
// and the wine area as the clickable shape.
export const NewWorldMap = ({ activeRegion, onRegionClick, quizMode, viewBox = "0 0 500 420", children }) => (
  <svg viewBox={viewBox} style={{ width: "100%", height: "100%", maxHeight: "520px" }} {...mapProps({ country: "New World", quizMode })}>
    <defs>
      <filter id="glowNewWorld">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="shadowNewWorld">
        <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
      </filter>
      <linearGradient id="newWorldFill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8E4D9" />
        <stop offset="100%" stopColor="#D5D0C4" />
      </linearGradient>
      {NEW_WORLD_TILES.map((t) => (
        <clipPath key={t.key} id={`clip-${t.key}`}>
          <rect x={t.x} y={t.y} width={t.width} height={t.height} />
        </clipPath>
      ))}
    </defs>

    {NEW_WORLD_TILES.map((t) => {
      const region = REGIONS[t.key] ?? { name: t.key, color: "#8B7355" };
      const isActive = activeRegion === t.key;
      return (
        <g key={t.key}>
          <rect x={t.x} y={t.y} width={t.width} height={t.height} fill="none" stroke="#2a2520" strokeWidth="0.6" />
          <g clipPath={`url(#clip-${t.key})`}>
            {t.outlines.map((d, i) => (
              <path key={i} d={d} fill="url(#newWorldFill)" stroke="#B8B0A0" strokeWidth="1" strokeLinejoin="round" opacity="0.5" filter="url(#shadowNewWorld)" />
            ))}
            {t.line && <path d={t.line} fill="none" stroke="#B8B0A0" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.7" />}
            <circle cx={t.city.at[0]} cy={t.city.at[1]} r="2.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.2" />
            <text x={t.city.at[0] + 5} y={t.city.at[1] + 3} fontSize="6.5" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">{t.city.name}</text>
            <path
              d={t.wine}
              fill={isActive ? region.color : region.color + "55"}
              stroke={isActive ? region.color : "#8B7355"}
              strokeWidth={isActive ? 2.5 : 1}
              strokeLinejoin="round"
              style={{ cursor: "pointer", transition: "all 0.3s ease", filter: isActive ? "url(#glowNewWorld)" : "none" }}
              {...regionProps({ name: region.name, active: isActive, onSelect: () => onRegionClick(t.key), quizMode })}
              onClick={() => onRegionClick(t.key)}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.setAttribute("fill", region.color + "99");
                  e.target.setAttribute("stroke-width", "1.5");
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.setAttribute("fill", region.color + "55");
                  e.target.setAttribute("stroke-width", "1");
                }
              }}
            />
          </g>
          {!quizMode && (
            <text
              x={t.label[0]}
              y={t.label[1]}
              fill={isActive ? region.color : "#8B7355"}
              fontSize="10"
              fontFamily={serif}
              fontWeight={isActive ? "700" : "500"}
              style={{ pointerEvents: "none" }}
            >
              {region.name}
            </text>
          )}
        </g>
      );
    })}
  {children}
    </svg>
);
