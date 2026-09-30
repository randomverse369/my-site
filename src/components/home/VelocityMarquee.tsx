"use client";

import { useCallback, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const capabilities = [
  "Problem Solving",
  "User Research",
  "Competitor Analysis",
  "Design Systems",
  "AI Prototyping",
];

/**
 * The capabilities as a loop that answers the scroll: it speeds up with
 * scroll velocity, runs backwards when the page does, leans into the motion,
 * then settles. The track holds two copies so xPercent -50 loops without a
 * seam; the second copy is hidden from assistive tech.
 *
 * The loop starts by itself and never stops, which WCAG 2.2.2 says a reader
 * has to be able to stop. Reduced motion already suppresses it, but that is a
 * system setting, not the mechanism the criterion asks for, so the section
 * carries its own control. The button renders only once the loop exists:
 * under reduced motion there is nothing running to pause.
 */
export default function VelocityMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<gsap.core.Tween | null>(null);
  // onUpdate runs outside React, so it reads the ref, not the state.
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [running, setRunning] = useState(false);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const loop = gsap.to(track, { xPercent: -50, ease: "none", duration: 36, repeat: -1 });
        // Start deep into the repeats so a reversed loop has room to run.
        loop.totalTime(loop.duration() * 50);
        loopRef.current = loop;
        if (pausedRef.current) loop.pause();
        setRunning(true);

        const speed = { value: 1 };
        const setSpeed = gsap.quickTo(speed, "value", {
          duration: 0.6,
          ease: "power3.out",
          onUpdate: () => {
            loop.timeScale(speed.value);
          },
        });
        const setSkew = gsap.quickTo(track, "skewX", { duration: 0.5, ease: "power3.out" });
        let settle: gsap.core.Tween | undefined;

        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            // Paused means paused: scrolling must not drive it again.
            if (pausedRef.current) return;
            const velocity = self.getVelocity();
            setSpeed(self.direction * (1 + Math.min(Math.abs(velocity) / 250, 6)));
            setSkew(gsap.utils.clamp(-10, 10, velocity / -300));
            settle?.kill();
            settle = gsap.delayedCall(0.15, () => {
              setSpeed(self.direction);
              setSkew(0);
            });
          },
        });

        return () => {
          settle?.kill();
          loopRef.current = null;
          setRunning(false);
        };
      });
    },
    { scope: sectionRef },
  );

  const toggle = useCallback(() => {
    const next = !pausedRef.current;
    pausedRef.current = next;
    setPaused(next);
    const loop = loopRef.current;
    if (!loop) return;
    if (next) {
      loop.pause();
      // Settle the lean, so a paused marquee is not frozen mid-skew.
      gsap.to(trackRef.current, { skewX: 0, duration: 0.3, ease: "power3.out" });
    } else {
      loop.timeScale(1);
      loop.play();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Capabilities"
      className="overflow-hidden border-y sn-rule py-8 md:py-12"
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-center">
            {capabilities.map((item, i) => (
              <li key={item} className="flex items-center">
                <span className={`sn-marquee-word ${i % 2 ? "sn-outline" : ""}`}>{item}</span>
                <span aria-hidden="true" className="sn-marquee-tick" />
              </li>
            ))}
          </ul>
        ))}
      </div>

      {running && (
        <div className="sn-gutter mt-8 flex justify-end md:mt-10">
          <button type="button" onClick={toggle} className="sn-pill sn-mono">
            {paused ? "Play" : "Pause"}
            <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
            <span className="sr-only"> capabilities animation</span>
          </button>
        </div>
      )}
    </section>
  );
}
