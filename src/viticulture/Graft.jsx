import { Figure, gold, ink } from "../Figure.jsx";

// A grafted vine: European fruiting wood on American roots.
export const Graft = () => (
  <Figure
    title="Grafting: the answer to phylloxera"
    idea="Phylloxera is a tiny insect that feeds on vine roots and kills European vines. American vine species resist it. So growers join a European vine (the scion, which gives the grapes) onto American roots (the rootstock)."
    remember="Almost all commercial wine grapes are grafted onto phylloxera-resistant American rootstock. The grapes are still the European variety: the rootstock only gives the roots. A few places are still largely free of phylloxera, such as most of Chile and South Australia, so some vines there grow on their own roots."
    source={{ links: [{ title: "UC Davis: grape rootstocks", url: "https://labs.plb.ucdavis.edu/rost/virtual%20grape%20dreamweaver/Rootstocks%20Page.htm" }, { title: "Wikipedia: phylloxera (history, output, free regions)", url: "https://en.wikipedia.org/wiki/Phylloxera" }] }}>
    <svg viewBox="0 0 640 260" role="img"
      aria-label="A grafted vine: the European variety above the graft union gives leaves and grapes; the American rootstock below gives roots that resist phylloxera."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <rect x="0" y="170" width="640" height="90" fill="#3b3326" />
      <rect x="314" y="50" width="14" height="110" fill="#6b4a2e" />
      {[[-40, -10], [0, -30], [40, -12]].map(([dx, dy], i) => <path key={i} d={`M321 60 q ${dx / 2} ${dy} ${dx} ${dy - 20}`} stroke="#6fae5a" strokeWidth="4" fill="none" />)}
      {[[275, 20], [321, 2], [362, 24]].map(([x, y], i) => <path key={i} d={`M${x} ${y} l 12 -10 l 12 10 l -5 12 l -14 0 z`} fill="#4f8a3c" />)}
      {[[0, 0], [-5, 7], [5, 7], [0, 14]].map(([dx, dy], i) => <circle key={i} cx={300 + dx} cy={60 + dy} r="4.5" fill="#5a2448" />)}
      <ellipse cx="321" cy="162" rx="14" ry="7" fill={gold} />
      <rect x="315" y="166" width="12" height="40" fill="#8a6a4a" />
      {[[-60, 50], [-25, 62], [10, 66], [45, 58]].map(([dx, dy], i) => <path key={i} d={`M321 204 q ${dx / 2} ${dy / 2} ${dx} ${dy}`} stroke="#c8b48a" strokeWidth="3" fill="none" />)}
      {[[250, 240], [372, 246], [300, 252]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="4" ry="2.5" fill="#E8D9A0" />)}
      <g fontFamily="'Source Sans 3', sans-serif" fontSize="13">
        <text x="400" y="80" fill={ink.head}>Scion: the European variety</text>
        <text x="400" y="97" fill={ink.soft} fontSize="12">gives the leaves and the grapes</text>
        <line x1="396" y1="85" x2="332" y2="95" stroke={ink.faint} />
        <text x="400" y="160" fill={gold}>Graft union</text>
        <line x1="396" y1="157" x2="338" y2="161" stroke={ink.faint} />
        <text x="400" y="210" fill={ink.head}>Rootstock: American species, often crossed</text>
        <text x="400" y="227" fill={ink.soft} fontSize="12">roots that resist phylloxera</text>
        <line x1="396" y1="205" x2="330" y2="190" stroke={ink.faint} />
        <text x="140" y="252" fill="#E8D9A0" fontSize="12">phylloxera on the roots</text>
      </g>
    </svg>
    <h4 style={{ fontSize: "14px", color: ink.head, margin: "14px 0 6px", fontWeight: 600 }}>What phylloxera did to France</h4>
    <svg viewBox="0 0 640 120" role="img" aria-label="French wine output fell from 84.5 million hectolitres in 1875 to 23.4 million in 1889."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      {[["1875", 84.5, 22], ["1889", 23.4, 66]].map(([yr, v, y]) => (
        <g key={yr} fontFamily="'Source Sans 3', sans-serif">
          <text x="14" y={y + 18} fontSize="13" fill={ink.head}>{yr}</text>
          <rect x="60" y={y} width={(v / 90) * 500} height="28" rx="4" fill={yr === "1875" ? "#7E2F4E" : "#E07A5F"} />
          <text x={66 + (v / 90) * 500} y={y + 19} fontSize="13" fill={ink.text}>{v} million hl</text>
        </g>
      ))}
    </svg>
    <p style={{ fontSize: "12px", color: ink.soft, margin: "6px 0 0", lineHeight: 1.55 }}>
      Phylloxera came from North America on vines brought to Europe in the mid-1800s; in France it was first noticed in the southern Rhône in 1863. Between two-thirds and nine-tenths of Europe's vineyards were destroyed.
    </p>
  </Figure>
);
