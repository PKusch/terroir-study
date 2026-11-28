import { useState } from "react";
import { Figure, Choice, ink, COLD } from "../Figure.jsx";

// Three ways to water vines.
const KINDS = {
  drip: { label: "Drip", say: "A dripper at each vine. Water can be controlled down to the drop; the most expensive system to install." },
  sprinkler: { label: "Sprinkler", say: "Sprays water over the vineyard. Uses less water than flooding, and the same sprinklers can protect against frost: the water freezes into a layer of ice around the buds." },
  flood: { label: "Flood", say: "Water runs down the rows, helped by the slope. It gives little control and can over-water." }
};

export const Irrigation = () => {
  const [id, setId] = useState("drip");
  const vines = [120, 220, 320, 420, 520];
  return (
    <Figure
      title="Irrigation"
      idea="Where rain is too low, growers water the vines. Pick a system."
      remember="Drip: the most precise. Sprinkler: can double as frost protection. Flood: little control. Holding back water between fruit set and véraison (regulated deficit irrigation) slows shoot growth and can give much smaller berries."
      source={{ links: [{ title: "Wikipedia: irrigation in viticulture", url: "https://en.wikipedia.org/wiki/Irrigation_in_viticulture" }, { title: "AWRI: regulated deficit irrigation", url: "https://www.awri.com.au/wp-content/uploads/2_irrigation_introduction_to_rdi.pdf" }] }}>
      <Choice label="System" value={id} onChange={setId} options={Object.entries(KINDS).map(([k, v]) => [k, v.label])} />
      <svg viewBox="60 20 520 180" role="img" aria-label={`${KINDS[id].label} irrigation: ${KINDS[id].say}`}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        <rect x="60" y="160" width="520" height="40" fill="#3b3326" />
        {id === "flood" && <rect x="60" y="152" width="520" height="10" fill={COLD} opacity="0.6" />}
        {vines.map((x) => (
          <g key={x}>
            <rect x={x - 4} y="110" width="8" height="50" fill="#6b4a2e" />
            <circle cx={x} cy="98" r="18" fill="#4f8a3c" />
            {id === "drip" && <g><circle cx={x + 10} cy="150" r="3" fill={COLD} /><ellipse cx={x + 10} cy="166" rx="16" ry="5" fill={COLD} opacity="0.45" /></g>}
          </g>
        ))}
        {id === "drip" && <line x1="70" x2="570" y1="146" y2="146" stroke="#222" strokeWidth="4" />}
        {id === "sprinkler" && [170, 370].map((x) => (
          <g key={x}>
            <rect x={x - 2} y="40" width="4" height="120" fill="#888" />
            {[-60, -30, 0, 30, 60].map((dx) => <path key={dx} d={`M${x} 40 Q ${x + dx / 2} 20 ${x + dx} 70`} stroke={COLD} strokeWidth="1.5" fill="none" strokeDasharray="3 3" />)}
          </g>
        ))}
        {id === "flood" && <text x="570" y="146" textAnchor="end" fontSize="12" fill={COLD} fontFamily="'Source Sans 3', sans-serif">water flows down the rows →</text>}
      </svg>
      <p style={{ fontSize: "13px", color: ink.text, lineHeight: 1.55, margin: "8px 0 0" }}>{KINDS[id].say}</p>
    </Figure>
  );
};
