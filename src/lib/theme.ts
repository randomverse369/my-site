export type Theme = "light" | "dark";

/** localStorage key. Absent means "no explicit choice — follow the OS". */
export const THEME_STORAGE_KEY = "theme";

export const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

/**
 * Runs blocking in <head>, before first paint, so a returning visitor never
 * sees a flash of the wrong theme.
 *
 * It writes `data-theme` only when a choice has actually been stored. With no
 * choice the attribute stays off and the `prefers-color-scheme` branch in
 * globals.css takes over — which means the OS setting is honoured even with
 * JavaScript disabled, and an OS change mid-session repaints with no JS at all.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})()`;

// React calls a store's snapshot getter on every render, so the MediaQueryList
// is made once rather than per call.
let schemeQuery: MediaQueryList | null = null;

/** The theme actually on screen right now: the stored choice, else the OS. */
export function resolveTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  schemeQuery ??= window.matchMedia(COLOR_SCHEME_QUERY);
  return schemeQuery.matches ? "dark" : "light";
}

/**
 * Fires on the window whenever this tab changes the theme. `storage` only
 * notifies *other* tabs, so without this the toggle that was just clicked
 * would be the one component that never heard about it.
 */
export const THEME_CHANGE_EVENT = "themechange";

/** Write an explicit choice: to the DOM now, to storage for the next visit. */
export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Private mode or blocked storage. The theme still applies to this page
    // view; it just will not be remembered. Not worth failing the click over.
  }
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

/**
 * Bring this tab in line with a choice another tab just made. Clearing the key
 * hands control back to `prefers-color-scheme`, so the attribute comes off.
 */
export function syncStoredTheme(value: string | null) {
  if (value === "light" || value === "dark") {
    document.documentElement.setAttribute("data-theme", value);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}
