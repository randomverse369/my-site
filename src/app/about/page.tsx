import { Metadata } from "next";
import AbstractGeometry from "@/components/AbstractGeometry";

export const metadata: Metadata = {
  title: "About - Sachin Barnwal",
  description: "Designer. Builder. AI Enthusiast.",
};

export default function About() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto mb-32 relative">
      
      {/* Abstract Geometry Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 h-[600px] right-0 left-auto w-full max-w-[800px] overflow-hidden opacity-50 hidden md:block">
        <AbstractGeometry />
      </div>

      {/* Page Header & Intro */}
      <div className="grid grid-cols-12 gap-6 pt-12 md:pt-24 mb-32 reveal-up in-view relative z-10">
        <div className="col-span-12 md:col-span-10 lg:col-span-8">
          <p className="text-[0.75rem] uppercase tracking-wider font-mono text-metadata mb-8">
            Designer. Builder. AI Enthusiast.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-foreground mb-12">
            I didn&apos;t plan to end up at the intersection of design and AI. I just kept following the most interesting problem in the room.
          </h1>
          <div className="text-xl md:text-2xl text-metadata leading-relaxed space-y-6">
            <p>
              I started as a graphic designer at a small edtech startup — just me, a CEO who thought in business terms, and a thousand things that needed to look good and work well. That gap between looking good and working well is what pulled me into UX.
            </p>
            <p>
              And once I was in UX, AI pulled me further — not as a tool to outsource thinking, but as a medium to extend it. Seven years later, I design products that think alongside the people using them.
            </p>
          </div>
        </div>
      </div>

      {/* How I got here (The Arc) */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view" style={{ transitionDelay: '0.1s' }}>
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata sticky top-32">
            How I got here
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col gap-12 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          
          <div className="flex flex-col">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-2">2019–2022 · Tutelage</span>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Started as the only designer in the building. Learned that design without business context is decoration.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-2">2022–2024 · Tier5</span>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Built systems that made teams faster. Discovered that the best design work happens before the screen.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-2">2024–2025 · DigiMantra</span>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Worked on enterprise platforms where ambiguity was the default. Turned unclear briefs into clear problems.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-2">2025–Present · Finvasia</span>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              First designer in the building — again. This time building AI products that reduce complexity for real users making real decisions.
            </p>
          </div>

        </div>
      </div>

      {/* What I Believe & Currently */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view" style={{ transitionDelay: '0.2s' }}>
        
        {/* What I Believe */}
        <div className="col-span-12 md:col-span-6 mb-16 md:mb-0 pr-0 md:pr-12">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-12">
            What I Believe
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">AI is a thinking partner</h3>
              <p className="text-lg text-metadata leading-relaxed">
                Not a shortcut. The best use of AI in design is to question harder, not just move faster.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Clarity is the job</h3>
              <p className="text-lg text-metadata leading-relaxed">
                Before any screen gets designed, the problem needs to be clear. Most design failures happen upstream.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Build to learn</h3>
              <p className="text-lg text-metadata leading-relaxed">
                UXMantra exists because the best way to understand AI products is to build one.
              </p>
            </div>
          </div>
        </div>

        {/* Currently */}
        <div className="col-span-12 md:col-span-6 md:border-l border-metadata/20 pl-0 md:pl-12">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-12">
            Currently
          </h2>
          <ul className="space-y-8 text-lg">
            <li className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata w-32 shrink-0 pt-1">Working At:</span>
              <span className="text-foreground leading-relaxed">Finvasia — Senior Product Designer. Building sensAI and Jumpp.</span>
            </li>
            <li className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata w-32 shrink-0 pt-1">Building:</span>
              <span className="text-foreground leading-relaxed">UXMantra. AI-powered UX research assistant. In development.</span>
            </li>
            <li className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata w-32 shrink-0 pt-1">Interested In:</span>
              <span className="text-foreground leading-relaxed">AI Behaviour Design, System Prompt Design, Conversation Design, AI Red Teaming.</span>
            </li>
            <li className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata w-32 shrink-0 pt-1">Open To:</span>
              <span className="text-foreground leading-relaxed">Senior design roles at AI-focused companies and labs.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Beyond the work */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 reveal-up in-view" style={{ transitionDelay: '0.3s' }}>
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">
            Beyond the work
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-6 text-xl text-metadata leading-relaxed space-y-6">
          <p>
            I think seriously about how AI should behave — not just how it should look. That&apos;s pulled me toward AI behaviour design, system prompt design, and the question of what good AI interaction actually feels like. 
          </p>
          <p>
            I write about this on LinkedIn. I build experiments in my own time. And I use Claude to think harder about hard problems — which is either very meta or very practical, depending on how you look at it.
          </p>
        </div>
      </div>

    </div>
  );
}
