import { Figure, gold, ink } from "../Figure.jsx";

// Where wine grapes come from: one species, its varieties and clones, and
// what happens when varieties or species are crossed.
const BOX = (x, y, w, title, sub, eg, strong) => (
  <g key={title} fontFamily="'Source Sans 3', sans-serif">
    <rect x={x} y={y} width={w} height="70" rx="8" fill="#151310" stroke={strong ? gold : "#3a3530"} strokeWidth={strong ? 2 : 1} />
    <text x={x + w / 2} y={y + 22} textAnchor="middle" fontSize="15" fontWeight="700" fill={strong ? gold : ink.head}>{title}</text>
    <text x={x + w / 2} y={y + 41} textAnchor="middle" fontSize="11.5" fill={ink.soft}>{sub}</text>
    <text x={x + w / 2} y={y + 58} textAnchor="middle" fontSize="11.5" fill={ink.text} fontStyle="italic">{eg}</text>
  </g>
);

export const VineFamily = () => (
  <Figure
    title="Species, variety, clone, crossing, hybrid"
    idea="Almost all wine comes from one European species, Vitis vinifera. Read the chart from the top: a species has many varieties, a variety has many clones, and crossing two parents makes a new grape."
    remember="Crossing: two vinifera parents (Pinotage). Hybrid: vinifera crossed with another species (Vidal). Clone: a copy of one chosen vine (Pinot Noir 777). Rootstock: American species, grown for their phylloxera-resistant roots.">
    <svg viewBox="0 0 640 300" role="img"
      aria-label="Vitis vinifera has varieties such as Pinot Noir; a variety has clones such as Pinot Noir 777. Two varieties crossed make a crossing, such as Pinotage. Vinifera crossed with another species makes a hybrid, such as Vidal. American species give rootstocks."
      style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
      <g stroke="#5a5048" strokeWidth="2" fill="none">
        <path d="M170 80 L170 110" /><path d="M170 180 L170 210" />
        <path d="M250 145 L330 145" /><path d="M560 80 L560 110" /><path d="M280 45 L 360 45" strokeDasharray="5 4" />
      </g>
      {BOX(60, 10, 220, "Vitis vinifera", "the European species", "nearly all wine grapes", true)}
      {BOX(360, 10, 220, "American species", "e.g. riparia, rupestris", "used for rootstocks")}
      {BOX(60, 110, 190, "Variety", "one kind of vinifera", "Pinot Noir, Cinsault")}
      {BOX(330, 110, 140, "Crossing", "two vinifera parents", "Pinotage")}
      {BOX(490, 110, 140, "Hybrid", "vinifera × another species", "Vidal")}
      {BOX(60, 210, 220, "Clone", "copy of one chosen vine", "Pinot Noir 777")}
      <g fontFamily="'Source Sans 3', sans-serif" fontSize="11" fill={ink.faint}>
        <text x="290" y="139" textAnchor="middle" fontSize="15">×</text>
        <text x="566" y="99" fontSize="15">×</text>
        <text x="300" y="262" fill={ink.soft} fontSize="12">Müller-Thurgau is also a crossing:</text>
        <text x="300" y="278" fill={ink.soft} fontSize="12">Riesling × Madeleine Royale, as DNA tests show.</text>
      </g>
    </svg>
  </Figure>
);
