"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NoiseCover from "@/components/signal/NoiseCover";
import { onIntroDone } from "@/lib/intro";

gsap.registerPlugin(useGSAP);

export type WorksItem = {
  id: string;
  number: string;
  title: string;
  href: string;
  category: string;
  body: string;
  meta: string;
  draft: boolean;
  tags: string[];
  image?: { src: string; alt: string };
  ground?: string;
};

const FILTERS = [
  { id: "all", label: "All", test: () => true },
  { id: "ai", label: "AI", test: (tags: string[]) => tags.includes("AI") },
  { id: "fintech", label: "Fintech", test: (tags: string[]) => tags.includes("Fintech") },
  { id: "research", label: "Research", test: (tags: string[]) => tags.includes("UX Research") },
  {
    id: "saas",
    label: "SaaS & Enterprise",
    test: (tags: string[]) => tags.some((tag) => ["SaaS", "B2B", "Enterprise"].includes(tag)),
  },
  {
    id: "systems",
    label: "Process & Systems",
    test: (tags: string[]) => tags.some((tag) => ["Process", "Design System"].includes(tag)),
  },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The /works index: every project as a row, two sentences each, filterable.
 * On a desktop pointer the hovered project's cover follows the cursor.
 */
export default function WorksIndex({ items }: { items: WorksItem[] }) {
  const [filter, setFilter] = useState<FilterId>("all");
  const [hovered, setHovered] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const active = FILTERS.find((f) => f.id === filter) ?? FILTERS[0];
  const counts = useMemo(
    () =>
      Object.fromEntries(FILTERS.map((f) => [f.id, items.filter((item) => f.test(item.tags)).length])) as Record<
        FilterId,
        number
      >,
    [items],
  );

  // Rows rise out of their clip on arrival and whenever the filter changes.
  // Built paused and played by the intro, never created from a contextSafe
  // callback: see Hero.tsx for the context recursion that caused.
  useGSAP(
    () => {
      const list = listRef.current;
      if (!list) return;

      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const rows = list.querySelectorAll("li:not([hidden]) .sn-row-inner");
        gsap.set(rows, { yPercent: 100 });
        const rise = gsap.to(rows, {
          yPercent: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.06,
          paused: true,
        });
        return onIntroDone(() => rise.play());
      });
    },
    { dependencies: [filter], scope: listRef, revertOnUpdate: true },
  );

  // The preview trails the pointer.
  useGSAP(() => {
    const preview = previewRef.current;
    if (!preview) return;

    gsap
      .matchMedia()
      .add("(pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const xTo = gsap.quickTo(preview, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(preview, "y", { duration: 0.6, ease: "power3.out" });
        let placed = false;
        const onMove = (event: PointerEvent) => {
          if (!placed) {
            gsap.set(preview, { x: event.clientX, y: event.clientY });
            placed = true;
          }
          xTo(event.clientX);
          yTo(event.clientY);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
      });
  }, []);

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => {
              setFilter(f.id);
              // The hovered row may be one the filter just hid; the pointer
              // has not moved, so no leave event will clear it.
              setHovered(null);
            }}
            className="sn-pill sn-mono aria-pressed:border-fg aria-pressed:bg-fg aria-pressed:text-ground"
          >
            {f.label} <span className="tabular-nums opacity-60">{pad(counts[f.id])}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {counts[filter]} projects shown
      </p>

      <ul ref={listRef} className="mt-10 border-b sn-rule" onPointerLeave={() => setHovered(null)}>
        {items.map((item) => (
          <li key={item.id} hidden={!active.test(item.tags)} className="sn-row border-t sn-rule">
            <Link
              href={item.href}
              onPointerEnter={() => setHovered(item.id)}
              className="sn-row-inner grid grid-cols-12 items-baseline gap-x-6 gap-y-4 py-8 md:py-10"
            >
              <span className="sn-mono sn-muted col-span-2 md:col-span-1">{item.number}</span>
              <span className="sn-row-company col-span-10 md:col-span-6">{item.title}</span>
              <span className="col-span-12 flex flex-col gap-3 md:col-span-5">
                <span className="sn-mono sn-muted">{item.category}</span>
                <span className="cs-body">{item.body}</span>
                <span className="sn-mono flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="sn-muted">{item.meta}</span>
                  {item.draft ? (
                    <span className="rounded-full border sn-rule px-2.5 py-0.5">In draft</span>
                  ) : (
                    <span className="text-signal">
                      Case study <span aria-hidden="true">→</span>
                    </span>
                  )}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div ref={previewRef} aria-hidden="true" data-visible={hovered !== null} className="cs-preview">
        {items.map((item) => (
          <div key={item.id} className="cs-preview-layer" data-active={hovered === item.id}>
            <NoiseCover
              seed={item.id}
              image={item.image}
              glyph={item.image ? undefined : item.number}
              ground={item.ground}
              reveal="static"
              sizes="26vw"
              className="size-full rounded-[1rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
