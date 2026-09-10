"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

type Props = {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
  /** Reveal when scrolled into view; false runs it on load. */
  onScroll?: boolean;
};

/**
 * Masked line reveal. autoSplit re-measures the lines once the webfonts land
 * and on resize, which is the failure split-type had in HeroSection: it froze
 * the line breaks it measured against the fallback font.
 */
export default function SplitReveal({
  as: Tag = "div",
  id,
  className,
  children,
  delay = 0,
  onScroll = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "sn-line",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 115,
              duration: 1.2,
              ease: "expo.out",
              stagger: 0.08,
              delay,
              scrollTrigger: onScroll ? { trigger: el, start: "top 88%", once: true } : undefined,
            }),
        });

        return () => split.revert();
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
