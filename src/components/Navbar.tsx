"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from 'next/link';

const navItems = [
    { name: "Works", href: "#works" },
    { name: "Experience", href: "#experience" },
    { name: "About Me", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all ${scrolled ? "pt-4" : "pt-6"}`}
        >
            <div className={`
                flex items-center gap-2 p-2 rounded-full border border-border/50 bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300
                ${scrolled ? "scale-95" : "scale-100"}
            `}>
                {/* Logo Pill */}
                <Link href="/" className="px-5 py-2.5 bg-[#529AEF] text-white rounded-full text-sm font-semibold tracking-wide hover:bg-[#529AEF]/90 transition-colors">
                    Sachin Barnwal
                </Link>

                {/* Nav Items - Pill Style */}
                <nav className="hidden md:flex items-center mx-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-black hover:bg-surface rounded-full transition-all"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Call to Action */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="hidden md:block px-6 py-2.5 rounded-full border border-border text-sm font-semibold hover:bg-black hover:text-white hover:border-black transition-all"
                >
                    Download Resume
                </a>

                {/* Mobile Menu */}
                <button className="md:hidden p-3 rounded-full hover:bg-surface">
                    <div className="w-5 h-0.5 bg-black mb-1.5" />
                    <div className="w-5 h-0.5 bg-black" />
                </button>
            </div>
        </motion.header>
    );
}
