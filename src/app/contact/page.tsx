import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Contact ${profile.name} to discuss risk technology, data and transformation delivery.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss a risk transformation challenge"
        lead="Share context about a risk, data, reporting or implementation initiative. Keep messages free of confidential employer detail."
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "Contact" },
        ]}
      />
      <div className="container-site grid gap-8 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-4">
          <div className="surface p-6">
            <h2 className="text-lg font-semibold text-navy-900">Direct details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted">Email</dt>
                <dd>
                  <a className="font-semibold text-teal" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Phone</dt>
                <dd className="font-medium">{siteConfig.phone}</dd>
              </div>
              <div>
                <dt className="text-muted">LinkedIn</dt>
                <dd>
                  <a
                    className="font-semibold text-teal"
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/sanjaysingh13
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Location</dt>
                <dd className="font-medium">{profile.location}</dd>
              </div>
            </dl>
          </div>
          <EvidenceNote title="Static contact path">
            <p>
              Version 1 uses a mailto fallback. Future options include Formspree, Resend or a
              serverless handler. Do not commit API keys to the repository.
            </p>
          </EvidenceNote>
        </aside>
        <ContactForm />
      </div>
    </>
  );
}
