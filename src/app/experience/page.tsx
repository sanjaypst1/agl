import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { caseStudies } from "@/content/case-studies";
import { profile } from "@/content/profile";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Experience",
  description:
    "Career timeline and industry experience across banking, financial services, pharmaceuticals, manufacturing and regulated environments.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="A career timeline across regulated industries"
        lead={`${profile.summary}`}
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Experience" },
        ]}
      />
      <div className="container-site pb-16">
        <ol className="relative space-y-6 border-l border-line pl-6">
          {caseStudies.map((study) => (
            <li key={study.id} className="relative">
              <span
                className="absolute -left-[1.91rem] top-1.5 h-3 w-3 rounded-full bg-teal"
                aria-hidden
              />
              <article className="surface p-5 md:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-teal">
                  {study.period}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-navy-900">
                  {study.organisation} · {study.role}
                </h2>
                <p className="mt-2 text-sm text-muted">{study.industry}</p>
                <p className="mt-3 text-navy-800">{study.summary}</p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-teal"
                >
                  Open case study →
                </Link>
              </article>
            </li>
          ))}
        </ol>
        <aside className="surface mt-10 p-6">
          <h2 className="text-lg font-semibold text-navy-900">Earlier roles</h2>
          <p className="mt-2 text-sm text-muted">
            Prior programme, project and technology delivery roles spanned consulting,
            government-related, financial services, healthcare and nuclear-energy environments.
            Detailed narratives on this site focus on the five primary case studies above.
          </p>
        </aside>
      </div>
    </>
  );
}
