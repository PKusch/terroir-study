import { Figure, gold, ink, COLD, WARM } from "./Figure.jsx";

// Two soils side by side: stony soil drains and holds heat; clay holds water
// and stays cool.
const stones = [];
for (let i = 0; i < 46; i++) stones.push([20 + ((i * 53) % 260), 120 + ((i * 37) % 110), 5 + (i % 4) * 2.5]);

export const Soil = () => (
  <Figure
    title="Soil: heat and water"
    idea="Soil matters to climate in two ways: how fast it warms up, and how much water it keeps. Rain falls on both soils below."
    remember="Gravel drains well and holds heat, as in the Médoc. The large pebbles of Châteauneuf-du-Pape store the day's heat and give it back at night. Clay soaks up water and is a cooler soil, as in Pomerol."
    source={{ links: [
      { title: "Wine Spectator: clay or gravel? (Pomerol)", url: "https://www.winespectator.com/articles/the-2013-bordeaux-barrels-diary-clay-or-gravel-depends-who-you-ask-49762" },
      { title: "Wikipedia: Médoc", url: "https://en.wikipedia.org/wiki/M%C3%A9doc" },
      { title: "Wikipedia: Châteauneuf-du-Pape AOC", url: "https://en.wikipedia.org/wiki/Ch%C3%A2teauneuf-du-Pape_AOC" }] }}>
    <svg viewBox="0 0 600 250" role="img"
      aria-label="Left: a stony soil, where rain drains straight through and the stones give off heat at night. Right: a clay soil, where water is held near the roots and the soil stays cool."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <defs>
        <marker id="soilArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill={COLD} />
        </marker>
        <marker id="heatArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill={WARM} />
        </marker>
      </defs>
      {[40, 90, 140, 190, 240, 340, 390, 440, 490, 540].map((x) => (
        <line key={x} x1={x} y1="20" x2={x - 6} y2="40" stroke={COLD} strokeWidth="2" opacity="0.7" />
      ))}
      <rect x="0" y="100" width="296" height="150" fill="#5a4a36" />
      {stones.map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="#9a8f7e" stroke="#3b3326" />)}
      <rect x="304" y="100" width="296" height="150" fill="#7a5638" />
      {[120, 150, 180, 210].map((y) => <path key={y} d={`M304 ${y} Q 380 ${y - 6} 452 ${y} T 600 ${y}`} stroke="#8e6a48" fill="none" />)}
      <path d="M90 105 L90 235" stroke={COLD} strokeWidth="3" markerEnd="url(#soilArrow)" />
      <path d="M200 105 L200 235" stroke={COLD} strokeWidth="3" markerEnd="url(#soilArrow)" />
      <rect x="330" y="104" width="240" height="40" rx="6" fill={COLD} opacity="0.35" />
      {[[30, 95], [80, 95], [130, 95]].map(([x, y]) => (
        <path key={x} d={`M${x} ${y} C ${x - 8} ${y - 15}, ${x + 8} ${y - 25}, ${x} ${y - 40}`} stroke={WARM} strokeWidth="2.5" fill="none" markerEnd="url(#heatArrow)" />
      ))}
      {[[220, 100], [452, 100]].map(([x, y]) => (
        <g key={x}>
          <path d={`M${x} ${y} L${x} ${y - 30}`} stroke="#6b5a3a" strokeWidth="5" />
          <path d={`M${x} ${y} q -10 30 -30 50 M${x} ${y} q 6 40 2 80 M${x} ${y} q 14 24 34 40`} stroke="#c8b48a" strokeWidth="1.5" fill="none" />
          {[[-8, -40], [8, -42], [0, -50]].map(([dx, dy], i) => <circle key={i} cx={x + dx} cy={y + dy} r="8" fill="#5f8a4a" />)}
        </g>
      ))}
      <g fontFamily="'Source Sans 3', sans-serif" fontSize="13" fontWeight="600">
        <text x="80" y="42" fill={WARM} textAnchor="middle" fontSize="12">heat given back at night</text>
        <text x="148" y="246" fill={ink.head} textAnchor="middle">Stony or gravel: drains, warm</text>
        <text x="452" y="160" fill={COLD} textAnchor="middle" fontSize="12">water held near the roots</text>
        <text x="452" y="246" fill={ink.head} textAnchor="middle">Clay: holds water, cool</text>
      </g>
    </svg>
  </Figure>
);
