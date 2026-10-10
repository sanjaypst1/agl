import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { leadershipApproach, profile } from "@/content/profile";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: `About ${profile.name} — senior risk solutions, technology, data and transformation delivery leader based in Melbourne.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={profile.name}
        lead={profile.headline}
        breadcrumbs={[
          { href: "/", label: "Overview" },
          { label: "About" },
        ]}
      />
      <div className="container-site grid gap-8 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <section className="surface p-6 md:p-8">
            <h2 className="text-xl font-semibold text-navy-900">Professional summary</h2>
            <p className="mt-3 text-navy-800">{profile.summary}</p>
            <p className="mt-4 text-navy-800">{profile.valueProposition}</p>
            <p className="mt-4 text-navy-800">{profile.supportingPositioning}</p>
          </section>
          <section className="surface p-6 md:p-8">
            <h2 className="text-xl font-semibold text-navy-900">Leadership approach</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-navy-800">
              {leadershipApproach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="surface p-6 md:p-8">
            <h2 className="text-xl font-semibold text-navy-900">Delivery philosophy</h2>
            <p className="mt-3 text-navy-800">{profile.boundaryStatement}</p>
            <p className="mt-4 text-sm text-muted">{profile.firstLinePositioning}</p>
          </section>
        </div>
        <aside className="space-y-6">
          <div className="surface p-6">
            <h2 className="text-lg font-semibold text-navy-900">Location</h2>
            <p className="mt-2 text-sm">
              {profile.location}
              <br />
              {profile.residency}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button href="/contact">Contact Sanjay</Button>
              <Button href={profile.linkedin} variant="secondary" target="_blank" rel="noopener noreferrer">
                LinkedIn profile
              </Button>
              <Button href="/contact" variant="ghost">
                Request professional summary
              </Button>
            </div>
            <EvidenceNote className="mt-4" title="CV download">
              <p>
                An approved PDF summary can be added later at{" "}
                <code>public/cv/sanjay-singh-rawat-summary.pdf</code>. Until then, use contact or
                LinkedIn.
              </p>
            </EvidenceNote>
          </div>
          <div className="surface p-6">
            <h2 className="text-lg font-semibold text-navy-900">Qualifications</h2>
            <ul className="mt-3 space-y-2 text-sm text-navy-800">
              {profile.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="surface p-6">
            <h2 className="text-lg font-semibold text-navy-900">Certifications</h2>
            <ul className="mt-3 space-y-2 text-sm text-navy-800">
              {profile.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="surface p-6">
            <h2 className="text-lg font-semibold text-navy-900">Memberships</h2>
            <ul className="mt-3 space-y-2 text-sm text-navy-800">
              {profile.memberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
