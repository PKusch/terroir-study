// ─── Naming grapes on a label ────────────────────────────────────────────────
// Given a blend (grape → %), what may the label say about varieties in each
// market? Rules: EU Regulation 2019/33 Art 50; US 27 CFR 4.23; Wine Australia
// blending rules.

const sorted = (blend) => Object.entries(blend).filter(([, p]) => p > 0).sort((a, b) => b[1] - a[1]);

export function varietyLabels(blend, market) {
  const g = sorted(blend);
  const out = [];
  const single = { eu: 85, us: 75, au: 85 }[market];
  if (g[0] && g[0][1] >= single) out.push({ text: g[0][0], why: `${g[0][0]} is ${g[0][1]}%: at least ${single}% may carry its name alone.` });
  if (g.length >= 2) {
    if (market === "eu") out.push({ text: g.map(([n]) => n).join("–"), why: "Two or more named: they must make up 100%, listed from most to least." });
    if (market === "us") out.push({ text: g.map(([n, p]) => `${n} ${p}%`).join(", "), why: "Two or more named: every grape must be named, each with its percentage." });
    if (market === "au") {
      // Any run of the largest grapes, in order, that reaches at least 85%.
      let sum = 0;
      g.forEach(([, p], k) => {
        sum += p;
        if (k >= 1 && sum >= 85) {
          const named = g.slice(0, k + 1).map(([n]) => n);
          out.push({ text: named.join(" "), why: `Named grapes add up to ${sum}% (at least 85%), from most to least, with none larger left out.` });
        }
      });
    }
  }
  return out;
}
