"use client";

import { useMemo, useState } from "react";
import {
  investigationScenario,
  investigationSteps,
  syntheticExceptions,
  type ExceptionType,
} from "@/content/investigation-lab";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { cn } from "@/lib/utils";

const sourceSystems = Array.from(new Set(syntheticExceptions.map((item) => item.sourceSystem)));
const cutOffs = Array.from(new Set(syntheticExceptions.map((item) => item.reportingCutOff)));
const exceptionTypes = Array.from(
  new Set(syntheticExceptions.map((item) => item.exceptionType)),
) as ExceptionType[];

export function InvestigationLab() {
  const [step, setStep] = useState(1);
  const [sourceSystem, setSourceSystem] = useState("all");
  const [cutOff, setCutOff] = useState("all");
  const [quality, setQuality] = useState("all");
  const [mapping, setMapping] = useState("all");
  const [exceptionType, setExceptionType] = useState("all");
  const [reconciliation, setReconciliation] = useState("all");

  const filtered = useMemo(() => {
    return syntheticExceptions.filter((item) => {
      if (sourceSystem !== "all" && item.sourceSystem !== sourceSystem) return false;
      if (cutOff !== "all" && item.reportingCutOff !== cutOff) return false;
      if (quality !== "all" && item.dataQualityStatus !== quality) return false;
      if (mapping !== "all" && item.mappingStatus !== mapping) return false;
      if (exceptionType !== "all" && item.exceptionType !== exceptionType) return false;
      if (reconciliation !== "all" && item.reconciliationStatus !== reconciliation) return false;
      return true;
    });
  }, [sourceSystem, cutOff, quality, mapping, exceptionType, reconciliation]);

  const currentStep = investigationSteps.find((item) => item.id === step) ?? investigationSteps[0];

  return (
    <div className="space-y-6">
      <EvidenceNote title="Synthetic demonstration data">
        {investigationScenario.disclaimer}
      </EvidenceNote>

      <div className="surface p-6">
        <p className="eyebrow">Scenario</p>
        <h3 className="mt-2 text-2xl font-semibold text-navy-900">{investigationScenario.subtitle}</h3>
        <div className="mt-6 grid gap-3 md:grid-cols-[0.35fr_1fr]">
          <label className="text-sm font-medium">
            Investigation step
            <select
              className="mt-2 w-full rounded-xl border border-line bg-white px-3 py-2"
              value={step}
              onChange={(event) => setStep(Number(event.target.value))}
            >
              {investigationSteps.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.id}. {item.title}
                </option>
              ))}
            </select>
          </label>
          <div className="rounded-2xl bg-paper-deep/70 p-4">
            <p className="font-semibold text-navy-900">
              Step {currentStep.id}: {currentStep.title}
            </p>
            <p className="mt-2 text-sm text-muted">{currentStep.detail}</p>
          </div>
        </div>
      </div>

      <div className="surface p-6">
        <h3 className="text-lg font-semibold text-navy-900">Interactive filters</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Source system", sourceSystem, setSourceSystem, ["all", ...sourceSystems]],
            ["Reporting cut-off", cutOff, setCutOff, ["all", ...cutOffs]],
            ["Data-quality status", quality, setQuality, ["all", "Pass", "Warn", "Fail"]],
            ["Mapping status", mapping, setMapping, ["all", "Mapped", "Unmapped", "Suspect"]],
            ["Exception type", exceptionType, setExceptionType, ["all", ...exceptionTypes]],
            [
              "Reconciliation status",
              reconciliation,
              setReconciliation,
              ["all", "Matched", "Break", "Pending"],
            ],
          ].map(([label, value, setter, options]) => (
            <label key={label as string} className="text-sm font-medium">
              {label as string}
              <select
                className="mt-2 w-full rounded-xl border border-line bg-white px-3 py-2"
                value={value as string}
                onChange={(event) =>
                  (setter as (value: string) => void)(event.target.value)
                }
              >
                {(options as string[]).map((option) => (
                  <option key={option} value={option}>
                    {option === "all" ? "All" : option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>

      <div className="surface overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <caption className="border-b border-line px-4 py-3 text-left font-semibold text-navy-900">
            Synthetic exception register ({filtered.length} records)
          </caption>
          <thead className="bg-paper-deep/80 text-xs uppercase tracking-[0.08em] text-muted">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Transaction</th>
              <th className="px-4 py-3">Exception</th>
              <th className="px-4 py-3">Quality</th>
              <th className="px-4 py-3">Mapping</th>
              <th className="px-4 py-3">Reconcile</th>
              <th className="px-4 py-3">Dashboard</th>
              <th className="px-4 py-3">Source</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-t border-line align-top">
                <td className="px-4 py-3 font-medium text-navy-900">{item.id}</td>
                <td className="px-4 py-3">
                  <div>{item.transactionRef}</div>
                  <div className="text-xs text-muted">{item.sourceSystem}</div>
                </td>
                <td className="px-4 py-3">
                  <div>{item.exceptionType}</div>
                  <div className="mt-1 max-w-xs text-xs text-muted">{item.notes}</div>
                </td>
                <td className="px-4 py-3">
                  <StatusPill tone={item.dataQualityStatus}>{item.dataQualityStatus}</StatusPill>
                </td>
                <td className="px-4 py-3">{item.mappingStatus}</td>
                <td className="px-4 py-3">
                  <StatusPill tone={item.reconciliationStatus}>
                    {item.reconciliationStatus}
                  </StatusPill>
                </td>
                <td className="px-4 py-3">{item.dashboardValue.toLocaleString()}</td>
                <td className="px-4 py-3">{item.sourceValue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusPill({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2 py-1 text-xs font-semibold",
        tone === "Fail" || tone === "Break"
          ? "bg-coral-soft text-coral"
          : tone === "Warn" || tone === "Pending"
            ? "bg-amber-soft text-amber"
            : "bg-green-soft text-green",
      )}
    >
      {children}
    </span>
  );
}
