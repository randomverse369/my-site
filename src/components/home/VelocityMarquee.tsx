"use client";

import { useRef } from "react";
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
 */
export default function VelocityMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const loop = gsap.to(track, { xPercent: -50, ease: "none", duration: 36, repeat: -1 });
        // Start deep into the repeats so a reversed loop has room to run.
        loop.totalTime(loop.duration() * 50);

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
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} aria-label="Capabilities" className="overflow-hidden border-y sn-rule py-8 md:py-12">
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
    </section>
  );
}
