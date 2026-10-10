"use client";

import { useMemo, useState } from "react";
import {
  investigationScenario,
  investigationSteps,
  syntheticExceptions,
  type SyntheticException,
} from "@/content/investigation-lab";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { cn } from "@/lib/utils";

const unique = <T,>(values: T[]) => Array.from(new Set(values));

export function InvestigationLab() {
  const [step, setStep] = useState(0);
  const [sourceSystem, setSourceSystem] = useState("All");
  const [cutOff, setCutOff] = useState("All");
  const [dq, setDq] = useState("All");
  const [mapping, setMapping] = useState("All");
  const [exceptionType, setExceptionType] = useState("All");
  const [recon, setRecon] = useState("All");
  const [selectedId, setSelectedId] = useState(syntheticExceptions[0]?.id);

  const filters = useMemo(() => {
    return {
      sources: ["All", ...unique(syntheticExceptions.map((e) => e.sourceSystem))],
      cutOffs: ["All", ...unique(syntheticExceptions.map((e) => e.reportingCutOff))],
      dq: ["All", "Pass", "Warn", "Fail"],
      mapping: ["All", "Mapped", "Unmapped", "Suspect"],
      exceptions: ["All", ...unique(syntheticExceptions.map((e) => e.exceptionType))],
      recon: ["All", "Matched", "Break", "Pending"],
    };
  }, []);

  const filtered = useMemo(() => {
    return syntheticExceptions.filter((row) => {
      if (sourceSystem !== "All" && row.sourceSystem !== sourceSystem) return false;
      if (cutOff !== "All" && row.reportingCutOff !== cutOff) return false;
      if (dq !== "All" && row.dataQualityStatus !== dq) return false;
      if (mapping !== "All" && row.mappingStatus !== mapping) return false;
      if (exceptionType !== "All" && row.exceptionType !== exceptionType) return false;
      if (recon !== "All" && row.reconciliationStatus !== recon) return false;
      return true;
    });
  }, [sourceSystem, cutOff, dq, mapping, exceptionType, recon]);

  const selected: SyntheticException | undefined =
    filtered.find((r) => r.id === selectedId) ?? filtered[0];

  return (
    <section className="section-space" aria-labelledby="investigation-lab-title">
      <div className="container-site">
        <SectionHeading
          eyebrow={investigationScenario.title}
          title={investigationScenario.subtitle}
          lead="Walk a controlled investigation method from metric definition through republish approval."
        />
        <EvidenceNote className="mt-6" title="Synthetic demonstration data">
          <p>{investigationScenario.disclaimer}</p>
        </EvidenceNote>

        <ol className="mt-8 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
          {investigationSteps.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                className={cn(
                  "h-full w-full rounded-2xl border p-4 text-left",
                  step === index
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-line bg-white hover:border-teal",
                )}
                aria-current={step === index ? "step" : undefined}
                onClick={() => setStep(index)}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] opacity-80">
                  Step {item.id}
                </span>
                <span className="mt-2 block font-semibold">{item.title}</span>
                <span className="mt-2 block text-sm opacity-80">{item.detail}</span>
              </button>
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Source system</span>
            <select
              className="w-full rounded-xl border border-line bg-white px-3 py-2"
              value={sourceSystem}
              onChange={(e) => setSourceSystem(e.target.value)}
            >
              {filters.sources.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Reporting cut-off</span>
            <select
              className="w-full rounded-xl border border-line bg-white px-3 py-2"
              value={cutOff}
              onChange={(e) => setCutOff(e.target.value)}
            >
              {filters.cutOffs.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Data-quality status</span>
            <select
              className="w-full rounded-xl border border-line bg-white px-3 py-2"
              value={dq}
              onChange={(e) => setDq(e.target.value)}
            >
              {filters.dq.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Mapping status</span>
            <select
              className="w-full rounded-xl border border-line bg-white px-3 py-2"
              value={mapping}
              onChange={(e) => setMapping(e.target.value)}
            >
              {filters.mapping.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Exception type</span>
            <select
              className="w-full rounded-xl border border-line bg-white px-3 py-2"
              value={exceptionType}
              onChange={(e) => setExceptionType(e.target.value)}
            >
              {filters.exceptions.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Reconciliation status</span>
            <select
              className="w-full rounded-xl border border-line bg-white px-3 py-2"
              value={recon}
              onChange={(e) => setRecon(e.target.value)}
            >
              {filters.recon.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 overflow-x-auto surface">
          <table className="min-w-full text-left text-sm">
            <caption className="sr-only">
              Synthetic exception records for the risk data investigation lab
            </caption>
            <thead className="border-b border-line bg-paper-deep text-navy-900">
              <tr>
                <th scope="col" className="px-4 py-3">Ref</th>
                <th scope="col" className="px-4 py-3">Exception</th>
                <th scope="col" className="px-4 py-3">Source</th>
                <th scope="col" className="px-4 py-3">Dashboard</th>
                <th scope="col" className="px-4 py-3">Source value</th>
                <th scope="col" className="px-4 py-3">Recon</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className={cn(
                    "border-b border-line cursor-pointer",
                    selected?.id === row.id ? "bg-blue-soft" : "bg-white",
                  )}
                  onClick={() => setSelectedId(row.id)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(row.id);
                    }
                  }}
                >
                  <td className="px-4 py-3 font-medium">{row.transactionRef}</td>
                  <td className="px-4 py-3">{row.exceptionType}</td>
                  <td className="px-4 py-3">{row.sourceSystem}</td>
                  <td className="px-4 py-3">{row.dashboardValue.toLocaleString()}</td>
                  <td className="px-4 py-3">{row.sourceValue.toLocaleString()}</td>
                  <td className="px-4 py-3">{row.reconciliationStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 ? (
            <p className="p-4 text-sm text-muted">No synthetic exceptions match the current filters.</p>
          ) : null}
        </div>

        {selected ? (
          <aside className="surface mt-6 p-5" aria-live="polite">
            <h3 className="text-lg font-semibold text-navy-900">Selected exception detail</h3>
            <dl className="mt-4 grid gap-3 text-sm md:grid-cols-2">
              <div>
                <dt className="text-muted">Transaction</dt>
                <dd className="font-medium">{selected.transactionRef}</dd>
              </div>
              <div>
                <dt className="text-muted">Exception type</dt>
                <dd className="font-medium">{selected.exceptionType}</dd>
              </div>
              <div>
                <dt className="text-muted">DQ / mapping</dt>
                <dd className="font-medium">
                  {selected.dataQualityStatus} / {selected.mappingStatus}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Cut-off</dt>
                <dd className="font-medium">{selected.reportingCutOff}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-navy-800">{selected.notes}</p>
            <p className="mt-3 text-sm text-muted">
              Current method step: <strong>{investigationSteps[step].title}</strong>
            </p>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
