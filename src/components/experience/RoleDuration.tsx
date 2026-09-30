"use client";

import { useSyncExternalStore } from "react";
import {
  nowMonths,
  readableLength,
  timelineBar,
  type Experience,
} from "@/lib/experience";

// One clock for every bar on the page, rather than one interval each. An hour
// is far finer than a month boundary needs; it exists only so a tab left open
// across the turn of a month does not go stale.
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;
let current = 0;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  timer ??= setInterval(() => {
    const month = nowMonths();
    if (month === current) return;
    current = month;
    listeners.forEach((listener) => listener());
  }, 3_600_000);

  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

function getSnapshot() {
  current = nowMonths();
  return current;
}

/**
 * How long a role ran, and its share of the timeline.
 *
 * A client component because the current role's length is only true as of the
 * moment someone reads the page, while the page itself is prerendered once per
 * deploy. Left on the server, a site deployed and then left alone would still
 * claim the role had run however long it had run on build day.
 *
 * `buildMonth` comes from the server so the first hydrated render reproduces
 * the prerendered HTML exactly; React then re-renders with the real month, the
 * way LocalClock goes from "--:--" to the time.
 */
export default function RoleDuration({
  role,
  buildMonth,
}: {
  role: Experience;
  buildMonth: number;
}) {
  const now = useSyncExternalStore(subscribe, getSnapshot, () => buildMonth);
  const { offset, width } = timelineBar(role, now);

  return (
    <>
      <p className="sn-mono sn-muted mt-8">{readableLength(role, now)}</p>
      {/* The bar says the same thing as the line above it, so it carries no
          information of its own and stays out of the accessibility tree. */}
      <div aria-hidden="true" className="mt-3 h-[2px] w-full bg-line">
        <div
          className="h-[2px] bg-fg"
          style={{ marginInlineStart: `${offset}%`, width: `${width}%` }}
        />
      </div>
    </>
  );
}
