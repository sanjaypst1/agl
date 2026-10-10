export const planIntro = {
  eyebrow: "Entry plan",
  title: "30-60-90 day plan",
  lead:
    "I start calmly and evidence-led. I observe the risk, data and reporting system, make dependencies and exceptions visible, then improve decision-ready reporting with the people who own the work.",
  close:
    "I will not impose heavy process change in the first weeks. My focus is trusted relationships, clear definitions, visible exceptions and a reporting rhythm that risk, trading, treasury and finance stakeholders can rely on.",
};

export const planPhases = [
  {
    id: "30",
    tab: "Days 1 to 30",
    title: "Understand and stabilise",
    range: "Days 1 to 30",
    objectives: [
      "Build trust with risk, trading, treasury, finance, data and technology stakeholders",
      "Understand the current risk-reporting landscape before changing it",
      "Establish a reliable view of source systems, definitions, exceptions and ownership",
      "Identify immediate blockers that affect decision-ready reporting",
    ],
    actions: [
      "Meet market-risk, credit-risk, operational-risk, trading, treasury, finance, data and technology leads",
      "Review existing dashboards, KPI catalogues, data dictionaries and governance forums",
      "Map trade, position, valuation, limit, collateral, liquidity, control and remediation information flows",
      "Identify authoritative sources versus shadow spreadsheets",
      "Review reconciliation breaks, feed failures, stale data and aged exceptions",
      "Clarify first-line versus second-line reporting consumers and decision rights",
      "Assess Power BI, SQL and Databricks ownership boundaries with specialist teams",
      "Document incomplete definitions, missing owners and conflicting metrics",
      "Agree how report confidence and data-quality caveats will be communicated",
      "Establish an initial dependency, exception and remediation-ageing view",
    ],
    outcomes: [
      "Trusted working relationships across risk and delivery partners",
      "Shared map of major reporting products, sources and consumers",
      "Visible inventory of definitions, owners and known data gaps",
      "Immediate blockers assigned to accountable owners",
      "No unnecessary process changes imposed on the operating model",
    ],
  },
  {
    id: "60",
    tab: "Days 31 to 60",
    title: "Align definitions and improve signal quality",
    range: "Days 31 to 60",
    objectives: [
      "Align KPI definitions, thresholds and escalation paths",
      "Strengthen reconciliation and exception visibility",
      "Reduce late surprises in reporting cut-offs and feed readiness",
      "Convert recurring issues into controlled reporting requirements",
    ],
    actions: [
      "Prioritise the highest-value reporting views for trading, market risk, credit, treasury and operations",
      "Agree source, owner, frequency, threshold and escalation for each priority KPI",
      "Introduce lightweight readiness checkpoints for feeds, reconciliations and cut-offs",
      "Improve exception ageing, ownership and materiality classification",
      "Partner with data engineers and developers on mappings, validation rules and lineage",
      "Validate prototype figures against source records before wider release",
      "Clarify self-service boundaries so governed questions can be answered without ad-hoc extracts",
      "Bring risk and business owners into refinement of report meaning and drill-down needs",
      "Establish a decision-ready reporting pack for governance forums",
    ],
    outcomes: [
      "Clearer KPI ownership and escalation rules",
      "Earlier visibility of reconciliation and feed risks",
      "Stronger alignment between report consumers and data producers",
      "Prototype views validated against source evidence",
      "Improvement actions owned by the relevant specialist and business teams",
    ],
  },
  {
    id: "90",
    tab: "Days 61 to 90",
    title: "Embed decision-ready reporting and sustainment",
    range: "Days 61 to 90",
    objectives: [
      "Embed trusted reporting into normal operating rhythm",
      "Strengthen BAU ownership and adoption",
      "Reduce reliance on manual escalation and spreadsheet workarounds",
      "Leave a sustainable improvement loop for risk and data partners",
    ],
    actions: [
      "Release priority reporting views with testing, access control and user guidance",
      "Transition ownership of definitions, exceptions and remediation tracking into BAU",
      "Review trends in exception ageing, feed health, cut-off adherence and report usage",
      "Improve post-incident learning from data, reconciliation and control failures",
      "Coach stakeholders on using governed self-service rather than one-off report requests",
      "Share reusable patterns for KPI definition, lineage and exception management",
      "Recommend carefully evidenced improvements to the risk-reporting operating model",
      "Confirm hypercare exit criteria and sustainment responsibilities",
    ],
    outcomes: [
      "Increased transparency of market, credit and operational-risk signals",
      "Reduced dependency on manual consolidation",
      "Earlier discovery of data and control exceptions",
      "Clearer BAU ownership of reporting products",
      "Decision-ready reporting that trading, treasury, finance and risk leaders can trust",
    ],
  },
] as const;

export type PlanPhase = (typeof planPhases)[number];
