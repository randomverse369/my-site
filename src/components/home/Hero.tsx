"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex flex-col justify-center pt-12 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-background"
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col justify-start gap-12 sm:gap-16 pt-0">

                {/* Main Heading Block */}
                <div className="flex flex-col gap-4 md:gap-6 relative z-10 w-full max-w-none">

                    {/* Main Headline */}


                    {/* Line 2: I am a... */}
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] md:leading-[1.1] font-bold tracking-tight text-text-secondary/40">
                        <div className="inline-block relative mr-4 align-middle group">
                            <div className="relative w-[1.5em] h-[1.5em] bg-gray-200 rounded-full overflow-hidden border-[3px] border-yellow-400">
                                <Image
                                    src="/images/Hero/Sachin Barnwal.svg"
                                    alt="Sachin Barnwal"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Hover Speech Bubble */}
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-5 w-48 p-4 bg-white/90 backdrop-blur-sm border border-black/5 text-sm font-semibold tracking-normal text-foreground text-center leading-snug rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-left scale-90 group-hover:scale-100 z-50 pointer-events-none">
                                I&apos;m still working on<br />this portfolio
                                {/* Arrow Tip */}
                                <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-white/90 border-l border-b border-black/5 rotate-45 rounded-[1px]"></div>
                            </div>
                        </div>
                        I am a <span className="text-foreground">product designer</span> crafting <span className="text-foreground">digital experiences</span> that are <span className="text-foreground">scalable</span>, <span className="text-foreground">intuitive</span> and <span className="text-foreground">data informed.</span>

                        {/* Inline Pill */}
                        <div className="inline-flex items-center align-middle ml-2 md:ml-6 px-4 py-1.5 md:px-6 md:py-3 bg-white border border-border rounded-full shadow-sm text-base md:text-lg tracking-normal font-medium text-foreground align-middle transform -translate-y-1 md:-translate-y-2">
                            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-emerald-500 mr-2 md:mr-3 animate-pulse"></span>
                            Open to work
                        </div>
                    </div>
                </div>

                {/* Body Text */}
                <div className="w-full max-w-5xl">
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium text-left">
                        6+ years of experience designing complex products end-to-end from early discovery and user research to UX, UI, and design systems. I work closely with founders, PMs, engineers, and stakeholders to turn messy requirements into <span className="text-foreground">clear, usable and habit forming products.</span>
                    </p>
                </div>

                {/* Bottom Section: Scrolling Ticker & Arrow */}
                <div className="flex flex-col gap-12 mt-4 md:mt-8">

                    {/* Horizontal Scrolling Ticker */}
                    <div className="w-full overflow-hidden border-y border-border py-4 bg-surface/30">
                        <div className="flex whitespace-nowrap gap-12 md:gap-24 animate-marquee items-center text-sm md:text-base font-mono uppercase tracking-widest text-foreground/70">
                            {/* Loop 1 */}
                            <span>SaaS</span>
                            <span>Fintech</span>
                            <span>AI</span>
                            <span>EdTech</span>
                            <span>•</span>
                            <span>Web & Mobile</span>
                            <span>•</span>
                            <span>Design Systems</span>
                            <span>•</span>
                            <span>Data-heavy platforms</span>

                            {/* Loop 2 for seamlessness */}
                            <span>SaaS</span>
                            <span>Fintech</span>
                            <span>AI</span>
                            <span>EdTech</span>
                            <span>•</span>
                            <span>Web & Mobile</span>
                            <span>•</span>
                            <span>Design Systems</span>
                            <span>•</span>
                            <span>Data-heavy platforms</span>
                            {/* Loop 3 for large screens */}
                            <span>SaaS</span>
                            <span>Fintech</span>
                            <span>AI</span>
                            <span>EdTech</span>
                            <span>•</span>
                            <span>Web & Mobile</span>
                            <span>•</span>
                            <span>Design Systems</span>
                            <span>•</span>
                            <span>Data-heavy platforms</span>
                        </div>
                    </div>

                    {/* Blinking Down Arrow */}
                    <div className="flex justify-center pb-4">
                        <motion.div
                            animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Custom Keyframe for Marquee */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </section>
    );
}
