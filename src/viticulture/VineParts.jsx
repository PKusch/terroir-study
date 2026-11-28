import { useState } from "react";
import { Figure, gold, ink } from "../Figure.jsx";

// A trained vine, side-on. Click a part to see what it does.
export const PARTS = {
  leaves: { label: "Leaves", text: "Leaves use sunlight to turn carbon dioxide and water into sugar (photosynthesis). That sugar ripens the grapes." },
  shoots: { label: "Shoots (green)", text: "This year's growth. Shoots carry the leaves and the bunches; by winter they turn brown and woody and become canes." },
  bunches: { label: "Bunches", text: "This year's fruit, on this year's shoots. Vines pollinate themselves, so they need no insects." },
  spurs: { label: "Canes and spurs (one-year-old wood)", text: "Last year's shoots. Their buds give this year's fruiting shoots, which is why pruning, by choosing which to keep, sets the crop." },
  cordon: { label: "Arms (cordons)", text: "Permanent wood. With the trunk and roots they store the reserves that fuel growth in early spring." },
  trunk: { label: "Trunk", text: "Permanent wood, the vine's store and support. It lasts for years, though a damaged trunk can be replaced by training up a new shoot from the base." },
  graft: { label: "Graft union", text: "Where the European vine (Vitis vinifera) is joined to an American rootstock. In very cold winters, soil is heaped over it to protect it." },
  roots: { label: "Rootstock and roots", text: "Almost all commercial wine grapes grow on roots of American species, which resist phylloxera. Roots take up water and nutrients and store reserves." }
};

export const VineParts = () => {
  const [on, setOn] = useState("spurs");
  const hit = (id) => ({
    role: "button", tabIndex: 0, "aria-label": PARTS[id].label, "aria-pressed": on === id, style: { cursor: "pointer" },
    onClick: () => setOn(id), onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn(id); } }
  });
  const glow = (id) => (on === id ? gold : null);
  const shootsX = [190, 250, 310, 390, 450];
  return (
    <Figure
      title="Parts of the vine"
      idea="A grapevine has three kinds of growth: green parts that grow and fall each year, one-year-old wood that carries this year's buds, and permanent wood that stores energy. Click any part."
      remember="Green parts make sugar; one-year-old wood carries the buds for this year's crop, so pruning sets the crop; permanent wood and roots store the reserves for spring.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", alignItems: "center" }}>
        <svg viewBox="80 0 480 330" role="group" aria-label="A trained grapevine with its parts" style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
          <rect x="80" y="250" width="480" height="80" fill="#3b3326" />
          <g {...hit("roots")}>
            {[[-60, 60], [-30, 72], [0, 78], [30, 70], [62, 58]].map(([dx, dy], i) => (
              <path key={i} d={`M320 262 q ${dx / 2} ${dy / 2} ${dx} ${dy}`} stroke={glow("roots") ?? "#c8b48a"} strokeWidth="3" fill="none" />
            ))}
            <rect x="314" y="240" width="12" height="24" fill={glow("roots") ?? "#7a5a3a"} />
          </g>
          <g {...hit("graft")}>
            <ellipse cx="320" cy="238" rx="12" ry="6" fill={glow("graft") ?? "#a07850"} stroke="#1a1a1a" />
          </g>
          <g {...hit("trunk")}>
            <rect x="313" y="140" width="14" height="96" rx="4" fill={glow("trunk") ?? "#6b4a2e"} />
          </g>
          <g {...hit("cordon")}>
            <rect x="170" y="134" width="300" height="12" rx="6" fill={glow("cordon") ?? "#6b4a2e"} />
          </g>
          <line x1="150" x2="490" y1="126" y2="126" stroke="#555" strokeWidth="1" />
          <line x1="150" x2="490" y1="70" y2="70" stroke="#555" strokeWidth="1" />
          <g {...hit("spurs")}>
            {shootsX.map((x) => <rect key={x} x={x - 4} y="118" width="8" height="18" rx="2" fill={glow("spurs") ?? "#8a6440"} />)}
          </g>
          <g {...hit("shoots")}>
            {shootsX.map((x, i) => <path key={x} d={`M${x} 118 q ${i % 2 ? 8 : -8} -50 ${i % 2 ? 4 : -4} -100`} stroke={glow("shoots") ?? "#6fae5a"} strokeWidth="4" fill="none" />)}
          </g>
          <g {...hit("leaves")}>
            {shootsX.flatMap((x, i) => [[-16, 92], [14, 64], [-12, 36]].map(([dx, y], j) => (
              <path key={x + "-" + j} d={`M${x + dx} ${y} l 10 -8 l 10 8 l -4 10 l -12 0 z`} fill={glow("leaves") ?? "#4f8a3c"} stroke="#1a1a1a" strokeWidth="0.5" />
            )))}
          </g>
          <g {...hit("bunches")}>
            {shootsX.map((x) => (
              <g key={x}>
                {[[0, 0], [-5, 7], [5, 7], [0, 14], [-4, 20], [4, 20], [0, 26]].map(([dx, dy], i) => <circle key={i} cx={x + 10 + dx} cy={100 + dy} r="4" fill={glow("bunches") ?? "#5a2448"} />)}
              </g>
            ))}
          </g>
          <text x="96" y="322" fontSize="11" fill={ink.soft} fontFamily="'Source Sans 3', sans-serif">soil</text>
        </svg>
        <div aria-live="polite">
          <div role="group" aria-label="Parts" style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "10px" }}>
            {Object.entries(PARTS).map(([id, p]) => (
              <button key={id} onClick={() => setOn(id)} aria-pressed={on === id} style={{
                background: on === id ? gold : "none", color: on === id ? "#1a1a1a" : ink.soft, border: "1px solid #3a3530",
                borderRadius: "4px", padding: "3px 8px", fontSize: "11px", cursor: "pointer"
              }}>{p.label}</button>
            ))}
          </div>
          <div style={{ fontSize: "16px", color: gold, fontWeight: 600, marginBottom: "4px" }}>{PARTS[on].label}</div>
          <div style={{ fontSize: "14px", color: ink.text, lineHeight: 1.6 }}>{PARTS[on].text}</div>
        </div>
      </div>
    </Figure>
  );
};
