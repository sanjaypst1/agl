import { PageHero } from "@/components/layout/PageHero";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { affiliationDisclaimer, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Project Story",
  description: `How ${siteConfig.name} was designed, built and governed as an independent professional portfolio.`,
  path: "/project",
});

const sections = [
  {
    title: "Why the website was created",
    body: "To demonstrate end-to-end risk-solutions delivery credibility beyond a CV—showing method, accountability boundaries, data discipline and operational transition.",
  },
  {
    title: "Target audience",
    body: "Senior risk transformation leaders, quantitative risk and innovation leaders, Energy Markets and Treasury Risk leaders, Product Owners, technology and data leaders, enterprise architects, hiring managers and executive stakeholders.",
  },
  {
    title: "Information architecture",
    body: "Overview, Experience, Case Studies, Delivery Method, Risk & Data, Technology, Role Alignment, Evidence, About, Project Story, Contact, Privacy and Accessibility.",
  },
  {
    title: "Evidence strategy",
    body: "CV as source of truth; candidate clarifications used only where they refine personal ownership already consistent with the CV; every outcome tied to a case study.",
  },
  {
    title: "Confidentiality strategy",
    body: "Sanitised narratives, no internal dashboards, no proprietary models, no employer branding appropriation, clear illustrative labelling for diagrams and synthetic data.",
  },
  {
    title: "Case-study methodology",
    body: "Editorial structure covering situation, accountability, stakeholders, data/controls, testing, implementation, transition, outcomes, specialist boundaries and lessons.",
  },
  {
    title: "Visual-design rationale",
    body: "Calm enterprise-risk language: deep navy hierarchy, warm paper backgrounds, teal for trusted data, blue for technology flow, amber/coral for exceptions, green for validated states.",
  },
  {
    title: "Component and content architecture",
    body: "Typed content modules separate from UI. Server components by default; client components for navigation, GSAP, investigation lab, interview explorer, forms and Three.js.",
  },
  {
    title: "Data-visualisation approach",
    body: "Visualisations only where verified or clearly labelled sample/illustrative. Accessible text equivalents always provided.",
  },
  {
    title: "GSAP strategy",
    body: "Purposeful hero entrance, lifecycle/KPI reveals and lineage transitions using gsap.context with ScrollTrigger cleanup and reduced-motion fallbacks.",
  },
  {
    title: "Three.js strategy",
    body: "One Risk Data to Decision Network scene with lazy loading, reduced-motion HTML fallback, mobile node reduction and pause when off-screen.",
  },
  {
    title: "Accessibility, performance, privacy and security",
    body: "WCAG 2.2 AA intent, skip links, keyboard navigation, semantic structure, no secret collection in v1, mailto contact, optional noindex via environment variable.",
  },
  {
    title: "Testing and deployment",
    body: "TypeScript, ESLint, Vitest and production build via CI. Vercel preferred; GitHub Actions validates pull requests.",
  },
  {
    title: "Limitations and roadmap",
    body: "No live employer data; CV download is a placeholder until an approved PDF is supplied; serverless contact and richer analytics can follow without changing evidence boundaries.",
  },
];

export default function ProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Project story"
        title={`${siteConfig.name}: how this portfolio was built`}
        lead="An independent professional website focused on governed risk, data and delivery evidence."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Project Story" },
        ]}
      />
      <div className="container-site pb-16 space-y-6">
        <EvidenceNote title="Independence">
          <p>{affiliationDisclaimer}</p>
        </EvidenceNote>
        {sections.map((section, index) => (
          <section key={section.title} className="surface p-6">
            <p className="text-sm font-semibold text-teal">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-navy-900">{section.title}</h2>
            <p className="mt-3 text-navy-800">{section.body}</p>
          </section>
        ))}
      </div>
    </>
  );
}
