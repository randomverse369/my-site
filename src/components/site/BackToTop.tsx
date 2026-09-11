"use client";

import { useLenis } from "lenis/react";

export default function BackToTop({ className = "" }: { className?: string }) {
  const lenis = useLenis();

  const onClick = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (lenis) lenis.scrollTo(0, { duration: 1.6, immediate: reduce });
    else window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    // Move focus with the view, so the next Tab starts from the top too.
    document.getElementById("main")?.focus({ preventScroll: true });
  };

  return (
    <button type="button" onClick={onClick} className={className}>
      Back to top <span aria-hidden="true">↑</span>
    </button>
  );
}
