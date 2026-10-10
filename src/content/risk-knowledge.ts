export const riskCategories = [
  {
    id: "market",
    title: "Market risk",
    definition:
      "Potential financial impact caused by movements in market prices, rates, positions or volumes.",
    evidence: [
      "Bank of America position and valuation reporting",
      "Market-data quality controls",
      "Trading-feed monitoring",
      "Reconciliation of positions",
      "Limit and breach information",
      "Working with market-risk stakeholders",
    ],
    boundary:
      "Sanjay does not claim to have calculated VaR or designed quantitative models.",
    caseStudyIds: ["bank-of-america", "ubs"],
  },
  {
    id: "credit",
    title: "Credit risk",
    definition:
      "The possibility that a borrower, customer or trading counterparty cannot meet its obligations.",
    evidence: [
      "NAB collateral coverage",
      "Loan-to-value reporting",
      "Property-valuation ageing",
      "Bank of America counterparty mapping",
      "Exposure and limit information",
      "Settlement exceptions",
    ],
    caseStudyIds: ["nab", "bank-of-america"],
  },
  {
    id: "operational",
    title: "Operational risk",
    definition:
      "Risk arising from failures in people, processes, systems, data, controls, suppliers or external events.",
    evidence: [
      "UBS control failures",
      "Failed interfaces",
      "Data-quality problems",
      "Reconciliation breaks",
      "Incidents and overdue remediation",
      "Daimler supplier and operational reporting",
      "Merck consent and synchronisation controls",
    ],
    caseStudyIds: ["ubs", "daimler", "merck"],
  },
] as const;

export const governanceFlow = [
  "Risk Appetite",
  "Policy and Standards",
  "Limits and Thresholds",
  "Controls",
  "Monitoring",
  "Exception or Breach",
  "Escalation",
  "Remediation",
  "Closure Evidence",
  "Governance Reporting",
] as const;

export const threeLines = [
  {
    line: "First line",
    detail:
      "Business, product, technology, delivery and operations own and manage risks arising from their activities.",
    sanjay:
      "Sanjay’s technology-risk and delivery roles generally sat within the first line — identifying and managing technology, data, delivery and operational risks, implementing controls, monitoring indicators and remediating issues.",
  },
  {
    line: "Second line",
    detail:
      "Risk and compliance provide independent oversight and challenge.",
    sanjay:
      "Sanjay partners with second-line market risk, operational risk, compliance and treasury stakeholders and delivers the data, dashboards, controls and reporting capabilities that enable effective oversight.",
  },
  {
    line: "Third line",
    detail: "Internal Audit provides independent assurance.",
    sanjay:
      "Delivery preserves evidence, traceability and acceptance artefacts that support independent assurance without claiming audit ownership.",
  },
] as const;
