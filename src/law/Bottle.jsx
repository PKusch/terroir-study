import { useState } from "react";
import { RULES } from "./data.js";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// "What does the label promise?" A bottle filled to the share the law
// requires, for each claim and market.
const BOTTLE = "M70 10 L90 10 L90 60 Q 90 80 110 95 Q 120 104 120 120 L120 300 Q 120 310 110 310 L50 310 Q 40 310 40 300 L40 120 Q 40 104 50 95 Q 70 80 70 60 Z";

export const Bottle = () => {
  const [m, setM] = useState("eu");
  const market = RULES.markets.find((x) => x.id === m);
  const [claim, setClaim] = useState(market.rules[0].claim);
  const rule = market.rules.find((r) => r.claim === claim) ?? market.rules[0];
  const pct = rule.pct;
  const top = 310 - (pct / 100) * 200;
  return (
    <Figure
      title="What a label promises: the percentage rules"
      idea="A vintage, a grape or a place on the label does not always mean all of the wine. Pick a market and a claim: the bottle fills to the share the law requires, and the rest may come from elsewhere."
      remember="EU and Australia: 85% for a vintage, a single variety or (in the EU) a smaller area; a PDO needs all its grapes from the area. USA: 75% for a variety, 85% for an AVA, 95% for a vintage with an AVA."
      source={RULES.source}>
      <Choice label="Market" value={m} onChange={(v) => { setM(v); setClaim(RULES.markets.find((x) => x.id === v).rules[0].claim); }} options={RULES.markets.map((x) => [x.id, x.label])} />
      <Choice label="Claim" value={rule.claim} onChange={setClaim} options={market.rules.map((r) => [r.claim, r.claim])} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", alignItems: "center" }}>
        <svg viewBox="0 0 160 320" role="img" aria-label={`${market.label}, ${rule.claim}: at least ${pct} percent.`} style={{ width: "100%", maxWidth: "170px", height: "auto", display: "block", margin: "0 auto" }}>
          <defs><clipPath id="btl"><path d={BOTTLE} /></clipPath></defs>
          <path d={BOTTLE} fill="#151310" />
          <g clipPath="url(#btl)">
            <rect x="0" y="110" width="160" height={top - 110} fill="#3a3530" />
            <rect x="0" y={top} width="160" height={310 - top} fill="#7E2F4E" style={{ transition: "y 0.3s, height 0.3s" }} />
            <line x1="0" x2="160" y1={top} y2={top} stroke={gold} strokeWidth="2" />
          </g>
          <path d={BOTTLE} fill="none" stroke="#8B7355" strokeWidth="2" />
          <text x="80" y={Math.min(300, top + 24)} textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" fontFamily="'Source Sans 3', sans-serif">{pct}%</text>
        </svg>
        <div>
          <div style={{ fontSize: "13px", color: ink.soft }}>{market.label}: {rule.claim}</div>
          <div style={{ fontSize: "34px", fontWeight: 700, color: gold, lineHeight: 1.1 }}>at least {pct}%</div>
          <div style={{ fontSize: "14px", color: ink.text, marginTop: "4px", lineHeight: 1.5 }}>{rule.say}</div>
          {pct < 100 && <div style={{ fontSize: "12px", color: ink.faint, marginTop: "6px" }}>Up to {100 - pct}% may be another {rule.other}.</div>}
        </div>
      </div>
    </Figure>
  );
};
