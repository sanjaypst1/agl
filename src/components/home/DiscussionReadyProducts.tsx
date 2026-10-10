import Link from "next/link";
import { getDiscussionReadyCaseStudies } from "@/content/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function DiscussionReadyProducts() {
  const studies = getDiscussionReadyCaseStudies();

  return (
    <section className="section-space" id="discussion-ready">
      <div className="container-site">
        <SectionHeading
          eyebrow="Interview-ready discussion set"
          title="Three reporting products I keep ready to walk through"
          lead="I use these three products to cover operational risk and governance, credit and collateral exposure, and trading / market-risk / treasury reconciliation — different report types across the domains this role is expected to work with."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {studies.map((study) => (
            <article key={study.id} className="surface flex flex-col p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-sky px-2.5 py-1 text-xs font-bold text-navy-900">
                  {String(study.discussionRank).padStart(2, "0")}
                </span>
                <Badge status={study.evidenceStatus} />
              </div>
              <p className="mt-4 text-sm font-semibold text-teal">{study.organisation}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.06em] text-muted">
                {study.reportTypeLabel}
              </p>
              <h3 className="mt-3 text-lg font-bold text-navy-900">
                <Link href={`/case-studies/${study.slug}`} className="no-underline hover:text-teal">
                  {study.title}
                </Link>
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {(study.domainCoverage ?? []).map((domain) => (
                  <li
                    key={domain}
                    className="rounded-full bg-violet-soft px-2.5 py-1 text-xs font-semibold text-violet"
                  >
                    {domain}
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {study.discussionTalkTrack}
              </p>
              <Link
                href={`/case-studies/${study.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-teal no-underline"
              >
                Open full product story →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/case-studies">Browse all five reporting products</Button>
          <Button href="/plan#plan" variant="secondary">
            View my 30-60-90 day plan
          </Button>
        </div>
      </div>
    </section>
  );
}
