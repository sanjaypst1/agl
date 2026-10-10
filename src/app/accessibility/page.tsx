import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Accessibility",
  description: "Accessibility statement for Risk Solutions in Action.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="Accessibility statement"
        lead="This site targets WCAG 2.2 AA for structure, keyboard access, contrast and alternatives to motion or canvas content."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Accessibility" },
        ]}
      />
      <div className="container-site prose-site pb-16">
        <p>
          Measures include semantic HTML, skip links, visible focus, accessible navigation with
          Escape and focus management, labelled forms, chart/table text equivalents, and a static
          fallback for the Three.js network when reduced motion is preferred or WebGL is unavailable.
        </p>
        <p>
          Essential information is never provided only through hover, colour, animation or WebGL.
        </p>
        <p>
          If you encounter a barrier, email {siteConfig.email} with the page URL and a short
          description of the issue.
        </p>
      </div>
    </>
  );
}
