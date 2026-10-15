import { GREECE_REGIONS as REGIONS } from "./data/greece.js";
import { regionProps, mapProps } from "./a11y.js";
import { geoToSvgGreece as geoToSvg, ptGreece as pt } from "./geo.js";
import { GREECE_REGION_PATHS } from "./data/greece-map.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const toPath = (points) => "M" + points.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

export const GreeceMap = ({ activeRegion, onRegionClick, quizMode, viewBox = "0 0 500 420", children }) => {
  const regionPaths = GREECE_REGION_PATHS;

  // Greece outline traced from real geographic points
  // Clockwise from the Albanian coast: the Albanian, Macedonian, Bulgarian and Turkish borders, the Aegean coast, the Peloponnese, and the Ionian coast
  const greeceOutline = [
    [20.0, 39.7],
    [20.5, 40.0],
    [20.8, 40.3],
    [21.05, 40.75],
    [21.1, 40.85],
    [21.7, 40.93],
    [22.3, 41.15],
    [22.9, 41.34],
    [23.0, 41.4],
    [23.4, 41.4],
    [24.0, 41.5],
    [24.6, 41.4],
    [25.25, 41.25],
    [25.9, 41.35],
    [26.0, 41.6],
    [26.33, 41.71],
    [26.6, 41.35],
    [26.4, 40.95],
    [26.2, 40.8],
    [25.87, 40.85],
    [25.0, 40.95],
    [24.4, 40.95],
    [23.85, 40.75],
    [23.8, 40.4],
    [23.3, 40.0],
    [22.8, 40.35],
    [22.95, 40.62],
    [22.7, 40.5],
    [22.55, 40.25],
    [22.6, 40.0],
    [22.95, 39.36],
    [23.25, 39.2],
    [23.0, 39.0],
    [22.4, 38.9],
    [23.05, 38.7],
    [23.6, 38.4],
    [23.75, 38.3],
    [24.0, 38.15],
    [24.05, 37.7],
    [23.65, 37.93],
    [23.5, 38.05],
    [23.35, 37.98],
    [23.0, 37.93],
    [23.15, 37.6],
    [22.8, 37.55],
    [22.75, 37.4],
    [22.85, 37.15],
    [23.05, 36.7],
    [23.2, 36.45],
    [22.55, 36.76],
    [22.48, 36.38],
    [21.7, 36.82],
    [21.7, 36.92],
    [21.67, 37.25],
    [21.4, 37.65],
    [21.15, 37.9],
    [21.35, 38.15],
    [21.72, 38.25],
    [21.8, 38.3],
    [22.08, 38.25],
    [22.63, 38.07],
    [22.95, 37.94],
    [22.97, 38.0],
    [23.1, 38.2],
    [22.6, 38.35],
    [22.42, 38.43],
    [21.83, 38.39],
    [21.77, 38.33],
    [21.43, 38.37],
    [21.08, 38.53],
    [20.75, 38.95],
    [20.4, 39.28],
    [20.25, 39.5],
  ];
  const islands = [
    [[23.55, 35.45], [24.0, 35.52], [24.47, 35.4], [25.13, 35.34], [25.72, 35.2], [26.3, 35.3], [26.2, 35.1], [25.74, 35.0], [25.0, 34.95], [24.3, 35.0], [23.68, 35.23]],
    [[22.95, 38.85], [23.25, 39.05], [23.35, 38.9], [23.7, 38.55], [24.15, 38.2], [24.55, 38.0], [24.45, 37.95], [24.1, 38.05], [23.8, 38.35], [23.55, 38.45], [23.15, 38.7]],
    [[19.6, 39.75], [19.85, 39.78], [20.1, 39.65], [20.05, 39.45], [19.9, 39.4], [19.85, 39.55]],
    [[25.85, 39.3], [26.3, 39.35], [26.55, 39.1], [26.1, 38.95], [25.9, 39.15]],
    [[27.7, 36.35], [28.1, 36.4], [28.25, 36.2], [27.75, 35.9], [27.7, 36.1]],
    [[25.95, 38.55], [26.1, 38.6], [26.1, 38.2], [25.95, 38.2]],
  ];
  const outlinePath = [greeceOutline, ...islands].map(toPath).join(" ");

  // Faint neighbours, sharing the border points above so the seams line up
  const neighbours = [
    { name: "Shqipëria", label: [19.7, 40.6], points: [[20.0, 39.7], [20.5, 40.0], [20.8, 40.3], [21.05, 40.75], [21.05, 41.9], [19.45, 41.9], [19.45, 41.3], [19.45, 40.45], [19.9, 39.85]] },
    { name: "Северна Македонија", label: [21.9, 41.5], points: [[21.05, 40.75], [21.1, 40.85], [21.7, 40.93], [22.3, 41.15], [22.9, 41.34], [22.95, 41.9], [21.05, 41.9]] },
    { name: "България", label: [24.4, 41.75], points: [[22.9, 41.34], [23.0, 41.4], [23.4, 41.4], [24.0, 41.5], [24.6, 41.4], [25.25, 41.25], [25.9, 41.35], [26.0, 41.6], [26.33, 41.71], [26.4, 41.9], [22.95, 41.9]] },
    { name: "Türkiye", label: [27.3, 40.6], points: [[26.33, 41.71], [26.6, 41.35], [26.4, 40.95], [26.2, 40.8], [29.3, 40.8], [29.3, 41.9], [26.4, 41.9]] },
  ];

  // Athína coordinates
  const capital = geoToSvg(23.73, 37.98);

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "100%", maxHeight: "520px" }} {...mapProps({ country: "Greece", quizMode })}>
      <defs>
        <filter id="glowGreece">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadowGreece">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
        <linearGradient id="greeceFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D9" />
          <stop offset="100%" stopColor="#D5D0C4" />
        </linearGradient>
      </defs>

      {/* Neighbouring countries — faint, for orientation only */}
      {neighbours.map(({ name, label, points }) => {
        const [lx, ly] = geoToSvg(label[0], label[1]);
        return (
          <g key={name}>
            <path d={toPath(points)} fill="url(#greeceFill)" stroke="#B8B0A0" strokeWidth="1" strokeLinejoin="round" opacity="0.35" />
            <text x={lx} y={ly} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily={serif}>{name}</text>
          </g>
        );
      })}

      {/* Greece — real geographic outline */}
      <path
        d={outlinePath}
        fill="url(#greeceFill)"
        stroke="#B8B0A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#shadowGreece)"
      />

      {/* Capital marker */}
      <circle cx={capital[0]} cy={capital[1]} r="3.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.5" />
      <text x={capital[0] + 7} y={capital[1] + 2} fontSize="8" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">Athína</text>

      {/* Region shapes */}
      {Object.entries(regionPaths).map(([key, { d, label }]) => {
        const region = REGIONS[key];
        const isActive = activeRegion === key;

        return (
          <g key={key}>
            <path
              d={d}
              fill={isActive ? region.color : region.color + "55"}
              stroke={isActive ? region.color : "#8B7355"}
              strokeWidth={isActive ? 2.5 : 1}
              strokeLinejoin="round"
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                filter: isActive ? "url(#glowGreece)" : "none"
              }}
              {...regionProps({ name: region.name, active: isActive, onSelect: () => onRegionClick(key), quizMode })}
              onClick={() => onRegionClick(key)}
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
            {!quizMode && (
              <text
                x={label[0]}
                y={label[1]}
                textAnchor="middle"
                fill={isActive ? "#fff" : "#4A4A4A"}
                fontSize="8"
                fontFamily={serif}
                fontWeight={isActive ? "700" : "400"}
                style={{ pointerEvents: "none", textShadow: isActive ? "0 1px 2px rgba(0,0,0,0.5)" : "none" }}
              >
                {region.name}
              </text>
            )}
          </g>
        );
      })}

      {/* Rivers and seas */}
      <text x={geoToSvg(19.0, 37.8)[0]} y={geoToSvg(19.0, 37.8)[1]} fontSize="8" fill="#7BA3B8" fontStyle="italic" fontFamily={serif}>Ionian Sea</text>
      <text x={geoToSvg(24.8, 39.4)[0]} y={geoToSvg(24.8, 39.4)[1]} fontSize="8" fill="#7BA3B8" fontStyle="italic" fontFamily={serif}>Aegean Sea</text>
    {children}
    </svg>
  );
};
