import { Figure, gold, ink } from "../Figure.jsx";

// The three routes to a sweet wine.
const ROUTES = [
  { title: "Stop the fermentation", how: "Remove or kill the yeast before it has eaten all the sugar: filter it out, add sulfur dioxide, or fortify with grape spirit.", gives: "Sweet, with lower alcohol if stopped; higher if fortified.", eg: "Port (fortified)" },
  { title: "Add sweetness", how: "Ferment the wine dry, then blend in something sweet: unfermented or concentrated grape juice, or a sweet wine.", gives: "Lightly sweet wines.", eg: "Süssreserve in Germany" },
  { title: "Concentrate the sugar in the grape", how: "Use grapes whose sugar has been concentrated: extra-ripe, shrivelled by noble rot, dried after picking, or frozen on the vine and pressed while frozen. The yeast cannot eat all that sugar.", gives: "Very sweet, rich wines.", eg: "Sauternes, Tokaji, icewine, passito" }
];

export const Sweet = () => (
  <Figure
    title="Three ways to a sweet wine"
    idea="Every sweet wine keeps some of the grape's sugar. There are three ways to get there."
    remember="Stop the yeast early, add something sweet, or start with grapes so full of sugar that the wine cannot ferment dry."
    source={{ links: [{ title: "WSET Level 2 session plans", url: "https://www.wsetglobal.com/media/13022/wset_l2wines_sessionplans_en_may2023_issue2.pdf" }, { title: "Wikipedia: dessert wine", url: "https://en.wikipedia.org/wiki/Dessert_wine" }] }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "8px" }}>
      {ROUTES.map((r, i) => (
        <div key={r.title} style={{ background: "#151310", border: "1px solid #2a2520", borderRadius: "8px", padding: "10px 12px", fontSize: "13px", color: ink.text, lineHeight: 1.5 }}>
          <div style={{ fontSize: "24px", fontWeight: 700, color: gold, lineHeight: 1 }}>{i + 1}</div>
          <div style={{ fontWeight: 600, color: ink.head, margin: "4px 0" }}>{r.title}</div>
          <div>{r.how}</div>
          <div style={{ color: ink.soft, marginTop: "6px" }}><strong style={{ color: ink.label, fontWeight: 400 }}>Gives:</strong> {r.gives}</div>
          <div style={{ color: ink.soft }}><strong style={{ color: ink.label, fontWeight: 400 }}>Examples:</strong> {r.eg}</div>
        </div>
      ))}
    </div>
  </Figure>
);
