import { GERMANY_REGIONS as REGIONS } from "./data/germany.js";
import { geoToSvgGermany as geoToSvg, ptGermany as pt } from "./geo.js";
import { GERMANY_REGION_PATHS } from "./data/germany-map.js";

const serif = "'Cormorant Garamond', Georgia, serif";
const toPath = (points) => "M" + points.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

export const GermanyMap = ({ activeRegion, onRegionClick, quizMode, viewBox = "0 0 500 420", children }) => {
  const regionPaths = GERMANY_REGION_PATHS;

  // Germany outline traced from real geographic points
  // Going clockwise from the Danish border on the North Sea coast
  const germanyOutline = [
    // Baltic coast (west to east)
    [8.65, 54.9],   // Danish border, North Sea side
    [9.4, 54.85],   // Flensburg
    [10.0, 54.5],   // Kiel bay
    [10.9, 54.0],   // Lübeck bay
    [11.4, 54.0],   // Wismar
    [12.1, 54.2],   // Rostock
    [12.9, 54.45],  // Darss
    [13.4, 54.6],   // Rügen
    [13.75, 54.15], // Greifswald
    [14.2, 53.9],   // Usedom (Polish border on the coast)
    // Polish border (north to south)
    [14.15, 53.0],  // Oder
    [14.6, 52.6],   // Frankfurt (Oder)
    [14.75, 52.05], // Guben
    [14.95, 51.4],  // Neisse near Görlitz
    [14.8, 50.85],  // Zittau (three-country corner)
    // Czech border
    [13.6, 50.7],   // Erzgebirge
    [12.3, 50.2],   // Vogtland
    [12.6, 49.7],   // Upper Palatinate forest
    [13.8, 48.8],   // Bavarian Forest
    // Austrian border (east to west)
    [13.7, 48.5],   // Passau
    [12.8, 48.2],   // Inn
    [12.9, 47.7],   // Berchtesgaden
    [12.3, 47.7],   // Kufstein
    [11.4, 47.4],   // Mittenwald
    [10.4, 47.3],   // Oberstdorf
    [9.7, 47.55],   // Lindau, Lake Constance
    // Swiss and French borders (the Rhine)
    [8.6, 47.6],    // Schaffhausen
    [7.6, 47.6],    // Basel
    [7.6, 48.3],    // Strasbourg
    [8.2, 48.95],   // Lauterbourg
    // Saarland, Luxembourg, Belgium, Netherlands
    [7.0, 49.2],    // Saarbrücken
    [6.35, 49.5],   // Luxembourg border
    [6.1, 50.1],    // Eifel
    [6.0, 50.75],   // Aachen
    [5.9, 51.05],   // Dutch border, Limburg
    [6.15, 51.9],   // Kleve
    [7.05, 52.25],  // Bentheim
    [6.7, 52.65],   // Emlichheim
    [7.2, 53.25],   // Ems
    // North Sea coast (west to east)
    [7.0, 53.65],   // Borkum coast
    [8.0, 53.7],    // Wilhelmshaven
    [8.5, 53.55],   // Bremerhaven
    [8.9, 53.9],    // Cuxhaven
    [8.85, 54.3],   // Eiderstedt
    [8.65, 54.9],   // Back to the Danish border
  ];
  const outlinePath = toPath(germanyOutline);

  // Faint neighbours, sharing the border points above so the seams line up
  const neighbours = [
    { name: "Danmark", label: [9.3, 55.1], points: [[8.65, 54.9], [8.6, 55.2], [10.5, 55.2], [10.0, 54.9], [9.4, 54.85]] },
    { name: "Nederland", label: [5.7, 52.5], points: [[5.5, 53.5], [7.0, 53.65], [7.2, 53.25], [6.7, 52.65], [7.05, 52.25], [6.15, 51.9], [5.9, 51.05], [5.5, 51.3]] },
    { name: "België", label: [5.6, 50.4], points: [[5.5, 51.3], [5.9, 51.05], [6.0, 50.75], [6.1, 50.1], [6.35, 49.5], [5.5, 49.5]] },
    { name: "France", label: [6.3, 48.3], points: [[5.5, 49.5], [6.35, 49.5], [7.0, 49.2], [8.2, 48.95], [7.6, 48.3], [7.6, 47.6], [5.5, 47.0]] },
    { name: "Schweiz", label: [8.3, 47.2], points: [[7.6, 47.6], [8.6, 47.6], [9.7, 47.55], [9.7, 47.0], [6.5, 47.0]] },
    { name: "Österreich", label: [12.5, 47.25], points: [[9.7, 47.55], [10.4, 47.3], [11.4, 47.4], [12.3, 47.7], [12.9, 47.7], [12.8, 48.2], [13.7, 48.5], [13.8, 48.8], [15.5, 48.8], [15.5, 47.0], [9.7, 47.0]] },
    { name: "Česko", label: [14.3, 49.8], points: [[13.8, 48.8], [12.6, 49.7], [12.3, 50.2], [13.6, 50.7], [14.8, 50.85], [15.5, 50.9], [15.5, 48.8]] },
    { name: "Polska", label: [14.7, 52.35], points: [[14.8, 50.85], [14.95, 51.4], [14.75, 52.05], [14.6, 52.6], [14.15, 53.0], [14.2, 53.9], [15.5, 54.3], [15.5, 50.9]] },
  ];

  // Berlin coordinates
  const berlin = geoToSvg(13.4, 52.52);

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "100%", maxHeight: "520px" }}>
      <defs>
        <filter id="glowGermany">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadowGermany">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
        <linearGradient id="germanyFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D9" />
          <stop offset="100%" stopColor="#D5D0C4" />
        </linearGradient>
      </defs>

      {/* Neighbouring countries — faint, for orientation only */}
      {neighbours.map(({ name, label, points }) => {
        const [lx, ly] = geoToSvg(label[0], label[1]);
        return (
          <g key={name}>
            <path d={toPath(points)} fill="url(#germanyFill)" stroke="#B8B0A0" strokeWidth="1" strokeLinejoin="round" opacity="0.35" />
            <text x={lx} y={ly} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily={serif}>{name}</text>
          </g>
        );
      })}

      {/* Germany — real geographic outline */}
      <path
        d={outlinePath}
        fill="url(#germanyFill)"
        stroke="#B8B0A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#shadowGermany)"
      />

      {/* Berlin marker */}
      <circle cx={berlin[0]} cy={berlin[1]} r="3.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.5" />
      <text x={berlin[0] + 7} y={berlin[1] + 2} fontSize="8" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">Berlin</text>

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
                filter: isActive ? "url(#glowGermany)" : "none"
              }}
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
      {/* Rhine: north from Basel along the French border, past Mainz, west to Bingen, then north to the Dutch border */}
      <path d={`M${pt(7.6,47.6)} L${pt(7.7,48.3)} L${pt(8.35,49.0)} L${pt(8.45,49.5)} L${pt(8.25,50.0)} L${pt(7.9,49.97)} Q${pt(7.6,50.2)} ${pt(7.6,50.35)} Q${pt(7.0,50.8)} ${pt(6.8,51.25)} L${pt(6.25,51.85)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />
      {/* Mosel: from the Luxembourg border through Trier and Bernkastel to the Rhine at Koblenz */}
      <path d={`M${pt(6.4,49.5)} L${pt(6.65,49.75)} Q${pt(7.05,49.95)} ${pt(7.15,50.15)} L${pt(7.6,50.35)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />

      {/* River labels */}
      <text x={geoToSvg(8.55, 49.4)[0]} y={geoToSvg(8.55, 49.4)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily={serif}>Rhein</text>
      <text x={geoToSvg(6.4, 50.0)[0]} y={geoToSvg(6.4, 50.0)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily={serif}>Mosel</text>
    {children}
    </svg>
  );
};
