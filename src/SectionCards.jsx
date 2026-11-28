import { SECTION_VISUALS } from "./data/sectionVisuals.js";
import { figureId } from "./Figure.jsx";

// ─── The short notes, as visual cards ────────────────────────────────────────
// Each section gets an icon, its key term in bold (the words before the first
// colon), and buttons that jump to the diagrams showing it.
const serif = "'Cormorant Garamond', Georgia, serif";
const gold = "#C4A962";

const Point = ({ text }) => {
  const i = text.indexOf(": ");
  if (i > 0 && i < 40) return <><strong style={{ color: "#E8E4D9" }}>{text.slice(0, i)}</strong>{text.slice(i)}</>;
  return text;
};

const jump = (title) => {
  const el = document.getElementById(figureId(title));
  if (!el) return;
  el.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  el.animate?.([{ boxShadow: `0 0 0 2px ${gold}` }, { boxShadow: "0 0 0 0 transparent" }], { duration: 1400 });
};

export const SectionCards = ({ topic }) => {
  const map = SECTION_VISUALS[topic.id] ?? {};
  return (
    <div>
      <h3 style={{ fontFamily: serif, fontSize: "22px", color: "#E8E4D9", margin: "6px 0 2px", fontWeight: 600 }}>In short</h3>
      <p style={{ fontSize: "12px", color: "#8B7355", margin: "0 0 10px" }}>The page on one screen. Each card links back to its diagrams.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
        {topic.sections.map((s) => {
          const v = map[s.title] ?? {};
          return (
            <section key={s.title} style={{ background: "#1f1c18", border: "1px solid #2a2520", borderTop: `3px solid ${gold}`, borderRadius: "8px", padding: "12px 14px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                {v.icon && <span aria-hidden="true" style={{ fontSize: "22px", width: "40px", height: "40px", borderRadius: "50%", background: "#2a2418", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{v.icon}</span>}
                <h4 style={{ fontFamily: serif, fontSize: "20px", color: "#E8E4D9", margin: 0, fontWeight: 600 }}>{s.title}</h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", lineHeight: 1.6, color: "#D5D0C4", flex: 1 }}>
                {s.points.map((pt) => <li key={pt} style={{ marginBottom: "4px" }}><Point text={pt} /></li>)}
              </ul>
              {v.see?.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "8px", alignItems: "center" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B7355" }}>See it</span>
                  {v.see.map((t) => (
                    <button key={t} onClick={() => jump(t)} style={{ background: "none", border: "1px solid #3a3530", color: gold, padding: "2px 8px", borderRadius: "10px", fontSize: "11px", cursor: "pointer" }}>{t} ↑</button>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};
