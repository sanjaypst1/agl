"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { interviewQuestionTags, interviewQuestions } from "@/content/interview-questions";
import { getCaseStudiesByIds } from "@/content/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function InterviewExplorer() {
  const [tag, setTag] = useState<string>("All");

  const filtered = useMemo(() => {
    if (tag === "All") return interviewQuestions;
    return interviewQuestions.filter((q) => q.tags.includes(tag));
  }, [tag]);

  return (
    <section className="section-space" aria-labelledby="interview-explorer-title">
      <div className="container-site">
        <SectionHeading
          eyebrow="Questions this experience answers"
          title="Explore evidence mapped to the questions senior interviewers typically ask"
          lead="Filters organise topics. Answers stay within verified CV evidence and clearly labelled candidate clarifications."
        />

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Question topic filters">
          <button
            type="button"
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm font-semibold",
              tag === "All" ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white",
            )}
            aria-pressed={tag === "All"}
            onClick={() => setTag("All")}
          >
            All
          </button>
          {interviewQuestionTags.map((item) => (
            <button
              key={item}
              type="button"
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm font-semibold",
                tag === item ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white",
              )}
              aria-pressed={tag === item}
              onClick={() => setTag(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <ul className="mt-8 space-y-4">
          {filtered.map((question) => {
            const studies = getCaseStudiesByIds(question.caseStudyIds);
            return (
              <li key={question.id} className="surface p-5 md:p-6">
                <h3 className="text-lg font-semibold text-navy-900">{question.question}</h3>
                <p className="mt-3 text-sm text-navy-800">{question.evidenceSummary}</p>
                <p className="mt-2 text-sm text-muted">{question.experienceNote}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {question.tags.map((t) => (
                    <span key={t} className="badge badge-sanitised">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {studies.map((study) => (
                    <Link
                      key={study.id}
                      href={`/case-studies/${study.slug}`}
                      className="font-semibold text-teal hover:text-navy-900"
                    >
                      {study.organisation} case study →
                    </Link>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
