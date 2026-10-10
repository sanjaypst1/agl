export const threeQuestions = [
  {
    id: "q1-personal-solution",
    number: "01",
    question: "What risk, data or reporting solution have you personally delivered?",
    shortAnswer:
      "At UBS, Sanjay personally led the delivery of a consolidated risk and control reporting solution. He defined indicators, sources, ownership, thresholds and escalation rules, validated dashboard results against source information, investigated discrepancies and coordinated user acceptance and business adoption.",
    evidenceLinks: [
      { href: "/case-studies/ubs", label: "UBS flagship product" },
      { href: "/delivery-method", label: "Reporting-product lifecycle" },
      { href: "/risk-data-reporting", label: "Risk-data investigation lab" },
      { href: "/case-studies", label: "All five reporting products" },
    ],
    caseStudyIds: ["ubs", "nab", "bank-of-america", "daimler", "merck"],
  },
  {
    id: "q2-market-treasury",
    number: "02",
    question: "What experience have you had with market risk, treasury and trading?",
    shortAnswer:
      "Sanjay’s experience comes from supporting the technology, data, control and reporting environment around trading, market risk, treasury, finance and operations. His work has included transaction data, interfaces, positions, exposures, limits, counterparties, reconciliation breaks, delayed feeds, incorrect mappings, data lineage and breach-management processes.",
    boundary: "He is not positioned as a trader or quantitative-risk modeller.",
    evidenceLinks: [
      { href: "/case-studies/bank-of-america", label: "Bank of America trading & reconciliation" },
      { href: "/case-studies/ubs", label: "UBS risk and control reporting" },
      { href: "/case-studies/nab", label: "NAB credit and collateral context" },
      { href: "/technology#transferability", label: "Energy-market transferability" },
    ],
    caseStudyIds: ["bank-of-america", "ubs", "nab"],
  },
  {
    id: "q3-powerbi-sql-databricks",
    number: "03",
    question: "How much exposure have you had to Power BI, SQL and Databricks?",
    shortAnswer:
      "Sanjay can lead Power BI and Databricks-enabled reporting initiatives from use-case definition through requirements, data controls, UAT, adoption and operational transition. He has practical SQL knowledge for investigating tables, joins, filters, mappings and reporting discrepancies. He relies on specialist developers and engineers for advanced DAX, complex SQL, Spark development and platform engineering.",
    evidenceLinks: [
      { href: "/case-studies/daimler", label: "Daimler Power BI reporting" },
      { href: "/case-studies/ubs", label: "UBS requirements and validation" },
      { href: "/case-studies/nab", label: "NAB governed data-product context" },
      { href: "/technology", label: "Technology and domain depth" },
    ],
    caseStudyIds: ["daimler", "ubs", "nab"],
  },
] as const;
