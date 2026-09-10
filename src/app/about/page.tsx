import { Metadata } from "next";
import AbstractGeometry from "@/components/AbstractGeometry";

export const metadata: Metadata = {
  title: "About",
  description: "Designer. Builder. AI Enthusiast.",
};

export default function About() {
  return (
    <div className="container-page mb-32 relative">
      
      {/* Abstract Geometry Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 h-[600px] right-0 left-auto w-full max-w-[800px] overflow-hidden opacity-50 hidden md:block">
        <AbstractGeometry />
      </div>

      {/* Page Header & Intro */}
      <div className="grid grid-cols-12 gap-6 pt-12 md:pt-24 mb-32 relative z-10">
        <div className="col-span-12 md:col-span-10 lg:col-span-8">
          <p className="text-label uppercase tracking-wider font-mono text-metadata mb-8">
            Designer. Builder. AI Enthusiast.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground mb-12">
            I kept taking the hardest problem in the room. Seven years of that led me to design and AI.
          </h1>
          <div className="text-xl md:text-2xl font-light text-metadata leading-relaxed space-y-6">
            <p>
              I started as a graphic designer at a small edtech startup. Me, a CEO who thought in revenue, and a queue of things that had to look good and work. I moved into UX chasing the second half of that.
            </p>
            <p>
              In UX I started using AI to push my own thinking rather than skip it. Seven years in, I design products that reason with the person using them.
            </p>
          </div>
        </div>
      </div>

      {/* How I got here (The Arc) */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            How I got here
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col gap-12 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          
          <div className="flex flex-col">
            <span className="text-label font-mono uppercase tracking-wider text-metadata mb-2">2019–2022 · Tutelage</span>
            <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
              The only designer in the building. I learned to ask what a screen was supposed to sell before I designed it.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-label font-mono uppercase tracking-wider text-metadata mb-2">2022–2024 · Tier5</span>
            <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
              I built Friender&apos;s design system from scratch. Most of what mattered happened before anyone opened Figma.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-label font-mono uppercase tracking-wider text-metadata mb-2">2024–2025 · DigiMantra</span>
            <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
              Enterprise platforms, where briefs arrived half-written. I spent the first week of a project working out what the client was asking for.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-label font-mono uppercase tracking-wider text-metadata mb-2">2025–Present · Finvasia</span>
            <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
              First designer in the building, again. This time on AI products for traders moving their own money, in a domain where half the constraints are regulatory and nobody thinks to tell you.
            </p>
          </div>

        </div>
      </div>

      {/* What I Believe & Currently */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        
        {/* What I Believe */}
        <div className="col-span-12 md:col-span-6 mb-16 md:mb-0 pr-0 md:pr-12">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata mb-12">
            What I Believe
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-foreground mb-4">AI is a thinking partner</h3>
              <p className="text-lg font-light text-metadata leading-relaxed">
                I use it to argue with my first idea. It gives me the three alternatives I would have skipped.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-foreground mb-4">Clarity is the job</h3>
              <p className="text-lg font-light text-metadata leading-relaxed">
                I don&apos;t open a design tool until I can state the problem in a sentence. The work I&apos;ve thrown away was work I started too early.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-foreground mb-4">Build to learn</h3>
              <p className="text-lg font-light text-metadata leading-relaxed">
                I built UXMantra to find out how an AI product behaves when I own every decision inside it.
              </p>
            </div>
          </div>
        </div>

        {/* Currently */}
        <div className="col-span-12 md:col-span-6 md:border-l border-metadata/20 pl-0 md:pl-12">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata mb-12">
            Currently
          </h2>
          <ul className="space-y-8 text-lg">
            <li className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
              <span className="text-label font-mono uppercase tracking-wider text-metadata w-32 shrink-0 pt-1">Working At:</span>
              <span className="text-foreground font-light leading-relaxed">Finvasia — Senior Product Designer. Building sensAI and Jumpp.</span>
            </li>
            <li className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
              <span className="text-label font-mono uppercase tracking-wider text-metadata w-32 shrink-0 pt-1">Building:</span>
              <span className="text-foreground font-light leading-relaxed">UXMantra. AI-powered UX research assistant. In development.</span>
            </li>
            <li className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
              <span className="text-label font-mono uppercase tracking-wider text-metadata w-32 shrink-0 pt-1">Interested In:</span>
              <span className="text-foreground font-light leading-relaxed">AI Behaviour Design, System Prompt Design, Conversation Design, AI Red Teaming.</span>
            </li>
            <li className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-4">
              <span className="text-label font-mono uppercase tracking-wider text-metadata w-32 shrink-0 pt-1">Open To:</span>
              <span className="text-foreground font-light leading-relaxed">Senior design roles at AI-focused companies and labs.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Beyond the work */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata">
            Beyond the work
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-6 text-xl font-light text-metadata leading-relaxed space-y-6">
          <p>
            I spend as much time on how an AI should behave as on how it looks. That took me into behaviour design, system prompt design, and the problem of what a good AI interaction feels like to sit through.
          </p>
          <p>
            I write about it on LinkedIn and build experiments on weekends. I also use Claude to pressure-test the same ideas I&apos;m designing around, which I&apos;ve stopped finding strange.
          </p>
        </div>
      </div>

    </div>
  );
}
