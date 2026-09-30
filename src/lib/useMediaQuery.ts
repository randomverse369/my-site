"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * A media query as reactive state.
 *
 * Components used to read `matchMedia(...).matches` once inside an effect,
 * which meant turning on Reduce Motion (or plugging in a mouse) left the page
 * behaving as it did at mount until a reload. Anything driven by
 * `gsap.matchMedia` already tracked changes; this gives the same to the effects
 * that do not go through GSAP.
 *
 * The server cannot know the client's preferences, so it renders the
 * `serverValue` and React corrects it on hydration. `false` is the right
 * default for a reduced-motion query: the still page arrives a frame late,
 * rather than the animated one arriving late for everyone else.
 */
export function useMediaQuery(query: string, serverValue = false) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
export const FINE_POINTER = "(pointer: fine)";
