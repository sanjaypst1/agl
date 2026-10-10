import Link from "next/link";
import { allOutcomes, portfolioScaleNote } from "@/content/outcomes";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function OutcomesPreview() {
  const preview = allOutcomes.slice(0, 6);

  return (
    <section className="section-space">
      <div className="container-site">
        <SectionHeading
          eyebrow="Delivery outcomes"
          title="Measured results with case-study context"
          lead="Each outcome stays associated with the engagement that produced it."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article id="portfolio-scale" className="surface border-l-4 border-l-violet p-5 md:col-span-2 xl:col-span-1">
            <Badge status={portfolioScaleNote.status} />
            <p className="mt-4 text-3xl font-semibold text-navy-900">
              {portfolioScaleNote.metric}
            </p>
            <h3 className="mt-2 font-semibold">{portfolioScaleNote.label}</h3>
            <p className="mt-2 text-sm text-muted">{portfolioScaleNote.context}</p>
          </article>
          {preview.map((outcome) => (
            <Link
              key={outcome.id}
              href={outcome.href}
              className="surface block p-5 transition hover:border-teal"
            >
              <Badge status={outcome.status} />
              <p className="mt-4 text-3xl font-semibold text-navy-900">{outcome.metric}</p>
              <h3 className="mt-2 font-semibold">{outcome.label}</h3>
              <p className="mt-2 text-sm text-muted">{outcome.organisation}</p>
              <p className="mt-2 text-sm text-muted">{outcome.context}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
