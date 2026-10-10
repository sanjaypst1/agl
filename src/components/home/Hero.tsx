"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="section-space relative overflow-hidden pt-14">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" aria-hidden />
      <div className="container-site relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <p data-hero-item className="eyebrow mb-4">
            Risk Technology | Data Products | Reporting Transformation
          </p>
          <h1
            data-hero-item
            className="display-title max-w-4xl text-4xl sm:text-5xl lg:text-[3.4rem]"
          >
            Turning fragmented risk data into controlled, decision-ready solutions.
          </h1>
          <p data-hero-item className="lead mt-6">
            I lead risk-sensitive technology, data and reporting initiatives from business problem
            and KPI definition through data validation, implementation, self-service adoption and
            operational support.
          </p>
          <div data-hero-item className="mt-8 flex flex-wrap gap-3">
            <Button href="/case-studies">Explore the reporting products</Button>
            <Button href="/delivery-method" variant="secondary">
              See how I deliver
            </Button>
            <Button href="/technology" variant="ghost">
              Review technology and domain depth
            </Button>
          </div>
        </div>
        <aside data-hero-item className="surface p-6 md:p-8" aria-label="Professional positioning">
          <p className="text-sm uppercase tracking-[0.12em] text-teal">{siteConfig.name}</p>
          <p className="mt-3 text-xl font-semibold text-navy-900">{profile.name}</p>
          <p className="mt-2 text-sm text-muted">{profile.headline}</p>
          <p className="mt-5 text-sm leading-relaxed text-navy-800">
            {profile.supportingPositioning}
          </p>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-t border-line pt-3">
              <dt className="text-muted">Location</dt>
              <dd className="font-medium">{profile.location}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-line pt-3">
              <dt className="text-muted">Residency</dt>
              <dd className="font-medium">{profile.residency}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
