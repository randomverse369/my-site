"use client";


import Link from "next/link";
import { Download } from "lucide-react";
import { useSoundManager } from "./SoundManager";
import { useSmoothScroll } from "./SmoothScroll";

const navItems = [
    { name: "Works", href: "#selected-work" },
    { name: "How I Work?", href: "#how-i-work" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Playground", href: "#playground" },
];

export default function Navbar() {
    const { playHover, playClick } = useSoundManager();
    const lenis = useSmoothScroll();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        playClick();
        if (lenis) {
            lenis.scrollTo(href);
        }
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
        >
            <div className="pointer-events-auto flex items-center justify-between gap-8 md:gap-12 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:scale-[1.005]">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-white font-mono text-sm tracking-wider hover:text-gray-300 transition-colors whitespace-nowrap"
                    onMouseEnter={playHover}
                    onClick={() => lenis?.scrollTo(0)}
                >
                    SACHIN BARNWAL
                </Link>

                {/* Menu Items */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm text-gray-400 hover:text-white transition-colors relative group whitespace-nowrap cursor-pointer"
                            onMouseEnter={playHover}
                            onClick={(e) => handleScroll(e, item.href)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Right: CTA */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-200 transition-all duration-300 whitespace-nowrap"
                    onMouseEnter={playHover}
                    onClick={playClick}
                >
                    <span>Download Resume</span>
                    <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
            </div>
        </nav>
    );
}
