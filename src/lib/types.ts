export type EvidenceStatus =
  | "verified"
  | "sanitised"
  | "representative"
  | "illustrative"
  | "to-be-confirmed"
  | "confidential-detail-omitted";

export type CapabilityLevel =
  | "Delivery leadership"
  | "Working knowledge"
  | "Practitioner exposure"
  | "Specialist partnership"
  | "Development specialism not claimed";

export type RiskType =
  | "Market risk"
  | "Credit risk"
  | "Operational risk"
  | "Compliance risk"
  | "Technology risk"
  | "Data risk";

export type BusinessFunction =
  | "Trading"
  | "Market risk"
  | "Treasury"
  | "Finance"
  | "Product"
  | "Operations"
  | "Compliance"
  | "Commercial";

export type ReportingCapability =
  | "KPI definition"
  | "Data modelling"
  | "Reconciliation"
  | "Exception management"
  | "Power BI"
  | "SQL investigation"
  | "Databricks delivery"
  | "Self-service"
  | "Governance"
  | "Remediation tracking"
  | "Operational transition";

export type DeliveryPhaseTag =
  | "Discovery"
  | "Requirements"
  | "Solution shaping"
  | "Data transformation"
  | "Controls"
  | "Testing"
  | "Release"
  | "Adoption"
  | "Hypercare"
  | "BAU transition";

export interface SourceNote {
  label: string;
  status: EvidenceStatus;
  detail: string;
}

export interface Outcome {
  id: string;
  metric: string;
  label: string;
  context: string;
  caseStudyId: string;
  status: EvidenceStatus;
}

export interface StakeholderGroup {
  id: string;
  name: string;
  role: string;
}

export interface DeliveryPhase {
  id: string;
  order: number;
  title: string;
  description: string;
}

export interface EvidenceItem {
  id: string;
  claim: string;
  sourceFile: string;
  sourceSection: string;
  status: EvidenceStatus;
  confidentiality: string;
  publicWording: string;
  limitation?: string;
  caseStudyId?: string;
}

export interface TechnologyCapability {
  id: string;
  name: string;
  level: CapabilityLevel;
  positioning: string;
  does: string[];
  doesNot: string[];
  caseStudyIds: string[];
}

export interface InterviewQuestion {
  id: string;
  question: string;
  tags: string[];
  caseStudyIds: string[];
  evidenceSummary: string;
  experienceNote: string;
  shortAnswer?: string;
  boundary?: string;
}

export interface CapabilityAlignment {
  id: string;
  title: string;
  requires: string;
  evidence: string;
  bestCaseStudyId: string;
  outcome: string;
  level: CapabilityLevel;
  limitation?: string;
}

export interface ReportingView {
  name: string;
  detail: string;
  status: EvidenceStatus;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  organisation: string;
  role: string;
  period: string;
  industry: string;
  budget?: string;
  productType: string;
  flagship?: boolean;
  summary: string;
  situation: string;
  problem: string;
  riskContext: string;
  reportingUsers: string[];
  sourceInformation: string[];
  reportingViews: ReportingView[];
  kpiExamples: string[];
  informationModel: string[];
  dataControls: string[];
  decisionsSupported: string[];
  selfService?: string;
  technologyContribution: string[];
  accountability: string[];
  stakeholders: StakeholderGroup[];
  actions: string[];
  deliveryPhases: string[];
  dataConsiderations: string[];
  controls: string[];
  testing: string[];
  implementation: string[];
  transition: string[];
  adoption: string[];
  outcomes: Outcome[];
  technologies: string[];
  capabilities: string[];
  personalOwned: string[];
  specialistContributions: string[];
  businessOwnersRetained: string[];
  evidenceBoundaries: string[];
  confidentialityBoundary: string;
  transferabilityRiskArchitecture: string;
  transferabilityEnergyMarkets: string;
  lessons: string[];
  relatedQuestions: string[];
  relatedCaseStudies: string[];
  riskTypes: RiskType[];
  businessFunctions: BusinessFunction[];
  reportingCapabilities: ReportingCapability[];
  industries: string[];
  deliveryPhaseTags: DeliveryPhaseTag[];
  evidenceStatus: EvidenceStatus;
  featured?: boolean;
  featuredAngle?: string;
  discussionReady?: boolean;
  discussionRank?: number;
  reportTypeLabel?: string;
  domainCoverage?: string[];
  discussionTalkTrack?: string;
  seo: {
    title: string;
    description: string;
  };
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  residency: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  valueProposition: string;
  supportingPositioning: string;
  boundaryStatement: string;
  firstLinePositioning: string;
  certifications: string[];
  education: string[];
  memberships: string[];
}

export interface NavItem {
  href: string;
  label: string;
}
