# What the app covers, and what it does not

This lists the wine regions that WSET's Level 3 specification names in its main region list (Issue 2, 2022, printed pages 10 to 12; the PDF is at wsetglobal.com), and where each one is in the app. Only those pages were read for this list, not the whole specification.

## Covered

| Country | In the app |
|:--|:--|
| France | Bordeaux, Burgundy (with Chablis, the Côte de Nuits, the Côte de Beaune, the Côte Chalonnaise and the Mâconnais as districts inside it), Champagne, Loire, Rhône north and south, Alsace, Languedoc-Roussillon, Provence, Beaujolais, South West |
| Italy | Piedmont, Tuscany, Veneto, Southern Italy (Campania, Basilicata, Puglia, Sicily), Abruzzo, Marche, Umbria, Lazio, Friuli-Venezia Giulia, Trentino-Alto Adige |
| Spain | Rioja (the Upper Ebro), Ribera del Duero, Toro, Rueda, Rías Baixas, Bierzo, Priorat, Montsant, Catalunya, Cava, Navarra, Calatayud, Cariñena, Valencia, Jumilla, Yecla, La Mancha, Valdepeñas, Sherry |
| Germany | Mosel, Nahe, Rheingau, Rheinhessen, Pfalz, Baden, Franken (all seven) |
| Austria | Niederösterreich, Burgenland, Steiermark |
| Portugal | Vinho Verde, Douro, Dão, Bairrada, Alentejo, Lisboa |
| Hungary | Tokaj, Eger, Villány |
| Greece | Santorini, Naoussa, Nemea |
| New World | California, Oregon, Washington, New York (Finger Lakes), Ontario, British Columbia, Chile, Argentina, Australia, New Zealand, South Africa |

## Not covered, or only partly

- **Castilla y León Vino de la Tierra.** Still not a region. The WSET wording and the full list of allowed grapes could not be found, and the official specification pages would not open, so nothing about it is guessed here. Penedès (still wines) was added on 2026-10-26 from the DO's own specification, version March 2026.
- **Smaller places inside a region.** The specification names many districts and appellations (Sancerre, Muscadet, Saumur and others). Some are listed as places inside a region, but they have no page of their own.
- **Sparkling wines** are now covered: Franciacorta has its own region (added 2026-11-03), the other sparkling wines sit in their regions, a *Sparkling* filter gathers every sparkling question, and the *Styles* tab compares the methods side by side.
- **Fortified wines** are now covered: Madeira has its own region (added 2026-11-03), and Port, Sherry, the French Vins Doux Naturels, Marsala and Rutherglen Muscat sit in their regions, with a *Fortified* filter in the quiz and the mock exam that gathers every fortified question.
- **Canada's other areas.** Only Niagara and the Okanagan.
- **Anything from the specification's other units**, such as production and the business of wine, beyond what the quiz touches.

## Thinnest regions in the quiz

`npm run coverage` lists how many questions each region has. On 2026-11-03 the 21 thinnest regions (Villány, New York, Oregon, Vinho Verde, Yecla, Burgundy and fifteen that had five) were each brought to at least eight. The thinnest now have six each, 19 of them: baden, bairrada, bierzo, carinena, catalunya, franciacorta, friuli, jumilla, lazio, marche, nahe, naoussa, rheinhessen, rioja, santorini, steiermark, trentinoAltoAdige, tuscany, washington.

Every region has at least six, which a test checks.

## How the facts were checked

See "How far to trust the facts" in the README.
