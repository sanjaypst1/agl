"use client";

import { useState } from "react";
import { lifecyclePhases } from "@/content/delivery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function LifecycleStepper() {
  const [active, setActive] = useState<string>(lifecyclePhases[0].id);
  const current = lifecyclePhases.find((phase) => phase.id === active) ?? lifecyclePhases[0];

  return (
    <section className="section-space section-mint">
      <div className="container-site">
        <SectionHeading
          eyebrow="Value chain"
          title="How a risk solution moves from intent to sustainment"
          lead="An interactive lifecycle showing the delivery sequence Sanjay leads across approved risk-sensitive initiatives."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            role="tablist"
            aria-label="Risk solution lifecycle phases"
            className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1"
          >
            {lifecyclePhases.map((phase) => {
              const selected = phase.id === active;
              return (
                <button
                  key={phase.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`lifecycle-tab-${phase.id}`}
                  aria-controls={`lifecycle-panel-${phase.id}`}
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left transition",
                    selected
                      ? "border-navy-900 bg-navy-900 text-white"
                      : "border-line bg-white text-navy-900 hover:border-teal",
                  )}
                  onClick={() => setActive(phase.id)}
                >
                  <span className="block text-xs opacity-70">Phase {phase.order}</span>
                  <span className="mt-1 block text-sm font-semibold">{phase.title}</span>
                </button>
              );
            })}
          </div>
          <div
            role="tabpanel"
            id={`lifecycle-panel-${current.id}`}
            aria-labelledby={`lifecycle-tab-${current.id}`}
            className="surface p-6 md:p-8"
          >
            <p className="eyebrow">Phase {current.order}</p>
            <h3 className="mt-3 text-2xl font-semibold text-navy-900">{current.title}</h3>
            <p className="mt-4 text-muted">{current.description}</p>
            <ol className="mt-8 space-y-2 text-sm text-muted">
              {lifecyclePhases.map((phase) => (
                <li key={phase.id} className={cn(phase.id === active && "font-semibold text-navy-900")}>
                  {phase.order}. {phase.title}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
