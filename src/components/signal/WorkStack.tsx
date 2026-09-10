"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NoiseCover from "./NoiseCover";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type WorkPanel = {
  id: string;
  title: string;
  href: string;
  category: string;
  meta: string;
  summary: string;
  image?: { src: string; alt: string };
  glyph?: string;
  ground?: string;
};

/**
 * Full-screen project panels that stack as you scroll: each one slides up over
 * the last, which sinks back and dims.
 *
 * The panels are CSS sticky. Scroll triggers never measure a sticky element,
 * because one measured while stuck reports the wrong position; they measure
 * the absolutely placed sentinels, which sit where each panel would be in flow
 * and never stick.
 */
export default function WorkStack({ panels }: { panels: WorkPanel[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const total = String(panels.length).padStart(2, "0");

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        panels.forEach((panel, i) => {
          const next = panels[i + 1];
          if (!next) return;

          const inner = root.querySelector(`[data-panel="${panel.id}"]`);
          const dim = inner?.querySelector(".sn-panel-dim");
          if (!inner || !dim) return;
          const covered = () => ({
            trigger: `#sentinel-${next.id}`,
            start: "top bottom",
            end: "top top",
            scrub: true,
          });

          gsap.to(inner, { scale: 0.92, ease: "none", scrollTrigger: covered() });
          gsap.to(dim, { opacity: 0.7, ease: "none", scrollTrigger: covered() });
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="relative">
      {panels.map((panel, i) => (
        <div
          key={panel.id}
          id={`sentinel-${panel.id}`}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 h-[100svh]"
          style={{ top: `${i * 100}svh` }}
        />
      ))}

      {panels.map((panel, i) => (
        <article
          key={panel.id}
          aria-labelledby={`${panel.id}-title`}
          className="sticky top-0 h-[100svh]"
        >
          <div
            data-panel={panel.id}
            className="sn-gutter relative flex h-full origin-top flex-col overflow-hidden rounded-t-[1.75rem] border-t sn-rule bg-[var(--ground)] pb-5 pt-5 md:pb-8 md:pt-7"
          >
            <p className="sn-mono flex items-center justify-between gap-6">
              <span>
                {String(i + 1).padStart(2, "0")} / {total}
              </span>
              <span className="sn-muted hidden md:block">{panel.category}</span>
              <span className="sn-muted text-right">{panel.meta}</span>
            </p>

            <div className="mt-6 grid grid-cols-12 items-end gap-x-6 gap-y-4 md:mt-10">
              <h3 id={`${panel.id}-title`} className="sn-title col-span-12 lg:col-span-8">
                {/* The pseudo-element makes the whole panel the target while the
                    link itself announces only the project name. */}
                <Link href={panel.href} data-cursor="View case" className="after:absolute after:inset-0 after:z-10">
                  {panel.title}
                </Link>
              </h3>
              <p className="sn-lead sn-muted col-span-12 max-w-[40ch] lg:col-span-4 lg:justify-self-end">
                {panel.summary}
              </p>
            </div>

            <NoiseCover
              seed={panel.id}
              image={panel.image}
              glyph={panel.glyph}
              ground={panel.ground}
              sizes="(min-width: 768px) 94vw, 100vw"
              trigger={`#sentinel-${panel.id}`}
              start="top 80%"
              end="top 5%"
              className="mt-6 min-h-[8rem] flex-1 rounded-[1.25rem] md:mt-10"
            >
              {!panel.image && (
                <p className="sn-mono absolute bottom-4 left-4 text-[#ece9e2]/70">
                  Generated cover. Screens to come.
                </p>
              )}
            </NoiseCover>

            <div
              aria-hidden="true"
              className="sn-panel-dim pointer-events-none absolute inset-0 z-20 bg-[var(--ink)] opacity-0"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
