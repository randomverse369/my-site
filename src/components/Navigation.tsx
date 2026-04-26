"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Reveal on scroll up or if at the very top, hide on scroll down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Works", href: "/#works" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-6 bg-background/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="text-foreground font-bold tracking-tight interactive hover:text-accent"
          >
            SB
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[0.75rem] font-mono tracking-wider uppercase interactive hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-metadata"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download="Sachin_Barnwal_Resume.pdf"
            className="text-[0.75rem] font-mono tracking-wider uppercase text-metadata interactive hover:text-accent border border-metadata/30 px-4 py-2 rounded-[4px] hover:border-accent"
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
