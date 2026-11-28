import { useState } from "react";
import { LABEL } from "./data.js";
import { Figure, gold, ink } from "../Figure.jsx";

// A made-up EU wine label. Each item is compulsory or optional; click one to
// see the rule. The producer and place are invented.
export const Label = () => {
  const [on, setOn] = useState(LABEL.items[0].id);
  const item = LABEL.items.find((i) => i.id === on);
  const pick = (id) => ({
    role: "button", tabIndex: 0, "aria-pressed": on === id, "aria-label": LABEL.items.find((i) => i.id === id).name, style: { cursor: "pointer" },
    onClick: () => setOn(id), onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn(id); } }
  });
  const box = (id) => {
    const i = LABEL.items.find((x) => x.id === id);
    return { fill: on === id ? "#C4A96233" : "transparent", stroke: on === id ? gold : i.kind === "must" ? "#7E2F4E" : "#5a5048", strokeDasharray: i.kind === "must" ? "none" : "4 3", strokeWidth: on === id ? 2 : 1.2 };
  };
  return (
    <Figure
      title="Reading an EU wine label"
      idea="Click any part of this made-up label. Solid outlines are compulsory on every EU still wine; dashed ones are optional, but if they appear they must follow the rules."
      remember={LABEL.remember}
      source={LABEL.source}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px", alignItems: "start" }}>
        <svg viewBox="0 0 300 380" role="group" aria-label="A made-up EU wine label" style={{ width: "100%", maxWidth: "320px", height: "auto", display: "block", margin: "0 auto" }}>
          <rect x="4" y="4" width="292" height="372" rx="6" fill="#F3EBD8" stroke="#8B7355" strokeWidth="2" />
          <g fontFamily="'Cormorant Garamond', Georgia, serif" fill="#2a2018" textAnchor="middle">
            {LABEL.items.map((i) => (
              <g key={i.id} {...pick(i.id)}>
                <rect x={i.box[0]} y={i.box[1]} width={i.box[2]} height={i.box[3]} rx="4" {...box(i.id)} />
                {i.lines.map((ln, k) => (
                  <text key={k} x={i.box[0] + i.box[2] / 2} y={i.box[1] + 16 + k * (i.size ?? 13) * 1.2} fontSize={i.size ?? 13} fontWeight={i.bold ? 700 : 400}
                    fontFamily={i.sans ? "'Source Sans 3', sans-serif" : undefined}>{ln}</text>
                ))}
              </g>
            ))}
          </g>
        </svg>
        <div aria-live="polite">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "6px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 8px", borderRadius: "10px",
              background: item.kind === "must" ? "#7E2F4E" : "#3a3530", color: "#fff" }}>{item.kind === "must" ? "Compulsory" : "Optional"}</span>
            <strong style={{ color: gold, fontSize: "16px" }}>{item.name}</strong>
          </div>
          <div style={{ fontSize: "14px", color: ink.text, lineHeight: 1.6 }}>{item.say}</div>
          <div role="group" aria-label="Label items" style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "12px" }}>
            {LABEL.items.map((i) => (
              <button key={i.id} onClick={() => setOn(i.id)} aria-pressed={on === i.id} style={{
                background: on === i.id ? gold : "none", color: on === i.id ? "#1a1a1a" : ink.soft, border: `1px ${i.kind === "must" ? "solid" : "dashed"} #5a5048`,
                borderRadius: "4px", padding: "3px 8px", fontSize: "11px", cursor: "pointer"
              }}>{i.name}</button>
            ))}
          </div>
        </div>
      </div>
    </Figure>
  );
};
