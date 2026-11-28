import { Figure, gold, ink } from "../Figure.jsx";

// Glass shapes, drawn, with what each is for.
const G = [
  { name: "White", d: "M30 10 Q 24 60 50 78 Q 76 60 70 10 Z", why: "Smaller: keeps the wine cool and the aromas close." },
  { name: "Red", d: "M18 10 Q 8 70 50 84 Q 92 70 82 10 Z", why: "A bigger bowl gives the wine room to open." },
  { name: "Sparkling: tulip", d: "M32 4 Q 26 60 50 80 Q 74 60 68 4 Z", why: "Or a white-wine glass: in a WSET study, tasters rated aroma lowest from the flute." },
  { name: "Sparkling: flute", d: "M40 4 L 38 70 Q 50 82 62 70 L 60 4 Z", why: "Narrow: in the same study it scored lowest for aroma." },
  { name: "Fortified", d: "M36 30 Q 32 64 50 74 Q 68 64 64 30 Z", why: "Small glasses are usual; for Sherry, its regulator recommends a white-wine glass with a generous bowl." }
];

export const Glasses = () => (
  <Figure
    title="Which glass?"
    idea="The glass changes how much aroma reaches you and how fast the wine warms."
    remember="Smaller glasses for whites, larger bowls for reds, small glasses for fortified wines. For sparkling, a tulip or white-wine glass shows more aroma than a narrow flute."
    source={{ title: "WSET: what's the best glass for Champagne?", url: "https://www.wsetglobal.com/news-insights/insight-opinion/whats-the-best-glass-for-champagne/" }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "8px" }}>
      {G.map((g) => (
        <div key={g.name} style={{ background: "#151310", borderRadius: "8px", padding: "8px", textAlign: "center" }}>
          <svg viewBox="0 0 100 130" role="img" aria-label={`${g.name} glass`} style={{ width: "70px", height: "auto" }}>
            <path d={g.d} fill="#7E2F4E33" stroke="#cfd8dc" strokeWidth="2" />
            <line x1="50" y1={g.name === "Fortified" ? 74 : 80} x2="50" y2="118" stroke="#cfd8dc" strokeWidth="2" />
            <line x1="32" y1="120" x2="68" y2="120" stroke="#cfd8dc" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div style={{ fontSize: "13px", fontWeight: 600, color: gold }}>{g.name}</div>
          <div style={{ fontSize: "11.5px", color: ink.soft, lineHeight: 1.45 }}>{g.why}</div>
        </div>
      ))}
    </div>
  </Figure>
);
