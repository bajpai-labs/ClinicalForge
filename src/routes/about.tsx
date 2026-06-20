import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, Layers, Target, Zap } from "lucide-react";
import { PageSection } from "@/components/page-section";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SiteLayout } from "@/components/site-layout";
import { BAJPAI_LABS_URL, PRODUCT_BYLINE, PRODUCT_NAME, SITE_ORIGIN } from "@/lib/site";
import { pageSocialHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSocialHead({
      title: `About ClinicalSim: Bajpai Labs Drug Outcome Simulation Platform`,
      description: `What ${PRODUCT_NAME} is, why it exists, and the mission behind Bajpai Labs' clinical trial simulation platform. PK/PD modeling with production-accountable outcome prediction.`,
      canonical: `${SITE_ORIGIN}/about`,
      ogTitle: `About ${PRODUCT_NAME} by Bajpai Labs`,
      ogDescription: `${PRODUCT_NAME} exists to predict trial outcomes before Phase II enrollment. Pharmacometric rigor with clinical development accountability from Bajpai Labs.`,
    }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Target,
    title: "Simulate before you enroll",
    body: "Quantify DILI risk, dose-response, and trial success probability before capital is committed. Every simulation is scoped to a phase transition decision your team actually faces.",
  },
  {
    icon: Layers,
    title: "End-to-end, not point models",
    body: "From Phase I PK through virtual trial Monte Carlo and regulatory briefing: one integrated simulation pipeline with a decision-ready deliverable, not disconnected pharmacometric reports.",
  },
  {
    icon: Zap,
    title: "Clinical development timelines",
    body: "Typical engagements deliver in 3–5 weeks with FDA-ready documentation. Built for programs that cannot wait until a Phase II hold to discover the problem.",
  },
  {
    icon: Activity,
    title: "Outcome-validated output",
    body: "Every engagement returns probability estimates plus the model assumptions, sensitivity analysis, and board deck your clinical development team needs for go/no-go decisions.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/40 section-tone-vellum">
        <div className="section-grid-overlay pointer-events-none absolute inset-0 z-[1] opacity-40" aria-hidden />
        <SectionBackdrop variant="hero-field" className="z-[2]" />
        <div className="section-inner relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              About · {PRODUCT_BYLINE}
            </div>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-[var(--charcoal)] sm:text-5xl">
              Clinical simulation built for{" "}
              <span className="gold-gradient">phase transitions</span>, not dashboards.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {PRODUCT_NAME} is Bajpai Labs&apos; drug outcome simulation platform: PK/PD modeling,
              toxicity prediction, and trial success probability before expensive Phase II and
              Phase III enrollment begins.
            </p>
          </div>
        </div>
      </section>

      <PageSection
        eyebrow="Our aim"
        title="Get teams to the right phase transition decisions faster."
        description={`${PRODUCT_NAME} exists because most clinical programs commit Phase II and Phase III capital without quantifying safety risk, dose redundancy, or success probability under real patient variability. We replace assumptions with calibrated simulation.`}
        tone="parchment"
        backdrop="approach-arcs"
        folioTop
      >
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <div key={p.title} className="glass-elevated flex gap-4 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-[var(--vellum)]">
                <p.icon className="h-5 w-5 text-[var(--gold)]" />
              </span>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="font-semibold text-foreground">{p.title}</div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Mission"
        title="Bridge pharmacometrics and commercial drug development."
        tone="charcoal-deep"
        backdrop="lab-graph"
        folioTop
        align="center"
      >
        <blockquote className="mx-auto max-w-3xl text-center font-display text-2xl font-medium leading-snug text-[var(--vellum)] sm:text-3xl">
          &ldquo;Enable clinical development teams to commit capital only to trials that simulation
          says are worth running, by quantifying safety, dose, and success risk before the first
          patient is enrolled.&rdquo;
        </blockquote>
      </PageSection>

      <PageSection
        eyebrow="What we believe"
        title="The principles behind every simulation run."
        tone="vellum"
        backdrop="catalog-lattice"
        folioTop
      >
        <ul className="grid gap-5 md:grid-cols-2">
          {[
            [
              "Probabilities over power calculations",
              "A quantified 73% success probability with sensitivity bounds beats an 80% power assumption every time.",
            ],
            [
              "Production accountability",
              "Simulation output with full model documentation and regulatory addenda. Not abstract pharmacometric exercises.",
            ],
            [
              "Clinical-calibrated methods",
              "Published PK/PD techniques composed with proprietary calibration from observed Phase II and Phase III outcomes.",
            ],
            [
              "Senior-led engagement",
              "Direct access to the pharmacometricians who built the models, from scoping through board presentation.",
            ],
          ].map(([title, body]) => (
            <li key={title} className="glass-elevated p-6">
              <div className="font-semibold text-[var(--charcoal)]">{title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        eyebrow="Part of Bajpai Labs"
        title="A product from a research-driven AI lab."
        description={`${PRODUCT_NAME} is one of Bajpai Labs' specialized platforms, alongside flagship products in computational drug discovery, enterprise AI, and hybrid computing. The same research depth and production accountability that drives the parent lab drives every ClinicalSim engagement.`}
        tone="parchment-2"
        backdrop="fabric-mesh"
        folioTop
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={BAJPAI_LABS_URL}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-[var(--vellum)] px-5 py-3 text-sm font-semibold text-foreground hover:border-[var(--gold)]/40"
          >
            Visit bajpailabs.com <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow hover:opacity-90"
          >
            Start a simulation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageSection>
    </SiteLayout>
  );
}
