import React from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "jAI Research Sprint",
  description: "UX Research case study on introducing AI to financial insights.",
};

export default function JAIResearchPage() {
  return (
    <div className="w-full bg-background min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 container-page">
        <div className="max-w-4xl">
          <Link href="/works" className="inline-flex items-center text-label font-bold tracking-[0.1em] uppercase text-subtle hover:text-foreground transition-colors mb-8">
            <span className="mr-2">←</span> Back to Works
          </Link>
          <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-medium tracking-tight leading-[1.05] text-foreground mb-6">
            Designing a clearer path to trusted financial insights.
          </h1>
          <p className="text-xl md:text-2xl font-normal text-metadata leading-relaxed">
            A one-week sprint that found users treating the screen as a spending tracker while the product led with AI.
          </p>
        </div>
      </section>

      {/* Meta Grid */}
      <section className="container-page mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-y border-rule">
          <div className="col-span-1">
            <h3 className="text-label font-bold tracking-[0.1em] uppercase text-subtle mb-2">Role</h3>
            <p className="text-sm font-medium text-foreground">Product Designer</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-label font-bold tracking-[0.1em] uppercase text-subtle mb-2">Timeline</h3>
            <p className="text-sm font-medium text-foreground">1 Week Sprint</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-label font-bold tracking-[0.1em] uppercase text-subtle mb-2">Product</h3>
            <p className="text-sm font-medium text-foreground">jAI (within Jumpp)</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-label font-bold tracking-[0.1em] uppercase text-subtle mb-2">Focus</h3>
            <p className="text-sm font-medium text-foreground">UX Research, Strategy, Interaction Design</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-page pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Sticky Table of Contents or Context */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-4 text-label font-bold tracking-[0.1em] uppercase text-subtle">
              <a href="#overview" className="hover:text-foreground transition-colors">Overview</a>
              <a href="#challenge" className="hover:text-foreground transition-colors">The Challenge</a>
              <a href="#constraints" className="hover:text-foreground transition-colors">Constraints & Approach</a>
              <a href="#findings" className="hover:text-foreground transition-colors">Key Findings</a>
              <a href="#synthesis" className="hover:text-foreground transition-colors">Synthesis & Principles</a>
              <a href="#response" className="hover:text-foreground transition-colors">Design Response</a>
              <a href="#reflection" className="hover:text-foreground transition-colors">Impact & Reflection</a>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8 flex flex-col gap-24">
            
            {/* Overview */}
            <div id="overview" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6">Overview</h2>
              <p className="text-base text-metadata leading-relaxed mb-6">
                jAI is an AI-powered financial assistant within the Jumpp app. The landing screen was intended to introduce users to personalized financial insights and encourage them to connect their bank account.
              </p>
              <p className="text-base text-metadata leading-relaxed mb-6">
                I got the opportunity to conduct UX research with real users, but we had a limited window and no dedicated research setup. Instead of waiting for the “perfect” study, we used the resources available to us: the existing screen, lightweight Google Forms, and a shared findings sheet.
              </p>
              <div className="bg-rule p-6 rounded-md mt-8">
                <p className="text-sm font-medium text-foreground leading-relaxed italic">
                  &quot;We wanted a fast, honest signal on what users noticed, what they understood, and what made them hesitate. Statistical significance was out of reach in a week.&quot;
                </p>
              </div>
            </div>

            {/* The Challenge */}
            <div id="challenge" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6">The Challenge</h2>
              <p className="text-base text-metadata leading-relaxed mb-8">
                The landing screen had to introduce a new AI interaction without undermining the familiar financial tools users already trusted, such as Spends and Budget.
              </p>
              <div className="bg-foreground text-on-foreground p-8 md:p-12 rounded-md">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-center">
                  How might we make the route to personalized insight obvious and compelling while giving users enough transparency and control to make an informed account-linking decision?
                </p>
              </div>
            </div>

            {/* Constraints */}
            <div id="constraints" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6">Working within constraints</h2>
              <p className="text-base text-metadata leading-relaxed mb-8">
                We had a short window to learn from real users while the product was still moving, and no research program to run it through.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface p-8 rounded-md">
                  <h3 className="text-lg font-bold text-foreground mb-4">Constraints</h3>
                  <ul className="list-disc pl-5 text-sm text-metadata leading-relaxed space-y-2">
                    <li>Limited time to recruit, test, and synthesize.</li>
                    <li>No dedicated usability-research platform.</li>
                    <li>A small, available participant pool (25 users).</li>
                    <li>No time to build a fully instrumented prototype.</li>
                  </ul>
                </div>
                <div className="bg-surface p-8 rounded-md border border-rule">
                  <h3 className="text-lg font-bold text-foreground mb-4">What we did instead</h3>
                  <p className="text-sm text-metadata leading-relaxed">
                    We used the existing jAI screen, created lightweight forms, asked first-impression questions, and consolidated the responses into a shared report. We treated the output as signals and hypotheses to validate later, not a verdict.
                  </p>
                </div>
              </div>
            </div>

            {/* Findings */}
            <div id="findings" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-12">What we learned</h2>
              
              <div className="space-y-12">
                {/* Finding 1 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Finding 01</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">Users approached the screen as a tracker first.</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    Spends and Budget were the dominant first actions (76%). Only a small number of participants said they would interact directly with jAI.
                  </p>
                  <p className="text-sm text-subtle leading-relaxed p-4 bg-background rounded-md">
                    <strong>Design Implication:</strong> jAI should complement the tracker mental model instead of competing with it. The experience needs to explain when jAI is useful after or alongside Spends, Budget, and Goals.
                  </p>
                </div>

                {/* Finding 2 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Finding 02</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">The screen caught attention without orienting anyone.</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    The jAI animation and &quot;Explore&quot; were the most visible elements. Motion attracts the eye without explaining what jAI can do or what the user gets from it.
                  </p>
                  <p className="text-sm text-subtle leading-relaxed p-4 bg-background rounded-md">
                    <strong>Design Implication:</strong> Retain motion only as a supporting brand or feedback element. Pair it with a concise value statement, example prompt, or visible insight outcome.
                  </p>
                </div>

                {/* Finding 3 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Finding 03</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">The path to personalized insight was ambiguous.</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    Users saw the CTA. They had no mental model of the sequence behind it: discover jAI, understand what it can reveal, preview the type of insight, and connect data to personalize that insight.
                  </p>
                  <p className="text-sm text-subtle leading-relaxed p-4 bg-background rounded-md">
                    <strong>Design Implication:</strong> The interface needs a visible value path alongside the AI presence. A user should be able to say what they will get before we ask them to link data.
                  </p>
                </div>

                {/* Finding 4 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Finding 04</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">Linking comprehension was stronger than linking confidence.</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    Participants understood the likely outcome (account linking), but comfort stayed moderate. Understanding the outcome did not make them confident about it.
                  </p>
                  <p className="text-sm text-subtle leading-relaxed p-4 bg-background rounded-md">
                    <strong>Design Implication:</strong> Improving the explanation of the linking outcome is necessary but insufficient. The flow must communicate data boundaries, user control, and the practical benefit of linking.
                  </p>
                </div>

                {/* Finding 5 & 6 */}
                <div className="border-l-2 border-foreground pl-6 md:pl-8">
                  <span className="text-label font-bold tracking-[0.1em] uppercase text-accent mb-2 block">Finding 05 & 06</span>
                  <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4">Trust signals matter, and digital comfort doesn&apos;t remove the need for oversight.</h3>
                  <p className="text-base text-metadata leading-relaxed mb-4">
                    Security, privacy, data misuse, and trust in AI were recurring concerns. Trust signals were most useful when they answered a specific concern about data access or control right at the decision point. Even digitally confident users required visibility and explanation.
                  </p>
                </div>
              </div>
            </div>

            {/* Synthesis */}
            <div id="synthesis" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-8">Synthesis & Opportunities</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-foreground">
                      <th className="py-4 pr-4 font-bold text-foreground text-sm uppercase tracking-wider">User Expectation</th>
                      <th className="py-4 px-4 font-bold text-foreground text-sm uppercase tracking-wider">Product Tension</th>
                      <th className="py-4 pl-4 font-bold text-foreground text-sm uppercase tracking-wider">Opportunity</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-metadata">
                    <tr className="border-b border-rule">
                      <td className="py-6 pr-4 align-top">&quot;Let me inspect my money.&quot;</td>
                      <td className="py-6 px-4 align-top">jAI competes with familiar tracker actions.</td>
                      <td className="py-6 pl-4 align-top font-medium text-foreground">Position jAI as the interpretation layer on top of tracking.</td>
                    </tr>
                    <tr className="border-b border-rule">
                      <td className="py-6 pr-4 align-top">&quot;Show me what I&apos;ll get.&quot;</td>
                      <td className="py-6 px-4 align-top">The personalized-insight path is unclear.</td>
                      <td className="py-6 pl-4 align-top font-medium text-foreground">Add a concrete preview and explicit next step.</td>
                    </tr>
                    <tr>
                      <td className="py-6 pr-4 align-top">&quot;Keep my data under my control.&quot;</td>
                      <td className="py-6 px-4 align-top">Linking is understood but emotionally risky.</td>
                      <td className="py-6 pl-4 align-top font-medium text-foreground">Explain access, boundaries, account scope, and control at the decision point.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-12 text-center p-8 border border-rule rounded-md bg-surface">
                <span className="text-label font-bold tracking-[0.1em] uppercase text-subtle mb-4 block">Resulting Design Principle</span>
                <p className="text-2xl font-medium text-foreground">Make the value visible before making the data request.</p>
              </div>
            </div>

            {/* Design Response */}
            <div id="response" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-8">Proposed Design Response</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface p-6 rounded-md border border-rule">
                  <span className="text-3xl font-light text-accent mb-4 block">1</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">Create three clear entry points</h3>
                  <p className="text-sm text-metadata leading-relaxed">Support the mental models already present on the screen: Track (Spends/Budget), Plan (Goals), and Understand (jAI insights).</p>
                </div>
                <div className="bg-surface p-6 rounded-md border border-rule">
                  <span className="text-3xl font-light text-accent mb-4 block">2</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">Concrete value path for CTA</h3>
                  <p className="text-sm text-metadata leading-relaxed">Communicate the outcome (&quot;Get personalized insights&quot;), answering what kind of insight, why data is needed, and what happens next.</p>
                </div>
                <div className="bg-surface p-6 rounded-md border border-rule">
                  <span className="text-3xl font-light text-accent mb-4 block">3</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">No-commitment sample insight</h3>
                  <p className="text-sm text-metadata leading-relaxed">Use Sample Data View or an example insight to demonstrate value before requesting access. Distinguish it from standard trackers.</p>
                </div>
                <div className="bg-surface p-6 rounded-md border border-rule">
                  <span className="text-3xl font-light text-accent mb-4 block">4</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">Design linking around control</h3>
                  <p className="text-sm text-metadata leading-relaxed">Explain only accurate capabilities at the decision moment. Clarify why linking is needed, what is accessed, and how to revoke it.</p>
                </div>
                <div className="bg-surface p-6 rounded-md border border-rule md:col-span-2">
                  <span className="text-3xl font-light text-accent mb-4 block">5</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">Animation as support, not explanation</h3>
                  <p className="text-sm text-metadata leading-relaxed">Keep animation if it contributes to personality, but provide stronger orientation cues through copy and clear hierarchy.</p>
                </div>
              </div>
            </div>

            {/* Impact & Reflection */}
            <div id="reflection" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-6">What the research changed</h2>
              <p className="text-base text-metadata leading-relaxed mb-6">
                Going in, I would have made jAI more prominent and called it solved. Participants showed me they already had a way to start, and that jAI had to earn both its usefulness and their trust before they would link an account.
              </p>
              
              <div className="bg-foreground text-on-foreground p-8 rounded-md mt-8 mb-12">
                <h3 className="text-sm font-bold uppercase tracking-wider text-on-foreground/70 mb-4">Focused Design Hypothesis</h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  &quot;Do not force an AI-first behavior. Make jAI the clearest next step when users want interpretation, and make the value visible before asking for financial data.&quot;
                </p>
              </div>

              <h3 className="text-xl font-medium tracking-tight text-foreground mb-4">Reflection & Limitations</h3>
              <p className="text-sm text-metadata leading-relaxed mb-4">
                The study moved the problem from discoverability to trust and mental models. It has clear limits:
              </p>
              <ul className="list-disc pl-5 text-sm text-metadata leading-relaxed space-y-2">
                <li>We need to observe participants complete real tasks rather than only reporting intent.</li>
                <li>The complete linking flow must be tested with a safe prototype.</li>
                <li>Future rounds should standardize question wording, preserve respondent-level data, and test the same instrument across all variants.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
