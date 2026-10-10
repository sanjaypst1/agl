import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { getFeaturedCaseStudies } from "@/content/case-studies";

export function FeaturedCaseStudies() {
  const featured = getFeaturedCaseStudies();

  return (
    <section className="section-space">
      <div className="container-site">
        <SectionHeading
          eyebrow="Featured case studies"
          title="Evidence of personal delivery across reporting, implementation and operational insight"
          lead="Each story is sanitised. Exact platforms, proprietary models and confidential volumes are omitted."
        />
        <div className="mt-12 space-y-8">
          {featured.map((study, index) => (
            <article
              key={study.id}
              className="surface grid gap-6 overflow-hidden p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8"
            >
              <div className="border-b border-line pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal">
                  {String(index + 1).padStart(2, "0")} · {study.organisation}
                </p>
                <h3 className="mt-3 display-title text-2xl md:text-3xl">{study.title}</h3>
                <p className="mt-3 text-sm text-muted">
                  {study.role} · {study.period}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge status="sanitised">Sanitised case study</Badge>
                  <Badge status="verified">Verified CV evidence</Badge>
                </div>
              </div>
              <div>
                <p className="text-base text-navy-800">{study.featuredAngle ?? study.summary}</p>
                <p className="mt-4 text-sm text-muted">{study.riskContext}</p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-navy-900"
                >
                  Read the full case study
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
