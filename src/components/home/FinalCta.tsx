import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { confidentialityStatement } from "@/content/site";

export function FinalCta() {
  return (
    <section className="section-space pb-20">
      <div className="container-site">
        <div className="surface overflow-hidden bg-navy-900 p-8 text-white md:p-12">
          <p className="text-sm uppercase tracking-[0.14em] text-aqua">Next conversation</p>
          <h2 className="mt-4 max-w-3xl display-title text-3xl text-white md:text-4xl">
            Risk solutions succeed when business meaning, trusted data and disciplined
            implementation come together.
          </h2>
          <p className="mt-4 max-w-2xl text-white/75">
            {profile.boundaryStatement}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" className="bg-white text-navy-900 hover:bg-paper">
              Discuss a risk transformation challenge
            </Button>
            <Button href="/evidence" variant="secondary" className="border-white/20 bg-transparent text-white hover:bg-white/10">
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
