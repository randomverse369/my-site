"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 px-6 md:px-12 overflow-hidden bg-background">
            <div className="max-w-[90rem] mx-auto flex flex-col min-h-[60vh] justify-between">

                {/* Top Section: Heading & Info */}
                <div className="flex flex-col gap-12 md:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-[clamp(3rem,6vw,6rem)] font-bold leading-none tracking-tight text-foreground">
                            Let&apos;s talk
                        </h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                        {/* Left: Email & Phone */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col gap-8 items-start"
                        >
                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <span className="text-text-secondary text-sm uppercase tracking-widest font-medium">Email</span>
                                {/* Removed MagneticButton to align with strict Swiss feel, or keep if preferred. Keeping link simple */}
                                <a href="mailto:itsskb2312@gmail.com" className="group flex items-center gap-2">
                                    <span className="text-2xl md:text-4xl font-manrope font-light text-foreground group-hover:text-black/70 transition-colors duration-300">
                                        itsskb2312@gmail.com
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-text-secondary group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-2">
                                <span className="text-text-secondary text-sm uppercase tracking-widest font-medium">Phone</span>
                                <a href="tel:+918250529775" className="text-2xl md:text-3xl font-manrope font-light text-foreground/80 hover:text-foreground transition-colors">
                                    +91 8250529775
                                </a>
                            </div>
                        </motion.div>

                        {/* Right: Socials */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-start md:items-end gap-4"
                        >
                            <span className="text-text-secondary text-xs uppercase tracking-widest font-medium hidden md:block">Social</span>
                            <div className="flex gap-6">
                                {/* X (Twitter) */}
                                <a href="https://x.com/vyaktava" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-foreground transition-all duration-300 hover:scale-110">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8 fill-current">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/sachinbarnwal/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-foreground transition-all duration-300 hover:scale-110">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8 fill-current">
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.21-.43-1.56-1.1-1.56-.91 0-1.96.41-1.96 1.91V19h-3v-9h3v1.3c.53-1.07 1.83-1.56 2.8-1.56 2.41 0 3.26 1.56 3.26 4.36z" />
                                    </svg>
                                </a>

                                {/* Medium */}
                                <a href="https://medium.com/@vyaktava" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-foreground transition-all duration-300 hover:scale-110">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8 fill-current">
                                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section: Footer Line & Copyright */}
                <div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-full h-px bg-border mt-20 mb-8"
                    />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-text-secondary text-xs md:text-sm uppercase tracking-wider font-medium">
                            © All Rights Reserved Sachin Barnwal 2025
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
