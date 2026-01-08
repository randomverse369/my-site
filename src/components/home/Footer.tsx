"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="py-32 px-6 md:px-12 border-t border-white/10 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                <div className="space-y-8">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                        Let's Talk.
                    </h2>
                    <div className="flex flex-col gap-2">
                        <a href="mailto:email@example.com" className="text-gray-400 hover:text-white transition-colors text-xl">
                            email@example.com
                        </a>
                        <span className="text-gray-600 text-sm">Based in India • Remote Ready</span>
                    </div>
                </div>

                <div className="flex gap-8 text-sm font-mono text-gray-500 uppercase tracking-widest">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Medium</a>
                </div>

            </div>

            <div className="text-center mt-32 text-gray-800 text-xs">
                © {new Date().getFullYear()} Portfolio. Designed & Built with Next.js & Tailwind.
            </div>
        </footer>
    );
}
