import { useState } from "react";
import { Figure, Choice, gold, ink } from "../Figure.jsx";

// A red-wine tank side-on. Carbon dioxide pushes the skins up into a cap;
// each method gets juice and skins back in contact.
const SKIN = "#5a1f3a", JUICE = "#7E2F4E";
export const METHODS = {
  pumpover: { label: "Pumping over", say: "Juice is drawn from the bottom of the tank and pumped over the top of the cap, soaking it." },
  punchdown: { label: "Punching down", say: "The cap is pushed back down into the juice, by hand with a paddle or by machine." },
  delestage: { label: "Délestage (rack and return)", say: "The juice is drained off into another tank, leaving the cap behind, held for some hours, then pumped gently back over the cap." }
};

export const Cap = () => {
  const [id, setId] = useState("pumpover");
  return (
    <Figure
      title="Red wine: managing the cap"
      idea="As a red wine ferments, carbon dioxide pushes the skins to the top, where they form a thick cap. Colour, tannin and flavour are in the skins, so the winemaker has to get juice and skins back together, and keep the cap from drying out and spoiling."
      remember="Three ways: pumping over, punching down, and délestage. How often and how hard they are done, along with temperature and time on the skins, decides how much colour and tannin the wine gets. Studies find little difference between pumping over and punching down in how much they extract."
      source={{ links: [{ title: "Virginia Tech: délestage", url: "https://enology.fst.vt.edu/downloads/wm_issues/Delestage.pdf" }, { title: "AWRI: fermentation temperature", url: "https://www.awri.com.au/industry_support/winemaking_resources/winemaking-practices/fermentation-temperature/" }, { title: "WineMaker: maceration considerations", url: "https://winemakermag.com/article/maceration-considerations" }] }}>
      <Choice label="Method" value={id} onChange={setId} options={Object.entries(METHODS).map(([k, v]) => [k, v.label])} />
      <svg viewBox="0 0 640 230" role="img" aria-label={`${METHODS[id].label}: ${METHODS[id].say}`}
        style={{ width: "100%", height: "auto", display: "block", background: "#101418", borderRadius: "8px" }}>
        <defs>
          <marker id="capArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill={gold} /></marker>
        </defs>
        <rect x="120" y="30" width="200" height="180" rx="10" fill="#151310" stroke="#8B7355" strokeWidth="2" />
        <rect x="124" y={id === "delestage" ? 150 : 90} width="192" height={id === "delestage" ? 56 : 116} fill={JUICE} opacity={id === "delestage" ? 0.25 : 0.85} />
        <rect x="124" y={id === "delestage" ? 120 : 60} width="192" height="34" fill={SKIN} />
        {Array.from({ length: 22 }, (_, i) => <circle key={i} cx={130 + ((i * 17) % 180)} cy={(id === "delestage" ? 124 : 64) + ((i * 7) % 26)} r="4" fill="#3a1530" />)}
        <text x="112" y={id === "delestage" ? 140 : 80} textAnchor="end" fontSize="12" fill={ink.soft} fontFamily="'Source Sans 3', sans-serif">cap of skins</text>
        {id === "pumpover" && (
          <g>
            <path d="M320 190 C 380 190, 380 20, 300 20 L 230 20 L 230 50" fill="none" stroke={gold} strokeWidth="4" markerEnd="url(#capArrow)" />
            <circle cx="372" cy="110" r="12" fill="#2a2520" stroke={gold} strokeWidth="2" />
            <text x="392" y="114" fontSize="12" fill={ink.soft} fontFamily="'Source Sans 3', sans-serif">pump</text>
          </g>
        )}
        {id === "punchdown" && (
          <g>
            <line x1="220" y1="0" x2="220" y2="86" stroke="#c8b48a" strokeWidth="6" />
            <rect x="196" y="82" width="48" height="10" rx="3" fill="#c8b48a" />
            <path d="M260 40 L 260 100" stroke={gold} strokeWidth="3" markerEnd="url(#capArrow)" />
          </g>
        )}
        {id === "delestage" && (
          <g>
            <rect x="440" y="90" width="150" height="120" rx="10" fill="#151310" stroke="#8B7355" strokeWidth="2" />
            <rect x="444" y="120" width="142" height="86" fill={JUICE} opacity="0.85" />
            <path d="M320 200 C 380 220, 410 210, 440 190" fill="none" stroke={gold} strokeWidth="3" markerEnd="url(#capArrow)" />
            <path d="M515 90 C 515 20, 300 10, 240 100" fill="none" stroke={gold} strokeWidth="3" strokeDasharray="6 4" markerEnd="url(#capArrow)" />
            <text x="515" y="226" textAnchor="middle" fontSize="11" fill={ink.soft} fontFamily="'Source Sans 3', sans-serif">1. drain the juice off · 2. pour it back</text>
          </g>
        )}
        <text x="220" y="226" textAnchor="middle" fontSize="11" fill={ink.soft} fontFamily="'Source Sans 3', sans-serif">fermenting juice</text>
      </svg>
      <p style={{ fontSize: "13px", color: ink.text, margin: "8px 0 0", lineHeight: 1.55 }}>{METHODS[id].say}</p>
    </Figure>
  );
};
