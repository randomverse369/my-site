import ScrambleText from "@/components/signal/ScrambleText";
import SplitReveal from "@/components/signal/SplitReveal";
import LocalClock from "@/components/signal/LocalClock";
import BackToTop from "./BackToTop";

const EMAIL = "sachin.aiux@gmail.com";

/**
 * Every page ends here, on the light tone. It is the page's one tone change
 * (MASTER.md §2): pages run dark and turn light on the way out.
 */
export default function SiteFooter() {
  return (
    <footer
      data-tone="light"
      aria-labelledby="contact-heading"
      className="relative flex min-h-[100svh] flex-col pt-[18vh]"
    >
      <div className="sn-gutter flex-1">
        <p>
          <ScrambleText onScroll className="sn-mono sn-muted" text="Contact" />
        </p>
        <SplitReveal as="h2" id="contact-heading" className="sn-title mt-8">
          Let&apos;s <em className="sn-serif">talk</em>
        </SplitReveal>

        <div className="mt-12 grid grid-cols-12 gap-6 md:mt-16">
          <a
            href={`mailto:${EMAIL}`}
            data-cursor="Write"
            className="sn-statement sn-link col-span-12 justify-self-start [overflow-wrap:anywhere] md:col-span-9"
          >
            {EMAIL}
          </a>
          <ul className="sn-mono col-span-12 flex flex-col gap-3 md:col-span-3 md:items-end md:self-end">
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="sn-link">
                Résumé <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li className="sn-muted">
              Local time <LocalClock /> IST
            </li>
          </ul>
        </div>
      </div>

      <div className="sn-gutter sn-mono sn-muted mt-[14vh] flex flex-wrap items-center justify-between gap-4 border-t sn-rule py-6">
        <span>© 2026 Sachin Barnwal</span>
        <BackToTop className="sn-link uppercase" />
      </div>
    </footer>
  );
}
