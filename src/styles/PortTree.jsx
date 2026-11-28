import { Figure, gold, ink } from "../Figure.jsx";

// Port's two families: kept from air (ruby) or aged in oak with air (tawny).
const RUBY = [["Ruby", "young and fruity"], ["Reserve", "a step up in quality"], ["LBV (Late Bottled Vintage)", "one year, bottled after 4–6 years in wood"], ["Vintage", "the best years only, declared; bottled 2–3 years after the harvest, then ages for decades in bottle"]];
const TAWNY = [["Tawny", "aged in oak, turning nutty"], ["Reserve Tawny", "a step up in quality"], ["10, 20, 30 or 40 years old", "an indication of age: a blend tasting of that age"], ["Colheita", "one year, at least 7 years in cask"]];

const Column = ({ title, sub, items, colour }) => (
  <div style={{ background: "#151310", border: `1px solid ${colour}`, borderRadius: "8px", padding: "10px 12px" }}>
    <div style={{ fontSize: "17px", fontWeight: 700, color: colour }}>{title}</div>
    <div style={{ fontSize: "12px", color: ink.soft, marginBottom: "8px" }}>{sub}</div>
    <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {items.map(([n, d], k) => (
        <li key={n} style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: "8px", alignItems: "start", marginBottom: "6px" }}>
          <span aria-hidden="true" style={{ width: "12px", height: "12px", borderRadius: "50%", background: colour, opacity: 0.4 + k * 0.2, marginTop: "4px" }} />
          <span style={{ fontSize: "13px", color: ink.text }}><strong style={{ color: ink.head }}>{n}</strong>: {d}</span>
        </li>
      ))}
    </ol>
  </div>
);

export const PortTree = () => (
  <Figure
    title="Port's two families"
    idea="All Port is fortified part-way through fermentation, so it is sweet. Then it takes one of two paths: kept from air to stay deep and fruity, or aged in oak with air to turn tawny and nutty. Each list runs from the simplest style to the most aged, in the order the Port institute (IVDP) lists them."
    remember="Ruby family (kept from air): Ruby, Reserve, LBV, Vintage. Tawny family (aged in oak): Tawny, Reserve Tawny, 10/20/30/40-year-old, Colheita. White and rosé Ports exist too."
    source={{ links: [{ title: "IVDP: Port wine styles", url: "https://ivdp.pt/en/wines/port-wines/introduction/" }, { title: "IVDP: special categories", url: "https://ivdp.pt/en/wines/port-wines/special-categories/" }] }}>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
      <Column title="Ruby family" sub="kept from air: deep colour, fresh fruit" items={RUBY} colour="#B0304E" />
      <Column title="Tawny family" sub="aged in oak with air: amber, nuts, dried fruit" items={TAWNY} colour="#C4884A" />
    </div>
  </Figure>
);
