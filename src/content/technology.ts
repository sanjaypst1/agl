import type { TechnologyCapability } from "@/lib/types";

export const technologyCapabilities: TechnologyCapability[] = [
  {
    id: "power-bi",
    name: "Power BI",
    level: "Delivery leadership",
    positioning:
      "Delivery leadership and practitioner exposure. Sanjay can lead dashboard requirements, wireframes, KPI definition, prototype review, reconciliation, testing and adoption. Advanced DAX, semantic-model engineering and performance optimisation remain specialist developer responsibilities unless separately verified.",
    does: [
      "Define purpose and audience",
      "Define KPIs",
      "Identify data sources",
      "Define filters and drill-down",
      "Review dashboard designs",
      "Reconcile outputs",
      "Coordinate UAT",
      "Define role-based access requirements",
      "Support adoption and self-service design",
    ],
    doesNot: [
      "Advanced DAX as claimed specialism",
      "Complex Power Query development ownership",
      "Semantic-model engineering ownership",
      "Performance optimisation ownership",
      "Production administration ownership",
    ],
    caseStudyIds: ["daimler", "ubs", "nab"],
  },
  {
    id: "sql",
    name: "SQL",
    level: "Working knowledge",
    positioning:
      "Working knowledge and investigative use. Sanjay understands tables, views, joins, filters, aggregations, mapping tables, nulls, duplicates, record counts, date logic, source-to-target comparisons and query outputs. Specialist support is required for complex development, optimisation and database engineering.",
    does: [
      "Interpret tables, views and joins",
      "Investigate filters and aggregations",
      "Review mapping tables",
      "Identify nulls and duplicates",
      "Compare source and target output",
      "Support reconciliation discussions",
    ],
    doesNot: [
      "Complex SQL development ownership",
      "Query optimisation specialism",
      "Database engineering ownership",
      "Production code ownership",
    ],
    caseStudyIds: ["ubs", "nab", "bank-of-america", "daimler"],
  },
  {
    id: "databricks",
    name: "Databricks",
    level: "Specialist partnership",
    positioning:
      "Solution delivery and governance exposure. Sanjay understands ingestion, transformation, curated data products, data quality, access control, lineage, SQL analytics, reporting integration, production readiness and AI/advanced analytics enablement. Specialist support is required for Spark engineering, production notebooks, clusters, pipelines and platform administration.",
    does: [
      "Define business use case and source-to-target requirements",
      "Define quality and access requirements",
      "Coordinate architects and data engineers",
      "Validate whether the data product meets the business need",
      "Integrate reporting outcomes",
    ],
    doesNot: [
      "Spark engineering ownership",
      "Production notebook development",
      "Cluster configuration ownership",
      "Pipeline engineering ownership",
      "Platform administration",
    ],
    caseStudyIds: ["nab", "ubs"],
  },
  {
    id: "azure-platforms",
    name: "Azure, APIs and modern data platforms",
    level: "Delivery leadership",
    positioning:
      "Solution coordination across integration, security, scalability, data movement, supportability and vendor/internal-team alignment.",
    does: [
      "Coordinate integration and data-movement dependencies",
      "Align security and supportability concerns",
      "Sequence platform delivery with reporting outcomes",
    ],
    doesNot: [
      "Enterprise technology strategy ownership",
      "Long-term platform ownership",
      "Target architecture ownership",
    ],
    caseStudyIds: ["nab", "merck", "bank-of-america"],
  },
  {
    id: "market-treasury",
    name: "Market risk, treasury and trading context",
    level: "Practitioner exposure",
    positioning:
      "Practical exposure to transaction data, reconciliations, controls and risk reporting while partnering with market risk and treasury stakeholders. Not positioned as a quantitative risk modeller or trader.",
    does: [
      "Work with transaction data across sources and interfaces",
      "Investigate missing, late, duplicated or incorrectly mapped data",
      "Support reconciliations, lineage and control checkpoints",
      "Translate specialist requirements into delivery outcomes",
    ],
    doesNot: [
      "Quantitative model design ownership",
      "Trading decision ownership",
      "Risk methodology ownership",
    ],
    caseStudyIds: ["bank-of-america", "ubs"],
  },
];

export const energyTransferability = {
  title: "Market, treasury and energy-market transferability",
  statement:
    "Transferable control and data disciplines, not a claim of direct energy-trading experience.",
  banking: [
    "Financial transactions",
    "Products",
    "Counterparties",
    "Positions",
    "Market data",
    "Valuation",
    "Limits",
    "Settlements",
  ],
  energyMarkets: [
    "Electricity and gas transactions",
    "Environmental products",
    "Physical and financial positions",
    "Market prices",
    "Generation and customer-load exposure",
    "Valuation",
    "Trading limits",
    "Settlements",
    "Collateral and liquidity",
  ],
  ubsObjects: [
    "Risks",
    "Controls",
    "Incidents",
    "Systems",
    "Dependencies",
    "Remediation actions",
  ],
  emtrObjects: [
    "Trades",
    "Physical and financial positions",
    "Market valuations",
    "Counterparties",
    "Limits",
    "Collateral",
    "Liquidity measures",
    "Control exceptions",
    "Breaches",
    "Remediation actions",
  ],
  transferableDisciplines: [
    "Authoritative data sources",
    "Controlled transformations",
    "Defined calculations",
    "Data lineage",
    "Reconciliation",
    "Thresholds",
    "Exception workflows",
    "Governance",
    "Testing",
    "Controlled implementation",
    "Operational ownership",
  ],
  boundary:
    "Sanjay is not positioned as a quantitative risk modeller or trader. His value lies in translating specialist risk and treasury requirements into controlled technology, data, reporting and implementation outcomes.",
  technicalCredibility:
    "Technical credibility does not require claiming specialist development ownership. Sanjay’s role is to ensure that the business requirement, risk meaning, data controls, implementation roadmap and acceptance outcome remain connected.",
};

export const capabilityLevelLegend = [
  {
    level: "Delivery leadership",
    meaning: "Owns integrated delivery outcomes, requirements shaping, validation coordination and readiness.",
  },
  {
    level: "Working knowledge",
    meaning: "Can interpret, investigate and challenge outputs while partnering with specialists.",
  },
  {
    level: "Practitioner exposure",
    meaning: "Has applied concepts in live delivery contexts without claiming specialist craft ownership.",
  },
  {
    level: "Specialist partnership",
    meaning: "Coordinates and governs outcomes delivered by specialist engineers or analysts.",
  },
  {
    level: "Development specialism not claimed",
    meaning: "Explicitly outside the professional positioning of this portfolio.",
  },
] as const;
