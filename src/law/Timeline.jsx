import { TIMELINE } from "./data.js";
import { Figure, gold, ink } from "../Figure.jsx";

// When the systems began.
export const Timeline = () => (
  <Figure
    title="How the rules grew"
    idea="Origin laws began in France in the 1930s, spread across Europe and the New World, and were brought under one EU system in 2009."
    remember="France 1935 (INAO), Italy 1963 (DOC), South Africa 1973 (Wine of Origin), USA 1978 to 1980 (AVAs), EU PDO and PGI for wine from 2009."
    source={TIMELINE.source}>
    <ol style={{ listStyle: "none", margin: 0, padding: "0 0 0 18px", borderLeft: `2px solid ${gold}55` }}>
      {TIMELINE.events.map((e) => (
        <li key={e.year} style={{ position: "relative", padding: "0 0 12px 14px" }}>
          <span aria-hidden="true" style={{ position: "absolute", left: "-25px", top: "4px", width: "12px", height: "12px", borderRadius: "50%", background: gold, border: "2px solid #1f1c18" }} />
          <span style={{ fontSize: "16px", fontWeight: 700, color: gold, marginRight: "10px" }}>{e.year}</span>
          <span style={{ fontSize: "13.5px", color: ink.text }}>{e.text}</span>
        </li>
      ))}
    </ol>
  </Figure>
);
