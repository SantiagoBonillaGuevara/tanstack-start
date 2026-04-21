import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-shell";

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "CAGE Analysis & Market Comparison · Juan Valdez IBCC" },
      {
        name: "description",
        content:
          "Detailed CAGE analysis across Large Economies, Emerging Coffee Markets, Mature/Specialty markets and Experience pilots — leading to the 5 final selected countries.",
      },
      { property: "og:title", content: "CAGE Analysis & Market Comparison · Juan Valdez" },
      {
        property: "og:description",
        content:
          "Comparative CAGE tables and final verdict for each candidate country.",
      },
    ],
  }),
  component: MarketsPage,
});

const cageGroups: { title: string; rows: { country: string; c: string; a: string; g: string; e: string }[] }[] = [
  {
    title: "Large Economies",
    rows: [
      { country: "China", c: "Transition from tea to coffee; preference for soft/floral profiles (match with Colombia).", a: "Import regulations; importance of local alliances and e-commerce.", g: "Great distance; complex logistics but with highly efficient ports.", e: "246% growth in Colombian coffee imports; 1 trillion yuan market." },
      { country: "Brazil", c: "Deeply rooted coffee culture (largest producer); young openness to Specialty Coffee.", a: "Mercosur bloc; internal tax complexity for foreign brands.", g: "Regional proximity; simpler land and sea logistics.", e: "Market of USD 11.34B; high local competition but receptive to 'Premium'." },
      { country: "Mexico", c: "Shared language and Latin heritage; memorable brand ('When are they coming back?').", a: "Pacific Alliance; requires a trusted local franchise partner.", g: "Proximity to the US and Colombia; established north-south logistics.", e: "Low per capita consumption (0.53 kg) — a 'blue ocean' to cultivate." },
    ],
  },
  {
    title: "Emerging Markets with a Coffee Heritage",
    rows: [
      { country: "India", c: "Coffee as a status symbol for Millennials and Gen Z (Bengaluru/Delhi).", a: "Complex bureaucracy; specific regulations for foreign investment.", g: "Very distant; logistics requires intermediate hubs.", e: "CAGR of 13.28%; coffee shop market projected at USD 929M by 2030." },
      { country: "Saudi Arabia", c: "Coffee as the center of social life; the 'Coffee Shop' is the third space.", a: "Local regulations; ease of franchise models.", g: "Strategic hub for the MENA region.", e: "High GDP per capita (~$49K); high willingness to spend on premium experiences." },
    ],
  },
  {
    title: "Mature Markets / Specialty",
    rows: [
      { country: "South Korea", c: "Mass consumption (405 cups/person); obsession with traceability and craftsmanship.", a: "Free Trade Agreement (FTA) in force with Colombia.", g: "Long distance; Seoul as a hyper-connected center.", e: "Market of USD 13.67B; Colombia is the 5th largest exporter." },
      { country: "Germany", c: "Valuation of 'Colombian Coffee' (eAmbrosia) certification and sustainability.", a: "EU regulations; high certification standards.", g: "Europe's logistics hub; port of Hamburg as a key entry point.", e: "Largest specialty market in Europe (21.3% European share)." },
      { country: "Netherlands", c: "Sophisticated consumers; preference for fair trade.", a: "Single point of entry for the EU; pro-trade regulations.", g: "Main logistics gateway (Rotterdam); re-export base.", e: "High retail infrastructure (481 active points of sale)." },
      { country: "USA", c: "'To-go' culture and personalization; high awareness of sustainability and certifications (Fair Trade/Organic).", a: "FDA regulatory framework; strong FTAs; strict labeling requirements.", g: "Relative proximity; multiple ports of entry on both coasts.", e: "World's largest coffee market by revenue; high penetration of e-commerce and subscriptions." },
    ],
  },
  {
    title: "Experience and Quality Markets (Pilots)",
    rows: [
      { country: "Japan", c: "Culture of precision and hand-drip; deep respect for Colombian origin.", a: "Extremely rigorous phytosanitary standards.", g: "Very distant; requires high preservation packaging and logistics.", e: "Mature consumption; 5th destination of Colombian exports (728K bags)." },
      { country: "United Kingdom", c: "Valuation of B-Corp companies; strong competition with global chains.", a: "Post-Brexit regulations; very high ethical standards for consumption.", g: "Island with logistics independent of mainland EU.", e: "Specialty growth of 9.64%; focus on the 25–39 year old consumer." },
    ],
  },
];

