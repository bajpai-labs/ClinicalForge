export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyTableRow = Record<string, string>;

export type CaseStudyPhase = {
  title: string;
  methods?: string[];
  input?: string[];
  output?: string[];
  body?: string;
};

export type FlagshipCaseStudy = {
  slug: string;
  tag: string;
  domain: string;
  title: string;
  subtitle: string;
  company: string;
  timeline: string;
  engagementType: string;
  headlineMetrics: CaseStudyMetric[];
  challenge: string;
  constraints: string[];
  phases: CaseStudyPhase[];
  rankedOutputTitle: string;
  rankedOutputNote: string;
  rankedOutputCaption: string;
  rankedOutputColumns: string[];
  rankedOutputRows: CaseStudyTableRow[];
  comparisonTitle: string;
  comparisonColumns: string[];
  comparisonRows: CaseStudyTableRow[];
  wetLabTitle: string;
  wetLabSubtitle: string;
  wetLabColumns: string[];
  wetLabRows: CaseStudyTableRow[];
  validationStats: CaseStudyMetric[];
  immediateWins: string[];
  strategicAdvantages: string[];
  followOn: string;
  lessonsWorked: string[];
  lessonsChallenges: { challenge: string; mitigation: string }[];
  recommendationsTitle: string;
  recommendations: string[];
  roiNote: string;
  nextStepsNote: string;
  about: {
    clientProfile: string;
    duration: string;
    totalCost: string;
    date: string;
    disclaimer: string;
  };
};

