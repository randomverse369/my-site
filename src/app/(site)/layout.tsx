import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * The current site's chrome. It sits in a route group so /lab, the Signal /
 * Noise prototype, can render without it. URLs are unchanged: the group name
 * never appears in a path.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="grain-overlay" />
      <Navigation />
      <main className="flex-grow pt-[calc(var(--nav-height,4.75rem)+2rem)]">{children}</main>
      <Footer />
    </>
  );
}
