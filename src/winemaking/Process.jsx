import { useState } from "react";
import { Figure, Choice, gold, ink } from "../Figure.jsx";
import { ROUTES } from "./routes.js";

// The order of the steps for white, red and rosé, with the steps where the
// juice sits on its skins picked out. The big difference is where the press
// comes: before fermentation for white, after it for red.
const SKIN = "#9B4F7A";

export const Process = () => {
  const [id, setId] = useState("red");
  const r = ROUTES[id];
  return (
    <Figure
      title="White, red and rosé, step by step"
      idea="The same grapes can become any of the three. What changes is how long the juice stays with the skins, and so when the press comes. Purple steps are the ones where juice and skins are together."
      remember="White: press first, then ferment. Red: ferment on the skins, then press. Rosé: a short time on the skins, then made like a white."
      source={{ links: [{ title: "WSET Level 2 session plans", url: "https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf" }, { title: "Wikipedia: fermentation in winemaking (temperatures)", url: "https://en.wikipedia.org/wiki/Fermentation_in_winemaking" }] }}>
      <Choice label="Wine" value={id} options={Object.entries(ROUTES).map(([k, v]) => [k, v.label])} onChange={setId} />
      <ol aria-label={`${r.label} wine steps`} style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "stretch" }}>
        {r.steps.map(([name, skins, key], i) => (
          <li key={name} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "6px", padding: "7px 10px", borderRadius: "6px", fontSize: "13px",
              background: skins ? SKIN + "33" : "#151310", color: ink.text,
              border: key === "press" ? `2px solid ${gold}` : `1px solid ${skins ? SKIN : "#2a2520"}`
            }}>
              <span style={{ fontSize: "11px", color: ink.label }}>{i + 1}</span>{name}
              {skins && <span className="visually-hidden"> (juice with its skins)</span>}
            </span>
            {i < r.steps.length - 1 && <span aria-hidden="true" style={{ color: ink.faint }}>→</span>}
          </li>
        ))}
      </ol>
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", fontSize: "11px", color: ink.soft, margin: "8px 0 0" }}>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: SKIN + "66", border: `1px solid ${SKIN}`, borderRadius: 2, marginRight: 4 }} />juice with its skins</span>
        <span><span style={{ display: "inline-block", width: 10, height: 10, border: `2px solid ${gold}`, borderRadius: 2, marginRight: 4 }} />where the juice leaves the skins</span>
      </div>
      <p style={{ fontSize: "13px", color: ink.text, lineHeight: 1.55, margin: "10px 0 0" }}>{r.say}</p>
    </Figure>
  );
};
