import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Beaker,
  Brain,
  CheckCircle2,
  Clock,
  DollarSign,
  HeartPulse,
  LineChart,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Upload,
  Users,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageSection } from "@/components/page-section";
import { SectionBackdrop } from "@/components/section-backdrop";
import { SiteLayout } from "@/components/site-layout";
import {
  CLINICAL_SIM_FAQS,
  HOME_DEFINITIONS,
  HOME_KEY_FACTS,
} from "@/lib/aeo-content";
import {
  homeJsonLdGraph,
  pageSocialHead,
} from "@/lib/seo";
import {
  PRODUCT_BYLINE,
  PRODUCT_NAME,
  SITE_META_DESCRIPTION,
  SITE_META_KEYWORDS,
  SITE_META_TITLE,
  SITE_ORIGIN,
} from "@/lib/site";

const homeCanonical = `${SITE_ORIGIN}/`;

export const Route = createFileRoute("/")({
  head: () =>
    pageSocialHead({
      title: SITE_META_TITLE,
      description: SITE_META_DESCRIPTION,
      canonical: homeCanonical,
      keywords: SITE_META_KEYWORDS,
    }),
  component: Index,
});

const designChoices = [
  {
    title: "Simulate before you enroll",
    body: "Most teams commit Phase II capital on preclinical assumptions alone. ClinicalSim quantifies hepatotoxicity risk, dose-response, and trial success probability before the first patient is dosed.",
  },
  {
    title: "Clinical-calibrated models",
    body: "Predictions are calibrated against observed Phase II and Phase III outcomes, not just in silico benchmarks or power calculations.",
  },
  {
    title: "Research rigor, regulatory speed",
    body: "Population PK/PD and virtual trial methods from Bajpai Labs, delivered on clinical development timelines with FDA-ready documentation.",
  },
  {
    title: "Direct line to leadership",
    body: "You work with the pharmacometricians and simulation architects who built the platform, not a sales team relaying requirements to a black box.",
  },
];

const advancedFeatures = [
  {
    icon: Activity,
    title: "Population PK/PD modeling",
    body: "NONMEM and Monolix population models linking exposure to efficacy and toxicity across genotype, age, and co-medication subgroups.",
  },
  {
    icon: HeartPulse,
    title: "PBPK & organ exposure",
    body: "Physiologically based pharmacokinetic simulation for hepatic, cardiac, and tumor tissue exposure under real-world dosing regimens.",
  },
  {
    icon: ShieldAlert,
    title: "Toxicity & DILI prediction",
    body: "Mechanistic hepatotoxicity models integrating DILIrank liability, reactive metabolite risk, and cumulative exposure thresholds.",
  },
  {
    icon: BarChart3,
    title: "Virtual clinical trials",
    body: "Monte Carlo simulation of 5,000 to 10,000 virtual trials to estimate success probability, sample size, and interim boundary performance.",
  },
  {
    icon: LineChart,
    title: "Exposure-response modeling",
    body: "Dose optimization via target occupancy, tumor growth inhibition, and biomarker response curves calibrated to Phase I/II data.",
  },
  {
    icon: Users,
    title: "Trial success probability",
    body: "Bayesian meta-analysis of published Phase III benchmarks to model biologic-experienced subpopulations and endpoint selection risk.",
  },
];

