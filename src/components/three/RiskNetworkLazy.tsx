"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EvidenceNote } from "@/components/ui/EvidenceNote";
import { RiskNetworkFallback } from "./RiskNetworkFallback";

const RiskNetworkScene = dynamic(
  () => import("./RiskNetworkScene").then((mod) => mod.RiskNetworkScene),
  {
    ssr: false,
    loading: () => (
      <div className="surface grid h-[420px] place-items-center text-sm text-muted">
        Loading Risk Data to Decision Network…
      </div>
    ),
  },
);

export function RiskNetworkLazy() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 768px)");
    const sync = () => {
      setReducedMotion(motion.matches);
      setIsMobile(mobile.matches);
    };
    sync();
    motion.addEventListener("change", sync);
    mobile.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      mobile.removeEventListener("change", sync);
    };
  }, []);

  return (
    <section className="section-space section-muted">
      <div className="container-site">
        <SectionHeading
          eyebrow="Risk Data to Decision Network"
          title="A controlled view of lineage, dependencies and exception pathways"
          lead="Interactive illustration of how Sanjay coordinates information flow from sources to decisions and operational support."
        />
        <div className="mt-10">
          {reducedMotion ? (
            <RiskNetworkFallback />
          ) : (
            <RiskNetworkScene compact={isMobile} />
          )}
        </div>
        <div className="mt-6">
          <RiskNetworkFallback />
        </div>
        <EvidenceNote className="mt-6" title="Illustrative visualisation">
          The network is conceptual and sanitised. No essential information is available only inside
          the WebGL canvas. Reduced-motion preferences replace the scene with the HTML summary.
        </EvidenceNote>
      </div>
    </section>
  );
}
