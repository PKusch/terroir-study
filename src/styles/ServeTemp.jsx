import { Figure, gold, ink, COLD, WARM } from "../Figure.jsx";

// Serving temperatures on a thermometer. WSET gives words for most styles;
// figures appear only where a source gives them.
const T0 = 4, T1 = 20, W = 640, L = 40, R = 20;
const x = (t) => L + ((t - T0) / (T1 - T0)) * (W - L - R);
const BANDS = [
  ["Fino and Manzanilla", 5, 7, "#E8E4D9"],
  ["Full-bodied whites", 10, 13, "#D9C06A"],
  ["Tawny Port", 10, 14, "#C4884A"],
  ["Ruby Port", 12, 16, "#B0304E"],
  ["Medium and full-bodied reds", 15, 18, "#7E2F4E"]
];
const WORDS = [["Well chilled", "sparkling and sweet wines"], ["Chilled", "light and medium whites, rosé"], ["Lightly chilled", "full-bodied whites; light reds can be too"], ["Room temperature", "medium and full-bodied reds (light reds too)"]];

export const ServeTemp = () => (
  <Figure
    title="Serving temperature"
    idea="Too cold and the flavours hide; too warm and the alcohol shows and the wine loses freshness. WSET groups wines from well chilled to room temperature, which for wine means 15–18 °C, not a warm sitting room."
    remember="Sparkling and sweet: well chilled. Light and medium whites, rosé: chilled. Full-bodied whites: lightly chilled, about 10–13 °C. Light reds: room temperature or lightly chilled. Medium and full-bodied reds: 15–18 °C. Below about 6 °C the cold masks the flavours of whites, rosés and sparkling wines; reds served too cold taste thin and harsh."
    source={{ links: [
      { title: "WSET: ideal serving temperatures", url: "https://www.wsetglobal.com/knowledge-centre/blog/2022/april/26/ideal-serving-temperatures-and-top-tips-for-wine-storage" },
      { title: "WSET Level 2 specification (2026)", url: "https://www.wsetglobal.com/media/19132/wset_l2wines_specification_en_april2026_issue21.pdf" }] }}>
    <ol style={{ listStyle: "none", margin: "0 0 10px", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "6px" }}>
      {WORDS.map(([w, d], k) => (
        <li key={w} style={{ background: "#151310", borderRadius: "6px", padding: "6px 8px", borderTop: `3px solid ${k < 2 ? COLD : k === 2 ? gold : WARM}` }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: ink.head }}>{w}</div>
          <div style={{ fontSize: "11.5px", color: ink.soft }}>{d}</div>
        </li>
      ))}
    </ol>
    <svg viewBox={`0 0 ${W} ${BANDS.length * 26 + 56}`} role="img" aria-label={BANDS.map(([n, a, b]) => `${n}: ${a} to ${b} degrees`).join("; ")}
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <defs><linearGradient id="stTherm" x1="0" x2="1"><stop offset="0" stopColor={COLD} /><stop offset="1" stopColor={WARM} /></linearGradient></defs>
      <rect x={L} y="10" width={W - L - R} height="8" rx="4" fill="url(#stTherm)" />
      <rect x={L} y="22" width={x(6) - L} height={BANDS.length * 26 + 6} fill={COLD} opacity="0.08" />
      <text x={L + 4} y={BANDS.length * 26 + 24} fontSize="10" fill={COLD} fontFamily="'Source Sans 3', sans-serif">too cold for whites</text>
      {[4, 6, 8, 10, 12, 14, 16, 18, 20].map((t) => (
        <text key={t} x={x(t)} y={BANDS.length * 26 + 46} fontSize="11" fill={ink.faint} textAnchor="middle">{t}°</text>
      ))}
      {BANDS.map(([n, a, b, c], k) => (
        <g key={n} fontFamily="'Source Sans 3', sans-serif">
          <rect x={x(a)} y={26 + k * 26} width={x(b) - x(a)} height="18" rx="9" fill={c} />
          <text x={b > 14 ? x(a) - 8 : x(b) + 8} y={39 + k * 26} fontSize="12" fill={ink.text} textAnchor={b > 14 ? "end" : "start"}>{n} · {a}–{b} °C</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: "11px", color: ink.faint, margin: "6px 0 0" }}>Figures: full-bodied whites and reds from WSET's blog; Fino and Manzanilla from the Sherry regulator's serving page; Port from the Port regulator's serving page. The words for each group come from WSET's Level 2 specification, which gives no figures for the other groups.</p>
  </Figure>
);
