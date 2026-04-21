import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-shell";

export const Route = createFileRoute("/diagnosis")({
  head: () => ({
    meta: [
      { title: "Diagnosis & 2030 KPIs · Juan Valdez IBCC" },
      {
        name: "description",
        content:
          "Diagnosis of Juan Valdez's current internationalization gap and the 2030 KPI targets to correct course.",
      },
      { property: "og:title", content: "Diagnosis & 2030 KPIs · Juan Valdez IBCC" },
      {
        property: "og:description",
        content:
          "What — How — Why behind Juan Valdez's internationalization disconnect, plus quantified 2030 success metrics.",
      },
    ],
  }),
  component: DiagnosisPage,
});

function DiagnosisPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12">
        <div className="text-xs uppercase tracking-[0.22em] text-accent">Section 1</div>
        <h1 className="mt-3 font-display text-5xl text-primary">
          Diagnosis of the Current Problem
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Through case review and working sessions, a critical disconnect in
          international expansion is identified.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              tag: "WHAT",
              title: "The problem",
              body: "The internationalization strategy does not reflect or align adequately with the organization's social purpose and financial objectives.",
            },
            {
              tag: "HOW",
              title: "The failure",
              body: "The methodology for classifying and selecting new markets is flawed or insufficient for global ambitions.",
            },
            {
              tag: "WHY",
              title: "The causes",
              body: "Reactive franchise sales over proactive strategy · Difficult access for foreign investors · Lack of deep end-consumer understanding.",
            },
          ].map((c) => (
            <div key={c.tag} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{c.tag}</div>
              <div className="mt-2 font-display text-2xl text-primary">{c.title}</div>
              <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-(image:--gradient-warm) p-8">
          <h2 className="font-display text-2xl text-primary">Critical Problems Identified</h2>
          <ul className="mt-4 space-y-3 text-foreground/90">
            <li><strong className="text-secondary">Misalignment:</strong> The social purpose of supporting coffee farmers and financial profitability are not aligned, generating losses in certain international operations.</li>
            <li><strong className="text-secondary">Lack of Framework:</strong> No clear, standardized criteria for deciding when to expand or when to withdraw from a market.</li>
            <li><strong className="text-secondary">Bias in Internationalization:</strong> Current growth is disorderly and does not respond to a technical approach plan.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-xs uppercase tracking-[0.22em] text-accent">Section 2</div>
        <h2 className="mt-3 font-display text-4xl text-primary">
          Key Performance Indicators · 2030 Goals
        </h2>
        <p className="mt-4 text-muted-foreground">
          Success metrics proposed for the year 2030 to correct course.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-5 py-4 font-display text-base">Indicator</th>
                <th className="px-5 py-4 font-display text-base">Goal 2030</th>
                <th className="px-5 py-4 font-display text-base">Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {[
                ["Sales Growth", "x2 (Minimum $280M USD)", "$ USD"],
                ["Internationalization", ">40% of total revenue", "% Stake"],
                ["Net Profitability", "Maintain or exceed 5%", "% Margin"],
                ["Network Efficiency", ">85% of intl. stores with positive EBITDA", "% Financial Health"],
                ["Social Reach", "Increase annual royalties by 50%", "$ USD (Royalties)"],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-muted/40">
                  <td className="px-5 py-4 font-medium text-foreground">{row[0]}</td>
                  <td className="px-5 py-4 text-secondary">{row[1]}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
