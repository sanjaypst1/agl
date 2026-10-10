import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function ReportingProducts() {
  return (
    <section className="section-space section-muted" id="reporting-products">
      <div className="container-site">
        <SectionHeading
          eyebrow="Five reporting products"
          title="A connected portfolio of decision-ready reporting"
          lead="Each product is presented as an information product — with users, views, KPIs, controls and decisions — not only as a programme title."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className={`surface p-6 ${study.flagship ? "lg:col-span-2 border-l-4 border-l-teal" : ""}`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-violet">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Badge status={study.evidenceStatus} />
                {study.flagship ? <Badge status="verified">Flagship personal delivery</Badge> : null}
              </div>
              <p className="mt-3 text-sm font-semibold text-teal">{study.organisation}</p>
              <h3 className="mt-2 text-xl font-semibold text-navy-900 md:text-2xl">
                <Link href={`/case-studies/${study.slug}`} className="hover:text-teal">
                  {study.title}
                </Link>
              </h3>
              {study.subtitle ? <p className="mt-2 text-sm text-muted">{study.subtitle}</p> : null}
              <p className="mt-4 text-muted">{study.summary}</p>
              <p className="mt-3 text-sm text-muted">{study.productType}</p>
              <Link
                href={`/case-studies/${study.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-teal"
              >
                Open reporting product →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
