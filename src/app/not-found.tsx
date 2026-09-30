import Link from "next/link";
import type { Metadata } from "next";
import SiteChrome from "@/components/site/SiteChrome";
import ScrambleText from "@/components/signal/ScrambleText";
import SplitReveal from "@/components/signal/SplitReveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not here. The work is.",
  // A 404 is not a page to index, whatever links to it. The canonical is
  // cleared because the root layout's "./" would otherwise resolve against
  // Next's internal /_not-found path and point at a URL that does not exist.
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

// The three a visitor who mistyped a URL is most likely to have wanted.
const suggestions = projects.filter((project) => project.caseStudy === "published").slice(0, 3);

/**
 * An unmatched URL renders against the root layout only, so this carries the
 * chrome itself. Noise that never resolves: the one place on the site where a
 * reader is meant to leave rather than read on.
 */
export default function NotFound() {
  return (
    <SiteChrome>
      <section data-tone="dark" className="sn-gutter pb-[14vh] pt-[6vh]">
        <p className="sn-mono sn-muted">
          <ScrambleText text="Error 404" delay={0.2} />
        </p>

        <SplitReveal as="h1" onScroll={false} waitForIntro className="sn-title mt-8 max-w-[16ch]">
          This page never{" "}
          {/* Held together, or the line breaks after the italic and leaves the
              full stop alone on the next line. */}
          <span className="whitespace-nowrap">
            <em className="sn-serif">resolved</em>.
          </span>
        </SplitReveal>

        <p className="cs-standfirst mt-10 max-w-2xl">
          The address does not match anything here. It may have moved while the site was being
          rebuilt, or it may never have existed.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/" data-cursor="Home" className="sn-pill sn-mono">
            Home <span aria-hidden="true">→</span>
          </Link>
          <Link href="/works" data-cursor="Index" className="sn-pill sn-mono">
            All work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <nav aria-labelledby="suggestions-heading" className="mt-[12vh]">
          <h2 id="suggestions-heading" className="sn-mono sn-muted">
            Or start with one of these
          </h2>
          <ul className="mt-8 border-b sn-rule">
            {suggestions.map((project) => (
              <li key={project.id} className="sn-row border-t sn-rule">
                <Link
                  href={project.href}
                  className="sn-row-inner grid grid-cols-12 items-baseline gap-x-6 gap-y-3 py-8"
                >
                  <span className="sn-row-company col-span-12 md:col-span-6">{project.title}</span>
                  <span className="sn-mono sn-muted col-span-12 md:col-span-6 md:text-right">
                    {project.category}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </SiteChrome>
  );
}
