import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { confidentialityStatement } from "@/content/site";

export function FinalCta() {
  return (
    <section className="section-space pb-20">
      <div className="container-site">
        <div className="overflow-hidden rounded-[var(--radius)] border border-line bg-[linear-gradient(120deg,rgba(217,242,255,0.95),rgba(168,230,207,0.45))] p-8 md:p-12">
          <p className="eyebrow">Next conversation</p>
          <h2 className="display-title mt-3 max-w-[28ch] text-[clamp(1.5rem,2.5vw,2.4rem)]">
            Risk solutions succeed when business meaning, trusted data and disciplined
            implementation come together.
          </h2>
          <p className="lead mt-4 max-w-2xl">{profile.boundaryStatement}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Discuss a risk transformation challenge</Button>
            <Button href="/evidence" variant="secondary">
              Review evidence boundaries
            </Button>
          </div>
        </div>
        <EvidenceNote className="mt-6" title="Evidence and confidentiality">
          <p>{confidentialityStatement}</p>
        </EvidenceNote>
      </div>
    </section>
  );
}
