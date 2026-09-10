"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The two tones a section can declare with `data-tone`. Values mirror the
 * contrast table at the top of lab.css; change one, re-measure both.
 */
const TONES = {
  dark: {
    "--ground": "#0b0c0e",
    "--fg": "#ece9e2",
    "--fg-muted": "#8e8b85",
    "--line": "rgba(236, 233, 226, 0.16)",
    "--line-strong": "rgba(236, 233, 226, 0.42)",
  },
  light: {
    "--ground": "#ece9e2",
    "--fg": "#0b0c0e",
    "--fg-muted": "#5e5b55",
    "--line": "rgba(11, 12, 14, 0.16)",
    "--line-strong": "rgba(11, 12, 14, 0.42)",
  },
} as const;

type Tone = keyof typeof TONES;

/**
 * Light and dark without a toggle: whichever section holds the middle of the
 * viewport sets the ground, and the page crossfades to it.
 */
export default function ToneScope({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let current: Tone | null = null;

      const setTone = (tone: Tone) => {
        if (tone === current) return;
        current = tone;
        gsap.to(root, {
          ...TONES[tone],
          duration: reduce ? 0 : 0.7,
          ease: "power2.out",
          overwrite: true,
        });
      };

      gsap.utils.toArray<HTMLElement>("[data-tone]", root).forEach((section) => {
        const tone: Tone = section.dataset.tone === "light" ? "light" : "dark";
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) setTone(tone);
          },
        });
      });

      // Display type changes height when the webfonts land; every trigger
      // below the fold was measured against the fallback.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`signal ${className}`}>
      {children}
      <div aria-hidden="true" className="sn-grain" />
    </div>
  );
}
