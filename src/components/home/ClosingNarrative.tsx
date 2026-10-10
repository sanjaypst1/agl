import { closingNarrative } from "@/content/profile";
import { confidentialityStatement } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { Button } from "@/components/ui/Button";

export function ClosingNarrative() {
  return (
    <section className="section-space pt-0">
      <div className="container-site space-y-6">
        <SectionHeading
          eyebrow="Closing narrative"
          title="The domain changes. The delivery discipline does not."
        />
        <div className="surface p-6 md:p-8">
          <p className="text-lg text-navy-900">{closingNarrative.pattern}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
            {closingNarrative.products.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-muted">{closingNarrative.synthesis}</p>
          <p className="mt-4 text-muted">{closingNarrative.disciplines}</p>
          <p className="mt-4 font-medium text-navy-900">{closingNarrative.transfer}</p>
        </div>
        <EvidenceNote title="Evidence and confidentiality">
          {confidentialityStatement}
        </EvidenceNote>
        <div className="overflow-hidden rounded-[var(--radius)] border border-line bg-[linear-gradient(120deg,rgba(217,242,255,0.95),rgba(168,230,207,0.45))] px-6 py-10 md:px-10">
          <h2 className="display-title max-w-[28ch] text-[clamp(1.5rem,2.5vw,2.2rem)]">
            Risk solutions succeed when business meaning, trusted data and disciplined
            implementation come together.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Discuss a risk reporting challenge</Button>
            <Button href="/walkthrough" variant="secondary">
              Open executive walkthrough
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