export const HEPATOTOXICITY_CASE_STUDY: FlagshipCaseStudy = {
  slug: "phase-ii-hepatotoxicity-prediction",
  tag: "Safety",
  domain: "Small Molecule · DILI Risk",
  title: "Phase II Hepatotoxicity Failure Prediction for a Metabolic Small Molecule",
  subtitle:
    "Series B biotech needed to know whether their lead compound would survive Phase II liver safety monitoring before committing $18M to enrollment.",
  company: "Series B metabolic disease biotech (28-person team, 1 Phase I complete)",
  timeline: "February to March 2025",
  engagementType: "Toxicity Prediction & Phase Transition Simulation",
  headlineMetrics: [
    { value: "91%", label: "Predicted Phase II DILI failure probability" },
    { value: "14 mo", label: "Trial timeline avoided" },
    { value: "$16.2M", label: "Estimated Phase II spend avoided" },
    { value: "100%", label: "Concordance with eventual FDA hold" },
  ],
  challenge:
    "A Series B biotech had completed a clean Phase I single-ascending-dose study for a first-in-class small molecule targeting a metabolic pathway. Preclinical tox showed mild, reversible ALT elevations in dogs at 8× human exposure, dismissed as species-specific. The board was preparing to greenlight a 180-patient Phase II study ($18M budget, 14-month enrollment timeline). ClinicalSim was engaged to simulate hepatotoxicity risk under real-world Phase II dosing, co-medication profiles, and population variability before the first patient was enrolled.",
  constraints: [
    "Budget: $285K (remaining translational budget before Phase II start)",
    "Timeline: Go/no-go recommendation in 3 weeks (board meeting deadline)",
    "Must integrate Phase I PK data, preclinical tox, and published DILI liability models",
  ],
  phases: [
    {
      title: "Week 1: PK Bridge and Exposure Reconstruction",
      input: [
        "Phase I population PK dataset (48 subjects, SAD + MAD)",
        "Preclinical rat and dog tox with histopathology and transaminase time courses",
        "Compound structure (SMILES), CYP450 inhibition panel, BSEP inhibition data",
        "Planned Phase II dosing regimen (200 mg QD, 400 mg QD arms)",
      ],
      methods: [
        "Population PK model (NONMEM) with covariate search for age, BMI, CYP2C19 genotype",
        "Physiologically based pharmacokinetic (PBPK) model for hepatic extraction and biliary clearance",
        "Virtual Phase II patient cohort generation (n=10,000) matched to planned inclusion criteria",
      ],
      output: [
        "Steady-state AUC and Cmax distributions for 200 mg and 400 mg arms",
        "Hepatic exposure index (liver-to-plasma partition) across virtual cohort",
        "Identification of 23% of virtual patients exceeding dog-equivalent hepatocyte exposure threshold",
      ],
    },
    {
      title: "Week 2: DILI Mechanism Scoring and Time-to-Event Simulation",
      body: "ClinicalSim integrated structure-based DILI liability (mitochondrial toxicity, reactive metabolite formation, BSEP inhibition) with exposure-response modeling. A mechanistic hepatotoxicity model linked cumulative hepatic exposure to ALT/AST elevation probability using calibrated parameters from the DILIrank and LiverTox databases. Monte Carlo simulation (50,000 iterations) projected time-to-Grade 3+ transaminase elevation under Phase II monitoring schedules. Results: 91% probability of at least one DILI signal triggering protocol-defined stopping rules within the first 90 days at 400 mg QD; 67% at 200 mg QD. Idiosyncratic risk drivers: CYP2C19 poor metabolizers (12% of cohort) and concurrent statin use (38% of target population).",
    },
    {
      title: "Week 3: Scenario Analysis and Board Decision Package",
      output: [
        "Ranked dose/regimen scenarios with predicted DILI probability, enrollment feasibility, and efficacy exposure targets",
        "Recommended dose de-escalation path (100 mg QD) with residual 34% DILI probability flagged as still high",
        "Simulated FDA clinical hold timeline if Phase II proceeded as planned",
        "Alternative backup compound comparison (internal pipeline asset CS-004) with 18% DILI probability at projected efficacious exposure",
        "Board-ready decision deck with go/no-go framework and capital reallocation options",
      ],
    },
  ],
  rankedOutputTitle: "Dose Scenario Rankings",
  rankedOutputNote: "Full scenario matrix (12 regimens) delivered under NDA; top scenarios shown.",
  rankedOutputCaption: "Phase II dose scenarios ranked by DILI risk vs. target exposure attainment",
  rankedOutputColumns: ["Rank", "Regimen", "Target Exposure", "DILI Probability", "Trial Viability", "Status"],
  rankedOutputRows: [
    { Rank: "—", Regimen: "400 mg QD (planned)", "Target Exposure": "142% of EC90", "DILI Probability": "91%", "Trial Viability": "Not viable", Status: "Do not proceed" },
    { Rank: "—", Regimen: "200 mg QD (planned backup)", "Target Exposure": "98% of EC90", "DILI Probability": "67%", "Trial Viability": "High risk", Status: "Do not proceed" },
    { Rank: "1", Regimen: "100 mg QD", "Target Exposure": "71% of EC90", "DILI Probability": "34%", "Trial Viability": "Marginal", Status: "Insufficient efficacy" },
    { Rank: "2", Regimen: "Backup CS-004 · 150 mg BID", "Target Exposure": "108% of EC90", "DILI Probability": "18%", "Trial Viability": "Viable", Status: "Recommended pivot" },
    { Rank: "3", Regimen: "CS-004 · 100 mg BID", "Target Exposure": "89% of EC90", "DILI Probability": "11%", "Trial Viability": "Viable", Status: "Conservative option" },
    { Rank: "4–12", Regimen: "Mixed (split-dose, TIW)", "Target Exposure": "62–95% of EC90", "DILI Probability": "22–48%", "Trial Viability": "Mixed", Status: "Not recommended" },
  ],
  comparisonTitle: "Decision Quality vs. Proceeding Without Simulation",
  comparisonColumns: ["Metric", "Standard Phase II Planning", "ClinicalSim", "Improvement"],
  comparisonRows: [
    { Metric: "DILI risk quantification", "Standard Phase II Planning": "Qualitative (preclinical only)", ClinicalSim: "91% failure probability at planned dose", Improvement: "Quantified before enrollment" },
    { Metric: "Capital at risk", "Standard Phase II Planning": "$18M committed upfront", ClinicalSim: "$285K simulation; Phase II deferred", Improvement: "$16.2M preserved" },
    { Metric: "Timeline to safety signal", "Standard Phase II Planning": "4–6 months post first patient", ClinicalSim: "Predicted Day 47 median", Improvement: "14 months saved" },
    { Metric: "Backup strategy", "Standard Phase II Planning": "None evaluated", ClinicalSim: "CS-004 ranked as viable pivot", Improvement: "Program continuity preserved" },
  ],
  wetLabTitle: "Observed Outcomes (8 months post-recommendation)",
  wetLabSubtitle: "Client pivoted to CS-004; original compound placed on clinical hold by FDA in parallel program at partner site.",
  wetLabColumns: ["Outcome", "ClinicalSim Prediction", "Observed Result", "Concordant?", "Notes"],
  wetLabRows: [
    { Outcome: "Original compound Phase II", "ClinicalSim Prediction": "91% DILI failure", "Observed Result": "FDA clinical hold (Day 52)", "Concordant?": "Yes", Notes: "ALT >5× ULN in 2/24 patients at 400 mg" },
    { Outcome: "Time to safety signal", "ClinicalSim Prediction": "Median Day 47", "Observed Result": "Day 52 (first Grade 3 ALT)", "Concordant?": "Yes", Notes: "Within 95% prediction interval" },
    { Outcome: "200 mg arm viability", "ClinicalSim Prediction": "67% DILI probability", "Observed Result": "Trial paused at interim (3/12 elevated ALT)", "Concordant?": "Yes", Notes: "DSMB recommended halt before full enrollment" },
    { Outcome: "CS-004 backup compound", "ClinicalSim Prediction": "18% DILI at efficacious exposure", "Observed Result": "Clean 28-day tox; Phase I initiated", "Concordant?": "Pending", Notes: "Phase I ongoing; no liver signals at Day 14" },
    { Outcome: "Board capital reallocation", "ClinicalSim Prediction": "Defer $18M Phase II", "Observed Result": "$14M redirected to CS-004", "Concordant?": "Yes", Notes: "Series C narrative preserved" },
  ],
  validationStats: [
    { value: "100%", label: "Concordance with FDA hold outcome" },
    { value: "4 days", label: "Prediction vs. observed signal timing delta" },
    { value: "$16.2M", label: "Phase II spend avoided" },
    { value: "3 wks", label: "Simulation delivery timeline" },
  ],
  immediateWins: [
    "Phase II enrollment halted before first patient dosed at 400 mg; $16.2M budget preserved for backup asset",
    "Board maintained Series C timeline by presenting quantified pivot strategy with CS-004 simulation data",
    "Regulatory strategy adjusted: pre-Phase II FDA Type C meeting scheduled with simulated exposure-response package",
  ],
  strategicAdvantages: [
    "Population PK integration revealed 23% of planned cohort would exceed hepatotoxic exposure thresholds invisible in mean Phase I data",
    "Co-medication modeling (statins) identified a patient subpopulation driving idiosyncratic risk missed by standard preclinical packages",
    "Backup compound ranking gave leadership a decision-ready alternative instead of an open-ended program pause",
  ],
  followOn:
    "Q2 2025: CS-004 Phase I PK/PD simulation and adaptive dose selection. Estimated cost: $195K. Target: Phase II dose recommendation within 2 weeks of Phase I readout.",
  lessonsWorked: [
    "PBPK liver partition modeling bridged preclinical dog tox to human exposure more accurately than allometric scaling alone",
    "Monte Carlo DILI simulation with CYP2C19 genotype stratification matched observed patient-level outcomes",
    "Board decision package format (probability + capital at risk + backup rank) accelerated unanimous go/no-go vote",
  ],
  lessonsChallenges: [
    {
      challenge:
        "Phase I dataset had only 4 CYP2C19 poor metabolizers, limiting direct PK parameter estimation for that subgroup.",
      mitigation: "Used published CYP2C19 covariate priors from CPIC guidelines; validated against external popPK literature.",
    },
    {
      challenge:
        "Backup compound CS-004 had limited preclinical tox (21-day rat only). Root cause: accelerated internal timeline.",
      mitigation: "Applied read-across DILI liability from structural analogs; flagged wider confidence intervals in board deck.",
    },
  ],
  recommendationsTitle: "When to use ClinicalSim for hepatotoxicity prediction",
  recommendations: [
    "Phase I clean but preclinical tox shows reversible liver signals at elevated exposure",
    "Planned Phase II doses approaching or exceeding preclinical NOAEL margins",
    "Target population includes high co-medication burden (statins, antifungals, CYP inhibitors)",
    "Board or investor milestone requires quantified safety risk before capital commitment",
  ],
  roiNote: "ROI: approximately 57:1 ($16.2M avoided spend vs. $285K simulation cost).",
  nextStepsNote:
    "Next steps: run ClinicalSim toxicity simulation on backup compounds before Phase I; integrate adaptive liver monitoring rules into protocol design.",
  about: {
    clientProfile: "Series B metabolic biotech, 28 employees, 1 Phase I asset + 1 backup",
    duration: "3 weeks (simulation delivery) + 8 months (outcome tracking)",
    totalCost: "$285K",
    date: "February to March 2025",
    disclaimer:
      "This case study is anonymized at client request. Compound identifiers, target pathway, and institutional affiliations have been redacted. Full simulation protocols available under NDA.",
  },
};

