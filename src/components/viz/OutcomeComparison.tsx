import { allOutcomes } from "@/content/outcomes";
import { Badge } from "@/components/ui/Badge";

/** Accessible text-first comparison of verified outcomes by organisation. */
export function OutcomeComparison() {
  const byOrg = allOutcomes.reduce<Record<string, typeof allOutcomes>>((acc, outcome) => {
    acc[outcome.organisation] = acc[outcome.organisation] ?? [];
    acc[outcome.organisation].push(outcome);
    return acc;
  }, {});

  return (
    <section className="surface p-6 md:p-8" aria-labelledby="outcome-comparison-title">
      <h2 id="outcome-comparison-title" className="text-xl font-semibold text-navy-900">
        Case-study outcome comparison
      </h2>
      <p className="mt-2 text-sm text-muted">
        Definition: verified metrics grouped by organisation. Context: figures are not combined into
        a single programme scorecard. Source: supplied CV. Limitation: NAB quantified results are
        omitted because they were not present in the source material.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {Object.entries(byOrg).map(([organisation, outcomes]) => (
          <article key={organisation} className="rounded-2xl bg-paper-deep/70 p-4">
            <h3 className="font-semibold text-navy-900">{organisation}</h3>
            <ul className="mt-3 space-y-3">
              {outcomes.map((outcome) => (
                <li key={outcome.id} className="text-sm">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-navy-900">{outcome.metric}</span>
                    <Badge status={outcome.status} />
                  </div>
                  <p className="mt-1 text-muted">
                    {outcome.label}. {outcome.context}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
