"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sourceToDecisionFlow } from "@/content/delivery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function SourceToDecision() {
  const [active, setActive] = useState<string>(sourceToDecisionFlow[0].id);
  const rootRef = useRef<HTMLElement>(null);
  const current =
    sourceToDecisionFlow.find((item) => item.id === active) ?? sourceToDecisionFlow[0];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-flow-node]", {
        opacity: 0,
        y: 16,
        stagger: 0.05,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="section-space">
      <div className="container-site">
        <SectionHeading
          eyebrow="Risk data to decision"
          title="From authoritative sources to corrective action"
          lead="A conceptual and sanitised model of how trusted reporting supports governance decisions."
        />
        <div className="mt-10 overflow-x-auto pb-2">
          <ol className="flex min-w-max gap-3 md:min-w-0 md:flex-wrap">
            {sourceToDecisionFlow.map((item, index) => (
              <li key={item.id} data-flow-node className="flex items-center gap-3">
                <button
                  type="button"
                  className={cn(
                    "rounded-2xl border px-4 py-3 text-left transition",
                    active === item.id
                      ? "border-teal bg-teal-soft text-navy-900"
                      : "border-line bg-white hover:border-aqua",
                  )}
                  aria-pressed={active === item.id}
                  onClick={() => setActive(item.id)}
                >
                  <span className="block text-xs text-muted">{index + 1}</span>
                  <span className="mt-1 block max-w-[10rem] text-sm font-semibold">
                    {item.label}
                  </span>
                </button>
                {index < sourceToDecisionFlow.length - 1 ? (
                  <span className="hidden text-aqua md:inline" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
        <div className="surface mt-6 p-6">
          <h3 className="text-xl font-semibold text-navy-900">{current.label}</h3>
          <p className="mt-2 text-muted">{current.detail}</p>
        </div>
        <EvidenceNote className="mt-6" title="Conceptual model">
          This flow is a sanitised illustration of delivery method. It is not an employer system
          diagram and does not represent proprietary architecture.
        </EvidenceNote>
      </div>
    </section>
  );
}
