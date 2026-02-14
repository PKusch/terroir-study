# 🍷 Terroir Study

**A map-first, visual study tool for WSET Level 3 wine certification.**

[**→ Try the live demo**](https://pkusch.github.io/terroir-study/)

---

## The Problem

I'm studying for WSET Level 3 and discovered that every wine study app treats wine knowledge as text-based trivia. Flashcard apps ask "What is Burgundy's climate?" and expect you to recall a word. But wine is inherently **spatial** and **visual** — understanding *why* Merlot dominates Bordeaux's Right Bank requires seeing the clay soils, understanding the maritime climate, and connecting that to winemaking decisions.

The existing tools fail because they:
- Treat regions as isolated facts rather than connected systems
- Lack visual/spatial context (maps, climate overlays, soil relationships)  
- Test recall instead of understanding
- Scatter information across flashcards with no coherent mental model

## The Solution

Terroir Study is **map-first and connection-oriented**. Instead of memorising facts in isolation, you learn *why* each region works the way it does — from climate through to glass.

### Three Study Modes

**🗺️ Explore** — Click any region on the interactive France map. See climate, soils, grapes, winemaking, and style in context. Browse sub-regions, grape varieties, and quality hierarchies.

**🔗 Connect** — The core differentiator. For each region, see the full chain: Climate → Soil → Grapes → Winemaking → Style. Understand *why* Champagne uses chalk soils, *why* Alsace is dry despite being northerly, *why* Chenin Blanc can be made in every style.

**✦ Quiz** — Three question types that test understanding, not just recall:
- **Map questions** — "Click the region famous for galets"
- **Connection questions** — "Why is Merlot dominant on the Right Bank?"
- **Scenario questions** — "A Champagne producer wants a richer style. What would they do?"

## Regions Covered

France (WSET L3 exam-weighted):
- Bordeaux (Left Bank / Right Bank)
- Burgundy (Chablis through Mâconnais)
- Northern Rhône (Côte-Rôtie, Hermitage, Cornas)
- Southern Rhône (Châteauneuf-du-Pape, Gigondas)
- Loire Valley (Muscadet, Vouvray, Sancerre)
- Alsace
- Champagne
- Languedoc-Roussillon

*Italy, Spain, Germany, and New World regions coming next.*

## Tech Stack

- **React 18** — Component-based UI with hooks
- **Vite** — Fast build tooling
- **SVG** — Custom interactive France map (hand-crafted, not a library)
- **GitHub Pages** — Automated deployment via GitHub Actions
- **No external UI libraries** — All components built from scratch

## Run Locally

```bash
git clone https://github.com/PKusch/terroir-study.git
cd terroir-study
npm install
npm run dev
```

## Roadmap

- [ ] Italy (Piedmont, Tuscany, Veneto, Southern Italy)
- [ ] Spain (Rioja, Ribera del Duero, Priorat, Sherry)
- [ ] Germany (Mosel, Rheingau, Pfalz)
- [ ] New World (California, Australia, New Zealand, South Africa, Chile, Argentina)
- [ ] Spaced repetition algorithm for quiz mode
- [ ] Grape variety profiles with tasting descriptors
- [ ] Systematic Approach to Tasting (SAT) practice mode
- [ ] Progress tracking and weak-area identification

## About

Built by someone actively studying for WSET Level 3 who got frustrated with existing tools. This is the app I needed but couldn't find.

## License

MIT
