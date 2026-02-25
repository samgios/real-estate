export interface RegionRow {
  rank: number
  region: string
  eurSqm: string
  eurSqmNum: number
  feasible500: string
  strDemand: string
  strOrder: number
  valueAdd: string
  permitEase: string
  permitOrder: number
  risk: string
  bestFor: string
  keyTowns: string
  financials: string
  pros: string
  cons: string
  _prefab: "yes" | "no"
}

export const REGIONS_DATA: RegionRow[] = [
  { rank: 1, region: "Puglia (Valle d'Itria / Salento)", eurSqm: "~1,437", eurSqmNum: 1437, feasible500: "Yes", strDemand: "Very high", strOrder: 4, valueAdd: "Moderate", permitEase: "Moderate", permitOrder: 2, risk: "Saturation in hubs", bestFor: "Luxury heritage STR, high international visibility", keyTowns: "Lecce, Ostuni, Polignano, Monopoli", financials: "Stone shell €150–200k + reno €200–250k = €400–450k. Season May–Oct; two airports.", pros: "High liquidity; established tourism; exceptional brand.", cons: "Increasing competition; Ostuni near price ceiling.", _prefab: "no" },
  { rank: 2, region: "Sicily (Val di Noto)", eurSqm: "712–1,500", eurSqmNum: 1106, feasible500: "Yes", strDemand: "High", strOrder: 3, valueAdd: "Moderate", permitEase: "Moderate", permitOrder: 2, risk: "Logistics", bestFor: "Cultural STR and digital nomad long-stays", keyTowns: "Ragusa, Modica, Noto, Syracuse", financials: "100 m² premium €400k all-in. Ragusa €712/m² entry.", pros: "UNESCO heritage; year-round tourism; price growth potential.", cons: "Island logistics; infrastructure inconsistent in rural areas.", _prefab: "no" },
  { rank: 3, region: "Umbria (inland)", eurSqm: "~1,173", eurSqmNum: 1173, feasible500: "Yes", strDemand: "High", strOrder: 3, valueAdd: "High", permitEase: "High", permitOrder: 3, risk: "Seasonality (no coast)", bestFor: "Countryside retreats, authentic village life", keyTowns: "Perugia, Todi, Orvieto, Assisi", financials: "€180–250k acquisition + €200k reno. Rome <2h.", pros: "Tuscan vibes, lower prices; expat-ready professionals.", cons: "No sea; winter demand softer outside cities.", _prefab: "no" },
  { rank: 4, region: "Abruzzo (coast + inland)", eurSqm: "~1,379", eurSqmNum: 1379, feasible500: "Yes", strDemand: "Moderate", strOrder: 2, valueAdd: "High (prefab)", permitEase: "High", permitOrder: 3, risk: "Low brand awareness", bestFor: "Land + prefab, adventure-seeking guests", keyTowns: "Pescara, Vasto, Roccaraso, Penne", financials: "Land €30–50k near coast; land + prefab under €350k. Dual-season (beach + ski).", pros: "Welcoming for new builds; Rome 2h; nature.", cons: "Brand trailing Puglia; more domestic tourism.", _prefab: "yes" },
  { rank: 5, region: "W. Liguria (Riviera di Ponente)", eurSqm: "2,500–3,000", eurSqmNum: 2750, feasible500: "Yes", strDemand: "Very high", strOrder: 4, valueAdd: "Low", permitEase: "Low", permitOrder: 1, risk: "High €/m²", bestFor: "Beachfront apartments, resilient capital value", keyTowns: "Sanremo, Bordighera, Imperia", financials: "€500k → 60–80 m² sea-view or small historic house. Season Mar–Oct.", pros: "Crisis-proof; elite reputation; Nice airport.", cons: "Strict coastal/historic codes; high transaction taxes.", _prefab: "no" },
  { rank: 6, region: "Tuscany (Maremma / Arezzo)", eurSqm: "~1,684", eurSqmNum: 1684, feasible500: "Yes", strDemand: "Very high", strOrder: 4, valueAdd: "Very low", permitEase: "Low", permitOrder: 1, risk: "Saturated listings", bestFor: "Capital preservation, elite hospitality", keyTowns: "Cortona, Grosseto, Arezzo", financials: "€500k → 3-bed villa or farmhouse portion. Vincoli extend review 9+ months.", pros: "Unmatched brand; high liquidity; English-speaking support.", cons: "Saturated; high taxes and maintenance.", _prefab: "no" },
  { rank: 7, region: "Molise (Termoli)", eurSqm: "~1,028", eurSqmNum: 1028, feasible500: "Yes", strDemand: "Emerging", strOrder: 1, valueAdd: "High", permitEase: "High", permitOrder: 3, risk: "Low liquidity", bestFor: "Ground-floor coastal growth, multi-unit", keyTowns: "Termoli", financials: "Second-row reno well under €500k; could secure two units. Gateway to Tremiti.", pros: "Lowest costs; uncrowded beaches; pro-investment local govt.", cons: "Limited infrastructure; winter occupancy low.", _prefab: "no" },
  { rank: 8, region: "Calabria (Cedar Coast)", eurSqm: "~958", eurSqmNum: 958, feasible500: "Yes", strDemand: "Moderate", strOrder: 2, valueAdd: "High", permitEase: "Variable", permitOrder: 0, risk: "Weaker economy", bestFor: "Budget vacation rentals, low entry barrier", keyTowns: "Tropea, Scalea", financials: "Sea-view from €67k; €500k could do 4–6 units. Highly seasonal.", pros: "Stunning scenery; digital nomad interest growing.", cons: "Weaker economy; demand drops outside Jul–Aug.", _prefab: "no" },
]
