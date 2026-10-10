"use client";

import { useState } from "react";
import { discrepancyScenario, reportingFailureModes } from "@/content/self-service";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { cn } from "@/lib/utils";

export function ReportingFailures() {
  const [active, setActive] = useState<string>(reportingFailureModes[0].id);
  const current =
    reportingFailureModes.find((item) => item.id === active) ?? reportingFailureModes[0];

  return (
    <section className="space-y-6" id="reporting-failures">
      <div>
        <h2 className="display-title text-3xl">Where reporting products commonly fail</h2>
        <p className="lead mt-3">
          Select a failure mode to see the risk created, investigation approach, control response,
          validation method and adoption consideration.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {reportingFailureModes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={cn(
                "rounded-2xl border px-4 py-3 text-left text-sm transition",
                active === item.id
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-line bg-white hover:border-teal",
              )}
              aria-pressed={active === item.id}
              onClick={() => setActive(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <article className="surface p-6">
          <h3 className="text-xl font-semibold text-navy-900">{current.title}</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-coral">Risk created</dt>
              <dd className="mt-1 text-muted">{current.risk}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Investigation approach</dt>
              <dd className="mt-1 text-muted">{current.investigation}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Control response</dt>
              <dd className="mt-1 text-muted">{current.control}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Validation method</dt>
              <dd className="mt-1 text-muted">{current.validation}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">Adoption consideration</dt>
              <dd className="mt-1 text-muted">{current.adoption}</dd>
            </div>
          </dl>
        </article>
      </div>

      <div className="surface p-6 md:p-8">
        <EvidenceNote title="Synthetic demonstration">{discrepancyScenario.disclaimer}</EvidenceNote>
        <h3 className="mt-6 text-xl font-semibold text-navy-900">{discrepancyScenario.title}</h3>
        <ol className="mt-4 grid gap-2 md:grid-cols-2">
          {discrepancyScenario.steps.map((step, index) => (
            <li key={step} className="rounded-2xl bg-paper-deep/70 px-4 py-3 text-sm">
              <span className="font-semibold text-navy-900">{index + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
