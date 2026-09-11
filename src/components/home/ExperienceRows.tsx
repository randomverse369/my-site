"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { experiences } from "@/lib/experience";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The home page's index of roles: years, company, title, nothing more. The
 * record itself lives on /experience, so every row goes there. Rows rise out
 * of their own clip as the list scrolls in.
 */
export default function ExperienceRows() {
  const ref = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".sn-row-inner", {
          yPercent: 100,
          duration: 1.1,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <ol ref={ref} className="border-b sn-rule">
      {experiences.map((exp) => (
        <li key={exp.id} className="sn-row border-t sn-rule">
          <Link
            href="/experience"
            data-cursor="Read"
            className="sn-row-inner grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-6 md:py-8"
          >
            <span className="sn-mono sn-muted col-span-12 md:col-span-2">{exp.year}</span>
            <span className="sn-row-company col-span-12 md:col-span-6">{exp.company}</span>
            <span className="sn-lead sn-muted col-span-10 md:col-span-3">{exp.role}</span>
            <span aria-hidden="true" className="sn-row-arrow col-span-2 justify-self-end md:col-span-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-7 md:size-9"
              >
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
