"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrambleText from "@/components/signal/ScrambleText";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Condensed from the six stages on /works/ux-process, in that page's own words
// where they fit. Change the process there first.
const stages = [
  {
    name: "Gaps",
    title: "Catch the gaps before a design tool opens",
    body: "I run the requirement through Rovo first. It flags the missing flows and unstated edge cases I used to find in design reviews.",
  },
  {
    name: "Structure",
    title: "Structure the screens before designing them",
    body: "An AI pass breaks the requirement into screens: what each holds and how it connects to the next. I don't make structural and visual decisions in the same sitting.",
  },
  {
    name: "Prototype",
    title: "A working prototype, same day",
    body: "Figma Make turns the structure into something clickable. Product, engineering and business walk the same flow in one meeting, before I open Figma.",
  },
  {
    name: "Copy",
    title: "Copy that sounds like the brand",
    body: "UX copy comes from an AI project loaded with the brand guidelines and product docs. I check it. I don't rewrite it.",
  },
  {
    name: "System",
    title: "Hand the design system to Codex",
    body: "The system lives as structured variables. Codex drafts new screens from it, and I review and adjust instead of starting from a blank canvas.",
  },
  {
    name: "Research",
    title: "Run research alongside",
    body: "AI pulls research and stress-tests my assumptions, and generates variations so I choose between options instead of defending my first idea.",
  },
];

const TICKS = 36;
// Fixed angles, not Math.random: the server and the client must render the
// same markup.
const angle = (i: number) => ((i * 53) % 150) - 75;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The six stages on one sideways track. On wider screens the section pins and
 * vertical scroll drives the track, while a line of ticks across the top
 * straightens and lights up: a requirement resolving into a prototype. Phones
 * and reduced motion get the same content as a plain stacked list.
 *
 * The section is the scroll trigger and is never sticky itself; only its
 * inner viewport sticks. See WorkStack for why that matters.
 */
export default function ProcessTrack() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const viewport = track?.parentElement;
      if (!section || !track || !viewport) return;

      gsap.matchMedia().add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        section.dataset.pinned = "true";

        // How far the track travels: until the last card meets the right gutter.
        const distance = () => {
          const style = getComputedStyle(viewport);
          const visible =
            viewport.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
          return Math.max(0, track.scrollWidth - visible);
        };
        // One pixel of vertical scroll per pixel of travel, plus a screen to settle.
        const setHeight = () => {
          section.style.height = `${distance() + window.innerHeight}px`;
        };
        setHeight();

        let shown = 1;
        const ticks = section.querySelectorAll<HTMLElement>(".sn-process-tick");
        const each = 0.85 / TICKS;

        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
              onRefreshInit: setHeight,
              onUpdate: (self) => {
                const stage = Math.min(stages.length, Math.max(1, Math.ceil(self.progress * stages.length)));
                if (stage !== shown && countRef.current) {
                  shown = stage;
                  countRef.current.textContent = pad(stage);
                }
              },
            },
          })
          .to(track, { x: () => -distance(), duration: 1 }, 0)
          .to(ticks, { rotation: 0, scaleX: 1, opacity: 1, duration: 0.12, stagger: { each } }, 0)
          .to(ticks, { backgroundColor: "#d4ff3f", duration: 0.04, stagger: { each } }, 0.1);

        return () => {
          delete section.dataset.pinned;
          section.style.height = "";
        };
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      data-tone="dark"
      aria-labelledby="process-heading"
      className="sn-process relative"
    >
      <div className="sn-process-viewport sn-gutter">
        <div className="flex items-center justify-between gap-8">
          <ScrambleText onScroll className="sn-mono sn-muted shrink-0" text="(03) Process" />
          <div aria-hidden="true" className="sn-process-ticks">
            {Array.from({ length: TICKS }, (_, i) => (
              <span
                key={i}
                className="sn-process-tick"
                style={{ transform: `rotate(${angle(i)}deg) scaleX(0.5)` }}
              />
            ))}
          </div>
          <span aria-hidden="true" className="sn-process-count sn-mono sn-muted shrink-0 tabular-nums">
            <span ref={countRef}>01</span> / {pad(stages.length)}
          </span>
        </div>

        <div ref={trackRef} className="sn-process-track">
          <div className="sn-process-intro">
            <h2 id="process-heading" className="sn-display">
              Validate first, build <em className="sn-serif">once</em>.
            </h2>
            <p className="sn-lead sn-muted mt-8 max-w-[32ch]">
              A requirement becomes a walkable prototype in a day, and the team agrees on the product
              before I draw a screen.
            </p>
            <Link href="/works/ux-process" data-cursor="Read" className="sn-mono sn-link mt-10 self-start">
              Read the process <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ol>
            {stages.map((stage, i) => (
              <li key={stage.name} className="sn-process-card">
                <p className="sn-mono sn-muted">
                  Stage {pad(i + 1)} · {stage.name}
                </p>
                <p aria-hidden="true" className="sn-process-num">
                  {pad(i + 1)}
                </p>
                <div>
                  <h3 className="sn-process-title">{stage.title}</h3>
                  <p className="sn-lead sn-muted mt-4">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
