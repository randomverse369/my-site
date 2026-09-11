"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect, useMemo, useSyncExternalStore } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollTrigger reads scroll position from the native scroller, but Lenis
 * animates it on its own RAF loop. Without this bridge every trigger fires
 * against a stale position and scroll reveals stall part-way through.
 */
function ScrollTriggerBridge() {
  const lenis = useLenis();

  // Development only: lets headless verification read trigger positions
  // (see MASTER.md §8). Never shipped to production builds.
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      Object.assign(window, { __ScrollTrigger: ScrollTrigger });
    }
  }, []);

  useEffect(() => {
    if (!lenis) return;

    // Drive Lenis from GSAP's ticker so both run on one clock.
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [lenis]);

  useLenis(() => ScrollTrigger.update());

  return null;
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false, // server render: assume motion is fine, correct on hydration
  );
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  // Keep ReactLenis mounted either way. Swapping the provider out on the
  // reduced-motion branch would remount the whole tree and re-run every
  // entrance animation below it.
  const options = useMemo(
    () => ({
      lerp: 0.1,
      autoRaf: false,
      smoothWheel: !reducedMotion,
      syncTouch: !reducedMotion,
    }),
    [reducedMotion],
  );

  return (
    <ReactLenis root options={options}>
      <ScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}
