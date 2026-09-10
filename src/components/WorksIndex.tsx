"use client";

import { useEffect, useState } from "react";

export type WorksIndexItem = {
  id: string;
  number: string;
  title: string;
  draft: boolean;
};

/**
 * The orientation rail on /works. Its job is to keep the whole set of eight
 * projects on screen while the reader is deep inside one of them, so nobody has
 * to hold the list in their head or scroll back up to find out what is left.
 *
 * The anchors work without JavaScript; the highlight is the enhancement.
 */
export default function WorksIndex({ items }: { items: WorksIndexItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (targets.length === 0) return;

    // The margins squeeze the observer's viewport down to a band a third of the
    // way from the top. Without it the marked entry is whichever one grazes the
    // top edge, which is not the one the reader is looking at.
    const observer = new IntersectionObserver(
      (records) => {
        const visible = new Set(
          records.filter((record) => record.isIntersecting).map((record) => record.target.id),
        );
        // Records arrive in observation order, not document order, so pick the
        // first item the list itself knows about.
        const next = items.find((item) => visible.has(item.id));
        if (next) setActive(next.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Project index" className="lg:sticky lg:top-32">
      <p className="label text-metadata">Index</p>

      <ol className="mt-6 flex flex-col">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`label interactive flex items-center gap-3 border-t border-rule py-3 hover:text-foreground ${
                  isActive ? "text-foreground" : "text-metadata"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`size-1.5 shrink-0 rounded-full ${
                    isActive ? "bg-foreground" : "bg-rule-strong"
                  }`}
                />
                <span>{item.number}</span>
                <span className="normal-case">{item.title}</span>
                {item.draft && <span className="ml-auto text-metadata">Draft</span>}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
