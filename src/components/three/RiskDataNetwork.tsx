"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { cn } from "@/lib/utils";
import { networkNodes } from "./RiskDataScene";

const RiskDataScene = dynamic(
  () => import("./RiskDataScene").then((m) => m.RiskDataScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center text-sm text-muted">
        Loading interactive network…
      </div>
    ),
  },
);

export function RiskDataNetwork() {
  const [exceptionMode, setExceptionMode] = useState(false);
  const [opsView, setOpsView] = useState(false);
  const [selectedId, setSelectedId] = useState(networkNodes[0].id);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const widthMq = window.matchMedia("(max-width: 768px)");
    const sync = () => {
      setReducedMotion(mq.matches);
      setMobile(widthMq.matches);
    };
    sync();
    mq.addEventListener("change", sync);
    widthMq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      widthMq.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const selected = useMemo(
    () => networkNodes.find((n) => n.id === selectedId) ?? networkNodes[0],
    [selectedId],
  );

  const responsibility = opsView
    ? "In operations: monitor exceptions, sustain reconciliations, protect cut-offs and hand issues to BAU owners."
    : "In implementation: define lineage, validation, readiness evidence and controlled cutover before support transition.";

  return (
    <section ref={sectionRef} className="section-space" aria-labelledby="risk-network-title">
      <div className="container-site">
        <SectionHeading
          eyebrow="Risk Data to Decision Network"
          title="A controlled path from source systems to corrective action"
          lead="Illustrative three-dimensional network of lineage, control points and decision flow. Essential information is also available in the HTML list below."
        />
        <EvidenceNote className="mt-6" title="Illustrative visualisation">
          <p>
            Conceptual and sanitised model only. Not an employer architecture diagram and not live risk data.
          </p>
        </EvidenceNote>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold",
              !exceptionMode ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white",
            )}
            aria-pressed={!exceptionMode}
            onClick={() => setExceptionMode(false)}
          >
            Normal flow
          </button>
          <button
            type="button"
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold",
              exceptionMode ? "border-coral bg-coral text-white" : "border-line bg-white",
            )}
            aria-pressed={exceptionMode}
            onClick={() => setExceptionMode(true)}
          >
            Exception flow
          </button>
          <button
            type="button"
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold",
              opsView ? "border-teal bg-teal text-white" : "border-line bg-white",
            )}
            aria-pressed={opsView}
            onClick={() => setOpsView((v) => !v)}
          >
            {opsView ? "Operational view" : "Implementation view"}
          </button>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="surface relative h-[22rem] overflow-hidden md:h-[28rem]">
            {reducedMotion || !inView ? (
              <ol className="grid h-full gap-2 overflow-y-auto p-5 text-sm">
                {networkNodes.map((node, index) => (
                  <li key={node.id} className="rounded-xl border border-line bg-white p-3">
                    <span className="font-semibold text-navy-900">
                      {index + 1}. {node.label}
                    </span>
                    <span className="mt-1 block text-muted">{node.role}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <RiskDataScene
                exceptionMode={exceptionMode}
                selectedId={selectedId}
                onSelect={setSelectedId}
                mobile={mobile}
              />
            )}
          </div>

          <div className="space-y-4">
            <div className="surface p-5" aria-live="polite">
              <p className="text-sm uppercase tracking-[0.12em] text-teal">Selected node</p>
              <h3 className="mt-2 text-xl font-semibold text-navy-900">{selected.label}</h3>
              <p className="mt-2 text-sm text-muted">{selected.role}</p>
              <p className="mt-4 text-sm text-navy-800">{responsibility}</p>
            </div>
            <nav aria-label="Network nodes" className="surface p-4">
              <ul className="space-y-2">
                {networkNodes.map((node) => (
                  <li key={node.id}>
                    <button
                      type="button"
                      className={cn(
                        "w-full rounded-xl px-3 py-2 text-left text-sm",
                        selectedId === node.id
                          ? "bg-navy-900 text-white"
                          : "bg-white text-navy-900 hover:bg-teal-soft",
                      )}
                      onClick={() => setSelectedId(node.id)}
                    >
                      <span className="font-semibold">{node.label}</span>
                      <span className="mt-0.5 block text-xs opacity-80">{node.role}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