function Index() {
  const jsonLd = homeJsonLdGraph({
    faqs: CLINICAL_SIM_FAQS,
    definitions: HOME_DEFINITIONS,
    keyFacts: HOME_KEY_FACTS,
  });

  return (
    <SiteLayout>
      <JsonLd data={jsonLd} id="ld-json-home" />
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        id="top"
        className="relative overflow-hidden section-tone-vellum pt-[calc(4rem+1.75rem)] pb-16 sm:pb-20 md:pt-[calc(4rem+2.5rem)] md:pb-24"
      >
        <div className="section-grid-overlay pointer-events-none absolute inset-0 z-[1] opacity-30" aria-hidden />
        <SectionBackdrop variant="hero-field" className="z-[2]" />

        <div
          className="pointer-events-none absolute -right-32 -top-32 z-[1] hidden h-[560px] w-[560px] rounded-full opacity-60 lg:block"
          style={{ background: "radial-gradient(ellipse at center, rgb(184 134 11 / 0.10) 0%, transparent 68%)" }}
          aria-hidden
        />

        <svg
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 z-[2] hidden h-[380px] w-[380px] text-[var(--gold)] opacity-[0.13] lg:block"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="56" cy="56" r="84" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="56" cy="56" r="58" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
          <circle cx="56" cy="56" r="34" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
          <circle cx="56" cy="56" r="14" stroke="currentColor" strokeWidth="0.3" opacity="0.35" />
        </svg>

        <svg
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-[2] hidden h-full w-[46%] text-[var(--gold)] opacity-[0.055] lg:block"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => {
              const r = 28;
              const h = r * 0.866;
              const cx = col * h * 2 + (row % 2 === 1 ? h : 0) + h;
              const cy = row * r * 1.5 + r;
              const pts = Array.from({ length: 6 })
                .map((_, i) => {
                  const a = (Math.PI / 3) * i - Math.PI / 6;
                  return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
                })
                .join(" ");
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={pts}
                  stroke="currentColor"
                  strokeWidth="0.7"
                  fill="none"
                />
              );
            })
          )}
        </svg>

        <svg
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[2%] z-[2] hidden h-[55%] w-[30%] text-[var(--charcoal)] opacity-[0.09] md:block"
          viewBox="0 0 280 200"
          fill="none"
        >
          {([
            [50,100,120,60],[120,60,200,75],[200,75,248,138],
            [200,75,218,28],[120,60,138,10],[50,100,78,160],
            [78,160,158,178],[158,178,248,138],[120,60,50,100],
            [200,75,158,178],
          ] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" />
          ))}
          <line x1="122" y1="57" x2="198" y2="72" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
          {([[50,100],[120,60],[200,75],[248,138],[218,28],[138,10],[78,160],[158,178]] as [number,number][]).map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="5" fill="currentColor" opacity="0.55" />
          ))}
        </svg>

        <svg
          aria-hidden
          className="pointer-events-none absolute right-[6%] top-[28%] z-[2] hidden h-[220px] w-[220px] text-[var(--gold)] opacity-[0.20] xl:block"
          viewBox="0 0 100 100"
          fill="none"
        >
          {([
            [20,30],[45,18],[72,34],[86,60],
            [62,76],[30,72],[14,54],[50,50],
          ] as [number,number][]).map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="currentColor" />
          ))}
          {([
            [20,30,45,18],[45,18,72,34],[72,34,86,60],
            [86,60,62,76],[62,76,30,72],[30,72,14,54],
            [14,54,20,30],[50,50,45,18],[50,50,72,34],[50,50,62,76],
          ] as [number,number,number,number][]).map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
          ))}
        </svg>

        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[45%] w-full text-[var(--gold)] opacity-[0.045]"
          viewBox="0 0 1200 280"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 200 C100 120 200 240 300 160 S500 80 600 140 S800 220 900 140 S1100 60 1200 120"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M0 230 C100 150 200 270 300 190 S500 110 600 170 S800 250 900 170 S1100 90 1200 150"
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.6"
          />
          {Array.from({ length: 14 }).map((_, i) => {
            const x = 80 + i * 82;
            return <line key={i} x1={x} y1={195} x2={x} y2={225} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />;
          })}
        </svg>

        <div className="section-inner relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center justify-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)] lg:justify-start">
                <span className="hero-pulse-dot" aria-hidden />
                {PRODUCT_BYLINE} · Clinical simulation
              </p>
              <h1 className="mt-4 font-display text-h1 text-[var(--charcoal)]">
                Predict trial outcomes{" "}
                <span className="gold-gradient block sm:inline-block">before Phase II</span>{" "}
                begins.
              </h1>
              <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-foreground/70 md:text-lg lg:mx-0">
                {PRODUCT_NAME} simulates PK/PD exposure, toxicity risk, and trial success
                probability so your team commits capital to the right dose and design, not a
                coin flip.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  to="/contact"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[var(--charcoal-deep)] px-6 py-3 text-sm font-medium text-[var(--vellum)] transition-colors hover:bg-[var(--charcoal)] sm:w-auto"
                >
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border-2 border-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--charcoal)] transition-colors hover:bg-[var(--parchment-2)] sm:w-auto"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
              <div className="glass-elevated card-bevel-profile relative overflow-hidden rounded-xl border border-[var(--gold)]/25 bg-[var(--parchment)]/80 p-5 sm:p-6">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--gold)]/8 blur-2xl" aria-hidden />
                <p className="relative font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  Simulation pipeline
                </p>
                <ul className="relative mt-4 divide-y divide-[var(--gold)]/15">
                  {[
                    {
                      step: "01",
                      label: "PK/PD Model Build",
                      detail: "Population PK · PBPK · exposure reconstruction from Phase I data",
                      icon: Activity,
                    },
                    {
                      step: "02",
                      label: "Outcome Simulation",
                      detail: "Toxicity scoring · exposure-response · virtual trial Monte Carlo",
                      icon: Brain,
                    },
                    {
                      step: "03",
                      label: "Decision Package",
                      detail: "Dose rankings · success probability · board-ready regulatory brief",
                      icon: LineChart,
                    },
                  ].map(({ step, label, detail, icon: Icon }) => (
                    <li key={step}>
                      <div className="flex items-start gap-3 rounded-lg px-1 py-3.5">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--gold)]/20 bg-[var(--vellum)]">
                          <Icon className="h-4 w-4 text-[var(--gold)]" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1 text-left">
                          <span className="flex items-baseline gap-2 text-sm font-medium text-[var(--charcoal)]">
                            {label}
                            <span className="font-mono text-[9px] text-[var(--gold)]/70">{step}</span>
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                            {detail}
                          </span>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-4 flex items-center gap-2 border-t border-border/50 pt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <span className="hero-pulse-dot scale-75" aria-hidden />
                  PK/PD · Toxicity · Trial probability · 3–5 weeks
                </div>
              </div>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 sm:mt-14 lg:mt-16">
            {[
              ["73–93%", "Prediction accuracy"],
              ["$2.4–16M", "Capital preserved per program"],
              ["3–5 wks", "Typical delivery"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <dt className="font-display text-2xl font-bold text-[var(--charcoal)] sm:text-3xl">{val}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <PageSection
        id="problem"
        eyebrow="The Problem"
        title="Phase II failures cost $20M+ and 18 months. Most were predictable."
        tone="charcoal"
        backdrop="lab-graph"
        folioTop
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: DollarSign,
              title: "$20–85M per pivotal trial",
              body: "Phase II and Phase III programs commit massive capital before exposure-response and safety risk are quantified under real patient variability.",
            },
            {
              icon: Clock,
              title: "12–24 months lost",
              body: "A failed Phase II restarts the clock on enrollment, regulatory strategy, and investor milestones. DILI holds average 14 months to resolution.",
            },
            {
              icon: ShieldCheck,
              title: "~50% Phase II failure rate",
              body: "Half of Phase II programs fail on efficacy or safety. Standard power calculations do not model population mix, co-medications, or mechanism-based tox.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-[var(--gold)]/20 bg-[var(--charcoal-deep)] p-6">
              <c.icon className="h-6 w-6 text-[var(--gold)]" />
              <div className="mt-4 text-lg font-semibold text-[var(--vellum)]">{c.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vellum)]/65">{c.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="solution"
        eyebrow="The Solution"
        title="A clinical simulation pipeline that quantifies risk before enrollment begins."
        tone="vellum"
        backdrop="delivery-steps"
        folioTop
      >
        <ol className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              icon: Upload,
              title: "Upload your clinical data",
              body: "Provide Phase I PK, preclinical tox, protocol draft, and target population criteria.",
            },
            {
              step: "02",
              icon: Brain,
              title: "Simulation engine runs",
              body: "Population PK/PD, PBPK exposure, toxicity models, and virtual trial Monte Carlo.",
            },
            {
              step: "03",
              icon: LineChart,
              title: "Decision package delivered",
              body: "Ranked dose scenarios, success probability, and FDA-ready exposure-response brief.",
            },
          ].map((s) => (
            <li key={s.step} className="glass-elevated relative p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium text-muted-foreground">{s.step}</span>
                <s.icon className="h-5 w-5 text-[var(--gold)]" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-6 rounded-2xl border border-border bg-[var(--parchment)]/90 p-8 backdrop-blur md:grid-cols-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Traditional
            </div>
            <div className="mt-2 font-display text-2xl font-bold text-foreground line-through decoration-[var(--burgundy)]/60">
              3 dose arms · $14M · 22 months
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              {PRODUCT_NAME}
            </div>
            <div className="mt-2 font-display text-2xl font-bold text-foreground">
              2 optimized arms · $11.8M · 15 months
            </div>
          </div>
          <div className="flex items-end">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:underline"
            >
              See the case study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="design-choices"
        eyebrow="Design choices"
        title="Built for phase transitions, not dashboards."
        description={`Every architectural choice in ${PRODUCT_NAME} serves one goal: give your team quantified go/no-go decisions before capital is committed.`}
        tone="parchment"
        backdrop="ledger-columns"
        folioTop
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {designChoices.map((choice, i) => (
            <div key={choice.title} className="glass-elevated flex gap-4 p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-[var(--vellum)] font-mono text-xs text-[var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-semibold text-foreground">{choice.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{choice.body}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="features"
        eyebrow="Advanced features"
        title="The science behind the simulation."
        description="Published pharmacometric methods composed with proprietary calibration from Bajpai Labs."
        tone="charcoal"
        backdrop="catalog-lattice"
        folioTop
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advancedFeatures.map((f) => (
            <div key={f.title} className="rounded-xl border border-[var(--gold)]/20 bg-[var(--charcoal-deep)] p-6">
              <f.icon className="h-6 w-6 text-[var(--gold)]" />
              <div className="mt-4 font-semibold text-[var(--vellum)]">{f.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vellum)]/65">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--gold)]/30 bg-[var(--charcoal-deep)]">
          <div className="border-b border-[var(--gold)]/20 px-6 py-4 md:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--gold)]/30 bg-[var(--charcoal)] text-[var(--gold)]">
                <RefreshCw className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
                  Methodology
                </p>
                <h3 className="font-display text-lg text-[var(--vellum)] md:text-xl">
                  Calibration Loop
                </h3>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 md:px-8">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
              {[
                "Data integration",
                "Model calibration",
                "Virtual trial",
                "Outcome validation",
              ].map((label, i, arr) => (
                <span key={label} className="flex items-center gap-2">
                  <span className="rounded-md border border-[var(--gold)]/25 bg-[var(--charcoal)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--vellum)]/80">
                    {label}
                  </span>
                  {i < arr.length - 1 ? (
                    <ArrowRight className="h-3 w-3 shrink-0 text-[var(--gold)]/60" aria-hidden />
                  ) : (
                    <span className="font-mono text-[var(--gold)]/60" aria-hidden>↩</span>
                  )}
                </span>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Stethoscope,
                  title: "Clinical-calibrated priors",
                  body: "Each model cycle incorporates published Phase III benchmarks and proprietary validation outcomes, not generic assumptions.",
                },
                {
                  icon: Brain,
                  title: "Interim data integration",
                  body: "Accumulating trial data updates success probability and dose recommendations without restarting from scratch.",
                },
                {
                  icon: ShieldCheck,
                  title: "Reducing false confidence",
                  body: "Sensitivity analysis and tornado charts expose the variables that actually drive trial failure, not just point estimates.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" aria-hidden />
                  <div>
                    <div className="text-sm font-semibold text-[var(--vellum)]">{title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--vellum)]/60">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="why"
        eyebrow={`Why ${PRODUCT_NAME}`}
        title="Pharmacometric rigor. Clinical development speed."
        description={`${PRODUCT_NAME} combines population PK/PD expertise from Bajpai Labs with trial simulation depth that most biostatistics-only vendors lack.`}
        tone="charcoal-deep"
        backdrop="lab-graph"
        folioTop
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--vellum)] px-5 py-3 text-sm font-semibold text-[var(--charcoal-deep)] hover:bg-[var(--parchment)]"
            >
              Start your first simulation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="space-y-5">
            {[
              [
                "Decision-grade probabilities",
                "Success probability, DILI risk, and dose rankings with confidence bounds. Not power calculations alone.",
              ],
              [
                "PK/PD + clinical expertise",
                "Cross-disciplinary team spanning pharmacometrics, toxicology, and clinical development strategy.",
              ],
              [
                "Regulatory-ready output",
                "FDA and EMA briefing addenda with exposure-response plots your regulatory team can submit directly.",
              ],
              [
                "Direct line to leadership",
                "You work with the simulation architects who built the models, not a sales team.",
              ],
            ].map(([t, b]) => (
              <li
                key={t}
                className="flex gap-4 rounded-xl border border-[var(--gold)]/20 bg-[var(--vellum)]/5 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
                <div>
                  <div className="font-semibold text-[var(--vellum)]">{t}</div>
                  <p className="mt-1 text-sm text-[var(--vellum)]/72">{b}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection id="services" tone="charcoal-deep" backdrop="folio-stack" folioTop title="">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14 xl:gap-16">
          <div className="max-w-md lg:sticky lg:top-28">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Simulation services
            </p>
            <h2 className="mt-4 font-display text-h2 leading-[1.12] text-[var(--vellum)]">
              Four pipelines.{" "}
              <span className="gold-gradient block">One simulation engine.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--vellum)]/72 md:text-base">
              From hepatotoxicity prediction through Phase III success probability, each service
              shares the same calibrated PK/PD infrastructure and senior pharmacometrics team.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--vellum)]/30 px-5 py-3 text-sm font-medium text-[var(--vellum)] transition-colors hover:border-[var(--gold)]/45 hover:bg-[var(--vellum)]/5"
            >
              All services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-[1.375rem] top-6 bottom-6 hidden w-px bg-[var(--gold)]/20 md:block" aria-hidden />
            <ol className="space-y-0">
              {[
                {
                  step: "00",
                  icon: ShieldAlert,
                  title: "Toxicity & DILI Prediction",
                  tagline: "Safety · Phase transition",
                  price: "Engagements typically $125K–$350K per program",
                  body: "Mechanistic hepatotoxicity simulation integrating PBPK exposure, DILIrank liability, and population co-medication profiles. Delivers go/no-go recommendation before Phase II enrollment.",
                  highlight: true,
                },
                {
                  step: "01",
                  icon: Activity,
                  title: "PK/PD Dose Optimization",
                  tagline: "Exposure-response · oncology",
                  price: "Engagements typically $200K–$400K per program",
                  body: "Population PK/PD and tumor growth inhibition modeling to eliminate redundant dose arms and identify minimum efficacious exposure.",
                },
                {
                  step: "02",
                  icon: BarChart3,
                  title: "Trial Success Probability",
                  tagline: "Virtual trial · biologics",
                  price: "Engagements typically $300K–$500K per program",
                  body: "Monte Carlo virtual Phase III simulation with Bayesian meta-analysis for endpoint selection, sample size, and subpopulation response.",
                },
                {
                  step: "03",
                  icon: Beaker,
                  title: "Adaptive Design Simulation",
                  tagline: "Interim boundaries · enrichment",
                  price: "Engagements typically $250K–$450K per program",
                  body: "Interim look optimization, futility boundaries, and enrichment strategy simulation for adaptive Phase II/III protocols.",
                },
              ].map((s) => (
                <li
                  key={s.step}
                  className={`group relative border-t first:border-t-0 ${"highlight" in s && s.highlight ? "border-[var(--gold)]/30" : "border-[var(--vellum)]/10"}`}
                >
                  {"highlight" in s && s.highlight && (
                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-[var(--gold)]/5" aria-hidden />
                  )}
                  <div className="flex gap-4 py-6 md:gap-5 md:py-7">
                    <div className="flex shrink-0 flex-col items-center gap-3 md:w-11">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]/80">{s.step}</span>
                      <span className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--gold)]/35 bg-[var(--charcoal-deep)] text-[var(--gold)] transition-colors group-hover:border-[var(--gold)]/55">
                        <s.icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-lg text-[var(--vellum)] md:text-xl">{s.title}</h3>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)]/75">{s.tagline}</span>
                        {"highlight" in s && s.highlight && (
                          <span className="rounded border border-[var(--gold)]/35 bg-[var(--gold)]/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[var(--gold)]">
                            Start here
                          </span>
                        )}
                      </div>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--vellum)]/65">{s.body}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-5">
                        <span className="font-mono text-[10px] text-[var(--gold)]/70">{s.price}</span>
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--gold)] transition-colors hover:text-[var(--gold-hover)]"
                        >
                          See capabilities
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </PageSection>

      <section className="relative overflow-hidden section-tone-parchment-2">
        <SectionBackdrop variant="vault-seal" className="z-[1]" />
        <div className="section-inner relative z-10 pb-24 pt-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-[var(--charcoal-deep)]/95 p-10 text-[var(--vellum)] backdrop-blur sm:p-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              {PRODUCT_BYLINE}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
              Ready to simulate before you enroll?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--vellum)]/72">
              30-minute intro call with the Bajpai Labs team. No pitch deck, just a scoping
              conversation about your Phase II or Phase III decision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--vellum)] px-5 py-3 text-sm font-semibold text-[var(--charcoal-deep)] hover:bg-[var(--parchment)]"
              >
                Schedule a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--vellum)]/25 px-5 py-3 text-sm font-semibold text-[var(--vellum)] hover:border-[var(--gold)]/40"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
