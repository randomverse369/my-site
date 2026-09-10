"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Magnetic from "./Magnetic";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const titleLines = root.querySelectorAll<HTMLElement>(".hero-line");
      const desc = root.querySelector<HTMLElement>(".hero-desc");
      if (!titleLines.length || !desc) return;

      // Words and chars only, never "lines": SplitType measures line breaks
      // once, and it runs before the webfont settles — the display copy came
      // back stacked one word per line because each word had been frozen into
      // its own full-width line div. The <span>s below carry the real breaks.
      const splits = [...titleLines].map((line) => new SplitType(line, { types: "words,chars" }));
      const chars = splits.flatMap((split) => split.chars ?? []);
      const splitDesc = new SplitType(desc, { types: "words" });

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // fromTo, never set + to: if the timeline is reverted mid-flight the
        // inline styles are removed and the content is left visible.
        gsap
          .timeline({ delay: 0.3 })
          .fromTo(
            chars,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.015, duration: 0.9, ease: "power4.out" },
          )
          .fromTo(
            splitDesc.words,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.012, duration: 0.8, ease: "power3.out" },
            "-=0.55",
          )
          .fromTo(
            ".hero-fade",
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: "power2.out" },
            "-=0.5",
          );
      });

      // SplitType rewrites the DOM, and gsap.context() cannot undo that on its
      // own. Without revert(), a Strict Mode remount re-splits markup that is
      // already split and strands the characters mid-animation.
      return () => {
        splitDesc.revert();
        splits.forEach((split) => split.revert());
      };
    },
    { scope: containerRef },
  );

  return (
    <div className="relative z-10 container-page w-full" ref={containerRef}>
      <div className="max-w-[848px]">
        <h1 className="display text-d1 font-medium text-foreground mb-6">
          <span className="hero-line block">Hi I&apos;m Sachin.</span>
          <span className="hero-line block">Sr. Designer &amp; AI Enthusiast.</span>
        </h1>
        <p className="hero-desc text-lead text-metadata mb-12">
          Crafting experiences that cut through the noise and deliver real value
          to both businesses and users.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <Magnetic strength={0.2}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sachin_Barnwal_Resume.pdf"
              className="hero-fade label interactive inline-flex items-center rounded-sm border border-rule-strong px-[17px] py-[13px] font-medium text-metadata hover:border-foreground hover:text-foreground"
            >
              Download Resume
            </a>
          </Magnetic>
          <span className="hero-fade label font-medium tracking-[0.16em] text-metadata">
            7+ Years Of Experience
          </span>
        </div>
      </div>
    </div>
  );
}
