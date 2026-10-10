import Link from "next/link";
import { governanceFlow, riskCategories, threeLines } from "@/content/risk-knowledge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RiskKnowledge() {
  return (
    <section className="section-space bg-[rgba(255,255,255,0.35)]" id="risk-knowledge">
      <div className="container-site">
        <SectionHeading
          eyebrow="Risk knowledge applied through delivery"
          title="Market, credit and operational risk — through reporting and controls"
          lead="Working knowledge demonstrated by delivery evidence, not by claiming quantitative modeller ownership."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {riskCategories.map((item) => (
            <article key={item.id} className="surface p-5">
              <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.definition}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
                {item.evidence.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {"boundary" in item && item.boundary ? (
                <p className="mt-3 text-xs text-amber">{item.boundary}</p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {item.caseStudyIds.map((id) => (
                  <Link key={id} href={`/case-studies/${id}`} className="font-semibold text-teal">
                    {id}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="surface mt-8 overflow-x-auto p-5">
          <h3 className="font-semibold text-navy-900">Governance framework</h3>
          <ol className="mt-4 flex min-w-max gap-2 text-sm md:flex-wrap md:min-w-0">
            {governanceFlow.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-full bg-navy-900 px-3 py-1.5 text-white">{step}</span>
                {index < governanceFlow.length - 1 ? (
                  <span className="text-aqua" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {threeLines.map((item) => (
            <article key={item.line} className="surface p-5">
              <h3 className="font-semibold text-navy-900">{item.line}</h3>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
              <p className="mt-3 text-sm text-navy-800">{item.sanjay}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
