// The steps for white, red and rosé, in order. Each step: [name, juice with
// its skins?, "press" where the juice leaves the skins].
export const ROUTES = {
  white: {
    label: "White",
    steps: [
      ["Harvest", false], ["Crush", true], ["Press", true, "press"],
      ["Ferment, cool (12 to 22 °C)", false], ["Optional: malolactic, lees, oak", false], ["Clarify and stabilise", false], ["Bottle", false]
    ],
    say: "The juice is pressed off the skins before it ferments, so it takes almost no colour or tannin. Black grapes can make white wine this way if pressed gently."
  },
  red: {
    label: "Red",
    steps: [
      ["Harvest", false], ["Crush (and usually destem)", true], ["Ferment on the skins, warmer (about 20 to 30 °C)", true], ["Manage the cap", true],
      ["Press", true, "press"], ["Malolactic", false], ["Mature, often in oak", false], ["Clarify and stabilise", false], ["Bottle", false]
    ],
    say: "The juice ferments with its skins, which give colour, tannin and flavour. The press comes after fermentation, to separate the new wine from the skins."
  },
  rose: {
    label: "Rosé",
    steps: [
      ["Harvest", false], ["Crush", true], ["Ferment for a few hours on the skins", true], ["Drain the juice off", true, "press"],
      ["Finish fermenting cool, like a white", false], ["Clarify and stabilise", false], ["Bottle", false]
    ],
    say: "The juice starts fermenting on the skins for a few hours, just enough for a little colour. Then it is drained off and finishes fermenting cool, like a white wine. Direct pressing gives an even paler rosé. Blending red and white wine is a third method, not allowed in many parts of Europe."
  }
};
