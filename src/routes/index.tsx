import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-shell";
import { WorldMap } from "@/components/world-map";
import { COUNTRIES, COUNTRY_ORDER } from "@/data/countries";
import heroImg from "@/assets/hero-coffee.jpg";
import beansImg from "@/assets/coffee-beans.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juan Valdez · Global Expansion Strategy 2030 — IBCC" },
      {
        name: "description",
        content:
          "Comprehensive global expansion strategy for Juan Valdez Café — IBCC case study with interactive market map of the 5 priority countries for 2030.",
      },
      { property: "og:title", content: "Juan Valdez · Global Expansion Strategy 2030" },
      {
        property: "og:description",
        content:
          "Interactive IBCC case: doubling sales by 2030 with a scientific market selection framework across USA, UK, South Korea, Saudi Arabia and Mexico.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Colombian coffee farmer in the Andes"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_145/0.92)] via-[oklch(0.22_0.05_60/0.78)] to-[oklch(0.22_0.05_60/0.45)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-3xl text-cream">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              International Business Case Competition · 2030
            </div>
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Global Expansion Strategy
              <span className="block text-gold">Juan Valdez Café</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/85 md:text-xl">
              A comprehensive, scientific framework to double sales by 2030 —
              shifting Juan Valdez from "selling coffee" to selling a
              <em className="text-gold not-italic"> premium cultural heritage</em>.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-warm)] transition-transform hover:-translate-y-0.5"
              >
                Explore the 5 Markets →
              </Link>
              <Link
                to="/framework"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-7 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/20"
              >
                See the Framework
              </Link>
            </div>
          </div>
        </div>

        {/* KPI strip */}
        <div className="mx-auto -mb-10 max-w-7xl px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-[var(--shadow-elegant)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Sales Growth by 2030", value: "x2", sub: "Min. $280M USD" },
              { label: "Internationalization", value: ">40%", sub: "of total revenue" },
              { label: "Net Profitability", value: "≥5%", sub: "Margin maintained" },
              { label: "Network Efficiency", value: ">85%", sub: "Stores w/ + EBITDA" },
            ].map((k) => (
              <div key={k.label} className="bg-card p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {k.label}
                </div>
                <div className="mt-2 font-display text-4xl text-primary">{k.value}</div>
                <div className="mt-1 text-xs text-secondary">{k.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="mx-auto max-w-7xl px-6 pt-28 pb-16">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-accent">
            5 Priority Markets · 2030
          </div>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
            Where Juan Valdez goes next
          </h2>
          <p className="mt-4 text-muted-foreground">
            Selected through a three-filter framework (CAGE distance, Specialty
            Coffee potential, and Procafecol strategic fit). Click any
            highlighted country on the map to explore its tailored expansion
            solution.
          </p>
        </div>

        <WorldMap />

        {/* Country grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COUNTRY_ORDER.map((key) => {
            const c = COUNTRIES[key];
            return (
              <Link
                key={key}
                to="/solutions/$country"
                params={{ country: key }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-start justify-between">
                  <div className="text-3xl">{c.flag}</div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {c.verdict}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-foreground">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                <div className="mt-5 border-t border-border pt-4 text-xs">
                  <div className="text-muted-foreground">CAGE Determinant</div>
                  <div className="mt-1 font-medium text-secondary">{c.cageFactor}</div>
                </div>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
                  Read strategy
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* POSITIONING */}
      <section
        className="relative mt-16 overflow-hidden bg-(image:--gradient-coffee) py-24 text-cream"
      >
        <img
          src={beansImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-gold">
                Brand Positioning
              </div>
              <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
                The leading premium Colombian coffee brand
              </h2>
              <p className="mt-5 text-cream/85">
                Juan Valdez highlights its origin, quality, and the support of
                more than <strong className="text-gold">540,000 coffee-growing families</strong>,
                offering an authentic experience that connects coffee tradition
                with global modernity.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                ["Identity & Origin", "The icon of Colombian coffee — authenticity and national pride."],
                ["Premium Segment", "Specialty coffees (Colina, Cumbre), freeze-dried & capsules."],
                ["Differentiated Model", "Network of 675+ stores with welcoming, modern environments."],
                ["Sustainability", "Direct value to coffee growers, climate action, circular economy."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-2xl border border-cream/30 bg-cream/15 p-5 backdrop-blur">
                  <div className="font-display text-lg text-gold">{t}</div>
                  <div className="mt-1 text-sm text-cream">{d}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
