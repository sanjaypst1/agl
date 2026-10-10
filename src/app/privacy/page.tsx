import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "Privacy approach for the Risk Solutions in Action professional portfolio.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy statement"
        lead="This static portfolio minimises data collection."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Privacy" },
        ]}
      />
      <div className="container-site prose-site pb-16">
        <p>
          The contact form opens a local email draft to {siteConfig.email}. In this version, form
          fields are not stored on a website server and no analytics SDK is required for core
          browsing.
        </p>
        <p>
          Do not submit confidential employer information, customer data, trading positions, risk
          limits, proprietary models or security-sensitive details through the contact channel.
        </p>
        <p>
          If a future serverless form provider is added, environment variables will be documented in
          `.env.example` and secrets will remain outside git.
        </p>
        <p>
          For privacy questions, contact {siteConfig.email}.
        </p>
      </div>
    </>
  );
}
