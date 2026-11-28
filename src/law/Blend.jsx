import { useState } from "react";
import { varietyLabels } from "./logic.js";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// Build a three-grape blend and see what each market lets the label say.
const GRAPES = ["Cabernet Sauvignon", "Merlot", "Cabernet Franc"];
const PRESETS = [["90 / 10 / 0", [90, 10, 0]], ["80 / 15 / 5", [80, 15, 5]], ["70 / 20 / 10", [70, 20, 10]], ["50 / 40 / 10", [50, 40, 10]]];

export const Blend = () => {
  const [mix, setMix] = useState([80, 15, 5]);
  const [m, setM] = useState("eu");
  const blend = Object.fromEntries(GRAPES.map((g, i) => [g, mix[i]]));
  const labels = varietyLabels(blend, m);
  const set = (i, v) => {
    const next = [...mix];
    next[i] = v;
    const rest = 100 - v;
    const others = [0, 1, 2].filter((j) => j !== i);
    const sum = others.reduce((a, j) => a + mix[j], 0) || 1;
    others.forEach((j, k) => { next[j] = k === 0 ? Math.round((mix[j] / sum) * rest) : rest - Math.round((mix[others[0]] / sum) * rest); });
    setMix(next);
  };
  const colours = ["#7E2F4E", "#B07AA1", "#C4A962"];
  return (
    <Figure
      title="Naming the grapes: build a blend"
      idea="Set a blend of three grapes, then pick a market to see which grape names the label may carry. The rules differ more than you might think."
      remember="EU: one grape named at 85% or more; two or more named only if they make 100%, most first. USA: one grape at 75%; two or more named means every grape named with its percentage. Australia: one grape at 85%; several named must reach 85% together, most first, with no larger grape left out."
      source={{ links: [
        { title: "EU Regulation 2019/33, Article 50", url: "https://www.legislation.gov.uk/eur/2019/33/article/50/adopted" },
        { title: "US Code of Federal Regulations 27 CFR 4.23", url: "https://www.ecfr.gov/current/title-27/part-4/subpart-C/section-4.23" },
        { title: "Wine Australia: the blending rules", url: "https://www.wineaustralia.com/getmedia/fb571392-5d0c-4f9e-95fd-b7501076280a/REG_BlendingRules_v2.pdf" }] }}>
      <div role="group" aria-label="Example blends" style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
        {PRESETS.map(([label, v]) => (
          <button key={label} onClick={() => setMix(v)} aria-pressed={mix.join() === v.join()} style={{
            background: mix.join() === v.join() ? gold : "none", color: mix.join() === v.join() ? "#1a1a1a" : ink.soft,
            border: "1px solid #3a3530", borderRadius: "4px", padding: "3px 10px", fontSize: "11px", cursor: "pointer"
          }}>{label}</button>
        ))}
      </div>
      <div aria-hidden="true" style={{ display: "flex", height: "26px", borderRadius: "6px", overflow: "hidden", marginBottom: "8px" }}>
        {mix.map((p, i) => p > 0 && <div key={i} style={{ width: `${p}%`, background: colours[i], color: "#fff", fontSize: "11px", display: "flex", alignItems: "center", justifyContent: "center", transition: "width 0.2s" }}>{p >= 8 ? `${p}%` : ""}</div>)}
      </div>
      {GRAPES.map((g, i) => (
        <div key={g} style={{ display: "grid", gridTemplateColumns: "minmax(0, 150px) 1fr 44px", gap: "8px", alignItems: "center" }}>
          <label htmlFor={`bl-${i}`} style={{ fontSize: "12px", color: ink.soft }}><span style={{ display: "inline-block", width: 10, height: 10, background: colours[i], borderRadius: 2, marginRight: 5 }} />{g}</label>
          <input id={`bl-${i}`} type="range" min="0" max="100" step="5" value={mix[i]} onChange={(e) => set(i, +e.target.value)} style={{ width: "100%", accentColor: colours[i] }} />
          <span style={{ fontSize: "12px", color: ink.text, textAlign: "right" }}>{mix[i]}%</span>
        </div>
      ))}
      <div style={{ marginTop: "10px" }}>
        <Choice label="Market" value={m} onChange={setM} options={[["eu", "EU"], ["us", "USA"], ["au", "Australia"]]} />
      </div>
      <div aria-live="polite" style={{ display: "grid", gap: "6px" }}>
        {labels.length === 0 && <div style={{ background: "#151310", borderRadius: "6px", padding: "10px 12px", fontSize: "13px", color: ink.text }}>No grape name may go on this label: the blend meets none of the rules.</div>}
        {labels.map((l) => (
          <div key={l.text} style={{ background: "#151310", border: `1px solid ${gold}55`, borderRadius: "6px", padding: "10px 12px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", color: gold }}>{l.text}</div>
            <div style={{ fontSize: "12.5px", color: ink.soft }}>{l.why}</div>
          </div>
        ))}
      </div>
    </Figure>
  );
};
