import { PORTUGAL_REGIONS as REGIONS } from "./data/portugal.js";
import { regionProps, mapProps } from "./a11y.js";
import { geoToSvgPortugal as geoToSvg, ptPortugal as pt } from "./geo.js";
import { PORTUGAL_REGION_PATHS } from "./data/portugal-map.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const toPath = (points) => "M" + points.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

export const PortugalMap = ({ activeRegion, onRegionClick, quizMode, viewBox = "0 0 500 420", children }) => {
  const regionPaths = PORTUGAL_REGION_PATHS;

  // Portugal outline traced from real geographic points
  // Clockwise from the Minho: the Spanish border south to the Guadiana, then the Algarve and the Atlantic coast north
  const portugalOutline = [
    [-8.87, 41.87],
    [-8.25, 42.1],
    [-7.45, 41.88],
    [-6.9, 41.98],
    [-6.2, 41.58],
    [-6.95, 41.03],
    [-6.85, 40.6],
    [-7.05, 40.2],
    [-7.0, 39.65],
    [-7.35, 39.4],
    [-7.15, 38.88],
    [-7.25, 38.15],
    [-7.4, 37.55],
    [-7.4, 37.17],
    [-7.9, 37.0],
    [-8.67, 37.1],
    [-9.0, 37.02],
    [-8.87, 37.95],
    [-8.9, 38.5],
    [-9.2, 38.42],
    [-9.5, 38.78],
    [-9.4, 39.35],
    [-9.1, 39.6],
    [-8.87, 40.15],
    [-8.75, 40.65],
    [-8.68, 41.15],
    [-8.85, 41.7],
  ];
  const outlinePath = toPath(portugalOutline);

  // Faint neighbours, sharing the border points above so the seams line up
  const neighbours = [
    { name: "España", label: [-5.4, 40.1], points: [[-8.87, 41.87], [-8.25, 42.1], [-7.45, 41.88], [-6.9, 41.98], [-6.2, 41.58], [-6.95, 41.03], [-6.85, 40.6], [-7.05, 40.2], [-7.0, 39.65], [-7.35, 39.4], [-7.15, 38.88], [-7.25, 38.15], [-7.4, 37.55], [-7.4, 37.17], [-7.4, 36.9], [-3.75, 36.9], [-3.75, 42.2], [-8.9, 42.2]] },
  ];

  // Lisboa coordinates
  const capital = geoToSvg(-9.14, 38.72);

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "100%", maxHeight: "520px" }} {...mapProps({ country: "Portugal", quizMode })}>
      <defs>
        <filter id="glowPortugal">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadowPortugal">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
        <linearGradient id="portugalFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D9" />
          <stop offset="100%" stopColor="#D5D0C4" />
        </linearGradient>
      </defs>

      {/* Neighbouring countries — faint, for orientation only */}
      {neighbours.map(({ name, label, points }) => {
        const [lx, ly] = geoToSvg(label[0], label[1]);
        return (
          <g key={name}>
            <path d={toPath(points)} fill="url(#portugalFill)" stroke="#B8B0A0" strokeWidth="1" strokeLinejoin="round" opacity="0.35" />
            <text x={lx} y={ly} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily={serif}>{name}</text>
          </g>
        );
      })}

      {/* Portugal — real geographic outline */}
      <path
        d={outlinePath}
        fill="url(#portugalFill)"
        stroke="#B8B0A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#shadowPortugal)"
      />

      {/* Capital marker */}
      <circle cx={capital[0]} cy={capital[1]} r="3.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.5" />
      <text x={capital[0] + 7} y={capital[1] + 2} fontSize="8" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">Lisboa</text>

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
                filter: isActive ? "url(#glowPortugal)" : "none"
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

      {/* Rivers */}
      {/* Douro: from the Spanish border through Pinhão and Régua to Porto */}
      <path d={`M${pt(-6.55,41.1)} L${pt(-6.95,41.03)} L${pt(-7.55,41.19)} L${pt(-7.79,41.16)} L${pt(-8.2,41.1)} L${pt(-8.68,41.14)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />
      {/* Tagus: from the Spanish border across the middle to the sea at Lisbon */}
      <path d={`M${pt(-7.0,39.65)} L${pt(-8.2,39.46)} L${pt(-8.9,38.95)} L${pt(-9.15,38.7)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />

      {/* River labels */}
      <text x={geoToSvg(-7.3, 41.45)[0]} y={geoToSvg(-7.3, 41.45)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily={serif}>Douro</text>
      <text x={geoToSvg(-8.4, 39.3)[0]} y={geoToSvg(-8.4, 39.3)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily={serif}>Tejo</text>
    {children}
    </svg>
  );
};
