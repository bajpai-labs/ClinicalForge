import { CONTACT_EMAIL, LEGAL_COMPANY_CIN, PRODUCT_NAME, SITE_ORIGIN } from "./site";

/* ── Types ────────────────────────────────────────────────── */

export type DefinitionItem = { term: string; definition: string };
export type KeyFact = { label: string; value: string };
export type FaqItem = { question: string; answer: string };

/* ── FAQs (machine-readable + FAQPage schema) ─────────────── */

export const CLINICAL_SIM_FAQS: FaqItem[] = [
  {
    question: "What is ClinicalSim?",
    answer: `${PRODUCT_NAME} is a drug outcome simulation platform by Bajpai Labs. It uses PK/PD modeling, toxicity prediction, and clinical trial Monte Carlo simulation to predict Phase II and Phase III outcomes before enrollment begins, helping teams de-risk dose selection and phase transitions.`,
  },
  {
    question: "How does ClinicalSim predict clinical trial outcomes?",
    answer: `${PRODUCT_NAME} integrates preclinical tox, Phase I PK data, and published clinical benchmarks into population PK/PD models, exposure-response simulations, and virtual trial engines. Starting from your compound profile and planned protocol, it projects efficacy, safety signals, and trial success probability under real-world patient variability and co-medication scenarios.`,
  },
  {
    question: "What is the cost of a ClinicalSim engagement?",
    answer: `${PRODUCT_NAME} engagements typically range from $125,000 to $500,000 per program depending on scope. Toxicity and DILI prediction programs start at $125,000. PK/PD dose optimization ranges from $200,000 to $400,000. Phase III trial success probability modeling ranges from $300,000 to $500,000.`,
  },
  {
    question: "What types of clinical simulation does ClinicalSim support?",
    answer: `${PRODUCT_NAME} supports four simulation modalities: hepatotoxicity and DILI failure prediction for small molecules; oncology PK/PD dose optimization with exposure-response modeling; biologic and autoimmune trial success probability simulation; and adaptive trial design with virtual patient cohorts and interim boundary optimization.`,
  },
  {
    question: "What is PK/PD modeling in drug development?",
    answer: `PK/PD modeling links pharmacokinetics (drug concentration over time) to pharmacodynamics (biological effect). ${PRODUCT_NAME} builds population PK/PD models from Phase I and preclinical data, then simulates how dosing regimens perform across diverse patient populations before committing to expensive Phase II or Phase III trials.`,
  },
  {
    question: "What deliverables does ClinicalSim provide?",
    answer: `${PRODUCT_NAME} deliverables include ranked dose or design scenarios with predicted outcome probabilities; full technical reports documenting model assumptions and validation; board-ready decision decks with capital-at-risk analysis; and FDA or EMA briefing document addenda with exposure-response plots and virtual trial outcomes.`,
  },
  {
    question: "How accurate are ClinicalSim predictions?",
    answer: `Across closed engagements, ${PRODUCT_NAME} predictions for primary endpoints, safety signals, and trial success probability have shown 73 to 93 percent concordance with observed clinical outcomes, substantially above standard power calculations alone because models are calibrated against proprietary validation datasets and published Phase III benchmarks.`,
  },
  {
    question: "Who operates ClinicalSim?",
    answer: `${PRODUCT_NAME} is operated by Bajpai Labs (legal entity: Bajpai and Co. Research Private Limited, CIN: ${LEGAL_COMPANY_CIN}), a boutique AI and quantum consulting firm headquartered in Dubai, UAE with operations in Uttar Pradesh, India. Contact: ${CONTACT_EMAIL}.`,
  },
  {
    question: "What methods does ClinicalSim use?",
    answer: `${PRODUCT_NAME} uses population PK/PD modeling (NONMEM, Monolix), physiologically based pharmacokinetic (PBPK) simulation, Monte Carlo virtual trial engines, Bayesian hierarchical meta-analysis of published clinical data, mechanistic toxicity models (DILIrank, LiverTox), and exposure-response tumor growth inhibition models for oncology dose optimization.`,
  },
  {
    question: "When should I use ClinicalSim before Phase II?",
    answer: `Use ${PRODUCT_NAME} before Phase II when preclinical tox shows reversible liver or cardiac signals, Phase I PK data suggests narrow therapeutic windows, your target population has high co-medication burden, or board and investor milestones require quantified safety and efficacy risk before capital commitment. Simulation typically delivers in 3 to 5 weeks.`,
  },
];

/* ── Definitions (DefinedTermSet schema) ──────────────────── */

export const HOME_DEFINITIONS: DefinitionItem[] = [
  {
    term: PRODUCT_NAME,
    definition: `${PRODUCT_NAME} is a drug outcome simulation platform by Bajpai Labs that predicts clinical trial outcomes before Phase II using PK/PD modeling, toxicity prediction, and trial success probability simulation.`,
  },
  {
    term: "PK/PD modeling",
    definition:
      "PK/PD modeling is the quantitative linking of drug pharmacokinetics (absorption, distribution, metabolism, excretion) to pharmacodynamic effects. ClinicalSim builds population PK/PD models to simulate how dosing regimens perform across patient populations.",
  },
  {
    term: "Virtual clinical trial",
    definition:
      "A virtual clinical trial uses Monte Carlo simulation with calibrated PK/PD and outcome models to project trial results before enrollment. ClinicalSim runs thousands of virtual trials to estimate success probability, optimal sample size, and dose selection.",
  },
  {
    term: "DILI prediction",
    definition:
      "Drug-induced liver injury (DILI) prediction refers to computational modeling of hepatotoxicity risk based on compound structure, hepatic exposure, mechanism-of-injury scores, and population variability. ClinicalSim integrates DILIrank and mechanistic tox models with PBPK exposure simulation.",
  },
  {
    term: "Trial success probability",
    definition:
      "Trial success probability is the estimated likelihood that a clinical trial will achieve its primary endpoint under specified design, population, and dosing assumptions. ClinicalSim quantifies this using Bayesian meta-analysis and virtual trial simulation rather than power calculations alone.",
  },
  {
    term: "Exposure-response modeling",
    definition:
      "Exposure-response modeling links drug exposure metrics (AUC, Cmax, target occupancy) to clinical outcomes (efficacy, toxicity). ClinicalSim uses exposure-response curves to identify minimum efficacious doses and eliminate redundant trial arms.",
  },
];

/* ── Key facts (ItemList schema) ──────────────────────────── */

export const HOME_KEY_FACTS: KeyFact[] = [
  { label: "Platform name", value: PRODUCT_NAME },
  { label: "Parent company", value: "Bajpai Labs (Bajpai & Co. Research Private Limited)" },
  { label: "Legal entity CIN", value: LEGAL_COMPANY_CIN },
  { label: "Contact", value: CONTACT_EMAIL },
  { label: "Headquarters", value: "Dubai, UAE and Uttar Pradesh, India" },
  { label: "Typical delivery timeline", value: "3 to 5 weeks from data handoff to simulation report" },
  { label: "Prediction accuracy", value: "73 to 93 percent concordance with observed clinical outcomes" },
  { label: "Capital preserved", value: "$2.4M to $16M per program via de-risked trial design" },
  { label: "Platform URL", value: SITE_ORIGIN },
  { label: "Simulation modalities", value: "Toxicity prediction, PK/PD dose optimization, trial success probability, adaptive design" },
  {
    label: "Methods",
    value:
      "Population PK/PD, PBPK, Monte Carlo virtual trials, Bayesian meta-analysis, mechanistic DILI modeling, exposure-response simulation",
  },
];
