"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { onIntroDone } from "@/lib/intro";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

type Props = {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
  delay?: number;
  /** Reveal when scrolled into view; false runs it on load. */
  onScroll?: boolean;
  /** Hold until the preloader lifts, for copy that sits under it. */
  waitForIntro?: boolean;
};

/**
 * Masked line reveal. autoSplit re-measures the lines once the webfonts land
 * and on resize; the split-type version this replaced froze the line breaks it
 * measured against the fallback font and stacked the hero one word per line.
 */
export default function SplitReveal({
  as: Tag = "div",
  id,
  className,
  children,
  delay = 0,
  onScroll = true,
  waitForIntro = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        let stopWaiting = () => {};
        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "sn-line",
          autoSplit: true,
          onSplit: (self) => {
            const tween = gsap.from(self.lines, {
              yPercent: 115,
              duration: 1.2,
              ease: "expo.out",
              stagger: 0.08,
              delay,
              paused: waitForIntro,
              scrollTrigger: onScroll ? { trigger: el, start: "top 88%", once: true } : undefined,
            });
            if (waitForIntro) {
              stopWaiting();
              stopWaiting = onIntroDone(() => tween.play());
            }
            return tween;
          },
        });

        return () => {
          stopWaiting();
          split.revert();
        };
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