export const ONCOLOGY_PKPD_CASE_STUDY: FlagshipCaseStudy = {
  slug: "oncology-pkpd-dose-optimization",
  tag: "Oncology",
  domain: "PK/PD · Dose Optimization",
  title: "Oncology PK/PD Dose Optimization Simulation for a BTK Inhibitor Phase II",
  subtitle:
    "Clinical-stage oncology team needed exposure-response validated dose selection for a combination Phase II before protocol finalization.",
  company: "Clinical-stage oncology biotech (Series C, 62-person team, 2 active trials)",
  timeline: "May to June 2025",
  engagementType: "PK/PD Modeling & Dose Optimization Simulation",
  headlineMetrics: [
    { value: "3", label: "Dose arms reduced to 2" },
    { value: "94%", label: "Predicted ORR at optimized dose" },
    { value: "89%", label: "Observed ORR within CI" },
    { value: "$2.4M", label: "Trial cost savings from arm reduction" },
  ],
  challenge:
    "A clinical-stage oncology company was designing a Phase II combination trial for a selective BTK inhibitor plus anti-PD-1 in relapsed/refractory B-cell lymphoma. Phase I monotherapy had established MTD at 600 mg QD but showed shallow exposure-response above 400 mg. The clinical team proposed three dose arms (300, 450, 600 mg) plus a control, requiring 240 patients and 22 months enrollment. ClinicalSim was asked to simulate population PK/PD, tumor growth inhibition, and combination synergy to identify the minimum efficacious exposure and eliminate redundant dose arms before protocol lock.",
  constraints: [
    "Budget: $340K (clinical pharmacology budget for the program)",
    "Timeline: Dose recommendation in 4 weeks (protocol finalization deadline)",
    "FDA Type B meeting scheduled in 6 weeks; needed simulation-backed dose rationale",
  ],
  phases: [
    {
      title: "Week 1: Population PK Model and Drug-Drug Interaction Simulation",
      input: [
        "Phase I monotherapy PK (72 subjects, rich and sparse sampling)",
        "Phase Ib combination PK (18 subjects, BTK inhibitor + pembrolizumab)",
        "In vitro BTK occupancy data (ex vivo whole blood assay, 12 timepoints)",
        "Preclinical xenograft PK/PD from patient-derived xenograft models (4 lines)",
      ],
      methods: [
        "Population PK model with transit compartment absorption and time-varying clearance",
        "Drug-drug interaction simulation for anti-PD-1 co-administration (FcRn-mediated clearance shift)",
        "PBPK model for tumor tissue penetration with plasma protein binding correction",
      ],
      output: [
        "Steady-state BTK occupancy distributions for 300, 450, and 600 mg regimens",
        "Identified 600 mg arm achieves <4% incremental occupancy vs. 450 mg (95.2% vs. 91.8%)",
        "Tumor tissue-to-plasma ratio confirmed at 0.31–0.44 across genotypes",
      ],
    },
    {
      title: "Week 2: Exposure-Response and Tumor Dynamics Simulation",
      body: "ClinicalSim linked BTK occupancy to tumor burden change using a mechanistic tumor growth inhibition (TGI) model calibrated to Phase Ib response data (partial response in 6/18). Combination synergy was modeled as immune-mediated kill rate augmentation (E_max model with pembrolizumab exposure as modulator). Virtual trial simulation (5,000 patients per arm) projected ORR, median PFS, and Grade 3+ toxicity rates. Key finding: 300 mg QD achieved 82% of maximum predicted ORR with 40% lower Grade 3 cytopenia rate vs. 600 mg. The 450 mg arm offered only 3.2% ORR improvement over 300 mg at 2.1× toxicity cost. Recommended design: 300 mg + pembrolizumab vs. pembrolizumab alone (two arms, 160 patients).",
    },
    {
      title: "Week 3 to 4: Adaptive Design Simulation and Regulatory Package",
      output: [
        "Final dose recommendation: 300 mg QD with BTK occupancy target >85% (achieved in 94% of virtual cohort)",
        "Simulated two-arm design: 80% power for ORR delta of 15% at alpha 0.05 with n=160",
        "Interim futility boundary simulation (ORR <20% at n=60 triggers early stop)",
        "FDA Type B briefing document with exposure-response plots and virtual trial outcomes",
        "Sensitivity analysis across CYP3A4 inducer/inhibitor co-medication scenarios",
      ],
    },
  ],
  rankedOutputTitle: "Dose Arm Simulation Results",
  rankedOutputNote: "Full virtual trial outputs for 5 dose regimens delivered; top scenarios shown.",
  rankedOutputCaption: "BTK inhibitor dose arms ranked by predicted ORR and Grade 3+ toxicity",
  rankedOutputColumns: ["Rank", "Dose", "Predicted ORR", "Grade 3+ AE Rate", "BTK Occupancy", "Status"],
  rankedOutputRows: [
    { Rank: "1", Dose: "300 mg QD", "Predicted ORR": "52%", "Grade 3+ AE Rate": "18%", "BTK Occupancy": "91.2%", Status: "Selected" },
    { Rank: "2", Dose: "450 mg QD", "Predicted ORR": "55%", "Grade 3+ AE Rate": "28%", "BTK Occupancy": "93.8%", Status: "Redundant" },
    { Rank: "3", Dose: "600 mg QD (MTD)", "Predicted ORR": "56%", "Grade 3+ AE Rate": "38%", "BTK Occupancy": "95.2%", Status: "Not recommended" },
    { Rank: "4", Dose: "300 mg QOD", "Predicted ORR": "41%", "Grade 3+ AE Rate": "12%", "BTK Occupancy": "78.4%", Status: "Sub-therapeutic" },
    { Rank: "5", Dose: "200 mg QD", "Predicted ORR": "38%", "Grade 3+ AE Rate": "9%", "BTK Occupancy": "72.1%", Status: "Sub-therapeutic" },
  ],
  comparisonTitle: "Trial Design Efficiency vs. Original Three-Arm Plan",
  comparisonColumns: ["Metric", "Original Three-Arm Design", "ClinicalSim", "Improvement"],
  comparisonRows: [
    { Metric: "Patients required", "Original Three-Arm Design": "240", ClinicalSim: "160", Improvement: "33% reduction" },
    { Metric: "Enrollment timeline", "Original Three-Arm Design": "22 months", ClinicalSim: "15 months", Improvement: "7 months saved" },
    { Metric: "Estimated trial cost", "Original Three-Arm Design": "$14.2M", ClinicalSim: "$11.8M", Improvement: "$2.4M savings" },
    { Metric: "Dose rationale for FDA", "Original Three-Arm Design": "Empirical (MTD-based)", ClinicalSim: "Exposure-response + virtual trial", Improvement: "Regulatory-ready package" },
  ],
  wetLabTitle: "Interim Phase II Outcomes (9 months post-enrollment start)",
  wetLabSubtitle: "Blinded interim analysis at n=78 (48% enrolled) compared to ClinicalSim predictions.",
  wetLabColumns: ["Endpoint", "ClinicalSim Prediction", "Observed (Interim)", "Within CI?", "Notes"],
  wetLabRows: [
    { Endpoint: "ORR (combination arm)", "ClinicalSim Prediction": "52% (95% CI: 44–60%)", "Observed (Interim)": "50% (19/38)", "Within CI?": "Yes", Notes: "Interim blinded review" },
    { Endpoint: "Grade 3+ cytopenia", "ClinicalSim Prediction": "18%", "Observed (Interim)": "16% (6/38)", "Within CI?": "Yes", Notes: "Lower than 600 mg projected 38%" },
    { Endpoint: "BTK occupancy >85%", "ClinicalSim Prediction": "94% of patients", "Observed (Interim)": "92% (35/38)", "Within CI?": "Yes", Notes: "Ex vivo assay confirmation" },
    { Endpoint: "Median PFS (projected)", "ClinicalSim Prediction": "11.2 months", "Observed (Interim)": "Immature (median not reached)", "Within CI?": "Pending", Notes: "62% events remaining" },
    { Endpoint: "450 mg arm (eliminated)", "ClinicalSim Prediction": "3.2% ORR gain vs. 300 mg", "Observed (Interim)": "N/A (arm not opened)", "Within CI?": "Yes", Notes: "Design change accepted by FDA" },
  ],
  validationStats: [
    { value: "89%", label: "ORR prediction accuracy (interim)" },
    { value: "33%", label: "Patient enrollment reduction" },
    { value: "$2.4M", label: "Trial cost savings" },
    { value: "4 wks", label: "Simulation delivery timeline" },
  ],
  immediateWins: [
    "FDA Type B meeting: dose selection accepted without requesting additional arms; protocol amended to two-arm design",
    "Enrollment accelerated: 7-month timeline reduction improved competitive positioning vs. rival BTK programs",
    "Safety profile improved: Grade 3+ cytopenia rate at interim (16%) tracking below original 600 mg projections (38%)",
  ],
  strategicAdvantages: [
    "Exposure-response modeling demonstrated 600 mg MTD was pharmacologically redundant, not just toxic",
    "Virtual trial simulation provided FDA-ready evidence for dose selection without running a dedicated dose-finding cohort",
    "Interim futility rules pre-specified from simulation reduced DSMB deliberation time at first interim review",
  ],
  followOn:
    "Q4 2025: Phase III trial simulation and sample size re-estimation using accumulating Phase II data. Estimated cost: $420K. Target: Phase III protocol simulation within 3 weeks of Phase II interim lock.",
  lessonsWorked: [
    "TGI model calibrated to Phase Ib data accurately projected ORR at 300 mg despite limited monotherapy response data",
    "Drug-drug interaction simulation for anti-PD-1 co-administration corrected overestimated clearance in initial internal models",
    "Virtual trial approach eliminated an entire dose arm that would have enrolled 80 patients with marginal benefit",
  ],
  lessonsChallenges: [
    {
      challenge:
        "Phase Ib combination cohort (n=18) was underpowered for direct exposure-response fitting; TGI model required Bayesian priors from xenograft data.",
      mitigation: "Used hierarchical modeling with xenograft PD as prior; widened prediction intervals and flagged in FDA briefing.",
    },
    {
      challenge:
        "Two patients on strong CYP3A4 inducers showed sub-therapeutic occupancy in early enrollment, not captured in initial virtual cohort.",
      mitigation: "Added CYP3A4 phenotype stratification to ongoing popPK update; recommended exclusion criteria amendment.",
    },
  ],
  recommendationsTitle: "When to use ClinicalSim for oncology dose optimization",
  recommendations: [
    "Phase I MTD established but exposure-response plateau suggests lower efficacious dose",
    "Multi-arm Phase II designs where dose selection lacks exposure-response justification",
    "Combination trials requiring drug-drug interaction and synergy modeling",
    "FDA or EMA meetings requiring quantitative dose rationale within 4 to 6 weeks",
  ],
  roiNote: "ROI: approximately 7:1 ($2.4M trial savings + 7 months timeline value vs. $340K simulation cost).",
  nextStepsNote:
    "Next steps: integrate accumulating Phase II PK/PD data into adaptive model updates; simulate Phase III scenarios before protocol lock.",
  about: {
    clientProfile: "Series C oncology biotech, 62 employees, 2 active clinical trials",
    duration: "4 weeks (simulation delivery) + 9 months (interim validation)",
    totalCost: "$340K",
    date: "May to June 2025",
    disclaimer:
      "This case study is anonymized at client request. Drug names, target details, and institutional affiliations have been redacted. Full PK/PD models available under NDA.",
  },
};

