import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-shell";

export const Route = createFileRoute("/framework")({
  head: () => ({
    meta: [
      { title: "Market Selection Framework · Juan Valdez IBCC" },
      {
        name: "description",
        content:
          "A scientific 3-filter framework (CAGE, Specialty Coffee Potential, Procafecol Fit) to reduce expansion to 5 priority markets by 2030.",
      },
      { property: "og:title", content: "Market Selection Framework · Juan Valdez" },
      {
        property: "og:description",
        content:
          "CAGE Distance + Specialty Coffee potential + Strategic Fit — the methodology behind the 5 priority markets.",
      },
    ],
  }),
  component: FrameworkPage,
});

function FrameworkPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="text-xs uppercase tracking-[0.22em] text-accent">Section 4</div>
        <h1 className="mt-3 font-display text-5xl text-primary">
          Market Selection Framework
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
          Objective: reduce to <strong>5 high-priority markets</strong> for 2030.
          Selection passes through a two-axis filter — Market Attractiveness and
          Strategic Fit (CAGE) — refined by three sequential filters.
        </p>

        {/* Decision 0 */}
        <div className="mt-12 rounded-3xl border border-accent/30 bg-accent/5 p-8">
          <div className="text-xs uppercase tracking-[0.22em] text-accent">Decision 0</div>
          <h2 className="mt-2 font-display text-3xl text-primary">Consolidate or Expand?</h2>
          <p className="mt-3 text-foreground/80">
            Evaluate whether growth in current markets is enough to 2x sales
            (Colombia + transformation). If <strong>not sufficient → expansion</strong>.
          </p>
        </div>

        {/* Filter 1 */}
        <div className="mt-10">
          <div className="text-xs uppercase tracking-[0.22em] text-secondary">Filter 1 · Macro</div>
          <h2 className="mt-2 font-display text-3xl text-primary">Market Attractiveness — CAGE Distance</h2>
          <p className="mt-2 text-sm text-muted-foreground italic">
            Reference: CAGE Framework (Ghemawat, 2001 HBR) · Sakarya et al. 2007 Int. Marketing Review
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["Cultural", "Language, coffee culture"],
              ["Administrative", "Ease of doing business"],
              ["Geographic", "Logistics from Colombia"],
              ["Economic", "GDP per capita, middle class"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <div className="font-display text-xl text-primary">{t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-sm font-medium text-accent">→ Discard high-risk markets.</div>
        </div>

        {/* Filter 2 */}
        <div className="mt-12">
          <div className="text-xs uppercase tracking-[0.22em] text-secondary">Filter 2 · Coffee Potential</div>
          <h2 className="mt-2 font-display text-3xl text-primary">Specialty Coffee Demand</h2>
          <p className="mt-2 text-sm text-muted-foreground italic">
            Reference: ICO 2023 · Statista Market Insights · Exhibit 9b
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Per capita consumption", "Current volume and growth trend; population & urbanization."],
              ["Out-of-home culture", "Out-of-home volume; % sales in stores; retail price."],
              ["Competition", "Number of Starbucks stores + chains present."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <div className="font-display text-xl text-primary">{t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-sm font-medium text-accent">→ Prioritize markets with greatest specialty demand.</div>
        </div>

        {/* Filter 3 */}
        <div className="mt-12">
          <div className="text-xs uppercase tracking-[0.22em] text-secondary">Filter 3 · Procafecol Fit</div>
          <h2 className="mt-2 font-display text-3xl text-primary">Strategic Fit</h2>
          <p className="mt-2 text-sm text-muted-foreground italic">
            Reference: Kotler (2005) Market Entry Framework · AAA Strategies (Ghemawat) · Case pp. 7-12
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["Entry Model", "Store / mass / e-comm / mixed; CAPEX required."],
              ["Available Partner", "Franchisee, JV or experienced distributor."],
              ["Purpose as Advantage", "B-Corp; sustainability valued by local consumer."],
              ["Logistic Viability", "FoNC-Almacafé chain into the new country."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <div className="font-display text-xl text-primary">{t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Composite */}
        <div className="mt-14 rounded-3xl bg-(image:--gradient-coffee) p-10 text-cream shadow-[var(--shadow-elegant)]">
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Composite Score</div>
          <h2 className="mt-2 font-display text-4xl text-cream">Prioritized List of 5 Markets</h2>
          <div className="mt-6 inline-flex items-baseline gap-3 rounded-2xl border border-cream/30 bg-cream/15 px-6 py-4 font-mono text-lg text-cream backdrop-blur">
            Score = F1 × <span className="text-gold font-bold">0.25</span> + F2 × <span className="text-gold font-bold">0.45</span> + F3 × <span className="text-gold font-bold">0.30</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {["Large Economies","Emerging Coffee Markets","Mature / Specialty","Experience + Quality"].map((b) => (
              <span key={b} className="rounded-full border border-cream/40 bg-cream/15 px-3 py-1.5 text-cream font-medium">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
