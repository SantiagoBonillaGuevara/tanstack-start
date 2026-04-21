import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site-shell";
import { COUNTRIES, COUNTRY_ORDER, type CountryKey } from "@/data/countries";
import { COUNTRY_CONTENT, type Bullet, type Section } from "@/data/country-content";

export const Route = createFileRoute("/solutions/$country")({
  loader: ({ params }) => {
    const key = params.country as CountryKey;
    if (!COUNTRIES[key]) throw notFound();
    return { key };
  },
  head: ({ params }) => {
    const key = params.country as CountryKey;
    const c = COUNTRIES[key];
    if (!c) {
      return {
        meta: [{ title: "Country not found · Juan Valdez IBCC" }],
      };
    }
    return {
      meta: [
        { title: `${c.name} Strategy · Juan Valdez IBCC` },
        { name: "description", content: `${c.name}: ${c.tagline}. ${c.entryStrategy}` },
        { property: "og:title", content: `Juan Valdez in ${c.name}` },
        { property: "og:description", content: c.tagline },
      ],
    };
  },
  component: CountrySolutionPage,
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl text-primary">Country not found</h1>
        <p className="mt-3 text-muted-foreground">
          The expansion strategy you're looking for doesn't exist.
        </p>
        <Link
          to="/solutions"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          ← Back to Solutions
        </Link>
      </div>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell>
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl text-primary">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </PageShell>
  ),
});

function CountrySolutionPage() {
  const { key } = Route.useLoaderData() as { key: CountryKey };
  const c = COUNTRIES[key];
  const content = COUNTRY_CONTENT[key];

  const idx = COUNTRY_ORDER.indexOf(key);
  const prev = idx > 0 ? COUNTRY_ORDER[idx - 1] : null;
  const next = idx < COUNTRY_ORDER.length - 1 ? COUNTRY_ORDER[idx + 1] : null;

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-(image:--gradient-coffee) text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link to="/solutions" className="text-xs uppercase tracking-[0.22em] text-gold hover:underline">
            ← All Solutions
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-6xl">{c.flag}</span>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-gold">
                Strategy 7.{idx + 1}
              </div>
              <h1 className="font-display text-5xl md:text-6xl">{c.name}</h1>
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-xl text-cream/85">{c.tagline}</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <Stat label="GDP per capita" value={c.gdpPerCapita} />
            <Stat label="CAGE Determinant" value={c.cageFactor} />
            <Stat label="Verdict" value={c.verdict} />
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">
          {content.sections.map((s: Section) => (
            <article key={s.title}>
              <h2 className="font-display text-3xl text-primary">{s.title}</h2>
              {s.intro && (
                <p className="mt-4 text-lg text-foreground/90">{s.intro}</p>
              )}
              {s.bullets && (
                <ul className="mt-5 space-y-3">
                  {s.bullets.map((b: Bullet, i: number) => (
                    <li key={i} className="flex gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span className="text-foreground/90">
                        {b.bold && <strong className="text-secondary">{b.bold}: </strong>}
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {/* Prev / Next */}
        <div className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-8">
          {prev ? (
            <Link to="/solutions/$country" params={{ country: prev }} className="group flex flex-col">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Previous</span>
              <span className="font-display text-xl text-primary group-hover:text-accent">
                ← {COUNTRIES[prev].name}
              </span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to="/solutions/$country" params={{ country: next }} className="group flex flex-col text-right">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Next</span>
              <span className="font-display text-xl text-primary group-hover:text-accent">
                {COUNTRIES[next].name} →
              </span>
            </Link>
          ) : <span />}
        </div>
      </section>
    </PageShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-cream/15 bg-cream/5 p-4 backdrop-blur">
      <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{label}</div>
      <div className="mt-1 text-sm text-cream">{value}</div>
    </div>
  );
}
