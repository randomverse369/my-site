"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        rotate: [0, 45, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 rounded-full blur-[120px] will-change-transform translate-z-0"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute bottom-[-10%] left-[-20%] w-[70vw] h-[70vw] bg-blue-900/10 rounded-full blur-[120px] will-change-transform translate-z-0"
                />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-[90rem] mx-auto w-full"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                >
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </div>
                    <span className="text-xs font-medium tracking-widest uppercase text-white/80 font-mono">Available for work</span>
                </motion.div>

                {/* Headline */}
                <div className="space-y-2 mb-12">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
                            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[1.1] md:leading-[1.1] mix-blend-difference text-white"
                        >
                            Bridging Human
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.55 }}
                            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[1.1] md:leading-[1.1] text-gray-400"
                        >
                            Behavior <span className="text-gray-600">&</span>
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.7 }}
                            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[1.1] md:leading-[1.1] text-white"
                        >
                            Complex Systems.
                        </motion.h1>
                    </div>
                </div>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="max-w-xl text-lg md:text-xl text-gray-400 leading-relaxed"
                >
                    Senior UI/UX Designer specialized in Fintech, SaaS, and AI. Building scalable design architectures that drive revenue, not just pixels.
                </motion.p>
            </motion.div>

            {/* Abstract decorative line (Chart/Neural feel) */}
            <svg className="absolute top-1/2 right-0 w-1/2 h-full opacity-20 pointer-events-none stroke-gray-700" style={{ transform: 'translateY(-50%)' }}>
                <motion.path
                    d="M0,100 Q200,50 400,100 T800,100"
                    fill="none"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
            </svg>
        </section>
    );
}
