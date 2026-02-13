"use client";

import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JaiCaseStudy() {
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
                            jAI <span className="text-text-secondary">Financial Intelligence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-12">
                            Interpret fragmented money data and convert it into clarity and action. Reducing financial anxiety by lowering cognitive barriers.
                        </p>

                        {/* Project Snapshot */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 border border-border rounded-3xl bg-surface/50 backdrop-blur-sm">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Product</h3>
                                <p className="font-medium text-foreground">Neobank Super App</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Role</h3>
                                <p className="font-medium text-foreground">Lead Designer</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Users</h3>
                                <p className="font-medium text-foreground">Pan-India</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Outcome</h3>
                                <p className="font-medium text-foreground">High-Trust AI</p>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Content Sections */}
                <div className="space-y-24">

                    {/* 01. Problem Statement */}
                    <Section title="01. Problem Statement">
                        <p className="text-lg text-text-secondary leading-relaxed mb-6">
                            Indian users struggle to plan and act on their finances not because they lack financial products, but because:
                        </p>
                        <ul className="grid gap-4 md:grid-cols-2 mb-8">
                            <li className="flex gap-3 text-text-secondary">
                                <span className="text-red-500 font-bold">×</span> Money is spread across multiple bank accounts.
                            </li>
                            <li className="flex gap-3 text-text-secondary">
                                <span className="text-red-500 font-bold">×</span> Transaction data is raw, fragmented, and hard to interpret.
                            </li>
                            <li className="flex gap-3 text-text-secondary">
                                <span className="text-red-500 font-bold">×</span> Most fintech apps assume English proficiency.
                            </li>
                            <li className="flex gap-3 text-text-secondary">
                                <span className="text-red-500 font-bold">×</span> Users set financial goals emotionally without checking feasibility.
                            </li>
                        </ul>
                        <div className="p-6 bg-red-50/50 rounded-xl border border-red-100">
                            <p className="text-foreground italic">
                                <strong>The Constraint:</strong> Without Account Aggregator data, AI-driven insights and goal feasibility are unreliable.
                            </p>
                        </div>
                    </Section>

                    {/* 02. Challenges */}
                    <Section title="02. Core Challenges">
                        <div className="space-y-6">
                            <Card title="1. Inherited Product Direction">
                                <p className="text-text-secondary">Core requirements were defined by BAs. Foundational decisions (e.g., mandatory AA) were locked. Design had to operate within predefined boundaries, not from first principles.</p>
                            </Card>
                            <Card title="2. Mandatory Account Aggregator">
                                <p className="text-text-secondary">AA linking was essential for intelligence but increased hesitation. Removing it wasn&apos;t an option, creating tension between business necessity and user trust.</p>
                            </Card>
                            <Card title="3. Designing AI Without Over-Promising">
                                <p className="text-text-secondary">Financial insights had to be explainable and conservative. No &quot;AI certainty&quot; or guarantees, to avoid liability and mistrust.</p>
                            </Card>
                            <Card title="4. Multilingual Accessibility">
                                <p className="text-text-secondary">AI responses needed to maintain tone and intent across 7 languages (English, Hindi, Bengali, Marathi, Tamil, Telugu, Kannada).</p>
                            </Card>
                            <Card title="5. High-Trust Goal Feasibility">
                                <p className="text-text-secondary">Labeling goals as &quot;not realistic&quot; carries emotional weight. Recommendations must feel supportive, not judgmental.</p>
                            </Card>
                        </div>
                    </Section>

                    {/* 03. Approach & Solution */}
                    <Section title="03. Approach & Solution">
                        <div className="space-y-12">
                            {/* Requirement Deconstruction */}
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Requirement Deconstruction</h3>
                                <p className="text-text-secondary mb-4">Instead of designing screens immediately, we translated business logic into user-centric scenarios. Parallel collaboration with developers uncovered technical limitations early.</p>
                            </div>

                            {/* Designing Trust */}
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Designing Trust (Sample Data)</h3>
                                <p className="text-text-secondary mb-4">To reduce friction for the mandatory AA flow:</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FeatureBlock icon="🔓" title="Sample Data Mode" desc="Allowed users to explore jAI's value without linking accounts immediately." />
                                    <FeatureBlock icon="🎯" title="Persistent CTA" desc="Balanced exploration with business goals, accepting slower conversion for higher confidence." />
                                </div>
                            </div>

                            {/* Multilingual */}
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Multilingual Conversational Design</h3>
                                <p className="text-text-secondary mb-4">We prioritized <strong>intent preservation</strong> over literal translation using simple financial language and a reassuring tone.</p>
                            </div>

                            {/* Core Intelligence */}
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Core Intelligence (Phase 1)</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <Card title="Income Intelligence">
                                        <ul className="list-disc pl-4 text-sm text-text-secondary space-y-1">
                                            <li>Auto-detection across banks</li>
                                            <li>Custom categories</li>
                                            <li>Income source insights</li>
                                        </ul>
                                    </Card>
                                    <Card title="Expense Intelligence">
                                        <ul className="list-disc pl-4 text-sm text-text-secondary space-y-1">
                                            <li>Editable categories</li>
                                            <li>Transaction re-categorisation</li>
                                            <li>User control &gt; AI correctness</li>
                                        </ul>
                                    </Card>
                                    <Card title="Predictive Budgeting">
                                        <ul className="list-disc pl-4 text-sm text-text-secondary space-y-1">
                                            <li>Based on historical behavior</li>
                                            <li>Progress indicators</li>
                                            <li>Guidance, not enforcement</li>
                                        </ul>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* 04. AI-Powered Goal Management */}
                    <Section title="04. The Feasibility Engine">
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            Goal Management extends jAI from insight to decision support. The objective: Help users understand if a goal is <strong>Realistic, Borderline, or Not Realistic</strong>.
                        </p>

                        <div className="bg-surface border border-border rounded-2xl p-8 mb-8">
                            <h4 className="text-lg font-bold mb-6 text-foreground">How it Works</h4>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="font-semibold mb-2">1. Input & Data</h5>
                                    <p className="text-text-secondary text-sm">Goal details + User financial profile (Income/Expense prefilled from jAI). Always editable to preserve agency.</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-2">2. Backend AI Logic</h5>
                                    <p className="text-text-secondary text-sm">Calculates SIP capacity, cost-of-living adjustments, and evaluates achievability using asset class ROI assumptions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <FeatureBlock icon="📈" title="Optimization" desc="For unachievable goals, AI recommends: Step-up SIP, Increased Amount, or Extended Duration." />
                            <FeatureBlock icon="🧠" title="Calculated" desc="Each option is independently calculated. No feasibility logic runs on the client." />
                            <FeatureBlock icon="🔄" title="Continuity" desc="Selecting an option redirects to investment flows with context passed forward." />
                        </div>
                    </Section>

                    {/* 05. Execution */}
                    <Section title="05. Execution & Delivery">
                        <ul className="list-disc pl-5 space-y-4 text-text-secondary leading-relaxed">
                            <li>Designed end-to-end user and conversational flows.</li>
                            <li>Took explicit BA approvals before UI finalization.</li>
                            <li>Delivered Phase 1 screens with detailed notes on AI assumptions and edge cases.</li>
                            <li>Three major design iterations shaped by feasibility and compliance.</li>
                        </ul>
                    </Section>

                    {/* 06. Learnings */}
                    <Section title="06. Learnings">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card title="Constraint-Led Design">
                                <p className="text-text-secondary">Impact comes from shaping clarity within fixed decisions, not just removing constraints.</p>
                            </Card>
                            <Card title="Trust = Control">
                                <p className="text-text-secondary">Editability and explanation mattered more than advanced black-box prediction.</p>
                            </Card>
                            <Card title="Multilingual Systems">
                                <p className="text-text-secondary">Accessibility requires alignment across language, tone, data, and intent—not just copy.</p>
                            </Card>
                            <Card title="Emotional Sensitivity">
                                <p className="text-text-secondary">Labeling goals as &quot;not realistic&quot; must be paired with constructive paths forward.</p>
                            </Card>
                        </div>
                        <div className="mt-12 p-8 bg-surface/50 rounded-2xl border border-border text-center">
                            <p className="text-xl font-medium text-foreground mb-2">Closing Note</p>
                            <p className="text-text-secondary italic max-w-2xl mx-auto">
                                &quot;Designing AI-driven financial systems is not an idealized UX story. It’s a real product story about making intelligence accessible under strict constraints.&quot;
                            </p>
                        </div>
                    </Section>

                    {/* Footer Navigation */}
                    <div className="border-t border-border pt-12 flex justify-between items-center">
                        <span className="text-text-secondary text-sm">Next Project</span>
                        <Link href="/#works" className="text-xl md:text-2xl font-medium hover:text-accent transition-colors flex items-center gap-4 group">
                            All Works <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

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
        <div className="p-6 rounded-2xl bg-surface border border-border hover:border-text-secondary/20 transition-colors h-full">
            <h3 className="text-lg font-bold mb-4 text-foreground">{title}</h3>
            {children}
        </div>
    );
}

function FeatureBlock({ icon, title, desc }: { icon: string; title: string; desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-surface border border-border h-full">
            <div className="text-3xl mb-4">{icon}</div>
            <h4 className="font-bold text-foreground mb-2">{title}</h4>
            <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
        </div>
    );
}
