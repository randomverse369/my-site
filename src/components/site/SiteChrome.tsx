import type { ReactNode } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PageTransition from "@/components/site/PageTransition";
import Preloader from "@/components/site/Preloader";
import ToneController from "@/components/signal/ToneController";
import SignalCursor from "@/components/signal/SignalCursor";

/**
 * The site's chrome. Only <main> sits inside the page transition, so the
 * header, footer and fixed layers stay put while pages change under them.
 *
 * It is a component rather than layout markup because Next renders an
 * unmatched URL against the root layout alone: without this, the 404 would
 * arrive with no header, no footer and no way back into the site.
 */
export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="sn-skip">
        Skip to content
      </a>
      <Preloader />
      <SiteHeader />
      <PageTransition>
        <main id="main" tabIndex={-1} className="sn-main flex-grow outline-none">
          {children}
        </main>
      </PageTransition>
      <SiteFooter />
      <ToneController />
      <SignalCursor />
      <div aria-hidden="true" className="sn-grain" />
    </>
  );
}
