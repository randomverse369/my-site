"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative z-10 py-24 md:py-32 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                {/* Left Side: Photo or Visual */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="sticky top-32"
                    >
                        <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold leading-none tracking-tight text-foreground">
                            About me
                        </h2>
                        <div className="mt-8 relative aspect-square w-full max-w-md bg-surface rounded-2xl overflow-hidden border border-border">
                            {/* Decorative element since no photo provided */}
                            <div className="absolute inset-0 bg-surface" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-8xl font-bold text-black/5">SB</span>
                            </div>
                            <div className="absolute bottom-4 left-4 p-4 bg-white/80 backdrop-blur-md rounded-xl border border-border shadow-sm">
                                <p className="text-xs uppercase tracking-widest text-text-secondary">Designer &<br />Developer</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col gap-12 text-lg md:text-xl font-light text-text-secondary leading-relaxed font-manrope">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
                        <p>
                            I started my career early, growing from graphic design into end-to-end product design by working closely with founders, product managers, and engineers to ship real products used by real users.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-4">Philosophy</h3>
                        <p>
                            My approach goes beyond visual design. I focus on understanding the problem, business goals, and technical constraints, and translating them into clear, usable solutions that support growth and revenue. I’ve led design systems, improved design–development alignment, and helped teams scale their design processes.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-4">AI & Expansion</h3>
                        <p>
                            In recent years, I’ve been actively exploring how AI fits into product design — experimenting with AI tools, building prototypes, and understanding how emerging technologies can improve workflows and user experiences. I see AI as a powerful enabler, not a replacement for thoughtful design.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-6 bg-surface rounded-2xl border border-border"
                    >
                        <h3 className="text-xl font-bold text-foreground mb-2">Outside Work</h3>
                        <p className="text-base text-text-secondary">
                            I enjoy sci-fi, anime, music, and reading (slowly). I’m curious by nature and constantly learning not to chase trends, but to stay relevant and effective as a designer working in fast-moving environments.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
