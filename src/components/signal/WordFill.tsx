"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * A statement whose words fill in from muted to full as it scrolls through.
 *
 * The fill runs on --fill, read by .sn-fill-word, not on opacity: a word at
 * opacity 0.14 measured 1.38:1 against the ground, so a reader who stopped
 * mid-scroll was left with an unreadable line. Filling between the two tone
 * tokens keeps every word at 5.6:1 or better in both tones, and keeps the
 * words on the tokens so a tone change still moves them.
 *
 * aria: "none" stops SplitText labelling the element: it writes aria-label,
 * which ARIA prohibits on <p> and <blockquote>, and hides every word, so an
 * AT that honours the prohibition would find the statement empty. Left alone,
 * the split words are still real text in the DOM and read normally.
 */
export default function WordFill({ as: Tag = "p", className, children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(el, {
          type: "words",
          aria: "none",
          wordsClass: "sn-fill-word",
        });
        gsap.fromTo(
          split.words,
          { "--fill": 0 },
          {
            "--fill": 1,
            ease: "none",
            stagger: 0.12,
            scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 42%", scrub: 0.5 },
          },
        );

        return () => split.revert();
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
