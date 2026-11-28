import { Figure, gold, ink } from "../Figure.jsx";

// Three ways to make a wine clear, and two ways to keep it clear and stable.
const Glass = ({ x, haze, label, sub, children }) => (
  <g transform={`translate(${x},0)`} fontFamily="'Source Sans 3', sans-serif">
    <path d="M20 20 L100 20 L92 140 L28 140 Z" fill="#7E2F4E" opacity={0.35 + haze * 0.0} stroke="#8B7355" strokeWidth="2" />
    {Array.from({ length: Math.round(haze * 26) }, (_, i) => (
      <circle key={i} cx={34 + ((i * 29) % 52)} cy={32 + ((i * 43) % 100)} r="2" fill="#E8E4D9" opacity="0.6" />
    ))}
    {children}
    <text x="60" y="162" textAnchor="middle" fontSize="13" fontWeight="600" fill={ink.head}>{label}</text>
    <text x="60" y="178" textAnchor="middle" fontSize="11" fill={ink.soft}>{sub}</text>
  </g>
);

export const Clarify = () => (
  <Figure
    title="Making the wine clear and stable"
    idea="New wine is cloudy with dead yeast and grape bits. Winemakers clear it in up to three ways, from gentlest to strongest, and then make sure it stays clear in the bottle."
    remember="Settling and racking: let the solids sink, then move the clear wine off them. Fining: add an agent that grabs the particles so they sink. Filtration: pass the wine through a filter. Cold stabilisation stops tartrate crystals forming later; bentonite removes proteins that would cause a haze."
    source={{ links: [{ title: "Wikipedia: clarification and stabilisation of wine", url: "https://en.wikipedia.org/wiki/Clarification_and_stabilization_of_wine" }, { title: "AWRI: fining agents", url: "https://www.awri.com.au/industry_support/winemaking_resources/frequently_asked_questions/fining_agents/" }, { title: "AWRI: cold stabilisation", url: "https://www.awri.com.au/industry_support/winemaking_resources/storage-and-packaging/pre-packaging-preparation/cold-stabilisation/" }] }}>
    <svg viewBox="0 0 640 190" role="img"
      aria-label="Four glasses: cloudy new wine; settling, with solids sunk to the bottom; fining, with an agent pulling particles down; filtration, clear wine passing through a filter."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <Glass x={10} haze={1} label="New wine" sub="cloudy" />
      <Glass x={170} haze={0.25} label="Settling" sub="solids sink; rack off" >
        <rect x="30" y="124" width="60" height="14" fill="#8B7355" opacity="0.9" />
      </Glass>
      <Glass x={330} haze={0.15} label="Fining" sub="agent grabs particles" >
        {[[45, 70], [70, 90], [55, 112]].map(([cx, cy], i) => <g key={i}><circle cx={cx} cy={cy} r="6" fill={gold} opacity="0.9" /><path d={`M${cx} ${cy + 8} l0 12`} stroke={gold} strokeDasharray="2 2" /></g>)}
        <rect x="30" y="128" width="60" height="10" fill="#8B7355" opacity="0.9" />
      </Glass>
      <Glass x={490} haze={0} label="Filtration" sub="through a filter" >
        <line x1="26" y1="60" x2="96" y2="60" stroke={gold} strokeWidth="3" strokeDasharray="4 3" />
        {[[40, 50], [62, 46], [80, 52]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="2" fill="#E8E4D9" opacity="0.7" />)}
      </Glass>
    </svg>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "8px", marginTop: "8px", fontSize: "13px" }}>
      <div style={{ background: "#151310", borderRadius: "6px", padding: "8px 10px", color: ink.text }}>
        <span style={{ color: ink.label, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>Tartrate crystals</span>
        Chill the wine to near freezing before bottling and the crystals form in the tank, not later in the bottle. They are harmless, but customers may mistake them for glass.
      </div>
      <div style={{ background: "#151310", borderRadius: "6px", padding: "8px 10px", color: ink.text }}>
        <span style={{ color: ink.label, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", display: "block" }}>Protein haze</span>
        Some whites go hazy if they get warm. Fining with bentonite, a clay, removes the proteins that cause it.
      </div>
    </div>
  </Figure>
);
