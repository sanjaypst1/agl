import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-studies/CaseStudyView";
import { caseStudies, caseStudySlugs, getCaseStudy } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const study = getCaseStudy(slug);
    if (!study) return {};
    return buildMetadata({
      title: study.seo.title,
      description: study.seo.description,
      path: `/case-studies/${study.slug}`,
    });
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Overview", item: "/" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "/case-studies" },
      {
        "@type": "ListItem",
        position: 3,
        name: study.organisation,
        item: `/case-studies/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyView study={study} />
      {/* Ensure static generation sees all studies */}
      <span className="sr-only">{caseStudies.length} case studies available</span>
    </>
  );
}
