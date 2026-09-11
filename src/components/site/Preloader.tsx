"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { isIntroDone, markIntroDone, onIntroDone } from "@/lib/intro";

gsap.registerPlugin(useGSAP);

const TICKS = 32;
// Fixed angles, not Math.random: the server and the client must render the
// same markup.
const angle = (i: number) => ((i * 67) % 150) - 75;

/** Longest step the count may take in one frame, in seconds. */
const MAX_STEP = 0.05;

/**
 * First visit per session: a counter runs while a line of ticks straightens
 * and lights up, noise into signal, then the overlay lifts off the page from
 * the bottom, revealing the hero name first.
 *
 * The timeline is paused and stepped by hand, never left to GSAP's clock.
 * LenisProvider sets lagSmoothing(0) so Lenis and GSAP share one clock, which
 * means a long frame advances every tween by the whole stall. Page load is
 * exactly when the main thread stalls (hydration, the field's shader compile),
 * and a free-running timeline jumped straight from 000 to lifted. Capping each
 * step makes a stall pause the count instead of skipping it.
 */
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const lenis = useLenis();

  // Hold the page still until the overlay starts to lift.
  useEffect(() => {
    if (!lenis || isIntroDone()) return;
    lenis.stop();
    const stop = onIntroDone(() => lenis.start());
    return () => {
      stop();
      lenis.start();
    };
  }, [lenis]);

  useGSAP(
    (_context, contextSafe) => {
      const el = ref.current;
      if (!el || !contextSafe) return;
      if (isIntroDone()) {
        el.hidden = true;
        return;
      }

      // Script is running: take over from the CSS no-JS fallback.
      el.style.animation = "none";

      const ticks = el.querySelectorAll<HTMLElement>(".sn-preloader-tick");
      const count = countRef.current;
      const counter = { value: 0 };

      const tl = gsap.timeline({ paused: true });
      tl.to(
        counter,
        {
          value: 100,
          duration: 1.6,
          ease: "power2.inOut",
          onUpdate: () => {
            if (count) count.textContent = String(Math.round(counter.value)).padStart(3, "0");
          },
        },
        0,
      )
        .to(
          ticks,
          {
            rotation: 0,
            scaleX: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: { each: 0.035, from: "random" },
          },
          0.15,
        )
        .to(
          ticks,
          { backgroundColor: "#d4ff3f", duration: 0.3, stagger: { each: 0.01, from: "center" } },
          1.35,
        );

      let disposed = false;
      let raf = 0;
      let last = 0;
      let started = 0;

      const lift = contextSafe(() => {
        markIntroDone();
        gsap.to(el, {
          clipPath: "inset(0% 0% 100% 0% round 0 0 1.75rem 1.75rem)",
          duration: 1,
          ease: "expo.inOut",
          onComplete: () => {
            el.hidden = true;
          },
        });
      });

      const step = (now: number) => {
        const dt = Math.min((now - last) / 1000, MAX_STEP);
        last = now;
        // A device too slow to draw the count in 4s gets the page instead.
        const next =
          now - started > 4000 ? tl.duration() : Math.min(tl.duration(), tl.time() + dt);
        tl.time(next);

        if (tl.progress() < 1) {
          raf = requestAnimationFrame(step);
          return;
        }

        // Hold on the last frame until the webfonts are in, or 1.5s at most:
        // lifting early would reveal the hero name in the fallback face.
        void Promise.race([
          document.fonts?.ready ?? Promise.resolve(),
          new Promise((resolve) => setTimeout(resolve, 1500)),
        ]).then(() => {
          if (!disposed) lift();
        });
      };

      raf = requestAnimationFrame((now) => {
        last = now;
        started = now;
        raf = requestAnimationFrame(step);
      });

      return () => {
        disposed = true;
        cancelAnimationFrame(raf);
      };
    },
    { scope: ref },
  );

  return (
    <div ref={ref} aria-hidden="true" className="sn-preloader sn-tone-dark">
      <div className="sn-preloader-line">
        {Array.from({ length: TICKS }, (_, i) => (
          <span
            key={i}
            className="sn-preloader-tick"
            style={{ transform: `rotate(${angle(i)}deg) scaleX(0.45)`, opacity: 0.35 }}
          />
        ))}
      </div>
      <div className="sn-gutter absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 pb-6 md:pb-8">
        <p className="sn-mono sn-muted">Portfolio · 2026</p>
        <span ref={countRef} className="sn-title leading-none tabular-nums">
          000
        </span>
      </div>
    </div>
  );
}
