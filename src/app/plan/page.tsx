import type { Metadata } from "next";
import Link from "next/link";
import { Plan306090 } from "@/components/plan/Plan306090";
import { PageHero } from "@/components/layout/PageHero";
import { getDiscussionReadyCaseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "30-60-90 Day Plan | Risk Solutions Entry Approach",
  description:
    "My 30-60-90 day plan for entering a senior risk solutions role: understand the reporting landscape, align definitions and exceptions, then embed decision-ready reporting.",
  path: "/plan",
});

export default function PlanPage() {
  const ready = getDiscussionReadyCaseStudies();

  return (
    <>
      <PageHero
        eyebrow="Entry plan"
        title="How I would start in the first 90 days"
        lead="I observe first, make risk and data exceptions visible, then improve decision-ready reporting with the people who own trading, treasury, finance and risk outcomes."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "30-60-90 Plan" },
        ]}
      />
      <Plan306090 />
      <section className="section-space pt-0">
        <div className="container-site">
          <h2 className="display-title text-[clamp(1.5rem,2.5vw,2.2rem)]">
            Products I keep ready alongside this plan
          </h2>
          <p className="lead mt-3">
            When I discuss how I would land, I pair the 30-60-90 plan with three reporting products
            that cover operational risk, credit and collateral, and trading / market-risk /
            treasury reconciliation.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {ready.map((study) => (
              <li key={study.id} className="surface p-5">
                <p className="text-sm font-semibold text-teal">{study.organisation}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.06em] text-muted">
                  {study.reportTypeLabel}
                </p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-3 inline-flex font-semibold text-navy-900 no-underline hover:text-teal"
                >
                  {study.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
