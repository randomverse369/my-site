"use client";

import { useSyncExternalStore } from "react";
import {
  COLOR_SCHEME_QUERY,
  THEME_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  applyTheme,
  resolveTheme,
  syncStoredTheme,
  type Theme,
} from "@/lib/theme";

/**
 * The theme lives in the DOM (`data-theme` on <html>) and in localStorage, not
 * in React state — the blocking script in <head> has already set it before any
 * component mounts. So this subscribes to it as an external store, the same
 * way LenisProvider subscribes to prefers-reduced-motion, rather than keeping
 * a second copy that could drift.
 */
function subscribe(onChange: () => void) {
  const media = window.matchMedia(COLOR_SCHEME_QUERY);

  // Another tab picked a theme. Mirror it here so two open tabs never disagree.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;
    syncStoredTheme(event.newValue);
    onChange();
  };

  media.addEventListener("change", onChange);
  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_CHANGE_EVENT, onChange);

  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
  };
}

// The server cannot know which theme a visitor resolves to, so it renders the
// one label that is true either way. React hydrates against this snapshot and
// then re-renders with the real one — no mismatch, no wrong label.
const getServerSnapshot = () => null;

/**
 * Two states, not three. "Follow the system" is the state you start in — it is
 * what you get until you touch this — so it does not also need a stop on the
 * cycle. A third position on a 44px control in the nav is a puzzle rather than
 * an affordance.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore<Theme | null>(
    subscribe,
    resolveTheme,
    getServerSnapshot,
  );

  const toggle = () => {
    const next: Theme = resolveTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // Arm the crossfade, swap, disarm — so the global transition rule is never
    // standing on every element in the document while the page is in use.
    root.setAttribute("data-theme-transition", "");
    applyTheme(next);
    window.setTimeout(() => root.removeAttribute("data-theme-transition"), 300);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === null
          ? "Switch between light and dark theme"
          : `Switch to ${theme === "dark" ? "light" : "dark"} theme`
      }
      title="Toggle theme"
      // Border colour is deliberately not set here: the desktop control is
      // outlined to match Download Resume, the mobile one is bare to match the
      // menu button, and two border-colour utilities in one class string would
      // resolve by stylesheet order rather than by which was written last.
      className={`interactive inline-flex items-center justify-center rounded-sm text-metadata hover:text-foreground ${className}`}
    >
      {/*
        The glyphs are swapped in CSS off `data-theme`, not from `theme` above:
        that keeps the correct one in the very first paint, which is the whole
        point of setting the theme before React runs.
      */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-icon theme-icon--sun size-[18px]"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-icon theme-icon--moon size-[18px]"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
      </svg>
    </button>
  );
}
