import { HUNGARY_REGIONS as REGIONS } from "./data/hungary.js";
import { regionProps, mapProps } from "./a11y.js";
import { geoToSvgHungary as geoToSvg, ptHungary as pt } from "./geo.js";
import { HUNGARY_REGION_PATHS } from "./data/hungary-map.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const toPath = (points) => "M" + points.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

export const HungaryMap = ({ activeRegion, onRegionClick, quizMode, viewBox = "0 0 500 420", children }) => {
  const regionPaths = HUNGARY_REGION_PATHS;

  // Hungary outline traced from real geographic points
  // Clockwise from Rajka in the northwest: the Slovak, Ukrainian, Romanian, Serbian, Croatian, Slovenian and Austrian borders
  const hungaryOutline = [
    [17.16, 48.0],
    [17.4, 47.85],
    [18.1, 47.75],
    [18.85, 47.82],
    [19.05, 48.07],
    [19.65, 48.25],
    [20.4, 48.55],
    [21.0, 48.52],
    [21.45, 48.57],
    [22.15, 48.4],
    [22.5, 48.1],
    [22.9, 47.95],
    [22.45, 47.75],
    [22.0, 47.45],
    [21.65, 46.95],
    [21.3, 46.75],
    [21.1, 46.3],
    [20.75, 46.2],
    [20.1, 46.15],
    [19.6, 46.17],
    [18.95, 45.97],
    [18.65, 45.9],
    [18.2, 45.78],
    [17.85, 45.98],
    [17.2, 46.2],
    [16.9, 46.35],
    [16.6, 46.47],
    [16.35, 46.55],
    [16.1, 46.87],
    [16.32, 47.07],
    [16.43, 47.35],
    [16.45, 47.5],
    [16.85, 47.68],
  ];
  const outlinePath = toPath(hungaryOutline);

  // Faint neighbours, sharing the border points above so the seams line up
  const neighbours = [
    { name: "Slovensko", label: [19.5, 48.95], points: [[16.93, 48.62], [17.1, 48.15], [17.16, 48.0], [17.4, 47.85], [18.1, 47.75], [18.85, 47.82], [19.05, 48.07], [19.65, 48.25], [20.4, 48.55], [21.0, 48.52], [21.45, 48.57], [22.15, 48.4], [23.1, 48.4], [23.1, 49.3], [16.8, 49.3]] },
    { name: "Україна", label: [22.9, 48.2], points: [[22.15, 48.4], [22.5, 48.1], [22.9, 47.95], [23.1, 47.9], [23.1, 48.4]] },
    { name: "România", label: [22.7, 46.4], points: [[22.9, 47.95], [22.45, 47.75], [22.0, 47.45], [21.65, 46.95], [21.3, 46.75], [21.1, 46.3], [20.75, 46.2], [20.75, 45.1], [23.1, 45.1], [23.1, 47.9]] },
    { name: "Srbija", label: [19.6, 45.5], points: [[20.75, 46.2], [20.1, 46.15], [19.6, 46.17], [18.95, 45.97], [18.95, 45.1], [20.75, 45.1]] },
    { name: "Hrvatska", label: [17.0, 45.5], points: [[18.95, 45.97], [18.65, 45.9], [18.2, 45.78], [17.85, 45.98], [17.2, 46.2], [16.9, 46.35], [16.6, 46.47], [15.7, 46.3], [15.7, 45.1], [18.95, 45.1]] },
    { name: "Slovenija", label: [16.0, 46.5], points: [[16.1, 46.87], [16.35, 46.55], [16.6, 46.47], [15.7, 46.3], [15.7, 46.87]] },
    { name: "Österreich", label: [16.3, 47.85], points: [[16.93, 48.62], [17.16, 48.0], [16.85, 47.68], [16.45, 47.5], [16.43, 47.35], [16.32, 47.07], [16.1, 46.87], [15.7, 46.87], [15.7, 48.62]] },
  ];

  // Budapest coordinates
  const capital = geoToSvg(19.04, 47.5);

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "100%", maxHeight: "520px" }} {...mapProps({ country: "Hungary", quizMode })}>
      <defs>
        <filter id="glowHungary">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadowHungary">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
        <linearGradient id="hungaryFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D9" />
          <stop offset="100%" stopColor="#D5D0C4" />
        </linearGradient>
      </defs>

      {/* Neighbouring countries — faint, for orientation only */}
      {neighbours.map(({ name, label, points }) => {
        const [lx, ly] = geoToSvg(label[0], label[1]);
        return (
          <g key={name}>
            <path d={toPath(points)} fill="url(#hungaryFill)" stroke="#B8B0A0" strokeWidth="1" strokeLinejoin="round" opacity="0.35" />
            <text x={lx} y={ly} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily={serif}>{name}</text>
          </g>
        );
      })}

      {/* Hungary — real geographic outline */}
      <path
        d={outlinePath}
        fill="url(#hungaryFill)"
        stroke="#B8B0A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#shadowHungary)"
      />

      {/* Capital marker */}
      <circle cx={capital[0]} cy={capital[1]} r="3.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.5" />
      <text x={capital[0] + 7} y={capital[1] + 2} fontSize="8" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">Budapest</text>

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
                filter: isActive ? "url(#glowHungary)" : "none"
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
      {/* Danube: from the Slovak border past Budapest to the Serbian border; Tisza: from the northeast to the south */}
      <path d={`M${pt(17.4,47.85)} L${pt(18.1,47.75)} L${pt(18.97,47.78)} L${pt(19.05,47.5)} L${pt(18.95,47.0)} L${pt(18.85,46.62)} L${pt(18.68,45.99)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />
      <path d={`M${pt(22.3,48.1)} L${pt(21.41,48.12)} L${pt(21.0,47.7)} L${pt(20.4,47.3)} L${pt(20.2,47.18)} L${pt(20.15,46.25)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />

      {/* River labels */}
      <text x={geoToSvg(19.1, 47.0)[0]} y={geoToSvg(19.1, 47.0)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily={serif}>Duna</text>
      <text x={geoToSvg(20.35, 46.7)[0]} y={geoToSvg(20.35, 46.7)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily={serif}>Tisza</text>
    {children}
    </svg>
  );
};
