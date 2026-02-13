"use client";

import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Tier5CaseStudy() {
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
                            Tier 5 <span className="text-text-secondary">Enterprise Design System</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-12">
                            Establishing the organization&apos;s first &quot;Single Source of Truth,&quot; reducing design debt and increasing shipping velocity by ~3x.
                        </p>

                        {/* Project Snapshot */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 border border-border rounded-3xl bg-surface/50 backdrop-blur-sm">
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Context</h3>
                                <p className="font-medium text-foreground">Early-career milestone</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Role</h3>
                                <p className="font-medium text-foreground">Sole Owner & Lead</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Outcome</h3>
                                <p className="font-medium text-foreground">SSOT Established</p>
                            </div>
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Impact</h3>
                                <p className="font-medium text-foreground">~3x Velocity Increase</p>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Content Sections */}
                <div className="space-y-24">

                    {/* 01. The Challenge */}
                    <Section title="01. The Challenge: Scaling Without a Foundation">
                        <p className="text-lg text-text-secondary leading-relaxed mb-6">
                            Joining Tier 5 was my introduction to an Agile environment. While I quickly adapted to the sprint cadence, I identified a systemic issue affecting our velocity: <strong>Design Debt</strong>.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            Because we lacked a central library, every feature was designed from scratch or by copying existing screens. This led to:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card title="Visual Fragmentation">
                                <p className="text-text-secondary">Inconsistencies were rampant; for example, Input borders varied between <code className="bg-gray-100 px-1 rounded">#556677</code> and <code className="bg-gray-100 px-1 rounded">#948234</code> across different table rows.</p>
                            </Card>
                            <Card title="Subjective Debates">
                                <p className="text-text-secondary">&quot;Designer vs. Developer&quot; friction was high, centered on which implementation was &quot;correct&quot; rather than following a standard.</p>
                            </Card>
                            <Card title="Operational Waste">
                                <p className="text-text-secondary">We were spending sprint time reinventing patterns rather than solving user problems.</p>
                            </Card>
                        </div>
                    </Section>

                    {/* 02. The Initiative */}
                    <Section title="02. The Initiative: Stepping Up">
                        <p className="text-lg text-text-secondary leading-relaxed mb-6">
                            When I proposed a Design System to standardize our output, the Product Manager initially hesitated due to time constraints (&quot;We don&apos;t have time for that&quot;).
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            However, I persisted, advocating that a <strong>Single Source of Truth (SSOT)</strong> would ultimately save time by eliminating the constant back-and-forth. Leadership agreed to a pilot. During the kickoff meeting with the Product and Engineering leads, when asked who could drive this, I volunteered to take full ownership. Despite having never built a system before, I had researched the methodology extensively and was confident I could execute it. I moved to the whiteboard and mapped out the strategy immediately.
                        </p>
                    </Section>

                    {/* 03. Architecture & Token Strategy */}
                    <Section title="03. Architecture & Token Strategy">
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            We started with a comprehensive audit to establish a baseline. Referencing the Tier 5 Color Structure, I established a &quot;Primitive&quot; layer. I avoided arbitrary hex values in favor of a clear naming convention that separated <strong>Brand</strong> (Violet, Aqua) from <strong>Semantics</strong> (Red/Error, Yellow/Warning).
                        </p>

                        <div className="bg-surface border border-border rounded-2xl p-8 mb-8">
                            <h4 className="text-lg font-bold mb-6 text-foreground">Token Structure</h4>
                            <div className="space-y-8">
                                <div>
                                    <h5 className="font-semibold mb-2">1. Scale Definition</h5>
                                    <p className="text-text-secondary mb-4">To ensure flexibility for interactions, I defined a scale for every root color using a predictable modifier syntax:</p>
                                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <li className="p-3 bg-white border border-border rounded text-center text-sm font-mono">violet-lighter</li>
                                        <li className="p-3 bg-white border border-border rounded text-center text-sm font-mono">violet-light</li>
                                        <li className="p-3 bg-indigo-500 text-white rounded text-center text-sm font-mono border border-indigo-600 font-bold">violet-default</li>
                                        <li className="p-3 bg-indigo-700 text-white rounded text-center text-sm font-mono">violet-dark</li>
                                    </ul>
                                </div>

                                <div className="h-px bg-border w-full"></div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h5 className="font-semibold mb-2">2. Accessibility Compliance</h5>
                                        <p className="text-text-secondary">Crucially, we tested every tint and shade against <strong>WCAG 2.1 contrast ratios</strong>. This ensured that when we mapped tokens to functional elements, they remained accessible across all SaaS products.</p>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold mb-2">3. The Semantic Layer</h5>
                                        <p className="text-text-secondary">To make the system usable for developers, we mapped Root Tokens to semantic aliases (e.g., <code className="bg-gray-100 px-1 rounded">Background-primary</code> → <code className="bg-gray-100 px-1 rounded">violet-default</code>). This abstraction allowed us to manage themes easily.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* 04. Component Construction */}
                    <Section title="04. Component Construction & Validation">
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            Once the foundations were set, we moved to the molecular level. Based on our initial audit, we prioritized the high-impact components used across our enterprise SaaS products.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-foreground">Core Components</h4>
                                <p className="text-text-secondary mb-4">We standardized Inputs, Buttons, Cards, Modals, Drawers, and Complex Data Tables.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-4 text-foreground">Stress Testing</h4>
                                <p className="text-text-secondary mb-4">We didn&apos;t design these components in isolation. I applied the new components to existing, high-density screens to &quot;stress test&quot; the system. We asked: Does the hierarchy hold up? Are the table rows legible?</p>
                            </div>
                        </div>
                        <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100 mt-4">
                            <p className="text-foreground italic">
                                <strong>Refinement:</strong> This practical application revealed necessary tweaks in our token values, allowing us to refine the foundations before handing them off to development.
                            </p>
                        </div>
                    </Section>

                    {/* 05. Future-Proofing */}
                    <Section title="05. Future-Proofing: The Strategic Pivot">
                        <p className="text-lg text-text-secondary leading-relaxed mb-6">
                            Midway through the project, Figma released Native Variables. At the time, we were nearing completion using the Token Studio plugin. <strong>I faced a critical decision: finish fast with the plugin or pivot to native features. I chose to pivot.</strong>
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card title="The Logic">
                                <p className="text-text-secondary">Relying on a third-party plugin created an external dependency for the engineering team. Native variables would ensure better long-term performance and easier maintenance.</p>
                            </Card>
                            <Card title="The Execution">
                                <p className="text-text-secondary">I utilized a migration script to convert our styles to variables, successfully removing the plugin dependency before the final handoff.</p>
                            </Card>
                        </div>
                    </Section>

                    {/* 06. Governance & Implementation */}
                    <Section title="06. Governance & Implementation">
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            A Design System is only effective if it lives in the code, not just the design file.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-border shrink-0">
                                    📚
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground">Storybook Integration</h4>
                                    <p className="text-text-secondary">We collaborated closely with Front-End developers to implement the system in Storybook, ensuring code components matched design tokens 1:1.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-border shrink-0">
                                    🔄
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground">Governance</h4>
                                    <p className="text-text-secondary">We established a clear Changelog to track version updates, ensuring the system remained a living product rather than a static one-time delivery.</p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* 07. Results & Impact */}
                    <Section title="07. Results & Impact">
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            This project transformed how the Tier 5 product team operated:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <FeatureBlock
                                icon="🚀"
                                title="3x Velocity"
                                desc="By moving to a &quot;lego block&quot; workflow where we simply called existing components, we reduced design-to-dev handoff time significantly."
                            />
                            <FeatureBlock
                                icon="🎯"
                                title="Zero Subjectivity"
                                desc="The &quot;which hex code do I use?&quot; conversations dropped to zero. Developers had a clear reference."
                            />
                            <FeatureBlock
                                icon="🤝"
                                title="Culture Shift"
                                desc="It bridged the gap between Design and Engineering, turning a contentious relationship into a collaborative one."
                            />
                        </div>

                        <div className="border-t border-border pt-12">
                            <h4 className="text-lg font-bold text-foreground mb-4">Acknowledgments</h4>
                            <p className="text-text-secondary italic">
                                While I led the execution of this initiative, this all wouldn&apos;t be possible without the support and guidance of my Team Leader, Product Manager, and my fellow designer colleagues who trusted the vision and adopted the system.
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
        </div>);
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

function FeatureBlock({ icon, title, desc }: { icon: string; title: string; desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-surface border border-border">
            <div className="text-3xl mb-4">{icon}</div>
            <h4 className="font-bold text-foreground mb-2">{title}</h4>
            <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
        </div>
    );
}
