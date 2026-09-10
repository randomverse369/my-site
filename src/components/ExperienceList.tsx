"use client";

import { useState } from "react";
import { experiences } from "@/lib/experience";

/**
 * The home page's "Where I've worked" list. The Figma draws a + on every row;
 * that + expands the role here rather than linking away, so the affordance
 * matches what it does. /experience shows the same data in full.
 */
export default function ExperienceList() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {experiences.map((exp, index) => {
        const isOpen = openId === exp.id;
        const isLast = index === experiences.length - 1;

        return (
          <div key={exp.id} className={isLast ? "" : "border-b border-rule"}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : exp.id)}
              aria-expanded={isOpen}
              aria-controls={`role-${exp.id}`}
              className="group interactive flex w-full items-center gap-6 py-6 text-left"
            >
              <span className="flex-1 text-body-lg font-light text-foreground">
                {exp.company}
              </span>
              <span className="label text-metadata whitespace-nowrap">
                {exp.period}
              </span>
              <span
                aria-hidden="true"
                className={`flex size-10 shrink-0 items-center justify-center rounded-full text-metadata transition-transform duration-300 group-hover:text-foreground ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  className="size-7"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div id={`role-${exp.id}`} className="pb-8 pr-16">
                <p className="label text-metadata">{exp.role}</p>
                <p className="mt-3 max-w-2xl text-steel">{exp.context}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
