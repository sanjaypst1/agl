"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { credibilityMetrics } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function CredibilityStrip() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !rootRef.current) return;

    const ctx = gsap.context(() => {
      rootRef.current
        ?.querySelectorAll<HTMLElement>("[data-count]")
        .forEach((el) => {
          const target = Number(el.dataset.count ?? "0");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.2,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val).toString();
            },
          });
        });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="section-space pt-0">
      <div className="container-site">
        <SectionHeading
          eyebrow="Immediate credibility"
          title="Verified evidence, each tied to its source"
          lead="These figures come from different engagements. They are not presented as the outcome of a single implementation."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {credibilityMetrics.map((metric) => (
            <Link
              key={metric.id}
              href={metric.href}
              className="surface block p-5 transition hover:border-teal"
            >
              <p className="text-3xl font-semibold tracking-tight text-navy-900">
                <span data-count={metric.value}>{metric.value}</span>
                {metric.suffix}
              </p>
              <p className="mt-2 font-medium text-navy-800">{metric.label}</p>
              <p className="mt-2 text-sm text-muted">{metric.note}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
