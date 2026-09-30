import Link from "next/link";
import type { ReactNode } from "react";
import WordFill from "@/components/signal/WordFill";
import NoiseCover from "@/components/signal/NoiseCover";
import { nextCaseStudy, projectNumber } from "@/lib/projects";

/* The case study kit's content blocks. Each one is layout only: the words
   come from the page, unchanged. */

/** A full-width statement that fills in word by word as it scrolls through. */
export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <figure className="sn-gutter grid grid-cols-12 py-[16vh]">
      <div className="col-span-12 lg:col-span-10 lg:col-start-2">
        <span aria-hidden="true" className="mb-8 block h-[3px] w-16 bg-signal" />
        <WordFill as="blockquote" className="sn-statement">
          {children}
        </WordFill>
      </div>
    </figure>
  );
}

type Numbered = {
  num: string;
  label?: string;
  title: ReactNode;
  body: ReactNode;
  note?: ReactNode;
  noteLabel?: string;
};

/**
 * Decisions, findings, stages: the claim as the heading, the reason under it.
 * The reason is the part a reader can argue with.
 */
export function Decisions({ items }: { items: Numbered[] }) {
  return (
    <ol className="flex flex-col">
      {items.map((item) => (
        <li
          key={item.num + (item.label ?? "")}
          className="grid grid-cols-[auto_1fr] gap-x-6 border-t sn-rule py-10 first:border-t-0 first:pt-0 md:gap-x-10"
        >
          <span aria-hidden="true" className="cs-num">
            {item.num}
          </span>
          <div className="cs-flow">
            {item.label && <p className="sn-mono sn-muted">{item.label}</p>}
            <h3 className="cs-decision-title">{item.title}</h3>
            {item.body}
            {item.note && <Note label={item.noteLabel}>{item.note}</Note>}
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * A caveat or implication hung off a signal rule.
 *
 * A <div>, not an <aside>: these sit inside a decision, a card or a section's
 * flow, so they are part of that argument rather than complementary to the
 * page. Nested, the aside still surfaced as a landmark inside a landmark,
 * which put a run of unnamed regions into landmark navigation on three case
 * studies and made the real ones harder to find.
 */
export function Note({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="cs-note">
      {label && <p className="sn-mono sn-muted">{label}</p>}
      <div className="cs-body">{children}</div>
    </div>
  );
}

/** A short list of areas, each on a signal tick. */
export function FactGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-6 border-t sn-rule pt-8 sm:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="flex flex-col gap-3">
          <span aria-hidden="true" className="block h-[2px] w-6 bg-signal" />
          <span className="cs-meta">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** A raised panel for a statement the section turns on; `signal` for the one that matters most. */
export function Callout({
  label,
  tone = "raised",
  children,
}: {
  label?: string;
  tone?: "raised" | "signal";
  children: ReactNode;
}) {
  return (
    <div className={`cs-callout ${tone === "signal" ? "cs-callout-signal" : ""}`}>
      {label && <p className="sn-mono cs-callout-label">{label}</p>}
      <div className="cs-callout-text">{children}</div>
    </div>
  );
}

/** Parallel options or responses, side by side. */
export function Cards({
  items,
}: {
  items: { num?: string; title: ReactNode; body: ReactNode; wide?: boolean }[];
}) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {items.map((card, i) => (
        <li key={i} className={`cs-card ${card.wide ? "md:col-span-2" : ""}`}>
          {card.num && <span className="cs-card-num">{card.num}</span>}
          <h3 className="cs-card-title">{card.title}</h3>
          <div className="cs-body mt-3">{card.body}</div>
        </li>
      ))}
    </ul>
  );
}

/**
 * The scroll container a wide table needs.
 *
 * .cs-table has a min-width, so on a narrow column the table scrolls
 * sideways inside this box. A plain overflow container is reachable with a
 * mouse and a touch screen and with nothing else: keyboard users never get to
 * the right-hand columns (WCAG 2.1.1). tabIndex makes it a scroll stop, and
 * because that puts it in the tab order it needs a name and a role to say
 * what it is.
 *
 * It is focusable at every width rather than only when it overflows: the
 * measuring version needs JavaScript to grant keyboard access, and this does
 * not. .cs-table-stack handles phones by dropping the scroll entirely.
 */
export function TableScroll({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div role="region" aria-label={label} tabIndex={0} className="overflow-x-auto">
      {children}
    </div>
  );
}

/** A screen from the project. The noise clears off it as it scrolls in. */
export function Media({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
}) {
  return (
    <figure className="sn-gutter py-[8vh]">
      <NoiseCover
        seed={src}
        image={{ src, alt }}
        aspect={`${width} / ${height}`}
        sizes="(min-width: 768px) 94vw, 100vw"
        className="rounded-[1.25rem] bg-raised"
      />
      {caption && <figcaption className="sn-mono sn-muted mt-4 max-w-3xl">{caption}</figcaption>}
    </figure>
  );
}

/**
 * A screen that does not exist yet. The noise field stands in for it, which is
 * the honest picture: the page knows what belongs here and does not have it.
 *
 * To fill one, drop the export in /public and swap this for a <Media> with the
 * same caption. Nothing else on the page changes.
 */
export function Placeholder({
  label,
  caption,
  ratio = "1016 / 640",
}: {
  /** Names the missing screen, printed on the field itself. */
  label: string;
  caption: ReactNode;
  /** CSS aspect-ratio. Phone screens want a tall one. */
  ratio?: string;
}) {
  return (
    <figure className="sn-gutter py-[8vh]">
      {/* No glyph and no image: every cell stays noise, so the slot reads as
          unresolved for as long as the screen is missing. */}
      <NoiseCover seed={label} aspect={ratio} className="rounded-[1.25rem]">
        <p className="sn-mono absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1.5 text-bone/80">
          {label}
        </p>
      </NoiseCover>
      <figcaption className="sn-mono sn-muted mt-4 max-w-3xl">{caption}</figcaption>
    </figure>
  );
}

/** The way out of a case study: the next written one, wrapping round the list. */
export function NextProject({ id }: { id: string }) {
  const next = nextCaseStudy(id);

  return (
    <section data-tone="dark" aria-labelledby="next-heading" className="sn-gutter pb-[8vh] pt-[14vh]">
      <Link href={next.href} className="cs-next block border-t sn-rule pt-8">
        <p className="sn-mono sn-muted flex justify-between gap-6">
          <span id="next-heading">Next case study</span>
          <span>{projectNumber(next.id)}</span>
        </p>
        <div className="mt-8 grid grid-cols-12 items-end gap-x-6 gap-y-6">
          <span className="cs-next-title sn-title col-span-12 lg:col-span-7">{next.title}</span>
          <span className="cs-body col-span-12 lg:col-span-5">{next.body.join(" ")}</span>
        </div>
      </Link>
    </section>
  );
}

/** The body of a project whose case study is not written yet. */
export function DraftBody({ product, href }: { product: string; href: string }) {
  return (
    <section data-tone="dark" className="sn-gutter py-[10vh]">
      <div className="cs-callout flex flex-col items-start gap-6 md:p-16">
        <p className="sn-mono sn-muted">Case Study</p>
        <h2 className="sn-display">
          Coming <em className="sn-serif">soon</em>
        </h2>
        <p className="cs-lead max-w-xl">
          I am still writing this one up. The product is live if you want to look.
        </p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="sn-pill sn-mono">
          Visit {product} Live <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
