import { Figure, gold, ink } from "../Figure.jsx";

// Whole bunches in a sealed vat of carbon dioxide: each berry starts to
// ferment inside its own skin.
export const Carbonic = () => (
  <Figure
    title="Carbonic maceration"
    idea="Whole, uncrushed bunches go into a vat that is sealed and filled with carbon dioxide. With no oxygen, each berry starts to ferment from the inside. The grapes at the bottom are crushed by the weight above and ferment in the usual way."
    remember="Carbonic maceration gives a fruity red with very low tannin, with aromas such as cherry or kirsch and strawberry, as in Beaujolais. After the berries are pressed, the juice finishes fermenting as normal."
    source={{ links: [{ title: "AWRI: carbonic maceration", url: "https://www.awri.com.au/industry_support/winemaking_resources/winemaking-practices/winemaking-treatment-carbonic-maceration/" }, { title: "Wikipedia: carbonic maceration", url: "https://en.wikipedia.org/wiki/Carbonic_maceration" }] }}>
    <svg viewBox="0 0 640 220" role="img"
      aria-label="A sealed vat full of carbon dioxide and whole bunches. A close-up berry shows fermentation happening inside the skin. At the bottom, crushed grapes ferment as normal juice."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <rect x="40" y="20" width="240" height="180" rx="12" fill="#151310" stroke="#8B7355" strokeWidth="2" />
      <rect x="40" y="14" width="240" height="10" rx="3" fill="#8B7355" />
      <rect x="44" y="26" width="232" height="140" fill="#cfd8dc" opacity="0.08" />
      <text x="160" y="44" textAnchor="middle" fontSize="12" fill="#cfd8dc" fontFamily="'Source Sans 3', sans-serif">sealed, full of CO₂</text>
      {Array.from({ length: 6 }, (_, row) => Array.from({ length: 11 }, (_, col) => (
        <circle key={row + "-" + col} cx={60 + col * 20 + (row % 2) * 10} cy={66 + row * 17} r="9" fill="#4F1E3D" stroke="#1a1a1a" />
      )))}
      <rect x="44" y="168" width="232" height="28" fill="#7E2F4E" />
      <text x="160" y="187" textAnchor="middle" fontSize="11" fill={ink.head} fontFamily="'Source Sans 3', sans-serif">crushed by the weight: ferments as juice</text>
      <line x1="230" y1="100" x2="380" y2="70" stroke={gold} strokeDasharray="4 4" />
      <circle cx="470" cy="100" r="80" fill="#4F1E3D" stroke={gold} strokeWidth="2" />
      <circle cx="470" cy="100" r="66" fill="#7E2F4E" opacity="0.7" />
      {[[425, 60], [515, 62], [420, 140], [520, 138], [470, 50]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="5" fill="none" stroke="#E8E4D9" />)}
      <g fontFamily="'Source Sans 3', sans-serif" textAnchor="middle">
        <text x="470" y="96" fontSize="13" fontWeight="600" fill={ink.head}>fermenting</text>
        <text x="470" y="112" fontSize="13" fontWeight="600" fill={ink.head}>inside the berry</text>
        <text x="470" y="204" fontSize="12" fill={ink.soft}>one whole berry, close up</text>
      </g>
    </svg>
  </Figure>
);
