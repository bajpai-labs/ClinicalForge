import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Beaker,
  CheckCircle2,
  HeartPulse,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";
import { PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/services")({
  head: () =>
    pageSocialHead({
      title: `Clinical Simulation Services: PK/PD, Toxicity, Trial Success | ${PRODUCT_NAME}`,
      description: `Four clinical simulation pipelines: DILI prediction, PK/PD dose optimization, trial success probability, and adaptive design simulation. Delivered in 3 to 5 weeks.`,
      canonical: `${SITE_ORIGIN}/services`,
      ogTitle: `${PRODUCT_NAME} Simulation Services`,
      ogDescription: `PK/PD modeling, toxicity prediction, and virtual trial simulation for Phase II and Phase III de-risking. Engagements from $125K.`,
    }),
  component: ServicesPage,
});

const services = [
  {
    icon: ShieldAlert,
    title: "Toxicity & DILI Prediction",
    problem: "Quantifying hepatotoxicity and safety failure risk before Phase II enrollment on a lead small molecule.",
    steps: [
      "Integrate Phase I PK, preclinical tox, and compound liability data",
      "Build PBPK model for hepatic exposure across virtual patient cohort",
      "Run mechanistic DILI simulation with co-medication and genotype stratification",
      "Deliver ranked dose scenarios with failure probability and backup compound comparison",
    ],
    output: "Go/no-go recommendation · DILI probability by regimen · board decision deck",
    timeline: "3 weeks",
    price: "Engagements typically $125K–$350K per program",
  },
  {
    icon: Activity,
    title: "PK/PD Dose Optimization",
    problem: "Identifying minimum efficacious dose and eliminating redundant arms in oncology or specialty Phase II designs.",
    steps: [
      "Population PK model from Phase I rich/sparse sampling data",
      "Exposure-response and tumor growth inhibition calibration",
      "Drug-drug interaction simulation for combination protocols",
      "Virtual trial simulation across dose arms with toxicity tradeoffs",
    ],
    output: "Recommended dose · eliminated arm analysis · FDA briefing addendum",
    timeline: "3–4 weeks",
    price: "Engagements typically $200K–$400K per program",
  },
  {
    icon: BarChart3,
    title: "Trial Success Probability Modeling",
    problem: "Quantifying Phase III success probability for biologics with population mix different from Phase II.",
    steps: [
      "Bayesian meta-analysis of published Phase III benchmarks",
      "Individual patient data modeling from Phase II with dropout imputation",
      "Monte Carlo virtual trial (10,000 iterations) under planned protocol",
      "Sample size optimization and endpoint selection sensitivity analysis",
    ],
    output: "Success probability · optimized sample size · endpoint failure mode report",
    timeline: "4–5 weeks",
    price: "Engagements typically $300K–$500K per program",
  },
  {
    icon: Beaker,
    title: "Adaptive Design Simulation",
    problem: "Optimizing interim looks, futility boundaries, and enrichment strategies before protocol lock.",
    steps: [
      "Calibrate outcome models from Phase I/II accumulating data",
      "Simulate interim analysis performance under multiple boundary rules",
      "Model enrichment strategies by biomarker or prior exposure status",
      "Deliver protocol amendment recommendations with operating characteristics",
    ],
    output: "Interim boundary specification · enrollment scenario timelines · DSMB briefing support",
    timeline: "3–4 weeks",
    price: "Engagements typically $250K–$450K per program",
  },
];

const methods = [
  { icon: HeartPulse, title: "Population PK/PD", body: "NONMEM and Monolix models with covariate search and bootstrap validation." },
  { icon: Stethoscope, title: "PBPK simulation", body: "Organ-level exposure modeling for liver, tumor, and cardiac tissue distribution." },
  { icon: ShieldAlert, title: "Mechanistic tox", body: "DILIrank, reactive metabolite, and BSEP inhibition integrated with exposure thresholds." },
  { icon: BarChart3, title: "Virtual trials", body: "Monte Carlo engines projecting ORR, PFS, safety signals, and primary endpoint success." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[var(--parchment)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Services</div>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Four simulation pipelines. Built for phase transition decisions.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Every engagement returns quantified outcome probabilities plus the technical
            documentation your clinical development and regulatory teams need for go/no-go decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-6 py-20">
        {services.map((s, i) => (
          <article key={s.title} className="grid gap-8 rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-soft)] md:grid-cols-[1fr_1.4fr] md:p-10">
            <div>
              <div className="font-mono text-xs text-muted-foreground">Service 0{i + 1}</div>
              <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.problem}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-t border-border pt-3"><dt className="text-muted-foreground">Timeline</dt><dd className="font-semibold text-foreground">{s.timeline}</dd></div>
                <div className="flex justify-between border-t border-border pt-3"><dt className="text-muted-foreground">Starting price</dt><dd className="font-semibold text-foreground">{s.price}</dd></div>
              </dl>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Process</div>
              <ol className="mt-3 space-y-3">
                {s.steps.map((step, idx) => (
                  <li key={step} className="flex gap-3 text-sm text-foreground">
                    <span className="font-mono text-xs text-primary">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-lg border border-border bg-muted/40 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Deliverable</div>
                <div className="mt-1 text-sm text-foreground">{s.output}</div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Methodology</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The science behind the simulation.</h2>
              <p className="mt-4 max-w-md text-background/70">
                We compose published pharmacometric methods with proprietary calibration trained on
                observed clinical outcomes from closed engagements.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {methods.map((m) => (
                <div key={m.title} className="rounded-xl border border-background/10 bg-background/5 p-5">
                  <m.icon className="h-5 w-5 text-accent" />
                  <div className="mt-3 font-semibold">{m.title}</div>
                  <p className="mt-1 text-sm text-background/70">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Custom & Enterprise Projects</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Multi-indication simulation, integration with clinical data warehouses, real-time model
            updates as trial data accumulates, and bespoke calibration on proprietary outcome datasets.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Multi-indication trial simulation", "CDISC data integration", "Real-time interim model updates", "Custom outcome calibration"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 text-secondary" />{f}</li>
            ))}
          </ul>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Contact sales <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
