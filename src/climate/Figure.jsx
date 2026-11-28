// A card for one climate diagram: a title, the idea in a sentence, the
// picture, and what to remember for the exam.
export const gold = "#C4A962";
export const ink = { soft: "#B8B0A0", text: "#D5D0C4", head: "#E8E4D9", faint: "#7a7268", label: "#8B7355" };
export const COLD = "#6FA8DC";
export const WARM = "#E07A5F";

export const Figure = ({ title, idea, remember, source, children }) => (
  <figure style={{ margin: 0, background: "#1f1c18", border: "1px solid #2a2520", borderRadius: "8px", padding: "14px 16px" }}>
    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", color: ink.head, margin: "0 0 4px", fontWeight: 600 }}>{title}</h3>
    <p style={{ color: ink.soft, fontSize: "13px", lineHeight: 1.55, margin: "0 0 10px" }}>{idea}</p>
    {children}
    {remember && (
      <figcaption style={{ marginTop: "10px", fontSize: "13px", color: ink.text, lineHeight: 1.55, borderLeft: `2px solid ${gold}`, paddingLeft: "10px" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: gold, display: "block" }}>Remember</span>
        {remember}
      </figcaption>
    )}
    {source && (
      <div style={{ fontSize: "11px", color: ink.faint, marginTop: "6px" }}>
        {source.note ? source.note + " " : ""}
        {(source.links ?? (source.url ? [source] : [])).map((l, i, all) => (
          <span key={l.url}>{i === 0 ? (all.length > 1 ? "Sources: " : "Source: ") : "; "}<a href={l.url} target="_blank" rel="noreferrer" style={{ color: gold }}>{l.title}</a>{i === all.length - 1 ? "." : ""}</span>
        ))}
      </div>
    )}
  </figure>
);

// Buttons that pick one of a few options.
export const Choice = ({ label, value, options, onChange }) => (
  <div role="group" aria-label={label} style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
    {options.map(([id, text]) => (
      <button key={id} aria-pressed={value === id} onClick={() => onChange(id)} style={{
        background: value === id ? gold : "none", color: value === id ? "#1a1a1a" : ink.soft,
        border: "1px solid #3a3530", borderRadius: "4px", padding: "3px 10px", fontSize: "11px", cursor: "pointer"
      }}>{text}</button>
    ))}
  </div>
);
