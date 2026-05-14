import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Works - Sachin Barnwal",
  description: "Things I've built that are worth your time.",
};

export default function Works() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto mb-32 relative">
      
      {/* SECTION 1 — HERO */}
      <div className="grid grid-cols-12 gap-6 pt-12 md:pt-24 mb-32 reveal-up in-view relative z-10">
        <div className="col-span-12 md:col-span-10 lg:col-span-8">
          <p className="text-[0.75rem] uppercase tracking-wider font-mono text-metadata mb-8">
            Works
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] text-foreground mb-12">
            Things I&apos;ve built<br />that are worth your time.
          </h1>
          <p className="text-xl md:text-2xl font-light text-metadata max-w-3xl leading-relaxed">
            Product design, AI systems, and everything in between.
          </p>
        </div>
      </div>

      {/* SECTION 2 — FEATURED WORK */}
      <div className="mb-32 reveal-up in-view" style={{ transitionDelay: '0.1s' }}>
        <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-16">
          Selected Projects
        </h2>

        <div className="flex flex-col space-y-32">
          {/* CARD 1 — sensAI */}
          <div className="grid grid-cols-12 gap-6 md:gap-12 border-b border-metadata/20 pb-32">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <p className="text-[0.75rem] uppercase tracking-wider font-mono text-metadata mb-4">
                AI Product · Fintech
              </p>
              <div className="relative mb-6">
                <span className="absolute -left-8 md:-left-12 -top-4 md:-top-6 text-6xl md:text-8xl font-bold text-metadata/10 select-none">
                  01
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground relative z-10">
                  sensAI
                </h2>
              </div>
              <div className="space-y-6 text-lg font-light text-metadata leading-relaxed mb-12">
                <p>
                  The Indian trading space had an information overload problem. sensAI solved it with two agents — a plain English stock screener and a real-time financial chat assistant — wrapped in one seamless interface.
                </p>
                <p className="text-foreground font-light border-l-2 border-accent pl-4">
                  First of its kind in the Indian trading space.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 border-t border-metadata/20 pt-6 mb-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Role</span>
                  <span className="font-bold text-foreground">Senior Product Designer</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Company</span>
                  <span className="font-bold text-foreground">Finvasia · Shoonya</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Type</span>
                  <span className="font-bold text-foreground">0 to 1 AI Product</span>
                </div>
              </div>
              <Link href="/works/sensai" className="text-accent font-bold interactive hover:translate-x-2 w-fit flex items-center gap-2">
                View Case Study <span>→</span>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-7 order-first lg:order-last">
              <div className="w-full aspect-[4/3] flex items-center justify-center border border-metadata rounded-[4px] overflow-hidden relative">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata">
                  [ MOCKUP STAGING: sensAI — Product Overview ]
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 — Shoonya */}
          <div className="grid grid-cols-12 gap-6 md:gap-12 border-b border-metadata/20 pb-32">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <p className="text-[0.75rem] uppercase tracking-wider font-mono text-metadata mb-4">
                Product Redesign · Fintech
              </p>
              <div className="relative mb-6">
                <span className="absolute -left-8 md:-left-12 -top-4 md:-top-6 text-6xl md:text-8xl font-bold text-metadata/10 select-none">
                  02
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground relative z-10">
                  Shoonya
                </h2>
              </div>
              <div className="space-y-6 text-lg font-light text-metadata leading-relaxed mb-12">
                <p>
                  A complete redesign of a B2C trading platform across web and mobile. The old interface had everything a trader needed — and made it impossible to find.
                </p>
                <p className="text-foreground font-light border-l-2 border-accent pl-4">
                  The redesign made one thing the anchor: at-a-glance portfolio clarity, without a single extra tap.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 border-t border-metadata/20 pt-6 mb-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Role</span>
                  <span className="font-bold text-foreground">Senior Product Designer</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Company</span>
                  <span className="font-bold text-foreground">Finvasia</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Type</span>
                  <span className="font-bold text-foreground">Platform Redesign</span>
                </div>
              </div>
              <Link href="/works/shoonya" className="text-accent font-bold interactive hover:translate-x-2 w-fit flex items-center gap-2">
                View Case Study <span>→</span>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-7 order-first lg:order-last">
              <div className="w-full aspect-[4/3] flex items-center justify-center border border-metadata rounded-[4px] overflow-hidden relative">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata text-center px-4">
                  [ MOCKUP STAGING: Shoonya — Dashboard Redesign ]
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3 — Jumpp */}
          <div className="grid grid-cols-12 gap-6 md:gap-12 border-b border-metadata/20 pb-32">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <p className="text-[0.75rem] uppercase tracking-wider font-mono text-metadata mb-4">
                AI Product · Neobanking
              </p>
              <div className="relative mb-6">
                <span className="absolute -left-8 md:-left-12 -top-4 md:-top-6 text-6xl md:text-8xl font-bold text-metadata/10 select-none">
                  03
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground relative z-10">
                  Jumpp
                </h2>
              </div>
              <div className="space-y-6 text-lg font-light text-metadata leading-relaxed mb-12">
                <p>
                  Banking apps have an onboarding problem. Too many steps, too much friction, too many users dropping off before they ever see the product.
                </p>
                <p className="text-foreground font-light border-l-2 border-accent pl-4">
                  Jumpp is an AI-powered neobanking app designed from the ground up for simplicity — complex financial flows made approachable, onboarding rebuilt to get users to value faster.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 border-t border-metadata/20 pt-6 mb-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Role</span>
                  <span className="font-bold text-foreground">Senior Product Designer</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Company</span>
                  <span className="font-bold text-foreground">Finvasia</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Type</span>
                  <span className="font-bold text-foreground">AI-Powered Mobile App · 0 to 1</span>
                </div>
              </div>
              <Link href="/works/jumpp" className="text-accent font-bold interactive hover:translate-x-2 w-fit flex items-center gap-2">
                View Case Study <span>→</span>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-7 order-first lg:order-last">
              <div className="w-full aspect-[4/3] flex items-center justify-center border border-metadata rounded-[4px] overflow-hidden relative">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata text-center px-4">
                  [ MOCKUP STAGING: Jumpp — App Design ]
                </span>
              </div>
            </div>
          </div>

          {/* CARD 4 — Friender */}
          <div className="grid grid-cols-12 gap-6 md:gap-12 border-b border-metadata/20 pb-32">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <p className="text-[0.75rem] uppercase tracking-wider font-mono text-metadata mb-4">
                SaaS Product · Lead Generation
              </p>
              <div className="relative mb-6">
                <span className="absolute -left-8 md:-left-12 -top-4 md:-top-6 text-6xl md:text-8xl font-bold text-metadata/10 select-none">
                  04
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground relative z-10">
                  Friender
                </h2>
              </div>
              <div className="space-y-6 text-lg font-light text-metadata leading-relaxed mb-12">
                <p>
                  Most businesses ignore their existing network. Friender was built to fix that — a SaaS platform that turns Facebook connections into a structured lead generation pipeline.
                </p>
                <p className="text-foreground font-light border-l-2 border-accent pl-4">
                  Built the design system from scratch. The result: 3x faster feature shipping, cleaner handoffs, and a product that felt like a single coherent tool instead of a collection of features.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 border-t border-metadata/20 pt-6 mb-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Role</span>
                  <span className="font-bold text-foreground">Product Designer</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Company</span>
                  <span className="font-bold text-foreground">Tier5</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Type</span>
                  <span className="font-bold text-foreground">SaaS Platform · Design System</span>
                </div>
              </div>
              <Link href="/works/friender" className="text-accent font-bold interactive hover:translate-x-2 w-fit flex items-center gap-2">
                View Case Study <span>→</span>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-7 order-first lg:order-last">
              <div className="w-full aspect-[4/3] flex items-center justify-center border border-metadata rounded-[4px] overflow-hidden relative">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata text-center px-4">
                  [ MOCKUP STAGING: Friender — Platform Design ]
                </span>
              </div>
            </div>
          </div>

          {/* CARD 5 — UXMantra */}
          <div className="grid grid-cols-12 gap-6 md:gap-12 opacity-90 pb-16">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <p className="text-[0.75rem] uppercase tracking-wider font-mono text-metadata mb-4">
                Personal Project · AI Tool
              </p>
              <div className="relative mb-6">
                <span className="absolute -left-8 md:-left-12 -top-4 md:-top-6 text-6xl md:text-8xl font-bold text-metadata/10 select-none">
                  05
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground relative z-10">
                  UXMantra
                </h2>
              </div>
              <div className="space-y-6 text-lg font-light text-metadata leading-relaxed mb-12">
                <p>
                  Most UX decisions get made on instinct and defended with opinion.
                </p>
                <p>
                  UXMantra is an AI agent built to fix that — thinking alongside designers and grounding decisions in real research at the moment they&apos;re being made.
                </p>
              </div>
              <div className="flex flex-wrap gap-8 border-t border-metadata/20 pt-6 mb-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Role</span>
                  <span className="font-bold text-foreground">Solo Builder</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Built with</span>
                  <span className="font-bold text-foreground">Gemini API · Vercel</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[0.65rem] font-mono uppercase tracking-wider text-metadata">Type</span>
                  <span className="font-bold text-foreground">AI Product</span>
                </div>
              </div>
              <div className="inline-flex items-center justify-center px-4 py-2 border border-accent text-accent text-[0.75rem] font-mono uppercase tracking-wider font-bold rounded-[4px] w-fit">
                Coming Soon
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 order-first lg:order-last">
              <div className="w-full aspect-[4/3] flex items-center justify-center border border-metadata/50 rounded-[4px] overflow-hidden relative opacity-70">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata text-center px-4">
                  [ MOCKUP STAGING: UXMantra — Coming Soon ]
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 3 — PERSONAL PROJECT CALLOUT */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view" style={{ transitionDelay: '0.2s' }}>
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata sticky top-32">
            Beyond Client Work
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8">
                Building in public.
              </h3>
              <div className="space-y-6 text-lg font-light text-metadata leading-relaxed">
                <p>
                  UXMantra started as a question — why do designers make decisions without research backing them?
                </p>
                <p>
                  It became a product. Built independently using Gemini API, prototyped in Google AI Studio, deployed on Vercel.
                </p>
                <p className="font-bold text-foreground">
                  Currently in active development.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-12 justify-center">
              <div>
                <p className="text-2xl font-light text-foreground mb-2">Gemini API</p>
                <p className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Powering UXMantra&apos;s research engine</p>
              </div>
              <div>
                <p className="text-2xl font-light text-foreground mb-2">Vercel</p>
                <p className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Deployed and live in development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 — CTA */}
      {/* We skip a heavy CTA block here because the global Footer already handles the main CTA */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-16 reveal-up in-view text-center md:text-left" style={{ transitionDelay: '0.3s' }}>
        <div className="col-span-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-2">
              Have a project in mind?
            </h2>
            <p className="text-lg font-light text-metadata">
              Currently open to senior design roles at AI-focused companies and labs.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="inline-flex items-center justify-center px-6 py-3 border border-metadata text-[0.75rem] font-mono uppercase tracking-wider text-foreground interactive hover:border-accent hover:text-accent rounded-[4px] gap-2"
            >
              Download Resume <span>↗</span>
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background text-[0.75rem] font-mono uppercase tracking-wider interactive hover:bg-accent rounded-[4px] gap-2"
            >
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
