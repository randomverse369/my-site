/**
 * The preloader plays once per browser session.
 *
 * `data-intro` on <html> carries the state:
 *   "skip" — set before first paint by INTRO_INIT_SCRIPT on a return visit or
 *            for reduced motion, so the overlay never flashes;
 *   "done" — set by the preloader as it starts to lift.
 * Anything choreographed with the intro (the hero name, the noise field)
 * waits on onIntroDone().
 */
export const INTRO_SESSION_KEY = "sn-intro-seen";
export const INTRO_DONE_EVENT = "sn:intro-done";

export const INTRO_INIT_SCRIPT = `(function(){var d=document.documentElement;try{if(sessionStorage.getItem(${JSON.stringify(
  INTRO_SESSION_KEY,
)})||matchMedia("(prefers-reduced-motion: reduce)").matches){d.setAttribute("data-intro","skip")}}catch(e){d.setAttribute("data-intro","skip")}})()`;

export function isIntroDone() {
  const state = document.documentElement.getAttribute("data-intro");
  return state === "skip" || state === "done";
}

export function markIntroDone() {
  document.documentElement.setAttribute("data-intro", "done");
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, "1");
  } catch {
    // Blocked storage: the intro simply plays again next load.
  }
  window.dispatchEvent(new Event(INTRO_DONE_EVENT));
}

/** Runs now if the intro is over, otherwise when it ends. Returns an unsubscribe. */
export function onIntroDone(callback: () => void) {
  if (isIntroDone()) {
    callback();
    return () => {};
  }
  window.addEventListener(INTRO_DONE_EVENT, callback, { once: true });
  return () => window.removeEventListener(INTRO_DONE_EVENT, callback);
}
