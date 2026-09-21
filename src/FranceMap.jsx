import { REGIONS } from "./data/france.js";
import { regionProps, mapProps } from "./a11y.js";
import { geoToSvg, pt } from "./geo.js";
import { FRANCE_REGION_PATHS } from "./data/france-map.js";

export const FranceMap = ({ activeRegion, onRegionClick, quizMode, viewBox = "0 0 500 420", children }) => {
  const regionPaths = FRANCE_REGION_PATHS;

  // France mainland outline traced from real geographic points
  // Going clockwise from Dunkirk (north)
  const franceOutline = [
    // North coast (Dunkirk to Brittany tip)
    [2.4, 51.05],   // Dunkirk
    [1.6, 50.95],   // Calais
    [1.5, 50.7],    // Boulogne
    [1.4, 50.1],    // Somme estuary
    [0.2, 49.7],    // Dieppe area
    [0.1, 49.5],    // Le Havre
    [-0.4, 49.7],   // Normandy coast
    [-1.2, 49.7],   // Cherbourg peninsula
    [-1.9, 48.85],  // Mont St Michel
    [-2.0, 48.65],  // St Malo
    [-3.0, 48.85],  // North Brittany
    [-4.5, 48.7],   // Brest area
    [-4.8, 48.4],   // Brittany tip
    // West coast (Brittany to Spain)
    [-4.3, 47.85],  // Quimper
    [-3.5, 47.6],   // South Brittany
    [-2.8, 47.3],   // Vannes
    [-2.2, 47.1],   // St Nazaire
    [-2.0, 46.7],   // Noirmoutier
    [-1.5, 46.3],   // La Rochelle
    [-1.2, 45.9],   // Royan
    [-1.2, 45.5],   // Bordeaux coast
    [-1.3, 44.6],   // Arcachon
    [-1.2, 43.5],   // Biarritz
    [-1.7, 43.35],  // Hendaye (Spanish border)
    // Pyrenees (west to east)
    [-0.7, 42.8],
    [0.5, 42.7],
    [1.5, 42.5],
    [2.0, 42.45],
    [3.0, 42.45],   // Perpignan
    // Mediterranean coast
    [3.1, 43.0],    // Narbonne
    [3.5, 43.25],   // Béziers
    [3.9, 43.4],    // Montpellier
    [4.4, 43.4],    // Aigues-Mortes
    [4.85, 43.35],  // Marseille area
    [5.4, 43.25],   // Toulon
    [6.2, 43.1],    // St Tropez
    [6.6, 43.4],    // Cannes
    [7.0, 43.55],   // Nice
    [7.5, 43.78],   // Monaco / Menton
    // Italian border north
    [7.1, 44.2],
    [6.7, 44.5],
    [6.6, 45.1],
    [7.0, 45.5],    // Mont Blanc area
    [6.8, 46.15],   // Lake Geneva south
    [6.15, 46.2],   // Geneva
    // Swiss border
    [6.0, 46.4],
    [6.2, 46.9],
    [6.8, 47.45],   // Basel area
    [7.5, 47.6],    // Rhine
    // German border
    [7.6, 48.1],
    [8.1, 48.95],   // Strasbourg
    [7.5, 49.1],    // Wissembourg
    // Luxembourg / Belgium border
    [6.4, 49.45],
    [5.8, 49.55],
    [5.5, 49.5],
    [4.8, 49.95],
    [4.2, 49.95],
    [3.5, 50.35],
    [2.6, 50.95],
    [2.4, 51.05],   // Back to Dunkirk
  ];

  const outlinePath = "M" + franceOutline.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

  // Corsica outline
  const corsica = [
    [8.6, 42.95], [9.4, 43.0], [9.55, 42.5], [9.4, 41.4],
    [9.15, 41.38], [8.8, 41.65], [8.55, 42.0], [8.55, 42.5], [8.6, 42.95]
  ];
  const corsicaPath = "M" + corsica.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

  // Paris coordinates
  const paris = geoToSvg(2.35, 48.86);

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "100%", maxHeight: "520px" }} {...mapProps({ country: "France", quizMode })}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
        <linearGradient id="franceFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D9" />
          <stop offset="100%" stopColor="#D5D0C4" />
        </linearGradient>
      </defs>

      {/* France mainland — real geographic outline */}
      <path
        d={outlinePath}
        fill="url(#franceFill)"
        stroke="#B8B0A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#shadow)"
      />

      {/* Corsica */}
      <path
        d={corsicaPath}
        fill="url(#franceFill)"
        stroke="#B8B0A0"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <text x={geoToSvg(9.8, 42.0)[0]} y={geoToSvg(9.8, 42.0)[1]} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Corse</text>

      {/* Paris marker */}
      <circle cx={paris[0]} cy={paris[1]} r="3.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.5" />
      <text x={paris[0] + 7} y={paris[1] + 2} fontSize="8" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">Paris</text>

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
                filter: isActive ? "url(#glow)" : "none"
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
                fontFamily="'Cormorant Garamond', Georgia, serif"
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
      <path d={`M${pt(-1.8,47.3)} Q${pt(0,47.4)} ${pt(1.5,47.3)} Q${pt(3,47.2)} ${pt(4,47.3)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />
      <path d={`M${pt(4.8,46.2)} Q${pt(4.7,45.5)} ${pt(4.7,44.8)} Q${pt(4.7,44)} ${pt(4.5,43.4)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />

      {/* River labels */}
      <text x={geoToSvg(0.8, 47.55)[0]} y={geoToSvg(0.8, 47.55)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Loire</text>
      <text x={geoToSvg(5.1, 45.0)[0]} y={geoToSvg(5.1, 45.0)[1]} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Rhône</text>
    {children}
    </svg>
  );
};
