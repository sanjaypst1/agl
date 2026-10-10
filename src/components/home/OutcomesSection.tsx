import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { allOutcomes, portfolioScaleNote } from "@/content/outcomes";
import { formatEvidenceStatus } from "@/lib/utils";

export function OutcomesSection() {
  return (
    <section className="section-space">
      <div className="container-site">
        <SectionHeading
          eyebrow="Delivery outcomes"
          title="Measurable results, each linked to the right engagement"
          lead="Outcomes are not pooled into a single programme story. Open the associated case study for context and evidence boundaries."
        />
        <EvidenceNote className="mt-8" title="Portfolio-scale note">
          <p>
            <strong>{portfolioScaleNote.metric}</strong> — {portfolioScaleNote.context}
          </p>
        </EvidenceNote>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {allOutcomes.map((outcome) => (
            <li key={outcome.id} className="surface p-5">
              <p className="text-2xl font-semibold text-navy-900">{outcome.metric}</p>
              <p className="mt-1 font-medium text-navy-800">{outcome.label}</p>
              <p className="mt-2 text-sm text-muted">{outcome.context}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                <span className="text-muted">
                  {outcome.organisation} · {formatEvidenceStatus(outcome.status)}
                </span>
                <Link href={outcome.href} className="font-semibold text-teal">
                  View source case study
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
