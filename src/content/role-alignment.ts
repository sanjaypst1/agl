import type { CapabilityAlignment } from "@/lib/types";

export const roleAlignments: CapabilityAlignment[] = [
  {
    id: "solution-delivery",
    title: "End-to-end solution delivery",
    requires:
      "Lead approved initiatives from discovery and planning through implementation, hypercare and transition into support.",
    evidence:
      "NAB, UBS, Bank of America, Daimler and Merck roles show discovery-to-BAU leadership across regulated environments.",
    bestCaseStudyId: "nab",
    outcome: "Executable roadmaps, governed work packages and controlled implementation sequencing.",
    level: "Delivery leadership",
  },
  {
    id: "product-partnership",
    title: "Product Owner partnership",
    requires:
      "Convert prioritised business needs into executable delivery plans while leaving product priority ownership with the Product Owner.",
    evidence:
      "Consistent Product partnership across NAB and UBS; coaching of Product Owners at UBS.",
    bestCaseStudyId: "nab",
    outcome: "Delivery plans aligned to approved product objectives without claiming backlog ownership.",
    level: "Delivery leadership",
  },
  {
    id: "reporting-analytics",
    title: "Reporting and analytics",
    requires: "Define reporting requirements, KPIs and metrics; deliver decision-ready dashboards and insights.",
    evidence:
      "UBS consolidated risk/control reporting; Bank of America executive dashboards; Daimler operational reporting.",
    bestCaseStudyId: "ubs",
    outcome: "Earlier escalation visibility and reduced manual reporting fragmentation.",
    level: "Delivery leadership",
  },
  {
    id: "data-transformation",
    title: "Data transformation",
    requires: "Support data modelling, information architecture and controlled transformation outcomes.",
    evidence:
      "Mapped data flows and control points at UBS; data integration portfolio at Merck; discrepancy investigation across banking delivery.",
    bestCaseStudyId: "ubs",
    outcome: "Clearer lineage, ownership and validation before reporting trust.",
    level: "Specialist partnership",
    limitation: "Detailed pipeline engineering remains specialist-owned.",
  },
  {
    id: "power-bi",
    title: "Power BI delivery",
    requires: "Advance Power BI reporting through requirements, design coordination, validation and adoption.",
    evidence:
      "Daimler: defined measures, filters, drill-downs, reviewed prototypes, validated outputs and coordinated UAT.",
    bestCaseStudyId: "daimler",
    outcome: "Reporting used to expose workflow bottlenecks and readiness gaps.",
    level: "Delivery leadership",
    limitation: "Advanced DAX development specialism not claimed.",
  },
  {
    id: "databricks",
    title: "Databricks delivery coordination",
    requires:
      "Coordinate modern data-platform delivery covering ingestion, transformation, quality, security and readiness.",
    evidence:
      "Solution-delivery and governance exposure across ingestion, transformation, lineage and production readiness while partnering with data engineers.",
    bestCaseStudyId: "ubs",
    outcome: "Platform delivery outcomes coordinated into reporting and control readiness.",
    level: "Specialist partnership",
    limitation: "Advanced notebook/Spark development not claimed; interview detail supports governance exposure.",
  },
  {
    id: "sql-investigation",
    title: "SQL-supported data investigation",
    requires: "Use SQL literacy to investigate discrepancies and support reconciliation.",
    evidence:
      "Working knowledge of tables, joins, filters, mappings, aggregations, missing/duplicate records and source-to-target comparisons.",
    bestCaseStudyId: "daimler",
    outcome: "Faster isolation of definition, transformation or source-data issues.",
    level: "Working knowledge",
    limitation: "Not positioned as a database engineer.",
  },
  {
    id: "vendor-management",
    title: "Vendor management",
    requires:
      "Manage vendor delivery for assigned initiatives including scope, schedules, dependencies, change control and acceptance.",
    evidence:
      "Vendor and financial governance at NAB; supplier optimisation and constraint resolution at Bank of America; supplier interfaces at UBS and Daimler.",
    bestCaseStudyId: "bank-of-america",
    outcome: "USD 1.5M annual savings through supplier optimisation at Bank of America.",
    level: "Delivery leadership",
    limitation: "Strategic vendor relationship ownership remains with Product Owners / commercial leads.",
  },
  {
    id: "governance",
    title: "Governance and assurance",
    requires: "Manage RAID, comply with architecture/security/assurance expectations and support governance reporting.",
    evidence:
      "Decision rights, delivery standards and reporting at UBS; RAID and readiness at NAB; audit readiness at Merck.",
    bestCaseStudyId: "ubs",
    outcome: "95%+ milestone adherence sustained in controlled delivery environments.",
    level: "Delivery leadership",
  },
  {
    id: "testing-readiness",
    title: "Testing and operational readiness",
    requires: "Coordinate testing, implementation readiness and operational support arrangements.",
    evidence:
      "Testing and readiness coordination across NAB, Daimler and Merck; UAT for reporting at UBS and Daimler.",
    bestCaseStudyId: "daimler",
    outcome: "900+ users prepared; release readiness treated as delivery scope.",
    level: "Delivery leadership",
  },
  {
    id: "hypercare-transition",
    title: "Hypercare and BAU transition",
    requires: "Stabilise implementations and transition solutions into support with clear ownership.",
    evidence:
      "BAU transition at UBS; sustainment planning at NAB; service transition and operational acceptance at Merck.",
    bestCaseStudyId: "merck",
    outcome: "Improved availability and reduced post-release service demand where measured.",
    level: "Delivery leadership",
  },
  {
    id: "market-risk-context",
    title: "Market, credit and operational risk context",
    requires: "Working knowledge of risk concepts and governance frameworks in trading/treasury-adjacent environments.",
    evidence:
      "Practical exposure via Bank of America and UBS technology/data changes supporting risk, treasury, trading and operations teams.",
    bestCaseStudyId: "bank-of-america",
    outcome: "Able to translate specialist risk requirements into controlled delivery checkpoints.",
    level: "Practitioner exposure",
    limitation: "Not a quantitative risk modeller.",
  },
  {
    id: "trading-treasury",
    title: "Trading and treasury stakeholder partnership",
    requires: "Work effectively with trading, treasury and risk stakeholders on data, controls and reporting outcomes.",
    evidence:
      "Stakeholder partnership around transaction data, reconciliations, limits, breaches and risk reports in banking environments.",
    bestCaseStudyId: "bank-of-america",
    outcome: "Delivery credibility with specialist stakeholders without overstating domain ownership.",
    level: "Practitioner exposure",
  },
  {
    id: "ai-automation",
    title: "AI and automation governance",
    requires: "Support adoption of automation and emerging AI technologies within governed delivery.",
    evidence:
      "CV lists AI adoption governance and automation/digital workflows among capabilities; delivery experience includes workflow automation and controlled modernisation.",
    bestCaseStudyId: "ubs",
    outcome: "Automation pursued through controlled implementation and operating-model change rather than uncontrolled tooling sprawl.",
    level: "Delivery leadership",
    limitation: "Specific employer AI platforms and models omitted; not positioned as an ML engineer.",
  },
  {
    id: "continuous-improvement",
    title: "Continuous improvement",
    requires: "Promote delivery excellence, standardisation, reuse and lessons learned.",
    evidence:
      "Coaching 55+ professionals; reusable governance rhythms; measurable efficiency and service improvements.",
    bestCaseStudyId: "ubs",
    outcome: "Capability uplift alongside solution outcomes.",
    level: "Delivery leadership",
  },
];

export const roleBoundaryNotes = [
  "Product Owners own product outcomes and priority.",
  "Architects own approved architecture direction.",
  "Quantitative specialists own risk methodology and model design.",
  "Data engineers build technical pipelines and transformations.",
  "Sanjay owns integrated delivery of the approved solution outcome: planning, dependencies, governance, testing, acceptance, implementation and transition.",
];
