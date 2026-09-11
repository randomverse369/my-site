"use client";

import { ViewTransition, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Keyed by path, so a navigation reads to React as one page exiting and
 * another entering rather than one page updating in place. An update would
 * morph the boundary from the old page's scroll position and height to the
 * new page's, which sweeps the whole snapshot across the screen.
 * The animations themselves are in globals.css under "Page transitions".
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <ViewTransition key={pathname} enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
