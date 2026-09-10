"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Magnetic from "./Magnetic";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Selected Works", href: "/works" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
];

/** A case study should light up its parent section in the nav. */
function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  // Storing the path the menu was opened on means a route change closes it for
  // free — no state-syncing effect, and back/forward is handled too.
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const pathname = usePathname();
  const isMenuOpen = openForPath === pathname;

  const lastScrollY = useRef(0);
  const isMenuOpenRef = useRef(false);
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".nav-item",
          { y: -24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: "power4.out", delay: 0.15 },
        );
      });
    },
    { scope: navRef },
  );

  // Publish the real bar height so <main> can offset by it instead of guessing.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const publish = () => {
      const { height } = bar.getBoundingClientRect();
      document.documentElement.style.setProperty("--nav-height", `${Math.round(height)}px`);
    };

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Never retract the bar out from under an open menu.
      if (isMenuOpenRef.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // While the panel is open: hold the page still, keep focus inside it, and
  // let Escape out again.
  useEffect(() => {
    if (!isMenuOpen) return;

    lenis?.stop();
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenForPath(null);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>("a, button");
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      lenis?.start();
    };
  }, [isMenuOpen, lenis]);

  const linkClass = (href: string) =>
    `nav-item block label interactive ${
      isCurrent(pathname, href) ? "text-foreground" : "text-metadata hover:text-foreground"
    }`;

  return (
    <header
      ref={navRef}
      className={`fixed top-4 left-0 w-full z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-page">
        <div
          ref={barRef}
          className="flex flex-row items-center justify-between gap-4 rounded-full border border-glass-border bg-glass backdrop-blur-xl px-4 py-3 sm:px-8 sm:py-4"
        >
          <Magnetic strength={0.2}>
            <Link
              href="/"
              aria-label="Home"
              className="nav-item flex size-9 items-center justify-center rounded-md bg-foreground text-on-foreground interactive hover:opacity-80"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="3" y="3" width="8" height="8" rx="1" />
                <rect x="13" y="3" width="8" height="4" rx="1" />
                <rect x="13" y="9" width="4" height="4" rx="1" fillOpacity="0.5" />
                <rect x="13" y="15" width="8" height="6" rx="1" />
                <rect x="3" y="13" width="8" height="8" rx="1" />
              </svg>
            </Link>
          </Magnetic>

          {/* Desktop */}
          <nav aria-label="Primary" className="hidden md:flex items-center justify-end flex-1 gap-6">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Magnetic key={link.name} strength={0.3}>
                  <Link
                    href={link.href}
                    aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                    className={linkClass(link.href)}
                  >
                    {link.name}
                  </Link>
                </Magnetic>
              ))}
            </div>

            <ThemeToggle className="nav-item size-11 border border-rule-strong hover:border-foreground" />

            <Magnetic strength={0.1}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sachin_Barnwal_Resume.pdf"
                className="nav-item label interactive inline-flex items-center justify-center rounded-sm border border-rule-strong px-[17px] py-[13px] font-medium text-metadata hover:border-foreground hover:text-foreground"
              >
                Download Resume
              </a>
            </Magnetic>
          </nav>

          {/* Mobile: theme first, then the menu. Both stay in the bar so the
              theme never hides behind a disclosure. */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle className="nav-item size-12" />

            {/* Menu toggle — 48px square keeps it above the 44px touch minimum */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpenForPath(isMenuOpen ? null : pathname)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="nav-item -mr-1 flex h-12 w-12 flex-col items-center justify-center gap-[5px] rounded-md interactive"
            >
              <span
                className={`block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-[3.25px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-[3.25px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile panel. Unmounted when closed, so it can never become
            invisible-but-present content the way the old reveals did. */}
        {isMenuOpen && (
          <div
            id="mobile-nav"
            ref={panelRef}
            className="md:hidden mt-2 rounded-lg border border-rule bg-surface/95 backdrop-blur-xl p-6"
          >
            <nav aria-label="Primary" className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpenForPath(null)}
                  aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                  className={`label flex min-h-12 items-center border-b border-rule interactive ${
                    isCurrent(pathname, link.href) ? "text-foreground" : "text-metadata"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sachin_Barnwal_Resume.pdf"
                onClick={() => setOpenForPath(null)}
                className="label mt-4 inline-flex min-h-12 items-center justify-center rounded-sm border border-rule-strong font-medium text-metadata interactive"
              >
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
