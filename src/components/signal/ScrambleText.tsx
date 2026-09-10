"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, useGSAP);

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/+×";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  /** Wait until the label scrolls into view instead of running on load. */
  onScroll?: boolean;
};

/**
 * A mono label that arrives as noise and settles into its words. Screen
 * readers get the words at once from the visually hidden copy; the animated
 * copy is hidden from them so they never hear the scramble.
 */
export default function ScrambleText({ text, className = "", delay = 0, onScroll = false }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        el.textContent = "";
        gsap.to(el, {
          duration: Math.min(1.6, 0.5 + text.length * 0.04),
          delay,
          ease: "none",
          scrambleText: { text, chars: CHARS, speed: 0.6, revealDelay: 0.15 },
          scrollTrigger: onScroll ? { trigger: el, start: "top 92%", once: true } : undefined,
        });

        return () => {
          el.textContent = text;
        };
      });
    },
    { dependencies: [text, delay, onScroll] },
  );

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
