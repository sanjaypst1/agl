"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { credibilityMetrics, profile } from "@/content/profile";
import { siteConfig } from "@/content/site";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        y: 16,
        opacity: 0,
        duration: 0.65,
        stagger: 0.07,
        ease: "power2.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[min(92vh,54rem)] items-center overflow-hidden py-10 md:py-16"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden />
      <div className="container-site relative z-[1]">
        <p data-hero-item className="hero-kicker">
          Melbourne-based risk solutions leader focused on decision-ready reporting.
        </p>
        <p data-hero-item className="eyebrow mb-3">
          {profile.name}
        </p>
        <h1
          id="hero-title"
          data-hero-item
          className="display-title max-w-[16ch] text-[clamp(2.05rem,4.6vw,4.1rem)]"
        >
          {siteConfig.tagline}
        </h1>
        <p data-hero-item className="lead mt-4 max-w-[46rem]">
          {profile.headline}
        </p>
        <p data-hero-item className="lead mt-3 max-w-[46rem]">
          I lead risk-sensitive technology, data and reporting initiatives from business problem
          and KPI definition through data validation, implementation, self-service adoption and
          operational support.
        </p>
        <div data-hero-item className="mt-7 mb-8 flex flex-wrap gap-3">
          <Button href="/#discussion-ready">
            Explore my discussion-ready products
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button href="/plan" variant="secondary">
            View my 30-60-90 day plan
          </Button>
        </div>
        <ul className="mt-2 grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2">
          {credibilityMetrics.slice(0, 4).map((item) => (
            <li key={item.id} data-hero-item className="chip">
              <strong className="font-semibold text-navy-900">
                {item.value}
                {item.suffix}
              </strong>{" "}
              <span className="text-muted">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
