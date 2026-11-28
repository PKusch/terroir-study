import { Figure, ink } from "../Figure.jsx";

// Three bunches: a good set, coulure and millerandage.
const BUNCH = [[0, 0], [-12, 12], [0, 12], [12, 12], [-18, 24], [-6, 24], [6, 24], [18, 24], [-12, 36], [0, 36], [12, 36], [-6, 48], [6, 48], [0, 60]];

const Bunch = ({ x, keep = () => true, size = () => 6.5, label, sub }) => (
  <g transform={`translate(${x},30)`} fontFamily="'Source Sans 3', sans-serif">
    <path d="M0 -22 L0 -8" stroke="#6fae5a" strokeWidth="3" />
    {BUNCH.map(([dx, dy], i) => keep(i) && <circle key={i} cx={dx} cy={dy} r={size(i)} fill="#5a2448" stroke="#1a1a1a" />)}
    <text y="100" textAnchor="middle" fontSize="13" fontWeight="600" fill={ink.head}>{label}</text>
    <text y="116" textAnchor="middle" fontSize="11" fill={ink.soft}>{sub}</text>
  </g>
);

export const FruitSet = () => (
  <Figure
    title="Poor fruit set: coulure and millerandage"
    idea="At flowering, each flower must be fertilised to become a berry. Cold, cloudy or rainy weather then can spoil it, and the bunch shows it all season."
    remember="Coulure: many flowers fail to set and drop, leaving a straggly bunch; Grenache, Malbec and Merlot are prone to it. Millerandage: berries of very different sizes and ripeness in one bunch ('hens and chicks'). Both cut the yield."
    source={{ links: [{ title: "Wikipedia: coulure", url: "https://en.wikipedia.org/wiki/Coulure" }, { title: "Wikipedia: millerandage", url: "https://en.wikipedia.org/wiki/Millerandage" }] }}>
    <svg viewBox="0 0 640 160" role="img" aria-label="Three bunches: a full one; one with many berries missing (coulure); one with berries of mixed sizes (millerandage)."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <Bunch x={110} label="Good set" sub="full, even berries" />
      <Bunch x={320} keep={(i) => ![1, 4, 5, 9, 10, 12].includes(i)} label="Coulure" sub="flowers fail and drop" />
      <Bunch x={530} size={(i) => ([2, 5, 8, 11, 13].includes(i) ? 3 : 6.5)} label="Millerandage" sub="mixed sizes: hens and chicks" />
    </svg>
  </Figure>
);
