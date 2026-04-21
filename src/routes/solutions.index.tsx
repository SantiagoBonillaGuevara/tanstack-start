import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-shell";
import { WorldMap } from "@/components/world-map";
import { COUNTRIES, COUNTRY_ORDER } from "@/data/countries";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "5 Country Solutions · Juan Valdez IBCC" },
      {
        name: "description",
        content:
          "Tailored expansion solutions for Juan Valdez Café in the United States, United Kingdom, South Korea, Saudi Arabia and Mexico.",
      },
      { property: "og:title", content: "5 Country Solutions · Juan Valdez" },
      {
        property: "og:description",
        content:
          "Click any country on the interactive map to read its full expansion strategy.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-[0.22em] text-accent">Section 7 · Solutions</div>
        <h1 className="mt-3 font-display text-5xl text-primary">
          Five Tailored Expansion Strategies
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
          Each market receives a bespoke entry model — calibrated to its
          cultural codes, regulatory environment and consumer maturity. Click a
          country on the map below to read its full strategy.
        </p>

        <div className="mt-10">
          <WorldMap />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {COUNTRY_ORDER.map((key) => {
            const c = COUNTRIES[key];
            return (
              <Link
                key={key}
                to="/solutions/$country"
                params={{ country: key }}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.flag}</span>
                    <h2 className="font-display text-2xl text-primary">{c.name}</h2>
                  </div>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Strategy 7.{COUNTRY_ORDER.indexOf(key) + 1}
                  </span>
                </div>
                <p className="text-foreground/85">{c.tagline}</p>
                <div className="mt-2 grid gap-2 text-xs sm:grid-cols-2">
                  <div className="rounded-lg bg-muted/60 p-3">
                    <div className="uppercase tracking-wide text-muted-foreground">Entry Strategy</div>
                    <div className="mt-1 font-medium text-secondary">{c.entryStrategy}</div>
                  </div>
                  <div className="rounded-lg bg-muted/60 p-3">
                    <div className="uppercase tracking-wide text-muted-foreground">CAGE Factor</div>
                    <div className="mt-1 font-medium text-secondary">{c.cageFactor}</div>
                  </div>
                </div>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-accent">
                  Read full strategy
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-(image:--gradient-coffee) p-10 text-cream shadow-[var(--shadow-elegant)]">
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Section 8 · Conclusion</div>
          <h2 className="mt-3 font-display text-4xl text-cream">A Scientific Selection Framework</h2>
          <p className="mt-5 text-cream">
            The solution for Juan Valdez isn't just opening more stores, but
            implementing a <strong className="text-gold">Scientific Selection Framework</strong> that
            balances economic appeal with administrative ease. The goal of
            doubling sales by 2030 depends on 40% of revenue coming from
            abroad — shifting the brand from a "selling coffee" model to one
            of "selling a premium cultural heritage".
          </p>
        </div>
      </section>
    </PageShell>
  );
}
