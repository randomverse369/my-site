"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TutelageCaseStudy() {
    return (
        <div className="min-h-screen bg-background text-foreground font-manrope selection:bg-accent/30">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                {/* Header / Hero */}
                <header className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-foreground transition-colors px-4 py-2 rounded-full border border-border mb-8">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-foreground">
                            Tutelage <span className="text-text-secondary">Classroom Management</span>
                        </h1>


                        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-12">
                            Took full ownership of every design and built an ed-tech platform from the ground up.
                        </p>

                        {/* Project Snapshot */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 border border-border rounded-3xl bg-surface/50 backdrop-blur-sm">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Context</h3>
                                <p className="font-medium text-foreground">EdTech Platform</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Role</h3>
                                <p className="font-medium text-foreground">Graphic & UI/UX Designer</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Period</h3>
                                <p className="font-medium text-foreground">Sep 2019 - Aug 2022</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Impact</h3>
                                <p className="font-medium text-foreground">Built from Scratch</p>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Content Sections */}
                <div className="space-y-24">
                    <Section title="Overview">
                        <p className="text-lg text-text-secondary leading-relaxed mb-6">
                            Tutelage is a comprehensive classroom management platform designed to streamline educational workflows. As the lead designer, I was responsible for the entire design lifecycle, from initial concept to final UI implementation.
                        </p>
                    </Section>

                    <Section title="Problem & Solution">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card title="The Problem">
                                <p className="text-text-secondary">Before Tutelage, managing classroom activities, assignments, and student progress was fragmented across multiple tools and manual processes.</p>
                            </Card>
                            <Card title="The Solution">
                                <p className="text-text-secondary">We built a unified platform that integrates all essential classroom tools into a single, intuitive interface, improving efficiency for both teachers and students.</p>
                            </Card>
                        </div>
                    </Section>
                </div>

            </div>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{title}</h2>
                {children}
            </motion.div>
        </section>
    );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="p-6 rounded-2xl bg-surface border border-border hover:border-text-secondary/20 transition-colors">
            <h3 className="text-lg font-bold mb-4 text-foreground">{title}</h3>
            {children}
        </div>
    );
}