const verdicts: [string, string, string, string, string, string][] = [
  ["USA", "USD 78,035", "Medium-high", "83.6", "Yes (Florida)", "✅ Enter"],
  ["Saudi Arabia", "~USD 55,000", "Low", "Medium", "Validated region", "✅ Enter"],
  ["United Kingdom", "USD 45,936", "Low", "83.6", "Yes (3 stores)", "✅ Enter"],
  ["Germany", "~USD 48,000", "High", "Medium", "No", "⚠️ No"],
  ["Mexico", "USD 11,385 🟡", "Low-medium", "72.4 🟡", "Yes (history)", "✅ Enter"],
  ["South Korea", "~USD 32,000 🟡", "High", "Medium 🟡", "No", "✅ Enter"],
  ["China", "USD 12,663 🔴", "Very high", "77.9 🟡", "Minimum", "❌ No"],
];

function MarketsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-[0.22em] text-accent">Section 5</div>
        <h1 className="mt-3 font-display text-5xl text-primary">CAGE Analysis</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
          Cultural, Administrative, Geographic and Economic distance assessed
          across four market families.
        </p>

        <div className="mt-12 space-y-12">
          {cageGroups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-2xl text-primary">{g.title}</h2>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-border shadow-[var(--shadow-soft)]">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead className="bg-secondary text-secondary-foreground">
                    <tr>
                      <th className="px-4 py-3 font-display">Country</th>
                      <th className="px-4 py-3 font-display">Cultural (C)</th>
                      <th className="px-4 py-3 font-display">Administrative (A)</th>
                      <th className="px-4 py-3 font-display">Geographic (G)</th>
                      <th className="px-4 py-3 font-display">Economic (E)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {g.rows.map((r) => (
                      <tr key={r.country} className="hover:bg-muted/40">
                        <td className="px-4 py-3 font-semibold text-primary">{r.country}</td>
                        <td className="px-4 py-3 text-foreground/85">{r.c}</td>
                        <td className="px-4 py-3 text-foreground/85">{r.a}</td>
                        <td className="px-4 py-3 text-foreground/85">{r.g}</td>
                        <td className="px-4 py-3 text-foreground/85">{r.e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-accent">Section 5b</div>
        <h2 className="mt-3 font-display text-4xl text-primary">Comparative Table of Markets</h2>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border shadow-[var(--shadow-soft)]">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-4 py-3 font-display">Country</th>
                <th className="px-4 py-3 font-display">GDP per capita</th>
                <th className="px-4 py-3 font-display">Barriers to entry</th>
                <th className="px-4 py-3 font-display">Ease of Business</th>
                <th className="px-4 py-3 font-display">Prior presence</th>
                <th className="px-4 py-3 font-display">Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {verdicts.map((row) => (
                <tr key={row[0]} className="hover:bg-muted/40">
                  <td className="px-4 py-3 font-semibold text-primary">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3">{row[2]}</td>
                  <td className="px-4 py-3">{row[3]}</td>
                  <td className="px-4 py-3">{row[4]}</td>
                  <td className="px-4 py-3 font-semibold">{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="text-xs uppercase tracking-[0.22em] text-accent">Section 6</div>
        <h2 className="mt-3 font-display text-4xl text-primary">Detailed Analysis of the 5 Selected Countries</h2>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border shadow-[var(--shadow-soft)]">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="px-4 py-3 font-display">Country</th>
                <th className="px-4 py-3 font-display">Entry Strategy</th>
                <th className="px-4 py-3 font-display">CAGE Factor Determinant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {[
                ["USA", "Aggressive Retail and E-commerce (Subscriptions).", "Economic: World's largest market with high willingness to spend on premiums."],
                ["United Kingdom", "Ethical certifications (B-Corp) and concept stores.", "Cultural: Young consumer (25-39 years old) who values sustainability."],
                ["South Korea", "Focus on traceability and coffee craftsmanship.", "Administrative: Full utilization of the FTA to reduce tariffs."],
                ["Saudi Arabia", "'Third Space' model (Large social stores).", "Cultural: Coffee is the center of social and religious life."],
                ["Mexico", "Master franchises with high-level local partners.", "Geographic/Cultural: Physical proximity and shared language."],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-muted/40">
                  <td className="px-4 py-3 font-semibold text-primary">{row[0]}</td>
                  <td className="px-4 py-3 text-foreground/85">{row[1]}</td>
                  <td className="px-4 py-3 text-foreground/85">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
