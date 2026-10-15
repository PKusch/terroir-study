import { AUSTRIA_REGIONS as REGIONS } from "./data/austria.js";
import { regionProps, mapProps } from "./a11y.js";
import { geoToSvgAustria as geoToSvg, ptAustria as pt } from "./geo.js";
import { AUSTRIA_REGION_PATHS } from "./data/austria-map.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const toPath = (points) => "M" + points.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

export const AustriaMap = ({ activeRegion, onRegionClick, quizMode, viewBox = "0 0 500 420", children }) => {
  const regionPaths = AUSTRIA_REGION_PATHS;

  // Austria outline traced from real geographic points
  // Clockwise from Lake Constance: the German, Czech, Slovak, Hungarian, Slovenian, Italian and Swiss borders
  const austriaOutline = [
    [9.62, 47.52],
    [9.75, 47.55],
    [10.2, 47.4],
    [10.7, 47.55],
    [11.25, 47.4],
    [12.17, 47.62],
    [12.95, 47.75],
    [13.0, 47.85],
    [13.05, 48.25],
    [13.45, 48.57],
    [13.8, 48.77],
    [14.7, 48.58],
    [14.95, 48.75],
    [15.0, 49.02],
    [15.6, 48.88],
    [16.05, 48.75],
    [16.4, 48.73],
    [16.93, 48.62],
    [17.1, 48.15],
    [17.16, 48.0],
    [16.85, 47.68],
    [16.45, 47.5],
    [16.43, 47.35],
    [16.32, 47.07],
    [16.1, 46.87],
    [15.98, 46.67],
    [15.65, 46.68],
    [15.15, 46.65],
    [14.6, 46.45],
    [13.7, 46.52],
    [13.4, 46.6],
    [12.9, 46.6],
    [12.45, 46.65],
    [12.2, 46.9],
    [11.5, 47.0],
    [10.9, 46.8],
    [10.45, 46.87],
    [10.1, 46.85],
    [9.55, 47.05],
  ];
  const outlinePath = toPath(austriaOutline);

  // Faint neighbours, sharing the border points above so the seams line up
  const neighbours = [
    { name: "Deutschland", label: [10.6, 48.6], points: [[9.62, 47.52], [9.75, 47.55], [10.2, 47.4], [10.7, 47.55], [11.25, 47.4], [12.17, 47.62], [12.95, 47.75], [13.0, 47.85], [13.05, 48.25], [13.45, 48.57], [13.8, 48.77], [13.8, 49.9], [9.4, 49.9], [9.4, 47.52]] },
    { name: "Česko", label: [14.9, 49.5], points: [[13.8, 48.77], [14.7, 48.58], [14.95, 48.75], [15.0, 49.02], [15.6, 48.88], [16.05, 48.75], [16.4, 48.73], [16.93, 48.62], [17.3, 48.75], [17.3, 49.9], [13.8, 49.9]] },
    { name: "Slovensko", label: [17.0, 48.95], points: [[16.93, 48.62], [17.1, 48.15], [17.16, 48.0], [17.3, 48.0], [17.3, 48.75]] },
    { name: "Magyarország", label: [17.0, 47.3], points: [[17.16, 48.0], [16.85, 47.68], [16.45, 47.5], [16.43, 47.35], [16.32, 47.07], [16.1, 46.87], [15.98, 46.67], [15.98, 45.5], [17.3, 45.5], [17.3, 48.0]] },
    { name: "Slovenija", label: [14.7, 46.0], points: [[15.98, 46.67], [15.65, 46.68], [15.15, 46.65], [14.6, 46.45], [13.7, 46.52], [13.7, 45.5], [15.98, 45.5]] },
    { name: "Italia", label: [11.6, 46.1], points: [[13.7, 46.52], [13.4, 46.6], [12.9, 46.6], [12.45, 46.65], [12.2, 46.9], [11.5, 47.0], [10.9, 46.8], [10.45, 46.87], [10.45, 45.5], [13.7, 45.5]] },
    { name: "Schweiz", label: [9.9, 46.4], points: [[9.62, 47.52], [9.55, 47.05], [10.1, 46.85], [10.45, 46.87], [10.45, 45.5], [9.4, 45.5], [9.4, 47.52]] },
  ];

  // Wien coordinates
  const capital = geoToSvg(16.37, 48.21);

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "100%", maxHeight: "520px" }} {...mapProps({ country: "Austria", quizMode })}>
      <defs>
        <filter id="glowAustria">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadowAustria">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
        <linearGradient id="austriaFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D9" />
          <stop offset="100%" stopColor="#D5D0C4" />
        </linearGradient>
      </defs>

      {/* Neighbouring countries — faint, for orientation only */}
      {neighbours.map(({ name, label, points }) => {
        const [lx, ly] = geoToSvg(label[0], label[1]);
        return (
          <g key={name}>
            <path d={toPath(points)} fill="url(#austriaFill)" stroke="#B8B0A0" strokeWidth="1" strokeLinejoin="round" opacity="0.35" />
            <text x={lx} y={ly} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily={serif}>{name}</text>
          </g>
        );
      })}

      {/* Austria — real geographic outline */}
      <path
        d={outlinePath}
        fill="url(#austriaFill)"
        stroke="#B8B0A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#shadowAustria)"
      />

      {/* Capital marker */}
      <circle cx={capital[0]} cy={capital[1]} r="3.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.5" />
      <text x={capital[0] + 7} y={capital[1] + 2} fontSize="8" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">Wien</text>

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
                filter: isActive ? "url(#glowAustria)" : "none"
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
      {/* Danube: from Passau through Linz and Melk to Krems, Vienna and Bratislava */}
      <path d={`M${pt(13.45,48.57)} L${pt(14.3,48.3)} L${pt(15.33,48.23)} L${pt(15.6,48.41)} L${pt(16.37,48.21)} L${pt(17.1,48.15)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />

      {/* River labels */}
      <text x={geoToSvg(14.4, 48.1)[0]} y={geoToSvg(14.4, 48.1)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily={serif}>Donau</text>
    {children}
    </svg>
  );
};
