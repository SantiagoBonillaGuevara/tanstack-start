import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg shadow-[var(--shadow-soft)]">
            JV
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-primary">Juan Valdez</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              IBCC · Global Strategy 2030
            </div>
          </div>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-accent" }}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/diagnosis"
            activeProps={{ className: "text-accent" }}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Diagnosis
          </Link>
          <Link
            to="/framework"
            activeProps={{ className: "text-accent" }}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Framework
          </Link>
          <Link
            to="/markets"
            activeProps={{ className: "text-accent" }}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Markets
          </Link>
          <Link
            to="/solutions"
            activeProps={{ className: "text-accent" }}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Solutions
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-(image:--gradient-coffee) text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl text-cream">Juan Valdez</div>
          <p className="mt-3 text-sm text-cream">
            Comprehensive Global Expansion Strategy · Prepared for the
            International Business Case Competition (IBCC).
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">
            Sections
          </div>
          <ul className="mt-3 space-y-2 text-sm text-cream">
            <li>
              <Link to="/diagnosis" className="hover:text-gold">
                Diagnosis & KPIs
              </Link>
            </li>
            <li>
              <Link to="/framework" className="hover:text-gold">
                Selection Framework
              </Link>
            </li>
            <li>
              <Link to="/markets" className="hover:text-gold">
                Market Comparison
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-gold">
                Country Solutions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">
            2030 Promise
          </div>
          <p className="mt-3 text-sm text-cream">
            "Shifting the brand from selling coffee to selling a premium
            cultural heritage." Doubling sales by 2030 with &gt;40% revenue from
            abroad.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">
            Team
          </div>
          <ul className="mt-3 space-y-2 text-sm text-cream">
            <li>Santiago Guevara</li>
            <li>Santiago Pujol</li>
            <li>Manuela Rubio</li>
            <li>Nicolas Muñoz</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/20 py-5 text-center text-xs text-cream/80">
        © {new Date().getFullYear()} Juan Valdez IBCC Strategic Brief — All
        content for academic purposes.
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
