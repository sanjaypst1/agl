import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Badge } from "@/components/ui/Badge";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { OutcomeComparison } from "@/components/viz/OutcomeComparison";
import { ProductExplorer } from "@/components/interactive/ProductExplorer";
import { caseStudies } from "@/content/case-studies";
import { confidentialityStatement } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reporting Products",
  description:
    "Five sanitised reporting products covering risk and controls, trading operations, lending, finance and commercial performance.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Reporting products"
        title="Five decision-ready reporting products"
        lead="Filter by risk type, business function, capability, industry and delivery phase. Each product distinguishes personal accountability, specialist contribution and business ownership."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Reporting Products" },
        ]}
      />
      <div className="container-site space-y-10 pb-16">
        <EvidenceNote>{confidentialityStatement}</EvidenceNote>
        <section>
          <h2 className="display-title text-3xl">Five-product explorer</h2>
          <p className="lead mt-3">
            No fake match percentages — relevance is explained in plain language.
          </p>
          <div className="mt-6">
            <ProductExplorer />
          </div>
        </section>
        <OutcomeComparison />
        <section className="space-y-6">
          <h2 className="display-title text-3xl">All products</h2>
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className="surface grid gap-6 p-6 md:grid-cols-[0.35fr_1fr] md:p-8"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
                  {String(index + 1).padStart(2, "0")} · {study.organisation}
                </p>
                <p className="mt-3 text-sm text-muted">
                  {study.period}
                  <br />
                  {study.role}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge status={study.evidenceStatus} />
                  {study.flagship ? <Badge status="verified">Flagship</Badge> : null}
                </div>
              </div>
              <div>
                <h2 className="display-title text-2xl md:text-3xl">
                  <Link href={`/case-studies/${study.slug}`} className="hover:text-teal">
                    {study.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted">{study.productType}</p>
                <p className="mt-3 text-navy-800">{study.summary}</p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-teal"
                >
                  Open reporting product →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
