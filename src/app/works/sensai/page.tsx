import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "sensAI Case Study - Sachin Barnwal",
  description: "First AI multi-agent trading intelligence platform in the Indian trading space.",
};

export default function SensAICaseStudy() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto mb-32">
      
      {/* Back Navigation */}
      <div className="pt-8 mb-16 reveal-up in-view">
        <Link 
          href="/#works" 
          className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata interactive hover:text-accent flex items-center gap-2"
        >
          <span className="text-accent">←</span> Back to Works
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="grid grid-cols-12 gap-6 mb-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-10 lg:col-span-9">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-foreground mb-12">
            sensAI
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-bold tracking-tight leading-snug mb-16">
            First AI multi-agent trading intelligence platform in the Indian trading space.
          </p>

          {/* Metadata Bar */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-metadata/20 pt-8">
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Role</span>
              <span className="text-foreground font-bold">Senior Product Designer</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Timeline</span>
              <span className="text-foreground font-bold">3 Months</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Company</span>
              <span className="text-foreground font-bold">Finvasia · Shoonya</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem & My Role */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Problem
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Trading platforms give you everything — and that's exactly the problem. Too much data, too fast, for users who just want one clear answer: should I act on this or not?
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-24">
            The brief that landed was simple on the surface: add an AI feature to help users make better trading decisions. What it didn't say was which decisions, for which users, through which interface, or what better actually meant. That ambiguity was the first thing to solve.
          </p>

          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-8">
            My Role
          </h2>
          <p className="text-lg text-metadata leading-relaxed">
            End-to-end product design — from problem framing to shipped interface. Worked directly with the AI/ML team throughout, which meant the design decisions had to account for what the models could actually deliver — not just what looked good in Figma. This wasn't a handoff project. It was a collaboration.
          </p>
        </div>
      </div>

      {/* Full-bleed Staging Area */}
      <div className="grid grid-cols-12 gap-6 my-32 reveal-up in-view">
        <div className="col-span-12 aspect-video border border-metadata flex items-center justify-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata">
            [ MOCKUP STAGING: 1920x1080 ]
          </span>
        </div>
      </div>

      {/* The Reframe */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Reframe
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
            "Two agents. Two jobs. One experience."
          </h3>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            The solution wasn't one AI feature. It was two distinct agents solving two distinct problems:
          </p>
          <ul className="space-y-6 mb-12 border-l border-accent/30 pl-6">
            <li>
              <span className="block text-foreground font-bold mb-1">1. Stock Screening Agent:</span>
              <span className="text-metadata">Let users search in plain English instead of technical filters.</span>
            </li>
            <li>
              <span className="block text-foreground font-bold mb-1">2. Financial Chat Agent:</span>
              <span className="text-metadata">Answered market questions in real time.</span>
            </li>
          </ul>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            The design challenge wasn't building either agent. It was making sure the user never felt the complexity of both.
          </p>
        </div>
      </div>

      {/* Inset Staging Area - Right Aligned */}
      <div className="grid grid-cols-12 gap-6 my-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-8 md:col-start-5 aspect-[4/3] border border-metadata flex items-center justify-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata">
            [ ASSET_RENDER_PENDING: AGENT_INTERFACE ]
          </span>
        </div>
      </div>

      {/* Oversized Pull Quote */}
      <div className="grid grid-cols-12 gap-6 my-48 reveal-up in-view">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-foreground border-l-4 border-accent pl-8 md:pl-12">
            "Multi-agent systems have a handoff problem. The moment a user crosses from one agent to another, the experience can fracture."
          </blockquote>
        </div>
      </div>

      {/* The Decision That Mattered */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Decision That Mattered
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-lg text-metadata leading-relaxed mb-8">
            The solution was a single unified interface with contextual tools. One entry point. The agents switch underneath. The user never notices. 
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            This required close collaboration with the AI/ML team — designing not just for the happy path, but for edge cases, failure states, and the moments where AI confidence was low.
          </p>
        </div>
      </div>

      {/* Inset Staging Area - Left Aligned */}
      <div className="grid grid-cols-12 gap-6 my-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-8 aspect-[4/3] border border-metadata flex items-center justify-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata">
            [ MOCKUP STAGING: SINGLE_ENTRY_POINT ]
          </span>
        </div>
      </div>

      {/* The Result */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Result
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col gap-2">
              <span className="text-accent text-3xl font-bold">—</span>
              <span className="text-foreground font-bold text-xl">First of its kind</span>
              <span className="text-metadata text-sm">In the Indian trading space.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-accent text-3xl font-bold">—</span>
              <span className="text-foreground font-bold text-xl">2 Agents</span>
              <span className="text-metadata text-sm">1 seamless experience.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-accent text-3xl font-bold">—</span>
              <span className="text-foreground font-bold text-xl">Plain English</span>
              <span className="text-metadata text-sm">Stock screening for every trader.</span>
            </div>
          </div>
          <p className="text-lg text-metadata leading-relaxed">
            sensAI shipped as part of Shoonya — a platform used by real traders making real decisions. The design reduced information overload at the moment it matters most and gave non-technical users access to intelligence previously locked behind complex filters.
          </p>
        </div>
      </div>

      {/* What I Learned (Final Quote) */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 reveal-up in-view">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-12">
            What I Learned
          </h2>
          <p className="text-2xl md:text-3xl text-foreground font-bold tracking-tight leading-snug mb-8">
            Designing for AI isn't about making the AI look impressive. It's about making the user feel capable. 
          </p>
          <p className="text-xl text-metadata leading-relaxed">
            The best moment in this project wasn't when the interface looked good — it was when a non-technical user searched for stocks in plain English and got exactly what they needed. The AI disappeared. The decision remained.
          </p>
        </div>
      </div>

    </div>
  );
}
