"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { useSoundManager } from "./SoundManager";

const navItems = [
    { name: "Selected Works", href: "#selected-work" },
    { name: "Experience", href: "#experience" },
    { name: "Playground", href: "#playground" },
    { name: "Insights", href: "#insights" },
];

export default function Navbar() {
    const { playHover, playClick } = useSoundManager();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between pointer-events-none"
        >
            {/* Left: Wordmark */}
            <div className="pointer-events-auto">
                <Link
                    href="/"
                    className="text-white font-mono text-sm tracking-wider hover:text-gray-300 transition-colors"
                    onMouseEnter={playHover}
                    onClick={playClick}
                >
                    SACHIN BARNWAL
                </Link>
            </div>

            {/* Center: Menu Items */}
            <div className="hidden md:flex items-center gap-8 pointer-events-auto bg-black/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                        onMouseEnter={playHover}
                        onClick={playClick}
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Right: CTA */}
            <div className="pointer-events-auto">
                <a
                    href="/resume.pdf" // Placeholder path
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-gray-200 transition-all duration-300"
                    onMouseEnter={playHover}
                    onClick={playClick}
                >
                    <span>Download Resume</span>
                    <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
            </div>
        </motion.nav>
    );
}
