import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UX Process Reboot",
  description: "How I rebuilt my UX process to align teams before I draw a single screen.",
};

export default function UXProcessPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 container-page">
        <div className="max-w-4xl">
          <Link href="/works" className="inline-flex items-center text-label font-bold tracking-[0.1em] uppercase text-subtle hover:text-foreground transition-colors mb-8">
            <span className="mr-2">←</span> Back to Works
          </Link>
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-medium tracking-tight leading-[1.05] text-foreground mb-6">
            Validate First, Build Once.
          </h1>
          <p className="text-xl md:text-2xl font-normal text-metadata leading-relaxed">
            How I rebuilt my UX process to align teams before I draw a single screen.
          </p>
        </div>
      </section>

      {/* Meta Grid */}
      <section className="container-page mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-y border-rule">
          <div className="col-span-1">
            <h3 className="text-label font-bold tracking-[0.1em] uppercase text-subtle mb-2">Role</h3>
            <p className="text-sm font-medium text-foreground">Senior Product Designer</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-label font-bold tracking-[0.1em] uppercase text-subtle mb-2">Problem</h3>
            <p className="text-sm font-medium text-foreground">Weeks of production before direction testing</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-label font-bold tracking-[0.1em] uppercase text-subtle mb-2">Approach</h3>
            <p className="text-sm font-medium text-foreground">Six-stage AI-assisted workflow</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-label font-bold tracking-[0.1em] uppercase text-subtle mb-2">Result</h3>
            <p className="text-sm font-medium text-foreground">Team alignment before design starts</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-page pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Sticky Table of Contents */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-4 text-label font-bold tracking-[0.1em] uppercase text-subtle">
              <a href="#problem" className="hover:text-foreground transition-colors">The Problem</a>
              <a href="#process" className="hover:text-foreground transition-colors">The Process</a>
              <a href="#outcome" className="hover:text-foreground transition-colors">The Outcome</a>
              <a href="#reflection" className="hover:text-foreground transition-colors">What the Tools Don&apos;t Decide</a>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8 flex flex-col gap-24">
            
            {/* The Problem */}
            <div id="problem" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6">The Problem</h2>
              <p className="text-base text-metadata leading-relaxed mb-6">
                Design reviews have a moment when the room goes quiet. Someone points at screen twelve and asks a question that should have come up in week one. The flow doesn&apos;t work for their use case. The team starts over.
              </p>
              <p className="text-base text-metadata leading-relaxed mb-6">
                I sat through years of that moment. A requirement would land in Confluence, I&apos;d spend two weeks turning it into screens, and the first real feedback arrived after the work was done. Design reviews are supposed to catch what&apos;s wrong. By the time one happens, the team has already paid for finding it.
              </p>
              <p className="text-base text-metadata leading-relaxed mb-6">
                The version that cost the most was Shoonya. I was new to fintech, redesigning a trading platform, and I would finish a flow before learning it broke a compliance rule or needed data no API returned. The people who knew had worked in Indian broking long enough that those rules no longer registered as things worth saying out loud. Nobody was hiding anything. I did not know what to ask, and the answer arrived as rework. This process is what I built so that stopped happening.
              </p>
              <div className="bg-foreground text-on-foreground p-8 md:p-10 rounded-md mt-8">
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  Rebuilding cost more time than any other part of the job. I closed that gap. A requirement now becomes a walkable prototype within a day, and the team agrees on the product before I draw a single screen.
                </p>
              </div>
            </div>

            {/* The Process */}
            <div id="process" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-12">The Process (6 Stages)</h2>
              
              <div className="space-y-12">
                {/* Stage 1 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Stage 1</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">Catching gaps before I open a design tool</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    Every requirement starts as a Confluence page. Before I open a design tool, I run it through Rovo and ask it to flag missing flows and unstated edge cases.
                  </p>
                  <p className="text-sm text-subtle leading-relaxed p-4 bg-background rounded-md">
                    I used to find these gaps in design reviews, after I&apos;d already built the screens around them. A missing edge case meant redoing finished work. Rovo finds the same gaps before I draw anything. Requirements read complete on paper. Rovo finds where they aren&apos;t.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Stage 2</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">Structuring the screens before designing them</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    With the gaps closed, I feed the requirement into an AI tool that breaks it into a screen-by-screen structure: what each screen contains, and how it connects to the next one.
                  </p>
                  <p className="text-sm text-subtle leading-relaxed p-4 bg-background rounded-md">
                    That structure serves as the skeleton for the prototype. I don&apos;t make structural decisions and visual decisions in the same sitting.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Stage 3</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">A working prototype, same day</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    This used to be where I got stuck. Now I take the structure into Figma Make and generate a working prototype fast. It&apos;s rough. It&apos;s clickable enough that a stakeholder can walk the real flow instead of reading a spec.
                  </p>
                  <p className="text-sm text-subtle leading-relaxed p-4 bg-background rounded-md">
                    Then I bring it into one meeting. Product, engineering, and business see the same flow at the same time. We catch misalignment in thirty minutes instead of three weeks later in a design review. Only after the team agrees do I open Figma and build the real screens.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Stage 4</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">Copy that sounds like the brand</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    I keep a separate AI project loaded with our brand guidelines and product definition docs, tone of voice included. When a screen needs UX copy, I generate it against that project instead of writing from a blank page. 
                  </p>
                  <p className="text-sm text-subtle leading-relaxed p-4 bg-background rounded-md">
                    The output already sounds like us. I check it. I don&apos;t rewrite it.
                  </p>
                </div>

                {/* Stage 5 & 6 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Stage 5 & 6</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">Handing the design system to Codex & Running Research Alongside</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    I built our design system, colors, typography, components, as structured variables, and handed it to Codex. For most new screens, I point Codex at the system and get a usable screen back. I decide what&apos;s right. I review and adjust the generated screen instead of building it from a blank canvas.
                  </p>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    I use AI throughout to pull research and stress-test my assumptions against it. I also generate variations on a screen, so I choose between options instead of defending the first idea I had.
                  </p>
                  <p className="text-sm text-subtle leading-relaxed p-4 bg-background rounded-md">
                    Both tools get me to the judgment call faster. I still make it.
                  </p>
                </div>
              </div>
            </div>

            {/* The Outcome */}
            <div id="outcome" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6">The Outcome</h2>
              <div className="bg-surface p-8 md:p-10 rounded-md border border-rule">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                  I used to build for weeks and learn in a review whether I&apos;d built the right thing. Now alignment comes first.
                </p>
                <p className="text-base text-metadata leading-relaxed mt-6">
                  A requirement becomes a walkable prototype in a day. Stakeholders react to something real instead of a document, and design work starts once the team agrees on what done looks like. I know whether a flow works before I spend a week building it, so each screen gets built once.
                </p>
              </div>
            </div>

            {/* Reflection */}
            <div id="reflection" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6">What the Tools Don&apos;t Decide</h2>
              <p className="text-base text-metadata leading-relaxed mb-6">
                A tool cannot tell me whether a flow serves the user or whether a generated screen fits the system. I decide both, the same as before. What changed is timing: I decide before I build, so a review doesn&apos;t have to tell me I got it wrong.
              </p>
              <div className="bg-rule p-6 rounded-md mt-8">
                <p className="text-sm font-medium text-foreground leading-relaxed italic text-center">
                  &quot;The tools took over the production time I used to spend before I knew the direction was right. The decisions are still mine.&quot;
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
