"use client";

import { Printer } from "lucide-react";
import { useState } from "react";
import { planIntro, planPhases } from "@/content/plan-306090";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function Plan306090({ showPrint = true }: { showPrint?: boolean }) {
  const [active, setActive] = useState<(typeof planPhases)[number]["id"]>(
    planPhases[0].id,
  );
  const phase = planPhases.find((item) => item.id === active) ?? planPhases[0];
  const progress = active === "30" ? 33 : active === "60" ? 66 : 100;

  return (
    <section className="section-space section-mint" id="plan" aria-labelledby="plan-title">
      <div className="container-site">
        <p className="eyebrow">{planIntro.eyebrow}</p>
        <h2 id="plan-title" className="display-title max-w-[22ch] text-[clamp(1.7rem,3vw,2.7rem)]">
          {planIntro.title}
        </h2>
        <p className="lead mt-4">{planIntro.lead}</p>

        {showPrint ? (
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-[rgba(255,255,255,0.8)] px-[1.15rem] py-[0.7rem] text-sm font-semibold text-navy-900"
              onClick={() => window.print()}
            >
              <Printer size={16} aria-hidden="true" />
              Print or save the 30-60-90 plan
            </button>
          </div>
        ) : null}

        <div className="mt-4 hidden print:block">
          <p className="font-semibold text-navy-900">{profile.name}</p>
          <p className="text-sm text-muted">{profile.headline}</p>
        </div>

        <div
          className="mt-6 h-2.5 overflow-hidden rounded-full bg-paper-deep"
          aria-hidden="true"
        >
          <div
            className="h-full rounded-full bg-[linear-gradient(90deg,var(--aqua),var(--teal))] transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div
          className="mt-5 flex flex-wrap gap-2"
          role="tablist"
          aria-label="30-60-90 day plan"
        >
          {planPhases.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`plan-tab-${item.id}`}
              aria-selected={item.id === active}
              aria-controls={`plan-panel-${item.id}`}
              tabIndex={item.id === active ? 0 : -1}
              className={cn(
                "min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition",
                item.id === active
                  ? "border-navy-900 bg-navy-900 text-white"
                  : "border-line bg-white text-navy-900 hover:border-teal",
              )}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => {
                const index = planPhases.findIndex((entry) => entry.id === active);
                if (event.key === "ArrowRight") {
                  setActive(planPhases[(index + 1) % planPhases.length].id);
                }
                if (event.key === "ArrowLeft") {
                  setActive(
                    planPhases[(index - 1 + planPhases.length) % planPhases.length].id,
                  );
                }
              }}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {planPhases.map((item) => (
          <article
            key={item.id}
            className="surface mt-4 p-6 md:p-8"
            role="tabpanel"
            id={`plan-panel-${item.id}`}
            aria-labelledby={`plan-tab-${item.id}`}
            hidden={item.id !== phase.id}
          >
            <h3 className="text-xl font-bold text-navy-900 md:text-2xl">
              {item.range}: {item.title}
            </h3>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.06em] text-muted">
                  Objectives
                </h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-navy-800">
                  {item.objectives.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.06em] text-muted">
                  Actions
                </h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-navy-800">
                  {item.actions.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.06em] text-muted">
                  Expected outcomes
                </h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-navy-800">
                  {item.outcomes.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        <p className="surface mt-5 p-5 text-navy-900 md:p-6">{planIntro.close}</p>
      </div>
    </section>
  );
}
