import { ITALY_REGIONS as REGIONS } from "./data/italy.js";
import { regionProps } from "./a11y.js";
import { geoToSvgItaly as geoToSvg, ptItaly as pt } from "./geo.js";
import { ITALY_REGION_PATHS } from "./data/italy-map.js";

export const ItalyMap = ({ activeRegion, onRegionClick, quizMode, viewBox = "0 0 500 420", children }) => {
  const regionPaths = ITALY_REGION_PATHS;

  // Italy mainland outline traced from real geographic points
  // Going clockwise from the French border at Ventimiglia (north-west)
  const italyOutline = [
    // Ligurian and Tyrrhenian coast (north to south)
    [7.5, 43.8],    // Ventimiglia (French border)
    [8.9, 44.4],    // Genoa
    [9.8, 44.1],    // La Spezia
    [10.3, 43.55],  // Livorno
    [10.5, 42.95],  // Piombino
    [11.0, 42.6],   // Grosseto coast
    [11.8, 42.1],   // Civitavecchia
    [12.2, 41.75],  // Rome coast
    [13.6, 41.2],   // Gaeta
    [14.25, 40.85], // Naples
    [14.9, 40.5],   // Salerno
    [15.2, 40.0],   // Cilento
    [15.7, 40.0],   // Gulf of Policastro
    [16.0, 39.3],   // Paola (Calabria)
    [16.2, 38.9],   // Lamezia
    [15.65, 38.1],  // Reggio Calabria (the toe)
    [16.05, 37.92], // Cape Spartivento
    // Ionian coast (the instep) and the heel
    [17.15, 39.1],  // Crotone
    [16.7, 39.6],   // Gulf of Taranto west
    [17.25, 40.45], // Taranto
    [18.0, 40.05],  // Gallipoli
    [18.5, 39.8],   // Santa Maria di Leuca (heel tip)
    [18.5, 40.15],  // Otranto
    [18.0, 40.65],  // Brindisi
    // Adriatic coast (south to north)
    [16.9, 41.13],  // Bari
    [16.2, 41.9],   // Gargano spur
    [15.0, 42.0],   // Termoli
    [14.2, 42.45],  // Pescara
    [13.5, 43.6],   // Ancona
    [12.6, 44.05],  // Rimini
    [12.5, 44.9],   // Po delta
    [12.35, 45.45], // Venice
    [13.75, 45.65], // Trieste
    // Alps (east to west)
    [13.6, 46.5],   // Tarvisio
    [12.2, 47.0],   // Dolomites / Brenner
    [10.5, 46.85],  // Stelvio
    [9.3, 46.5],    // Lake Como north
    [8.5, 46.3],    // Simplon
    [7.9, 45.9],    // Aosta valley
    [6.9, 45.8],    // Mont Blanc
    [6.65, 45.1],   // Mont Cenis
    [7.0, 44.6],    // Maritime Alps
    [7.5, 43.8],    // Back to Ventimiglia
  ];

  const outlinePath = "M" + italyOutline.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

  // Sicily outline
  const sicily = [
    [12.5, 38.05], [13.35, 38.2], [14.0, 38.05], [15.25, 38.25], [15.65, 38.25],
    [15.1, 37.5], [15.3, 37.05], [15.1, 36.7], [14.25, 37.05], [13.55, 37.25],
    [13.1, 37.5], [12.6, 37.65], [12.5, 38.05]
  ];
  const sicilyPath = "M" + sicily.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

  // Sardinia outline
  const sardinia = [
    [9.2, 41.25], [9.6, 40.9], [9.7, 40.3], [9.7, 39.5], [9.1, 39.2],
    [8.6, 38.9], [8.4, 39.3], [8.4, 40.0], [8.2, 40.6], [8.15, 41.0], [9.2, 41.25]
  ];
  const sardiniaPath = "M" + sardinia.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

  // Rome coordinates
  const rome = geoToSvg(12.5, 41.9);

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "100%", maxHeight: "520px" }}>
      <defs>
        <filter id="glowItaly">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadowItaly">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
        <linearGradient id="italyFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D9" />
          <stop offset="100%" stopColor="#D5D0C4" />
        </linearGradient>
      </defs>

      {/* Italy mainland — real geographic outline */}
      <path
        d={outlinePath}
        fill="url(#italyFill)"
        stroke="#B8B0A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#shadowItaly)"
      />

      {/* Sicily */}
      <path
        d={sicilyPath}
        fill="url(#italyFill)"
        stroke="#B8B0A0"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <text x={geoToSvg(13.3, 36.9)[0]} y={geoToSvg(13.3, 36.9)[1]} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Sicilia</text>

      {/* Sardinia */}
      <path
        d={sardiniaPath}
        fill="url(#italyFill)"
        stroke="#B8B0A0"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <text x={geoToSvg(8.5, 40.15)[0]} y={geoToSvg(8.5, 40.15)[1]} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Sardegna</text>

      {/* Rome marker */}
      <circle cx={rome[0]} cy={rome[1]} r="3.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.5" />
      <text x={rome[0] + 7} y={rome[1] + 2} fontSize="8" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">Rome</text>

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
                filter: isActive ? "url(#glowItaly)" : "none"
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
      <path d={`M${pt(7.7,45.05)} Q${pt(9.0,45.15)} ${pt(10.0,45.1)} Q${pt(11.2,44.95)} ${pt(12.4,44.95)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />

      {/* River labels */}
      <text x={geoToSvg(9.3, 44.95)[0]} y={geoToSvg(9.3, 44.95)[1] + 8} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Po</text>
    {children}
    </svg>
  );
};
