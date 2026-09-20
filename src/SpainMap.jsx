import { SPAIN_REGIONS as REGIONS } from "./data/spain.js";
import { regionProps } from "./a11y.js";
import { geoToSvgSpain as geoToSvg, ptSpain as pt } from "./geo.js";
import { SPAIN_REGION_PATHS } from "./data/spain-map.js";

export const SpainMap = ({ activeRegion, onRegionClick, quizMode, viewBox = "0 0 500 420", children }) => {
  const regionPaths = SPAIN_REGION_PATHS;

  // Spain mainland outline traced from real geographic points
  // Going clockwise from the French border at Irun (north-east corner of the Bay of Biscay)
  const spainOutline = [
    // Pyrenees (west to east)
    [-1.8, 43.35],  // Irun (French border)
    [-1.3, 43.05],  // Roncesvalles
    [-0.5, 42.8],   // Somport pass
    [0.5, 42.7],    // Aneto
    [1.5, 42.5],    // Andorra
    [1.9, 42.4],    // Puigcerdà
    [2.9, 42.45],   // Le Perthus
    [3.3, 42.3],    // Cap de Creus
    // Mediterranean coast (north to south)
    [3.15, 41.85],  // Palamós
    [2.2, 41.4],    // Barcelona
    [1.25, 41.1],   // Tarragona
    [0.85, 40.7],   // Ebro delta
    [0.4, 40.35],   // Peñíscola
    [-0.3, 39.45],  // Valencia
    [0.2, 38.75],   // Cap de la Nau
    [-0.5, 38.35],  // Alicante
    [-1.0, 37.6],   // Cartagena
    [-2.2, 36.75],  // Cabo de Gata
    [-2.45, 36.85], // Almería
    [-4.4, 36.7],   // Málaga
    [-5.35, 36.15], // Gibraltar
    [-5.6, 36.0],   // Tarifa (southern tip)
    // Atlantic coast (south to the Portuguese border)
    [-6.3, 36.5],   // Cádiz
    [-6.9, 37.15],  // Huelva coast
    [-7.4, 37.2],   // Guadiana mouth (Portuguese border)
    // Portuguese border (south to north)
    [-7.0, 38.0],   // Alentejo border
    [-7.3, 38.6],   // Badajoz
    [-6.95, 39.1],  // Alcántara
    [-7.5, 39.65],  // Tagus crossing
    [-6.85, 40.25], // Ciudad Rodrigo
    [-6.8, 41.0],   // Douro gorge
    [-6.2, 41.6],   // Zamora border
    [-6.6, 41.95],  // Bragança
    [-8.2, 42.1],   // Minho border
    [-8.85, 41.9],  // Minho mouth
    // Galician and Cantabrian coast (south-west to north-east)
    [-8.75, 42.2],  // Vigo
    [-9.3, 42.9],   // Cape Finisterre
    [-8.4, 43.4],   // A Coruña
    [-7.7, 43.8],   // Estaca de Bares (northern tip)
    [-7.0, 43.55],  // Ribadeo
    [-5.65, 43.55], // Gijón
    [-3.8, 43.45],  // Santander
    [-2.95, 43.4],  // Bilbao
    [-2.0, 43.35],  // San Sebastián
    [-1.8, 43.35],  // Back to Irun
  ];

  const outlinePath = "M" + spainOutline.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

  // Portugal outline (coast, then back along the shared border)
  const portugal = [
    [-8.85, 41.9], [-8.65, 41.15], [-8.75, 40.65], [-8.9, 40.15], [-9.4, 39.35],
    [-9.45, 38.75], [-9.0, 38.45], [-8.85, 37.95], [-8.95, 37.0], [-7.9, 37.0],
    [-7.4, 37.2], [-7.0, 38.0], [-7.3, 38.6], [-6.95, 39.1], [-7.5, 39.65],
    [-6.85, 40.25], [-6.8, 41.0], [-6.2, 41.6], [-6.6, 41.95], [-8.2, 42.1], [-8.85, 41.9]
  ];
  const portugalPath = "M" + portugal.map(([lon, lat]) => pt(lon, lat)).join(" L") + " Z";

  // Madrid coordinates
  const madrid = geoToSvg(-3.7, 40.4);

  return (
    <svg viewBox={viewBox} style={{ width: "100%", height: "100%", maxHeight: "520px" }}>
      <defs>
        <filter id="glowSpain">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadowSpain">
          <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
        <linearGradient id="spainFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E4D9" />
          <stop offset="100%" stopColor="#D5D0C4" />
        </linearGradient>
      </defs>

      {/* Spain mainland — real geographic outline */}
      <path
        d={outlinePath}
        fill="url(#spainFill)"
        stroke="#B8B0A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter="url(#shadowSpain)"
      />

      {/* Portugal */}
      <path
        d={portugalPath}
        fill="url(#spainFill)"
        stroke="#B8B0A0"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <text x={geoToSvg(-8.75, 39.6)[0]} y={geoToSvg(-8.75, 39.6)[1]} fontSize="7" fill="#B8B0A0" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Portugal</text>

      {/* Madrid marker */}
      <circle cx={madrid[0]} cy={madrid[1]} r="3.5" fill="#1a1a1a" stroke="#C4A962" strokeWidth="1.5" />
      <text x={madrid[0] + 7} y={madrid[1] + 2} fontSize="8" fill="#8B7355" fontFamily="'Source Sans 3', sans-serif" fontWeight="500">Madrid</text>

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
                filter: isActive ? "url(#glowSpain)" : "none"
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
      <path d={`M${pt(-4.05,43.0)} Q${pt(-3.4,42.75)} ${pt(-2.45,42.45)} Q${pt(-1.5,42.0)} ${pt(-0.9,41.65)} Q${pt(0.0,41.0)} ${pt(0.85,40.7)}`} fill="none" stroke="#A8C4D4" strokeWidth="1.2" opacity="0.4" strokeDasharray="3,2" />

      {/* River labels */}
      <text x={geoToSvg(-1.3, 41.85)[0]} y={geoToSvg(-1.3, 41.85)[1] + 8} fontSize="7" fill="#7BA3B8" fontStyle="italic" fontFamily="'Cormorant Garamond', Georgia, serif">Ebro</text>
    {children}
    </svg>
  );
};
