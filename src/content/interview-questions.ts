import type { InterviewQuestion } from "@/lib/types";

export const interviewQuestionTags = [
  "Personal solution delivery",
  "Risk reporting",
  "Market risk and treasury",
  "Power BI",
  "SQL",
  "Databricks",
  "Product Owner partnership",
  "Vendors",
  "Governance",
  "Testing",
  "Implementation",
  "Hypercare",
  "Operational support",
  "Leadership",
  "Energy-market transferability",
] as const;

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: "q1-personal-solution",
    question: "What risk, data or reporting solution have you personally delivered?",
    tags: ["Personal solution delivery", "Risk reporting"],
    caseStudyIds: ["ubs", "nab", "bank-of-america", "daimler", "merck"],
    evidenceSummary:
      "At UBS, personally led a consolidated risk and control reporting product; supported by four additional reporting products across NAB, Bank of America, Daimler and Merck.",
    experienceNote: "Defined indicators, sources, thresholds and escalation rules; validated figures; coordinated UAT.",
    shortAnswer:
      "At UBS, Sanjay personally led the delivery of a consolidated risk and control reporting solution.",
  },
  {
    id: "q2-market-treasury",
    question: "What experience have you had with market risk, treasury and trading?",
    tags: ["Market risk and treasury"],
    caseStudyIds: ["bank-of-america", "ubs", "nab"],
    evidenceSummary:
      "Supported technology, data, control and reporting around trading, market risk, treasury, finance and operations — not as trader or quantitative modeller.",
    experienceNote: "Pre/post-trade, reconciliations, limits, counterparties, delayed feeds and breach processes.",
    boundary: "Not positioned as a trader or quantitative-risk modeller.",
  },
  {
    id: "q3-powerbi-sql-databricks",
    question: "How much exposure have you had to Power BI, SQL and Databricks?",
    tags: ["Power BI", "SQL", "Databricks"],
    caseStudyIds: ["daimler", "ubs", "nab"],
    evidenceSummary:
      "Leads Power BI and Databricks-enabled reporting initiatives end to end; practical SQL for investigation; specialists own advanced DAX, complex SQL and Spark engineering.",
    experienceNote: "Transparent capability boundaries on the Technology page.",
  },
  {
    id: "q-personal-solution",
    question: "What risk, data or reporting solution have you personally delivered?",
    tags: ["Personal solution delivery", "Risk reporting"],
    caseStudyIds: ["ubs"],
    evidenceSummary:
      "At UBS, personally delivered a consolidated risk and control reporting solution that unified fragmented spreadsheets, project reports and control registers.",
    experienceNote: "Defined indicators, sources, thresholds and escalation rules; validated figures; coordinated UAT.",
  },
  {
    id: "q-personal-owned",
    question: "What did you personally own?",
    tags: ["Personal solution delivery", "Leadership"],
    caseStudyIds: ["ubs", "nab"],
    evidenceSummary:
      "Owned integrated delivery planning, reporting requirements, validation coordination, RAID/governance and operational transition—not specialist model or code ownership.",
    experienceNote: "Each case study includes an accountability versus specialist contribution section.",
  },
  {
    id: "q-kpi-thresholds",
    question: "How did you define KPIs and thresholds?",
    tags: ["Risk reporting", "Governance"],
    caseStudyIds: ["ubs", "daimler"],
    evidenceSummary:
      "Defined risk indicators, thresholds and escalation rules with risk, operations and technology; defined Power BI measures and reporting frequency with business and finance stakeholders.",
    experienceNote: "Metric definition precedes visualisation.",
  },
  {
    id: "q-validate-figures",
    question: "How did you validate reporting figures?",
    tags: ["Risk reporting", "Power BI", "SQL"],
    caseStudyIds: ["ubs", "daimler"],
    evidenceSummary:
      "Validated dashboard figures against source data and operational reports before acceptance and republishing.",
    experienceNote: "Validation treated as a delivery-control activity.",
  },
  {
    id: "q-investigate",
    question: "How did you investigate inconsistencies?",
    tags: ["Risk reporting", "SQL", "Market risk and treasury"],
    caseStudyIds: ["ubs", "bank-of-america", "daimler"],
    evidenceSummary:
      "Investigated missing data, incorrect mappings, delayed feeds, duplicates and reconciliation breaks; converted findings into requirements and control checkpoints.",
    experienceNote: "See the Risk Data Investigation Lab for the working method.",
  },
  {
    id: "q-lineage",
    question: "How did you establish data lineage?",
    tags: ["Risk reporting", "Databricks"],
    caseStudyIds: ["ubs"],
    evidenceSummary:
      "Mapped data flows, system dependencies, supplier interfaces and control points; assigned data ownership and source-to-report lineage for consolidated reporting.",
    experienceNote: "Lineage described at delivery and control level; internal platform names omitted.",
  },
  {
    id: "q-move-production",
    question: "How did you move the solution into production?",
    tags: ["Implementation", "Testing"],
    caseStudyIds: ["nab", "merck", "ubs"],
    evidenceSummary:
      "Coordinated testing, release readiness, cutover controls and go/no-go evidence before production change.",
    experienceNote: "Readiness is treated as controlled evidence, not a date alone.",
  },
  {
    id: "q-transition-support",
    question: "How did you transition it into support?",
    tags: ["Hypercare", "Operational support"],
    caseStudyIds: ["ubs", "nab", "merck"],
    evidenceSummary:
      "Planned hypercare, operational procedures, training implications and BAU/service transition with clear operational acceptance.",
    experienceNote: "Sustainment is part of delivery scope.",
  },
  {
    id: "q-product-owner",
    question: "How did you work with the Product Owner?",
    tags: ["Product Owner partnership"],
    caseStudyIds: ["nab", "ubs"],
    evidenceSummary:
      "Converted approved priorities into executable plans, estimates, sequencing and dependency management while leaving product priority ownership with the Product Owner.",
    experienceNote: "Role boundary is explicit across the site.",
  },
  {
    id: "q-vendor-delivery",
    question: "How did you manage vendor delivery?",
    tags: ["Vendors"],
    caseStudyIds: ["bank-of-america", "nab"],
    evidenceSummary:
      "Monitored scope, forecasts, performance and commercial implications; resolved supplier constraints; delivered USD 1.5M annual savings through supplier optimisation at Bank of America.",
    experienceNote: "Strategic vendor relationship ownership not claimed.",
  },
  {
    id: "q-coordinate-architecture",
    question: "How did you coordinate architecture, security and data?",
    tags: ["Governance", "Implementation", "Leadership"],
    caseStudyIds: ["nab", "merck"],
    evidenceSummary:
      "Coordinated solution design across business, data, integration, security and technology against approved standards without claiming enterprise target-architecture ownership.",
    experienceNote: "Specialist approval remains with architects and security teams.",
  },
  {
    id: "q-power-bi",
    question: "How hands-on are you with Power BI?",
    tags: ["Power BI"],
    caseStudyIds: ["daimler"],
    evidenceSummary:
      "Defined measures and requirements, reviewed prototypes, validated results and coordinated UAT. Advanced DAX development specialism not claimed.",
    experienceNote: "Transparent capability model on the Technology page.",
  },
  {
    id: "q-sql",
    question: "What is your SQL experience?",
    tags: ["SQL"],
    caseStudyIds: ["daimler", "ubs"],
    evidenceSummary:
      "Working knowledge for investigation: tables, joins, filters, mappings, aggregations, missing/duplicate records and source-to-target comparisons.",
    experienceNote: "Not database engineering ownership.",
  },
  {
    id: "q-databricks",
    question: "What is your Databricks contribution?",
    tags: ["Databricks"],
    caseStudyIds: ["ubs", "merck"],
    evidenceSummary:
      "Solution-delivery and governance exposure across ingestion, transformation, quality, security, lineage and production readiness with data engineers.",
    experienceNote: "Advanced notebook/Spark development not claimed.",
  },
  {
    id: "q-market-treasury",
    question: "What exposure have you had to market risk, treasury and trading?",
    tags: ["Market risk and treasury"],
    caseStudyIds: ["bank-of-america", "ubs"],
    evidenceSummary:
      "Delivered technology and data changes supporting risk, treasury, trading and operations teams; practical exposure to positions, exposures, limits, lineage and breaches.",
    experienceNote: "Not a quantitative modeller or trader.",
  },
  {
    id: "q-energy-transfer",
    question: "How is your banking experience transferable to energy markets?",
    tags: ["Energy-market transferability", "Market risk and treasury"],
    caseStudyIds: ["bank-of-america", "ubs", "merck"],
    evidenceSummary:
      "Transferable disciplines include authoritative sources, controlled transformations, lineage, reconciliation, thresholds, exception workflows, governance, testing and operational ownership.",
    experienceNote: "Domain product knowledge differs; delivery discipline transfers.",
  },
  {
    id: "q-breach-vs-data",
    question: "How do you distinguish a genuine risk breach from a data-quality problem?",
    tags: ["Risk reporting", "Market risk and treasury", "SQL"],
    caseStudyIds: ["ubs", "bank-of-america"],
    evidenceSummary:
      "Confirm metric definition, period/cut-off, filters and authoritative sources before treating an exception as a business breach; reconcile representative samples.",
    experienceNote: "Demonstrated in the Risk Data Investigation Lab.",
  },
  {
    id: "q-late-feed",
    question: "How do you deal with a late or missing data feed?",
    tags: ["Risk reporting", "Operational support", "Databricks"],
    caseStudyIds: ["bank-of-america", "ubs"],
    evidenceSummary:
      "Trace ingestion status, isolate timing versus transformation issues, define control checkpoints and escalate through agreed exception routes.",
    experienceNote: "Converted delayed-feed issues into requirements and test scenarios.",
  },
  {
    id: "q-unclear-requirements",
    question: "How do you manage an implementation with unclear requirements?",
    tags: ["Product Owner partnership", "Governance", "Implementation"],
    caseStudyIds: ["nab", "ubs"],
    evidenceSummary:
      "Convert ambiguity into options, assumptions, decisions and sequenced increments through Product partnership and governance forums.",
    experienceNote: "Evidence-based options over false precision.",
  },
  {
    id: "q-release-readiness",
    question: "How do you define release readiness?",
    tags: ["Testing", "Implementation", "Hypercare"],
    caseStudyIds: ["nab", "merck", "daimler"],
    evidenceSummary:
      "Ready when testing evidence, operational procedures, training implications, support ownership, RAID posture and acceptance criteria support a controlled go/no-go.",
    experienceNote: "Readiness dashboards feature across NAB and UBS narratives.",
  },
  {
    id: "q-convert-priority",
    question: "How do you convert an approved initiative into an executable plan?",
    tags: ["Product Owner partnership", "Implementation", "Governance"],
    caseStudyIds: ["nab"],
    evidenceSummary:
      "Translate strategic outcomes and obligations into governed scope, sequenced increments, work packages, dependencies and measurable outcomes.",
    experienceNote: "Core NAB narrative.",
  },
  {
    id: "q-raid-governance",
    question: "How do you manage RAID and governance?",
    tags: ["Governance"],
    caseStudyIds: ["nab", "ubs"],
    evidenceSummary:
      "Maintain integrated RAID, assumptions, decisions and dependencies; escalate trade-offs early through established forums.",
    experienceNote: "Governance without unnecessary bureaucracy.",
  },
  {
    id: "q-dashboard-requirements",
    question: "How did you define dashboard requirements?",
    tags: ["Power BI", "Risk reporting"],
    caseStudyIds: ["daimler", "ubs"],
    evidenceSummary:
      "Start from users and decisions, then measures, sources, ownership, thresholds, lineage and acceptance checks.",
    experienceNote: "Shared method across UBS and Daimler.",
  },
  {
    id: "q-operational-rollout",
    question: "How did you manage a major operational rollout?",
    tags: ["Implementation", "Operational support", "Testing"],
    caseStudyIds: ["daimler"],
    evidenceSummary:
      "Prepared 900+ Salesforce users through testing coordination, readiness planning, communication and operational transition.",
    experienceNote: "Measured workflow and service outcomes followed.",
  },
  {
    id: "q-global-delivery",
    question: "How do you manage global delivery?",
    tags: ["Leadership", "Vendors", "Governance"],
    caseStudyIds: ["bank-of-america", "merck"],
    evidenceSummary:
      "Connect product, data, risk, operations and commercial priorities under shared governance and performance insight.",
    experienceNote: "95%+ milestone adherence at Bank of America.",
  },
  {
    id: "q-performance-measures",
    question: "How do you establish useful performance measures?",
    tags: ["Governance", "Risk reporting"],
    caseStudyIds: ["bank-of-america", "ubs"],
    evidenceSummary:
      "Measures cover progress, risk, controls, readiness, adoption and value—not schedule alone.",
    experienceNote: "Executive reporting design is a recurring pattern.",
  },
  {
    id: "q-priority-conflicts",
    question: "How do you resolve priority conflicts?",
    tags: ["Leadership", "Product Owner partnership"],
    caseStudyIds: ["bank-of-america", "ubs"],
    evidenceSummary:
      "Use structured analysis, transparent trade-offs and decision forums where perspectives compete.",
    experienceNote: "Influence without relying only on hierarchical authority.",
  },
  {
    id: "q-benefits",
    question: "How do you govern benefits?",
    tags: ["Governance", "Leadership"],
    caseStudyIds: ["bank-of-america", "ubs"],
    evidenceSummary:
      "Track commercial impact, adoption and realised value alongside delivery progress.",
    experienceNote: "Benefits-focused governance supported supplier optimisation outcomes.",
  },
  {
    id: "q-risk-requirements",
    question: "How did you translate risk requirements into controlled delivery?",
    tags: ["Risk reporting", "Governance", "Personal solution delivery"],
    caseStudyIds: ["ubs"],
    evidenceSummary:
      "Converted control and delivery-risk visibility needs into indicators, lineage, thresholds, validation and governance embedding.",
    experienceNote: "Personal reporting solution at UBS.",
  },
  {
    id: "q-controlled-environment",
    question: "How do you deliver in a controlled environment?",
    tags: ["Governance", "Testing", "Operational support"],
    caseStudyIds: ["merck"],
    evidenceSummary:
      "Maintain audit readiness, business continuity, security coordination and operational acceptance through cutover and service transition.",
    experienceNote: "Merck regulated portfolio.",
  },
  {
    id: "q-audit-traceability",
    question: "How do you maintain traceability and audit evidence?",
    tags: ["Governance"],
    caseStudyIds: ["merck", "ubs"],
    evidenceSummary:
      "Preserve decision records, lineage, testing evidence and acceptance artefacts as part of delivery controls.",
    experienceNote: "Confidential artefacts omitted from this portfolio.",
  },
  {
    id: "q-cutover-hypercare",
    question: "How do you plan cutover and hypercare?",
    tags: ["Hypercare", "Implementation"],
    caseStudyIds: ["merck", "nab"],
    evidenceSummary:
      "Plan cutover controls, readiness evidence, early-life support and issue escalation before release.",
    experienceNote: "Availability and service outcomes depend on this discipline.",
  },
  {
    id: "q-support-ownership",
    question: "How do you establish support ownership?",
    tags: ["Operational support", "Hypercare"],
    caseStudyIds: ["merck", "ubs"],
    evidenceSummary:
      "Define operational procedures, sustainment responsibilities and acceptance conditions before BAU handover.",
    experienceNote: "Supportability assessed during solution decisions.",
  },
  {
    id: "q-operational-resilience",
    question: "How do you protect operational resilience?",
    tags: ["Operational support", "Governance"],
    caseStudyIds: ["merck"],
    evidenceSummary:
      "Assess scalability, controls, performance and supportability; protect continuity during cutover; measure availability outcomes.",
    experienceNote: "35% availability improvement associated with Merck.",
  },
];
