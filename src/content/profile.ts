import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Sanjay Singh Rawat",
  headline:
    "Senior Risk Solutions Lead | Risk Technology, Data, Reporting and Transformation",
  location: "Melbourne, Victoria",
  residency: "Australian Permanent Resident",
  email: "sanjaydt13@gmail.com",
  phone: "+61 450 55 2271",
  linkedin: "https://www.linkedin.com/in/sanjaysingh13",
  summary:
    "Senior technology and transformation leader with more than 18 years of experience delivering complex risk, data, reporting and operating-model initiatives across banking, financial services, pharmaceuticals, manufacturing and regulated environments.",
  valueProposition:
    "Sanjay converts fragmented risk, transaction, control and operational data into governed, decision-ready reporting products. He leads the complete delivery lifecycle from discovery, KPI definition and information modelling through data validation, dashboard delivery, testing, adoption and operational transition.",
  supportingPositioning:
    "Sanjay brings first-line technology-risk and delivery experience and has worked closely with second-line market risk, operational risk, compliance, treasury and finance stakeholders.",
  boundaryStatement:
    "I lead the integrated delivery of risk and reporting solutions. I partner with quantitative specialists, risk analysts, architects, data engineers and developers rather than claiming to replace their specialist expertise.",
  firstLinePositioning:
    "Sanjay has operated mainly within first-line technology, transformation, delivery and risk-control environments. First-line teams own and manage the technology, data, delivery and operational risks arising from their work. Second-line risk functions provide independent oversight and challenge. Internal Audit provides third-line assurance. Sanjay builds and delivers the technology, data, reporting and control capabilities that allow risk specialists to perform effective oversight. He does not claim to be a trader, quantitative modeller, advanced SQL developer, Databricks engineer or Power BI developer.",
  certifications: [
    "PMI: PgMP, PfMP, PMP, PMI-ACP, PMI-PBA",
    "Scrum.org: Professional Scrum Trainer; PSM, PSPO and Agile Leader certifications",
    "Scaled Agile: SAFe Practice Consultant, Release Train Engineer, Solution Train Engineer",
    "Kanban University: Accredited Kanban Trainer",
    "PeopleCert: ITIL 4 Master",
    "PRINCE2 Practitioner",
    "Cloud: AWS Cloud, Microsoft Azure Cloud, Cloud Essentials",
  ],
  education: [
    "PhD in Management Studies, Strategy and Policy Management | IIM Sambalpur | In progress",
    "Master of Business Administration in Project Management | Sikkim Manipal University",
    "Bachelor of Technology in Mechanical Engineering | JNTU Hyderabad",
  ],
  memberships: [
    "Project Management Institute",
    "Scrum.org",
    "Scaled Agile",
    "Kanban University",
  ],
};

/** Supporting context only — not homepage lead proof */
export const credibilityMetrics = [
  {
    id: "years",
    value: 18,
    suffix: "+",
    label: "Years across regulated industries",
    href: "/experience",
    note: "Verified from CV executive summary",
  },
  {
    id: "products",
    value: 5,
    suffix: "",
    label: "Major reporting and analytics products",
    href: "/case-studies",
    note: "UBS, NAB, Bank of America, Daimler, Merck",
  },
  {
    id: "coached",
    value: 55,
    suffix: "+",
    label: "Engineers, Scrum Masters and Product Owners led",
    href: "/case-studies/ubs",
    note: "Associated with UBS transformation leadership",
  },
  {
    id: "onboarding",
    value: 30,
    suffix: "%",
    label: "Onboarding-efficiency improvement",
    href: "/case-studies/ubs",
    note: "UBS workflow redesign and operational handover",
  },
  {
    id: "service",
    value: 22,
    suffix: "%",
    label: "Reduction in service desk demand",
    href: "/case-studies/ubs",
    note: "UBS controlled implementation and transition",
  },
  {
    id: "milestone",
    value: 95,
    suffix: "%+",
    label: "Milestone adherence sustained",
    href: "/case-studies/bank-of-america",
    note: "Associated with Bank of America delivery controls",
  },
] as const;

export const closingNarrative = {
  pattern:
    "Across five reporting products, the common pattern has been turning fragmented operational information into governed, decision-oriented reporting.",
  products: [
    "At UBS, the focus was risks, controls and remediation.",
    "At NAB, it was loans, offset accounts, collateral and product exceptions.",
    "At Bank of America, it was pre-trade, post-trade and reconciliation information.",
    "At Daimler Mercedes-Benz, it was finance and operational performance.",
    "At Merck, it was commercial activity, consent and data quality.",
  ],
  synthesis:
    "Together, these examples demonstrate working knowledge of market, credit and operational-risk concepts; practical exposure to trading, treasury, finance and risk stakeholders; and the ability to lead the complete reporting-product lifecycle.",
  transfer:
    "This experience provides a transferable foundation for delivering risk architecture, reporting and data solutions in an Energy Markets and Treasury Risk environment.",
  disciplines:
    "The underlying product domain changes, but the delivery disciplines remain consistent: trusted sources, clear definitions, controlled transformations, reconciliation, traceability, testing, adoption and operational ownership.",
};

export const leadershipApproach = [
  "Begin with the decision the stakeholder needs to make",
  "Define KPI, source, owner, frequency, threshold and escalation before dashboard development",
  "Validate reported figures against source information and investigate mismatches",
  "Partner with specialists rather than claiming every technical craft",
  "Treat adoption and BAU ownership as part of delivery",
];
