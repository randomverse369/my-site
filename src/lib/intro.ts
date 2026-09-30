/**
 * The preloader plays once per browser session.
 *
 * `data-intro` on <html> carries the state, all of it set before first paint
 * by INTRO_INIT_SCRIPT or by the preloader itself:
 *   "skip"    — a return visit, or reduced motion, so the overlay never flashes;
 *   "playing" — the overlay is up. globals.css locks scrolling on this, because
 *               a fixed overlay stops clicks but not a wheel or a trackpad;
 *   "done"    — set by the preloader as it starts to lift.
 * Anything choreographed with the intro (the hero name, the noise field)
 * waits on onIntroDone().
 */
export const INTRO_SESSION_KEY = "sn-intro-seen";
export const INTRO_DONE_EVENT = "sn:intro-done";

/**
 * Blocking, inline, ahead of everything else. It decides whether the intro
 * plays before the first paint, so a return visit never flashes the overlay
 * and a first visit is scroll-locked from the very first frame rather than
 * from whenever React and Lenis get going.
 *
 * The timeout is the safety net: it clears "playing" after 5s, one second
 * after the CSS fallback hides the overlay, so a bundle that never hydrates
 * leaves a readable page instead of a permanently locked one.
 */
export const INTRO_INIT_SCRIPT = `(function(){var d=document.documentElement;var s=false;try{s=!!sessionStorage.getItem(${JSON.stringify(
  INTRO_SESSION_KEY,
)})||matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){s=true}d.setAttribute("data-intro",s?"skip":"playing");if(!s){setTimeout(function(){if(d.getAttribute("data-intro")==="playing"){d.removeAttribute("data-intro")}},5000)}})()`;

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
