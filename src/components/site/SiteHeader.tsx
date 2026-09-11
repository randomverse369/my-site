"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import Magnetic from "@/components/Magnetic";
import LocalClock from "@/components/signal/LocalClock";
import { contact } from "@/lib/site";

const links = [
  { name: "Work", href: "/works" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
];

const { email: EMAIL, linkedin: LINKEDIN } = contact;

/** A case study lights up its parent section. */
function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  // Storing the path the menu was opened on means a route change closes it
  // for free, back and forward included.
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const isOpen = openForPath === pathname;
  const [retracted, setRetracted] = useState(false);

  const barRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isOpenRef = useRef(false);
  const lenis = useLenis();

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Publish the bar's height so pages can clear it.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const publish = () => {
      document.documentElement.style.setProperty(
        "--nav-height",
        `${Math.round(bar.getBoundingClientRect().height)}px`,
      );
    };
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  // Retract on the way down, return on the way up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      if (isOpenRef.current) return;
      const y = window.scrollY;
      setRetracted(y > last && y > 80);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Name once per screen: the bar shows the name only once the page's hero,
  // which sets it full width, has scrolled away. The CSS rule reading
  // .sn-hero-out is in globals.css under "Header".
  useEffect(() => {
    const root = document.documentElement;
    const hero = document.querySelector("[data-hero-name]");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      root.classList.toggle("sn-hero-out", !entry.isIntersecting);
    });
    observer.observe(hero);
    return () => {
      observer.disconnect();
      root.classList.remove("sn-hero-out");
    };
  }, [pathname]);

  // While the menu is open: hold the page, animate the menu in, keep focus
  // inside it, and let Escape out again.
  useEffect(() => {
    const menu = menuRef.current;
    if (!isOpen || !menu) return;

    lenis?.stop();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(
        menu,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "expo.out" },
      );
      gsap.fromTo(
        menu.querySelectorAll(".sn-menu-item"),
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, ease: "expo.out", stagger: 0.06, delay: 0.1 },
      );
    }
    menu.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenForPath(null);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      // The close button lives in the bar, outside the menu, so the loop
      // includes it.
      const focusable = [
        toggleRef.current,
        ...menu.querySelectorAll<HTMLElement>("a, button"),
      ].filter((el): el is HTMLElement => Boolean(el));
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
      gsap.killTweensOf(menu);
      lenis?.start();
    };
  }, [isOpen, lenis]);

  return (
    <>
      <header
        className="sn-header"
        data-hidden={retracted && !isOpen}
        style={{ viewTransitionName: "site-header" }}
      >
        <div ref={barRef} className="sn-gutter flex items-center justify-between gap-6 py-5 md:py-6">
          <Link href="/" aria-label="Sachin Barnwal, home" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="sn-mono grid size-9 place-items-center rounded-full border border-current font-semibold tracking-normal"
            >
              SB
            </span>
            <span aria-hidden="true" className="sn-header-name sn-mono hidden sm:inline-block">
              <span>Sachin Barnwal</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="sn-mono hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                className="sn-link"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.2}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="sn-pill sn-mono hidden sm:inline-flex"
              >
                Résumé <span aria-hidden="true">↗</span>
              </a>
            </Magnetic>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpenForPath(isOpen ? null : pathname)}
              aria-expanded={isOpen}
              aria-controls="site-menu"
              className="sn-pill sn-mono md:hidden"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Unmounted when closed, so it can never be invisible-but-present. */}
      {isOpen && (
        <div
          id="site-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="sn-menu sn-tone-dark md:hidden"
        >
          <nav aria-label="Primary">
            <ul className="flex flex-col">
              {[{ name: "Home", href: "/" }, ...links].map((link) => (
                <li key={link.name} className="overflow-clip border-b sn-rule">
                  <Link
                    href={link.href}
                    onClick={() => setOpenForPath(null)}
                    aria-current={
                      (link.href === "/" ? pathname === "/" : isCurrent(pathname, link.href))
                        ? "page"
                        : undefined
                    }
                    className="sn-menu-item sn-title block py-2 aria-[current=page]:text-signal"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sn-mono mt-10 flex flex-col gap-3">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="sn-link self-start">
              Résumé <span aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="sn-link self-start">
              {EMAIL}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="sn-link self-start">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <span className="sn-muted">
              Local time <LocalClock /> IST
            </span>
          </div>
        </div>
      )}
    </>
  );
}
