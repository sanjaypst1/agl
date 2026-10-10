import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { allOutcomes, portfolioScaleNote } from "@/content/outcomes";
import { affiliationDisclaimer, confidentialityStatement } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Evidence and Confidentiality",
  description:
    "Evidence statuses, confidentiality statement and source notes for Risk Solutions in Action.",
  path: "/evidence",
});

export default function EvidencePage() {
  return (
    <>
      <PageHero
        eyebrow="Evidence"
        title="What is verified, sanitised, illustrative or omitted"
        lead="This portfolio privileges factual integrity over marketing claims."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Evidence" },
        ]}
      />
      <div className="container-site pb-16 space-y-8">
        <EvidenceNote title="Evidence and confidentiality statement">
          <p>{confidentialityStatement}</p>
          <p className="mt-3">{affiliationDisclaimer}</p>
        </EvidenceNote>

        <section className="surface p-6" id="portfolio-scale">
          <h2 className="text-xl font-semibold text-navy-900">Evidence status legend</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {(
              [
                "verified",
                "sanitised",
                "representative",
                "illustrative",
                "to-be-confirmed",
                "confidential-detail-omitted",
              ] as const
            ).map((status) => (
              <li key={status}>
                <Badge status={status} />
              </li>
            ))}
          </ul>
        </section>

        <section className="surface p-6">
          <h2 className="text-xl font-semibold text-navy-900">Portfolio-scale figure</h2>
          <p className="mt-3 text-3xl font-semibold text-navy-900">{portfolioScaleNote.metric}</p>
          <p className="mt-2">{portfolioScaleNote.label}</p>
          <p className="mt-2 text-sm text-muted">{portfolioScaleNote.context}</p>
          <div className="mt-3">
            <Badge status={portfolioScaleNote.status} />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">Verified outcomes by source</h2>
          <ul className="mt-4 space-y-3">
            {allOutcomes.map((outcome) => (
              <li key={outcome.id} className="surface flex flex-wrap items-start justify-between gap-4 p-4">
                <div>
                  <p className="font-semibold text-navy-900">
                    {outcome.metric} · {outcome.label}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {outcome.organisation} — {outcome.context}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge status={outcome.status} />
                  <Link href={outcome.href} className="text-sm font-semibold text-teal">
                    Case study
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
