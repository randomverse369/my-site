"use client";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The two tones a section can declare with `data-tone`. Values mirror the
 * contrast table in MASTER.md §1; change one, re-measure both.
 */
const TONES = {
  dark: {
    "--ground": "#0b0c0e",
    "--raised": "#15161a",
    "--fg": "#ece9e2",
    "--fg-muted": "#8e8b85",
    "--line": "rgba(236, 233, 226, 0.16)",
    "--line-strong": "rgba(236, 233, 226, 0.42)",
  },
  light: {
    "--ground": "#ece9e2",
    "--raised": "#e0dcd2",
    "--fg": "#0b0c0e",
    "--fg-muted": "#5e5b55",
    "--line": "rgba(11, 12, 14, 0.16)",
    "--line-strong": "rgba(11, 12, 14, 0.42)",
  },
} as const;

type Tone = keyof typeof TONES;

const toneOf = (el: Element | null | undefined): Tone =>
  el instanceof HTMLElement && el.dataset.tone === "light" ? "light" : "dark";

/**
 * Light and dark without a toggle. Whichever [data-tone] section holds the
 * middle of the viewport sets the tone for the whole document, header and
 * footer included; with none there, the page is dark. Re-scans on every
 * route change.
 */
export default function ToneController() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const root = document.documentElement;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let current: Tone | null = null;

      const apply = (tone: Tone, instant: boolean) => {
        if (tone === current) return;
        current = tone;
        if (instant || reduce) gsap.set(root, TONES[tone]);
        else gsap.to(root, { ...TONES[tone], duration: 0.7, ease: "power2.out", overwrite: true });
      };

      // Declared before any trigger exists: ScrollTrigger may fire onToggle
      // during create().
      const triggers: ScrollTrigger[] = [];
      const sync = () => apply(toneOf(triggers.filter((t) => t.isActive).pop()?.trigger), false);

      const sections = gsap.utils.toArray<HTMLElement>("[data-tone]");
      sections.forEach((section) => {
        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: "top 50%",
            end: "bottom 50%",
            onToggle: sync,
          }),
        );
      });

      // First paint of a page takes its tone at once, no crossfade.
      const mid = window.innerHeight / 2;
      const initial = sections.find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= mid && r.bottom >= mid;
      });
      apply(toneOf(initial), true);

      // Display type changes height when the webfonts land; every trigger
      // below the fold was measured against the fallback.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
