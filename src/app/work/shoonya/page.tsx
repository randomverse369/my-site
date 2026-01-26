import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function ShoonyaCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      {/* Navigation */}


      <main className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="fixed top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
        <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header / Hero */}
          {/* Header / Hero */}
          <header
            className="mb-24 reveal-anim"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Shoonya
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed mb-12">
              Stabilizing a Web Trading Platform Redesign Under Real-World Constraints
            </p>

            {/* Project Snapshot */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Product</h3>
                <p className="font-medium text-white/90">Web & Mobile Trading</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Industry</h3>
                <p className="font-medium text-white/90">Fintech / Trading</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Role</h3>
                <p className="font-medium text-white/90">Product Designer</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Timeline</h3>
                <p className="font-medium text-white/90">6 Months</p>
              </div>
            </div>
          </header>

          {/* Content Sections */}
          <div className="space-y-24">
            {/* Context */}
            <Section title="01. Context & Background">
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Shoonya is a trading platform designed for active retail traders. When I joined, a redesign initiative was already in motion. While the mobile app was progressing, the web platform revamp was launched in parallel with an external agency due to internal alignment challenges.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                I stepped in mid-way, inheriting partially designed features, an incomplete design system, and fragmented ownership. The goal was to stabilize delivery despite these complexities.
              </p>
            </Section>

            {/* Core Problem */}
            <Section title="02. The Core Problem">
              <p className="text-2xl font-light text-white/90 mb-8 leading-snug">
                The primary challenge wasn’t just redesigning a trading platform — it was <span className="text-purple-400">stabilizing design execution under constraints</span>.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card title="Key Challenges">
                  <ul className="space-y-3 text-white/70">
                    <li className="flex gap-3">
                      <span className="text-red-400 mt-1">×</span> Split ownership between internal teams & agency
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 mt-1">×</span> Incomplete design system application
                    </li>
                    <li className="flex gap-3">
                      <span className="text-red-400 mt-1">×</span> Frequent requirement changes
                    </li>
                  </ul>
                </Card>
                <Card title="The Risks">
                  <ul className="space-y-3 text-white/70">
                    <li className="flex gap-3">
                      <span className="text-orange-400 mt-1">!</span> UI Inconsistency
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-400 mt-1">!</span> Increased Rework
                    </li>
                    <li className="flex gap-3">
                      <span className="text-orange-400 mt-1">!</span> Delivery Delays
                    </li>
                  </ul>
                </Card>
              </div>
            </Section>

            {/* Interviews */}
            <Section title="03. User Research">
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Detailed research wasn&apos;t part of the initial agency scope, so I independently conducted interviews with ~10 active users to ground our decisions in reality.
              </p>
              <div className="p-8 border-l-2 border-purple-500 bg-white/5 rounded-r-xl">
                <h4 className="text-lg font-semibold mb-4 text-white">Key Insights</h4>
                <ul className="space-y-4">
                  <li className="text-white/70">
                    <strong className="text-white block mb-1">Speed is Currency</strong>
                    Traders need to execute high-frequency actions without navigating through deep menus.
                  </li>
                  <li className="text-white/70">
                    <strong className="text-white block mb-1">Information Density</strong>
                    Users prefer dense, data-rich views over &quot;clean&quot; whitespace when monitoring markets.
                  </li>
                </ul>
              </div>
            </Section>

            {/* Execution */}
            <Section title="04. Execution & Impact">
              <div className="grid gap-12">
                <div>
                  <h3 className="text-2xl font-medium mb-6">What I Did</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <FeatureBlock
                      icon="🎨"
                      title="System Alignment"
                      desc="Audited inconsistencies and extended the design system for new features."
                    />
                    <FeatureBlock
                      icon="⚡️"
                      title="Screen Execution"
                      desc="Recreated Watchlist, Trade Flow, and Positions with detailed specs."
                    />
                    <FeatureBlock
                      icon="🤝"
                      title="Collaboration"
                      desc="Clarified requirements with BAs/SMEs and prioritized dev handoffs."
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-medium mb-6">Reflections</h3>
                  <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-2xl border border-white/5">
                    <p className="text-xl text-white/80 leading-relaxed italic">
                      &quot;Working on Shoonya reinforced that strong systems matter more than perfect screens. In real-world constraints, adaptability and clear ownership are the true drivers of product quality.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Footer Navigation */}
            <div className="border-t border-white/10 pt-12 flex justify-between">
              <span className="text-white/40 text-sm">Next Project</span>
              <Link href="#" className="text-2xl font-medium hover:text-purple-400 transition-colors flex items-center gap-4 group">
                Coming Soon <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="reveal-anim">
      <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-8">{title}</h2>
      {children}
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
      <h3 className="text-lg font-medium mb-4 text-white/90">{title}</h3>
      {children}
    </div>
  );
}

function FeatureBlock({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/5">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}
