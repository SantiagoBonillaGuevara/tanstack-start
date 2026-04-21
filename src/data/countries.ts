export type CountryKey = "usa" | "uk" | "korea" | "saudi" | "mexico";

export interface CountryData {
  key: CountryKey;
  name: string;
  flag: string;
  tagline: string;
  cageFactor: string;
  entryStrategy: string;
  gdpPerCapita: string;
  verdict: string;
  // Map highlight: a simplified polygon path on a 1000x500 equirectangular projection.
  mapPath: string;
  labelXY: [number, number];
}

export const COUNTRIES: Record<CountryKey, CountryData> = {
  usa: {
    key: "usa",
    name: "United States",
    flag: "🇺🇸",
    tagline: "Identity, Premium Quality & Latino Nostalgia",
    cageFactor: "Economic — World's largest market with high willingness to spend on premium.",
    entryStrategy: "Aggressive Retail (Target, Publix, Walmart) + E-commerce subscriptions.",
    gdpPerCapita: "USD 78,035",
    verdict: "✅ Enter",
    mapPath:
      "M 150 175 L 270 170 L 295 195 L 285 230 L 240 245 L 200 245 L 175 230 L 150 210 Z",
    labelXY: [220, 210],
  },
  mexico: {
    key: "mexico",
    name: "Mexico",
    flag: "🇲🇽",
    tagline: "Consolidation in a Sister Market",
    cageFactor: "Geographic / Cultural — Physical proximity and shared language.",
    entryStrategy: "Master franchises with high-level local partners; Flagship in Mexico City.",
    gdpPerCapita: "USD 11,385",
    verdict: "✅ Enter",
    mapPath:
      "M 195 250 L 245 245 L 255 270 L 240 285 L 215 285 L 200 270 Z",
    labelXY: [225, 268],
  },
  uk: {
    key: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "Experiential Specialty Coffee for Gen Z",
    cageFactor: "Cultural — Young consumer (25–39) who values sustainability.",
    entryStrategy: "Ethical certifications (B-Corp, Rainforest Alliance) + Concept Stores.",
    gdpPerCapita: "USD 45,936",
    verdict: "✅ Enter",
    mapPath:
      "M 478 158 L 491 156 L 495 168 L 489 178 L 478 178 L 472 168 Z",
    labelXY: [484, 168],
  },
  saudi: {
    key: "saudi",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    tagline: "Luxury, Hospitality & the Tasting Ritual",
    cageFactor: "Cultural — Coffee is the center of social and religious life.",
    entryStrategy: "Ultra-premium 'Third Space' flagships in Riyadh & Jeddah.",
    gdpPerCapita: "~USD 55,000",
    verdict: "✅ Enter",
    mapPath:
      "M 575 215 L 615 213 L 625 235 L 615 258 L 590 260 L 575 245 Z",
    labelXY: [600, 235],
  },
  korea: {
    key: "korea",
    name: "South Korea",
    flag: "🇰🇷",
    tagline: "The Asian Coffee Giant — 405 cups / person / year",
    cageFactor: "Administrative — Full utilization of the FTA to reduce tariffs.",
    entryStrategy: "Concept Store in Seoul; traceability and craftsmanship focus.",
    gdpPerCapita: "~USD 32,000",
    verdict: "✅ Enter",
    mapPath:
      "M 800 205 L 818 203 L 822 218 L 815 228 L 802 226 L 798 215 Z",
    labelXY: [810, 215],
  },
};

export const COUNTRY_ORDER: CountryKey[] = ["usa", "uk", "korea", "saudi", "mexico"];
