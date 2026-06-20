import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageSocialHead({
      title: `Clinical Simulation Pricing: Engagement Packages | ${PRODUCT_NAME}`,
      description: `Transparent engagement pricing for clinical trial simulation. Programs range from $125K to $500K depending on scope. 3 to 5 week delivery.`,
      canonical: `${SITE_ORIGIN}/pricing`,
      ogTitle: `${PRODUCT_NAME} Pricing`,
      ogDescription: `Transparent project packages for PK/PD simulation, toxicity prediction, and trial success probability modeling. Engagements from $125K per program.`,
    }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Safety Simulation",
    scope: "DILI prediction or single safety signal modeling for Phase II go/no-go",
    price: "$125K",
    timeline: "3 weeks",
    features: ["PBPK exposure model", "Mechanistic DILI simulation", "Ranked dose scenarios", "Board decision deck", "Technical documentation", "Email support"],
  },
  {
    name: "Dose Optimization",
    scope: "PK/PD dose selection, exposure-response, and virtual trial arm comparison",
    price: "$300K",
    timeline: "4 weeks",
    features: ["Everything in Safety Simulation", "Population PK/PD model", "Virtual trial Monte Carlo", "FDA briefing addendum", "Interim boundary options", "Two revision rounds"],
    featured: true,
  },
  {
    name: "Enterprise",
    scope: "Phase III success probability, multi-indication, or adaptive design programs",
    price: "Custom",
    timeline: "Flexible",
    features: ["Everything in Dose Optimization", "Bayesian meta-analysis integration", "Real-time interim model updates", "Dedicated project manager", "DSMB briefing support", "Indemnification & SLAs"],
  },
];

const faqs = [
  ["How accurate are ClinicalSim predictions?", "Across closed engagements, predictions for primary endpoints, safety signals, and trial success probability have shown 73 to 93 percent concordance with observed outcomes because models are calibrated against proprietary validation datasets and published Phase III benchmarks."],
  ["What data do you need to start?", "Phase I PK datasets (rich or sparse), preclinical tox reports, planned protocol or dose regimen, and inclusion/exclusion criteria. CDISC SDTM preferred but not required. We can also start from published benchmark data for early feasibility."],
  ["Can you support FDA or EMA meetings?", "Yes. On Dose Optimization and Enterprise tiers we deliver briefing document addenda with exposure-response plots, virtual trial operating characteristics, and sample size justification suitable for Type B and End-of-Phase II meetings."],
  ["What's the typical ROI of a simulation engagement?", "Case studies show $2.4M to $16M in preserved capital per program via avoided failed trials, optimized sample sizes, and eliminated redundant dose arms. ROI depends on trial size and phase."],
  ["Do you sign IP and confidentiality agreements?", "Always. We sign a mutual NDA before any technical discussion. All simulation models and reports are assigned to the client by default."],
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[var(--parchment)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Pricing</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Project-based pricing. No surprise invoices.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Each tier is a fixed-fee engagement with a defined simulation deliverable. Adaptive design
            extensions, multi-indication modeling, and real-time interim updates are quoted per scope.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "relative flex flex-col rounded-2xl border p-8 " +
                (t.featured
                  ? "border-primary bg-foreground text-background shadow-[var(--shadow-elegant)]"
                  : "border-border bg-background text-foreground shadow-[var(--shadow-soft)]")
              }
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                  Most popular
                </div>
              )}
              <div className="text-sm font-semibold uppercase tracking-wider opacity-80">{t.name}</div>
              <div className="mt-6 text-4xl font-bold tracking-tight">{t.price}</div>
              <div className={"mt-1 text-sm " + (t.featured ? "text-background/70" : "text-muted-foreground")}>
                {t.timeline} delivery
              </div>
              <p className={"mt-4 text-sm " + (t.featured ? "text-background/70" : "text-muted-foreground")}>{t.scope}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className={"mt-0.5 h-4 w-4 shrink-0 " + (t.featured ? "text-accent" : "text-secondary")} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold " +
                  (t.featured ? "bg-accent text-accent-foreground hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90")
                }
              >
                {t.name === "Enterprise" ? "Contact sales" : "Start project"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Add-ons:</span> Real-time interim model updates, multi-indication simulation, CDISC data integration, and on-prem deployment for sensitive clinical data are quoted separately.
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Frequently asked questions</h2>
          <dl className="mt-10 divide-y divide-border">
            {faqs.map(([q, a]) => (
              <div key={q} className="py-6">
                <dt className="text-base font-semibold text-foreground">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </SiteLayout>
  );
}
