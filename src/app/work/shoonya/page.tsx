"use client";

import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ShoonyaCaseStudy() {
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
              Shoonya <span className="text-text-secondary">Trading Platform</span>
            </h1>



            {/* Project Snapshot */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8 border border-border rounded-3xl bg-surface/50 backdrop-blur-sm">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Product</h3>
                <p className="font-medium text-foreground">Web & Mobile Trading Platform</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Industry</h3>
                <p className="font-medium text-foreground">Fintech / Trading</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Duration</h3>
                <p className="font-medium text-foreground">6 months</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">My Role</h3>
                <p className="font-medium text-foreground">Product Designer (UX / UI)</p>
              </div>
              <div className="col-span-2 md:col-span-2">
                <h3 className="text-xs uppercase tracking-widest text-text-secondary/60 mb-2 font-bold">Team</h3>
                <p className="font-medium text-foreground">Product Managers, Business Analysts, SMEs, Developers, External Design Agency</p>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Content Sections */}
        <div className="space-y-24">

          {/* 01. Context */}
          <Section title="01. Context & Background">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Shoonya is a trading platform designed for active retail traders, available across web and mobile. When I joined the organization, a redesign initiative was already in motion.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              The mobile app redesign had progressed significantly, and leadership decided to revamp the web trading platform in parallel. Due to internal trust and alignment challenges, an external design agency was hired to support research and design. I joined the project mid-way, inheriting partially designed features, an incomplete design system, fragmented design ownership, and active sprint timelines.
            </p>
          </Section>

          {/* 02. The Core Problem */}
          <Section title="02. The Core Problem">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              The primary challenge wasn’t just redesigning a trading platform — it was <strong>stabilizing design execution under constraints</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Key Challenges">
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-red-500 mt-1">×</span> Split start ownership between internal teams & agency
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 mt-1">×</span> Incomplete & inconsistently applied design system
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 mt-1">×</span> Frequent requirement changes from BAs and SMEs
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 mt-1">×</span> High dependency on design for development continuity
                  </li>
                </ul>
              </Card>
              <Card title="The Risks">
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">!</span> UI Inconsistency
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">!</span> Increased Rework
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">!</span> Design–development friction
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1">!</span> Delivery Delays
                  </li>
                </ul>
              </Card>
            </div>
          </Section>

          {/* 03. User Interviews */}
          <Section title="03. User Interviews (Initiative Under Constraints)">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Even though the redesign was already underway, I believed grounding decisions in real user needs was critical — especially for a high-stakes trading product. I independently conducted interviews with ~10 active Shoonya users.
            </p>
            <div className="p-8 border-l-4 border-indigo-500 bg-surface rounded-r-xl border-y border-r border-border">
              <h4 className="text-lg font-bold mb-4 text-foreground">Key Outcomes</h4>
              <p className="text-text-secondary mb-4">
                Synthesized recurring patterns and created user personas to help align both internal teams and the external design agency around user context. Insights were shared to reduce assumption-driven decisions.
              </p>
            </div>
          </Section>

          {/* 04. Personas */}
          <Section title="04. Personas (Condensed & Purposeful)">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Instead of creating multiple detailed personas, I distilled insights into 1–2 focused personas representing core trader behaviors.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureBlock
                icon="🎯"
                title="Goals"
                desc="Speed, clarity, confidence in execution."
              />
              <FeatureBlock
                icon="⏳"
                title="Constraints"
                desc="Time pressure and high cognitive load."
              />
              <FeatureBlock
                icon="📊"
                title="Usage Patterns"
                desc="Frequent monitoring and fast actions."
              />
            </div>
          </Section>

          {/* 05. Competitive Context */}
          <Section title="05. Competitive Context">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              To understand industry expectations and avoid usability gaps, I reviewed established trading platforms. The goal was not imitation, but to identify common patterns, validate hierarchy, and understand standard flows.
            </p>
            <Card title="Key Decisions Reinforced">
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✓</span> Placement of Watchlist, Positions, and Orders
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✓</span> Reducing friction in high-frequency actions
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500 mt-1">✓</span> Maintaining familiarity for experienced traders
                </li>
              </ul>
            </Card>
          </Section>

          {/* 06. My Role */}
          <Section title="06. My Role & Responsibilities">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Within this constrained setup, I acted as the execution and stabilization layer of the redesign.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Responsibilities">
                <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                  <li>Auditing and restructuring agency-provided Figma files</li>
                  <li>Rebuilding and aligning screens with the design system</li>
                  <li>Maintaining consistency across newly designed features</li>
                  <li>Organizing files, components, and iterations for developers</li>
                  <li>Acting as the design point-of-contact during sprints</li>
                </ul>
              </Card>
            </div>
          </Section>


          {/* 07. What I Did */}
          <Section title="07. What I Did (Execution Under Pressure)">
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureBlock
                icon="🎨"
                title="Design System Alignment"
                desc="Identified inconsistencies, extended the system, and ensured new screens adhered to shared components."
              />
              <FeatureBlock
                icon="⚡️"
                title="Screen & Flow Execution"
                desc="Recreated key features such as Watchlist, Trade flow, and Positions with detailed specs."
              />
              <FeatureBlock
                icon="🤝"
                title="Sprint Collaboration"
                desc="Prioritized screens based on dev needs and shared iterative updates to avoid blockers."
              />
            </div>
          </Section>


          {/* 08. Design Decisions */}
          <Section title="08. Design Decisions Under Constraints">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Given limited control over strategy and research direction, I focused on high-impact decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Priorities">
                <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                  <li>Prioritizing consistency over visual novelty</li>
                  <li>Reducing cognitive load in data-dense screens</li>
                  <li>Ensuring feasibility within existing front-end constraints</li>
                  <li>Balancing speed with system integrity</li>
                </ul>
              </Card>
            </div>
          </Section>

          {/* 09. Collaboration */}
          <Section title="09. Collaboration & Communication">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              I collaborated closely with Developers, Business Analysts, SMEs, and Product Managers.
            </p>
            <div className="bg-surface border border-border p-8 rounded-2xl">
              <h4 className="text-lg font-bold mb-4 text-foreground">My Approach</h4>
              <ul className="list-disc pl-5 space-y-2 text-text-secondary">
                <li>Ask clarifying questions early</li>
                <li>Push back on unclear or risky changes</li>
                <li>Adapt designs pragmatically when constraints required it</li>
              </ul>
            </div>
          </Section>

          {/* 10. Outcome */}
          <Section title="10. Outcome & Impact">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              While this project is ongoing / partially shipped, my contributions helped:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureBlock icon="🚀" title="No Bottlenecks" desc="Remove design bottlenecks during development." />
              <FeatureBlock icon="✨" title="Consistency" desc="Improve UI consistency across redesigned features." />
              <FeatureBlock icon="🔧" title="Less Friction" desc="Reduce design–development friction." />
              <FeatureBlock icon="🏗️" title="Foundation" desc="Establish a stronger foundation for scaling the design system." />
            </div>
          </Section>

          {/* 11. Reflection */}
          <Section title="11. Reflection & Learnings">
            <div className="bg-surface border border-border p-8 rounded-2xl">
              <p className="text-xl text-text-secondary leading-relaxed italic mb-6">
                &quot;This project reinforced that strong systems matter more than perfect screens. Design ownership clarity is critical, but adaptability is essential. Working on Shoonya strengthened my ability to operate effectively in complex, fast-moving environments.&quot;
              </p>
            </div>
          </Section>

          {/* 12. What I'd Do Differently */}
          <Section title="12. What I’d Do Differently">
            <ul className="list-disc pl-5 space-y-4 text-text-secondary text-lg">
              <li>Establish design ownership and workflows earlier.</li>
              <li>Align stakeholders on research insights sooner.</li>
              <li>Invest more time in validating high-risk flows before execution.</li>
            </ul>
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
