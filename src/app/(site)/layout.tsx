import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import PageTransition from "@/components/site/PageTransition";
import Preloader from "@/components/site/Preloader";
import ToneController from "@/components/signal/ToneController";
import SignalCursor from "@/components/signal/SignalCursor";

/**
 * The site's chrome. Only <main> sits inside the page transition, so the
 * header, footer and fixed layers stay put while pages change under them.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
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
