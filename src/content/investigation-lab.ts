export const investigationSteps = [
  {
    id: 1,
    title: "Confirm the metric definition",
    detail: "Agree what “risk exposure” means for this dashboard versus the source report.",
  },
  {
    id: 2,
    title: "Confirm the reporting period and cut-off",
    detail: "Compare as-of timestamps, late-arrival rules and business-date conventions.",
  },
  {
    id: 3,
    title: "Compare filters and business rules",
    detail: "Check portfolio, desk, product, status and exclusion filters on both sides.",
  },
  {
    id: 4,
    title: "Identify authoritative sources",
    detail: "Confirm which system is authoritative for the contested measure.",
  },
  {
    id: 5,
    title: "Trace ingestion status",
    detail: "Verify whether the expected feed arrived complete and on time.",
  },
  {
    id: 6,
    title: "Review joins and mappings",
    detail: "Inspect key mappings that could drop, duplicate or misclassify records.",
  },
  {
    id: 7,
    title: "Check duplicates and missing records",
    detail: "Sample for null keys, duplicate transactions and unexpected gaps.",
  },
  {
    id: 8,
    title: "Review currency or unit conversions",
    detail: "Confirm FX rates, units and conversion timing.",
  },
  {
    id: 9,
    title: "Reconcile a representative transaction sample",
    detail: "Trace a controlled sample from source to dashboard output.",
  },
  {
    id: 10,
    title: "Determine issue class",
    detail: "Classify as source data, transformation logic, business definition or visualisation.",
  },
  {
    id: 11,
    title: "Correct the issue",
    detail: "Apply the controlled fix with ownership and change evidence.",
  },
  {
    id: 12,
    title: "Regression-test",
    detail: "Re-run validation checks for the metric, period and related views.",
  },
  {
    id: 13,
    title: "Document the control",
    detail: "Record root cause, fix, evidence and monitoring expectation.",
  },
  {
    id: 14,
    title: "Confirm approval before republishing",
    detail: "Obtain agreed acceptance before the dashboard is trusted again.",
  },
] as const;

export type ExceptionType =
  | "Missing record"
  | "Duplicate transaction"
  | "Late-arriving feed"
  | "Incorrect mapping"
  | "Inconsistent reporting date"
  | "Different business definition"
  | "Transformation failure"
  | "Incorrect filter"
  | "Currency-conversion issue";

export interface SyntheticException {
  id: string;
  transactionRef: string;
  sourceSystem: string;
  reportingCutOff: string;
  dataQualityStatus: "Pass" | "Warn" | "Fail";
  mappingStatus: "Mapped" | "Unmapped" | "Suspect";
  exceptionType: ExceptionType;
  reconciliationStatus: "Matched" | "Break" | "Pending";
  dashboardValue: number;
  sourceValue: number;
  notes: string;
}

/** Synthetic demonstration data only — not employer data. */
export const syntheticExceptions: SyntheticException[] = [
  {
    id: "SX-1001",
    transactionRef: "SYN-TX-24018",
    sourceSystem: "Source Ledger A",
    reportingCutOff: "2026-09-30 17:00",
    dataQualityStatus: "Fail",
    mappingStatus: "Mapped",
    exceptionType: "Missing record",
    reconciliationStatus: "Break",
    dashboardValue: 0,
    sourceValue: 1250000,
    notes: "Source contains position; dashboard aggregation omits key after join.",
  },
  {
    id: "SX-1002",
    transactionRef: "SYN-TX-24019",
    sourceSystem: "Source Ledger A",
    reportingCutOff: "2026-09-30 17:00",
    dataQualityStatus: "Warn",
    mappingStatus: "Suspect",
    exceptionType: "Duplicate transaction",
    reconciliationStatus: "Break",
    dashboardValue: 840000,
    sourceValue: 420000,
    notes: "Duplicate ingest inflated dashboard exposure.",
  },
  {
    id: "SX-1003",
    transactionRef: "SYN-TX-24033",
    sourceSystem: "Market Feed B",
    reportingCutOff: "2026-09-30 17:00",
    dataQualityStatus: "Fail",
    mappingStatus: "Mapped",
    exceptionType: "Late-arriving feed",
    reconciliationStatus: "Pending",
    dashboardValue: 2100000,
    sourceValue: 2650000,
    notes: "Feed arrived after cut-off; source report refreshed, dashboard did not.",
  },
  {
    id: "SX-1004",
    transactionRef: "SYN-TX-24041",
    sourceSystem: "Reference Map C",
    reportingCutOff: "2026-09-30 17:00",
    dataQualityStatus: "Fail",
    mappingStatus: "Unmapped",
    exceptionType: "Incorrect mapping",
    reconciliationStatus: "Break",
    dashboardValue: 0,
    sourceValue: 910000,
    notes: "Product code remapped incorrectly; record excluded from risk view.",
  },
  {
    id: "SX-1005",
    transactionRef: "SYN-TX-24055",
    sourceSystem: "Source Ledger A",
    reportingCutOff: "2026-09-29 17:00",
    dataQualityStatus: "Warn",
    mappingStatus: "Mapped",
    exceptionType: "Inconsistent reporting date",
    reconciliationStatus: "Break",
    dashboardValue: 1500000,
    sourceValue: 1500000,
    notes: "Values match but periods differ; apparent mismatch in management pack.",
  },
  {
    id: "SX-1006",
    transactionRef: "SYN-TX-24060",
    sourceSystem: "Control Register D",
    reportingCutOff: "2026-09-30 17:00",
    dataQualityStatus: "Pass",
    mappingStatus: "Mapped",
    exceptionType: "Different business definition",
    reconciliationStatus: "Break",
    dashboardValue: 3200000,
    sourceValue: 2750000,
    notes: "Dashboard includes contingent exposures excluded from source report definition.",
  },
  {
    id: "SX-1007",
    transactionRef: "SYN-TX-24071",
    sourceSystem: "Transform Hub E",
    reportingCutOff: "2026-09-30 17:00",
    dataQualityStatus: "Fail",
    mappingStatus: "Suspect",
    exceptionType: "Transformation failure",
    reconciliationStatus: "Break",
    dashboardValue: 500000,
    sourceValue: 1800000,
    notes: "Transformation job partially failed; silent drop of book segment.",
  },
  {
    id: "SX-1008",
    transactionRef: "SYN-TX-24088",
    sourceSystem: "Source Ledger A",
    reportingCutOff: "2026-09-30 17:00",
    dataQualityStatus: "Pass",
    mappingStatus: "Mapped",
    exceptionType: "Incorrect filter",
    reconciliationStatus: "Break",
    dashboardValue: 1100000,
    sourceValue: 1900000,
    notes: "Dashboard filter excludes internal transfers still present in source report.",
  },
  {
    id: "SX-1009",
    transactionRef: "SYN-TX-24092",
    sourceSystem: "FX Service F",
    reportingCutOff: "2026-09-30 17:00",
    dataQualityStatus: "Warn",
    mappingStatus: "Mapped",
    exceptionType: "Currency-conversion issue",
    reconciliationStatus: "Break",
    dashboardValue: 980000,
    sourceValue: 1015000,
    notes: "Dashboard used prior-day FX rate versus source same-day convention.",
  },
];

export const investigationScenario = {
  title: "Risk Data Investigation Lab",
  subtitle: "A risk exposure shown in a management dashboard does not match the source report.",
  disclaimer:
    "All records are synthetic demonstration data. They are not employer data, customer data or live risk figures. The lab illustrates a delivery investigation method.",
};