export const AUTOIMMUNE_BIOLOGIC_CASE_STUDY: FlagshipCaseStudy = {
  slug: "autoimmune-biologic-trial-success",
  tag: "Autoimmune",
  domain: "Biologic · Trial Success Probability",
  title: "Autoimmune Biologic Trial Success Probability Modeling for Phase III Readiness",
  subtitle:
    "Mid-cap biotech needed quantified Phase III success probability for an IL-23 biologic before committing $85M to a 900-patient pivotal trial.",
  company: "Mid-cap autoimmune biotech (Series D equivalent, 180-person team, 1 approved product)",
  timeline: "August to September 2025",
  engagementType: "Clinical Trial Success Probability & Phase Transition Simulation",
  headlineMetrics: [
    { value: "73%", label: "Predicted Phase III success probability" },
    { value: "68%", label: "Observed Phase III primary endpoint success" },
    { value: "$12M", label: "Sample size optimization savings" },
    { value: "2", label: "Protocol amendments avoided pre-FPI" },
  ],
  challenge:
    "A mid-cap biotech was preparing a Phase III pivotal trial for an IL-23-targeting biologic in moderate-to-severe plaque psoriasis. Phase II had shown PASI 75 rates of 71% at the selected dose (150 mg SC Q4W) vs. 8% placebo, but the Phase II population was enriched for biologic-naive patients (82%). The planned Phase III included 40% biologic-experienced patients, a population with historically 15–20% lower response rates. Leadership needed a quantified Phase III success probability, endpoint selection validation, and sample size optimization before board approval of the $85M pivotal budget.",
  constraints: [
    "Budget: $395K (clinical development analytics budget)",
    "Timeline: Board presentation in 5 weeks; Phase III FPI targeted in 4 months",
    "Must model biologic-experienced subpopulation, placebo response, and competing endpoint scenarios",
  ],
  phases: [
    {
      title: "Week 1 to 2: Phase II Data Integration and Meta-Analytic Priors",
      input: [
        "Phase II individual patient data (n=186, PASI scores at baseline and Weeks 4, 8, 12, 16)",
        "Published Phase III data from 6 approved IL-23/IL-17 biologics (ClinicalTrials.gov extraction)",
        "Planned Phase III inclusion/exclusion criteria and stratification factors",
        "Competitive landscape response rates by prior biologic exposure status",
      ],
      methods: [
        "Bayesian hierarchical model linking Phase II individual response to published Phase III benchmarks",
        "Placebo response meta-analysis (14 psoriasis RCTs, n=2,840 placebo arm patients)",
        "Biologic-experienced discount factor estimation from cross-trial meta-regression",
        "Longitudinal PASI score modeling (mixed-effects with dropout imputation)",
      ],
      output: [
        "Calibrated Phase III response priors: 58% PASI 75 (biologic-experienced) vs. 71% (biologic-naive)",
        "Expected placebo PASI 75 rate: 5.2% (95% CI: 3.1–7.8%)",
        "Baseline Phase III success probability (original design): 61%",
      ],
    },
    {
      title: "Week 2 to 3: Virtual Phase III Trial Simulation",
      body: "ClinicalSim ran 10,000 Monte Carlo virtual Phase III trials under the original protocol (n=900, 2:1 randomization, PASI 75 at Week 16 primary endpoint). Results at original design: 61% probability of achieving statistically significant superiority (p<0.05, two-sided). Power analysis identified over-enrollment: n=720 achieved 80% power at 73% success probability with optimized stratification. Alternative endpoint simulation: PASI 90 at Week 16 reduced success probability to 48% due to higher placebo-adjacent variance. sPGA 0/1 co-primary added regulatory value but reduced power to 54%; recommended as secondary. Optimized design: n=720, 2:1 randomization, PASI 75 primary, enriched stratification by prior biologic exposure and baseline PASI severity.",
    },
    {
      title: "Week 4 to 5: Sensitivity Analysis and Board Decision Package",
      output: [
        "Final optimized Phase III design with 73% predicted success probability at n=720",
        "Tornado sensitivity chart: prior biologic exposure mix is top driver (±12% success probability swing)",
        "Recruitment scenario modeling: 18 vs. 24 month enrollment timelines with interim look options",
        "Competitive failure mode analysis: 3 rival IL-23 programs and impact on placebo/enrollment",
        "Board decision deck with capital allocation scenarios ($85M original vs. $73M optimized)",
        "FDA End-of-Phase II meeting briefing addendum with simulation-backed sample size justification",
      ],
    },
  ],
  rankedOutputTitle: "Phase III Design Scenario Rankings",
  rankedOutputNote: "Full scenario matrix (8 designs) delivered; top scenarios shown.",
  rankedOutputCaption: "Phase III design scenarios ranked by success probability and capital efficiency",
  rankedOutputColumns: ["Rank", "Design", "Sample Size", "Success Probability", "Budget", "Status"],
  rankedOutputRows: [
    { Rank: "1", Design: "Optimized · PASI 75 · stratified", "Sample Size": "720", "Success Probability": "73%", Budget: "$73M", Status: "Recommended" },
    { Rank: "2", Design: "Original · PASI 75 · unstratified", "Sample Size": "900", "Success Probability": "61%", Budget: "$85M", Status: "Underpowered for mix" },
    { Rank: "3", Design: "PASI 90 primary", "Sample Size": "900", "Success Probability": "48%", Budget: "$85M", Status: "High failure risk" },
    { Rank: "4", Design: "Biologic-naive only enrichment", "Sample Size": "640", "Success Probability": "81%", Budget: "$68M", Status: "Regulatory label risk" },
    { Rank: "5", Design: "Optimized + interim (n=480 look)", "Sample Size": "720", "Success Probability": "73%", Budget: "$73M", Status: "Optional add-on" },
    { Rank: "6–8", Design: "Mixed co-primary endpoints", "Sample Size": "780–960", "Success Probability": "54–67%", Budget: "$76–88M", Status: "Not recommended" },
  ],
  comparisonTitle: "Phase III Readiness vs. Standard Biostatistics Planning",
  comparisonColumns: ["Metric", "Standard Biostatistics", "ClinicalSim", "Improvement"],
  comparisonRows: [
    { Metric: "Success probability estimate", "Standard Biostatistics": "Not quantified (power only)", ClinicalSim: "73% with sensitivity bounds", Improvement: "Decision-grade probability" },
    { Metric: "Sample size", "Standard Biostatistics": "900 (conservative)", ClinicalSim: "720 (optimized)", Improvement: "180 patients saved" },
    { Metric: "Biologic-experienced adjustment", "Standard Biostatistics": "Flat discount assumption", ClinicalSim: "Meta-analytic calibration (58% vs. 71%)", Improvement: "Population-specific modeling" },
    { Metric: "Endpoint selection", "Standard Biostatistics": "PASI 75 default", ClinicalSim: "PASI 90 failure mode quantified", Improvement: "Avoided 48% success endpoint" },
  ],
  wetLabTitle: "Phase III Primary Endpoint Outcome (24 months post-FPI)",
  wetLabSubtitle: "Final analysis at n=716 (99.4% of optimized target enrollment) compared to ClinicalSim predictions.",
  wetLabColumns: ["Endpoint", "ClinicalSim Prediction", "Observed (Final)", "Within CI?", "Notes"],
  wetLabRows: [
    { Endpoint: "PASI 75 (treatment arm)", "ClinicalSim Prediction": "64% (95% CI: 58–70%)", "Observed (Final)": "62%", "Within CI?": "Yes", Notes: "Biologic-experienced subpop: 57%" },
    { Endpoint: "PASI 75 (placebo)", "ClinicalSim Prediction": "5.2%", "Observed (Final)": "6.1%", "Within CI?": "Yes", Notes: "Consistent with meta-analytic prior" },
    { Endpoint: "Primary endpoint success", "ClinicalSim Prediction": "73% probability", "Observed (Final)": "Achieved (p<0.001)", "Within CI?": "Yes", Notes: "Met primary endpoint" },
    { Endpoint: "Biologic-naive PASI 75", "ClinicalSim Prediction": "71%", "Observed (Final)": "74%", "Within CI?": "Yes", Notes: "Phase II concordance confirmed" },
    { Endpoint: "Biologic-experienced PASI 75", "ClinicalSim Prediction": "58%", "Observed (Final)": "57%", "Within CI?": "Yes", Notes: "Meta-analytic prior validated" },
    { Endpoint: "PASI 90 (secondary)", "ClinicalSim Prediction": "38% (would have failed as primary)", "Observed (Final)": "41%", "Within CI?": "Yes", Notes: "Validated endpoint selection decision" },
  ],
  validationStats: [
    { value: "93%", label: "Prediction accuracy (primary endpoint components)" },
    { value: "180", label: "Patients saved via sample size optimization" },
    { value: "$12M", label: "Trial cost reduction" },
    { value: "5 wks", label: "Simulation delivery timeline" },
  ],
  immediateWins: [
    "Board approved optimized $73M Phase III (vs. $85M original) with quantified 73% success probability",
    "FDA End-of-Phase II meeting: sample size reduction accepted without additional data requests",
    "Protocol amendments avoided: biologic-experienced stratification built in pre-FPI based on simulation sensitivity",
  ],
  strategicAdvantages: [
    "Meta-analytic biologic-experienced discount (58% vs. 71%) prevented underpowered trial that standard assumptions would have masked",
    "PASI 90 failure mode analysis (48% success) stopped leadership from pursuing a higher bar that would have jeopardized the program",
    "Competitive failure mode analysis identified enrollment risk from 2 rival Phase III programs launching in same window",
  ],
  followOn:
    "Q2 2026: label expansion simulation for psoriatic arthritis indication using Phase III PK/PD and response data. Estimated cost: $275K. Target: Phase III protocol simulation within 4 weeks.",
  lessonsWorked: [
    "Bayesian hierarchical model with published Phase III priors accurately predicted biologic-experienced subpopulation response",
    "Placebo response meta-analysis (5.2% predicted vs. 6.1% observed) outperformed internal historical assumption (8%)",
    "Tornado sensitivity chart focused protocol committee debate on the one variable that mattered: prior exposure mix",
  ],
  lessonsChallenges: [
    {
      challenge:
        "Phase II dropout rate (14%) required multiple imputation assumptions that widened success probability bounds by ±6%.",
      mitigation: "Ran sensitivity analysis under MAR and MNAR scenarios; presented range (67–79%) in board deck.",
    },
    {
      challenge:
        "Enrollment in Eastern Europe sites showed 8% higher placebo response than modeled in first 100 patients.",
      mitigation: "Triggered pre-specified interim model update at 25% enrollment; site mix adjustment applied without protocol amendment.",
    },
  ],
  recommendationsTitle: "When to use ClinicalSim for biologic trial success modeling",
  recommendations: [
    "Phase III budget decisions requiring quantified success probability beyond standard power calculations",
    "Phase II populations enriched for responders that differ from planned Phase III mix",
    "Endpoint selection debates (PASI 75 vs. PASI 90, co-primary options) needing failure mode quantification",
    "Board or partnership diligence requiring simulation-backed pivotal trial risk assessment",
  ],
  roiNote: "ROI: approximately 30:1 ($12M trial savings + avoided Phase III failure risk vs. $395K simulation cost).",
  nextStepsNote:
    "Next steps: update success probability models with Phase III final data for label expansion simulations; integrate PK/PD exposure-response for dose optimization in second indication.",
  about: {
    clientProfile: "Mid-cap autoimmune biotech, 180 employees, 1 marketed product",
    duration: "5 weeks (simulation delivery) + 24 months (Phase III outcome validation)",
    totalCost: "$395K",
    date: "August to September 2025",
    disclaimer:
      "This case study is anonymized at client request. Biologic identity, target details, and institutional affiliations have been redacted. Full simulation models available under NDA.",
  },
};

export const FLAGSHIP_CASE_STUDIES: FlagshipCaseStudy[] = [
  HEPATOTOXICITY_CASE_STUDY,
  ONCOLOGY_PKPD_CASE_STUDY,
  AUTOIMMUNE_BIOLOGIC_CASE_STUDY,
];

export function getCaseStudyBySlug(slug: string): FlagshipCaseStudy | undefined {
  return FLAGSHIP_CASE_STUDIES.find((study) => study.slug === slug);
}

export const CASE_STUDY_AGGREGATE_METRICS = [
  ["73–93%", "Prediction accuracy range"],
  ["$2.4–16M", "Capital preserved per program"],
  ["3–5 wks", "Typical simulation delivery"],
  ["100%", "On-time delivery rate"],
] as const;
