"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FINE_POINTER, REDUCED_MOTION, useMediaQuery } from "@/lib/useMediaQuery";

/**
 * A ring that trails the native pointer and opens into a label over anything
 * marked `data-cursor="…"`. The native cursor stays visible. Mouse and
 * trackpad only, and off for anyone who asked for less motion.
 */
export default function SignalCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  // Watched rather than read once: turning on Reduce Motion used to leave the
  // ring trailing the pointer until the next reload.
  const finePointer = useMediaQuery(FINE_POINTER);
  const reduceMotion = useMediaQuery(REDUCED_MOTION);
  const enabled = finePointer && !reduceMotion;

  useEffect(() => {
    const el = ref.current;
    const labelEl = labelRef.current;
    if (!el || !labelEl || !enabled) return;

    el.hidden = false;
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });
    let placed = false;
    let active: string | null = null;

    const onMove = (event: PointerEvent) => {
      if (!placed) {
        gsap.set(el, { x: event.clientX, y: event.clientY });
        placed = true;
      }
      xTo(event.clientX);
      yTo(event.clientY);

      const target = event.target instanceof Element ? event.target.closest("[data-cursor]") : null;
      const label = target?.getAttribute("data-cursor") ?? null;
      if (label) labelEl.textContent = label;
      if (label !== active || el.dataset.state === "hidden") {
        active = label;
        el.dataset.state = label ? "label" : "idle";
      }
    };
    const onLeave = () => {
      el.dataset.state = "hidden";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      el.dataset.state = "hidden";
      el.hidden = true;
    };
  }, [enabled]);

  return (
    <div ref={ref} aria-hidden="true" hidden data-state="hidden" className="sn-cursor">
      <span ref={labelRef} className="sn-cursor-label sn-mono" />
    </div>
  );
}
