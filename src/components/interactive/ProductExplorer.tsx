"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { caseStudies } from "@/content/case-studies";
import type {
  BusinessFunction,
  DeliveryPhaseTag,
  ReportingCapability,
  RiskType,
} from "@/lib/types";

const riskTypes: Array<RiskType | "all"> = [
  "all",
  "Market risk",
  "Credit risk",
  "Operational risk",
  "Compliance risk",
  "Technology risk",
  "Data risk",
];

const functions: Array<BusinessFunction | "all"> = [
  "all",
  "Trading",
  "Market risk",
  "Treasury",
  "Finance",
  "Product",
  "Operations",
  "Compliance",
  "Commercial",
];

const capabilities: Array<ReportingCapability | "all"> = [
  "all",
  "KPI definition",
  "Data modelling",
  "Reconciliation",
  "Exception management",
  "Power BI",
  "SQL investigation",
  "Databricks delivery",
  "Self-service",
  "Governance",
  "Remediation tracking",
  "Operational transition",
];

const industries = ["all", "Banking", "Wealth", "Automotive finance", "Pharmaceuticals", "Regulated enterprise"];

const phases: Array<DeliveryPhaseTag | "all"> = [
  "all",
  "Discovery",
  "Requirements",
  "Solution shaping",
  "Data transformation",
  "Controls",
  "Testing",
  "Release",
  "Adoption",
  "Hypercare",
  "BAU transition",
];

export function ProductExplorer() {
  const [risk, setRisk] = useState<(typeof riskTypes)[number]>("all");
  const [fn, setFn] = useState<(typeof functions)[number]>("all");
  const [capability, setCapability] = useState<(typeof capabilities)[number]>("all");
  const [industry, setIndustry] = useState("all");
  const [phase, setPhase] = useState<(typeof phases)[number]>("all");

  const filtered = useMemo(() => {
    return caseStudies.filter((study) => {
      if (risk !== "all" && !study.riskTypes.includes(risk)) return false;
      if (fn !== "all" && !study.businessFunctions.includes(fn)) return false;
      if (capability !== "all" && !study.reportingCapabilities.includes(capability)) return false;
      if (industry !== "all" && !study.industries.includes(industry)) return false;
      if (phase !== "all" && !study.deliveryPhaseTags.includes(phase)) return false;
      return true;
    });
  }, [risk, fn, capability, industry, phase]);

  return (
    <div className="space-y-6">
      <div className="surface grid gap-3 p-5 md:grid-cols-2 xl:grid-cols-5">
        <Filter label="Risk type" value={risk} onChange={setRisk} options={riskTypes} />
        <Filter label="Business function" value={fn} onChange={setFn} options={functions} />
        <Filter
          label="Reporting capability"
          value={capability}
          onChange={setCapability}
          options={capabilities}
        />
        <Filter label="Industry" value={industry} onChange={setIndustry} options={industries} />
        <Filter label="Delivery phase" value={phase} onChange={setPhase} options={phases} />
      </div>

      <p className="text-sm text-muted">
        Showing {filtered.length} of {caseStudies.length} reporting products. No numerical match
        scores are used — relevance is explained in plain language.
      </p>

      <div className="space-y-4">
        {filtered.map((study) => (
          <article key={study.id} className="surface p-5 md:p-6">
            <p className="text-sm font-semibold text-teal">{study.organisation}</p>
            <h3 className="mt-1 text-xl font-semibold text-navy-900">
              <Link href={`/case-studies/${study.slug}`} className="hover:text-teal">
                {study.title}
              </Link>
            </h3>
            <p className="mt-3 text-sm text-muted">{study.summary}</p>
            <p className="mt-3 rounded-2xl bg-paper-deep/70 px-4 py-3 text-sm text-navy-800">
              Why this product is relevant: it demonstrates{" "}
              {[
                risk !== "all" ? risk.toLowerCase() : null,
                capability !== "all" ? capability.toLowerCase() : null,
                fn !== "all" ? `${fn.toLowerCase()} stakeholder partnership` : null,
                phase !== "all" ? `${phase.toLowerCase()} phase delivery` : null,
              ]
                .filter(Boolean)
                .join(", ") || "end-to-end reporting-product delivery across users, KPIs, controls and decisions"}
              .
            </p>
          </article>
        ))}
        {filtered.length === 0 ? (
          <p className="surface p-6 text-sm text-muted">
            No products match the current filters. Broaden one or more criteria.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function Filter<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: readonly T[];
}) {
  return (
    <label className="text-sm font-medium">
      {label}
      <select
        className="mt-2 w-full rounded-xl border border-line bg-white px-3 py-2"
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option === "all" ? "All" : option}
          </option>
        ))}
      </select>
    </label>
  );
}
