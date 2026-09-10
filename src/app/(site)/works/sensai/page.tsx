import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "sensAI",
  description: "First AI multi-agent trading intelligence platform in the Indian trading space.",
};

export default function SensAICaseStudy() {
  return (
    <div className="container-page mb-32">
      
      {/* Back Navigation */}
      <div className="pt-8 mb-16">
        <Link 
          href="/works" 
          className="text-label font-mono uppercase tracking-wider text-metadata interactive hover:text-accent flex items-center gap-2"
        >
          <span className="text-accent">←</span> Back to Works
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="grid grid-cols-12 gap-6 mb-32">
        <div className="col-span-12 md:col-span-10 lg:col-span-9">
          <p className="text-label uppercase tracking-wider font-mono text-metadata mb-8">
            AI PRODUCT · FINTECH
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] text-foreground mb-12">
            sensAI
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-light tracking-tight leading-snug mb-16">
            First AI multi-agent trading intelligence platform in the Indian trading space.
          </p>

          {/* Metadata Bar */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-metadata/20 pt-8">
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Role</span>
              <span className="text-foreground font-light">Senior Product Designer</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Timeline</span>
              <span className="text-foreground font-light">3 Months</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Company</span>
              <span className="text-foreground font-light">Finvasia · Shoonya</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem & My Role */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Problem
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Open a trading platform and the exchange feed arrives at full speed. Prices, volumes,
            ratios, order depth, live and unranked. You want one answer out of that. Should I act
            on this.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-24">
            The brief said: add an AI feature to help users make better trading decisions. Which
            decision, and better than what, were left to me. I spent the first weeks of the project
            answering both before I drew anything.
          </p>

          <h2 className="text-label font-mono uppercase tracking-wider text-metadata mb-8">
            My Role
          </h2>
          <p className="text-lg text-metadata leading-relaxed">
            I owned the design from framing the problem to the interface that shipped. I sat with
            the AI/ML team for the whole build, drawing against what the models actually returned. I
            went to the model reviews, and when confidence scores came back low I reworked the
            screens that leaned on them.
          </p>
        </div>
      </div>

      {/* Full-bleed Hero Image */}
      <div className="grid grid-cols-12 gap-6 my-32">
        <div className="col-span-12 overflow-hidden">
          <Image
            src="/main.svg"
            alt="sensAI — AI multi-agent trading intelligence platform"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* The Reframe */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Reframe
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8">
            I split it into two agents and gave them one surface.
          </h3>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            The two do different jobs:
          </p>
          <ul className="space-y-6 mb-12 border-l border-accent/30 pl-6">
            <li>
              <span className="block text-foreground font-light mb-1">1. Stock Screening Agent:</span>
              <span className="text-metadata">A trader types what they want in plain English, and skips building a technical filter.</span>
            </li>
            <li>
              <span className="block text-foreground font-light mb-1">2. Financial Chat Agent:</span>
              <span className="text-metadata">Answers market questions as they come.</span>
            </li>
          </ul>
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            The AI team built the agents. I had the seam between them, which is the place a trader
            would notice they were using two things instead of one.
          </p>
        </div>
      </div>

      {/* Full-bleed Image */}
      <div className="grid grid-cols-12 gap-6 my-32">
        <div className="col-span-12 overflow-hidden">
          <Image
            src="/main2.svg"
            alt="sensAI — Agent interface design"
            width={1280}
            height={960}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Oversized Pull Quote */}
      <div className="grid grid-cols-12 gap-6 my-48">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground border-l-4 border-accent pl-8 md:pl-12">
            &quot;A multi-agent system has a seam in it. The trader hits that seam mid-question, and if I get it wrong they start the question over.&quot;
          </blockquote>
        </div>
      </div>

      {/* The Decision That Mattered */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Decision That Mattered
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-lg text-metadata leading-relaxed mb-8">
            Both agents sit behind one input. The routing happens underneath it, so a trader asks a
            follow-up without learning which agent handled the first question.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            It also put the failure states on me. I designed those with the AI/ML team: what the
            screen says when the model is unsure of an answer, and what it offers a trader when it
            has nothing to give them.
          </p>
        </div>
      </div>

      {/* Full-bleed Image */}
      <div className="grid grid-cols-12 gap-6 my-32">
        <div className="col-span-12 overflow-hidden">
          <Image
            src="/main3.svg"
            alt="sensAI — Single entry point interface"
            width={1280}
            height={960}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* The Result */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata sticky top-32">
            What Shipped
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            sensAI runs inside Shoonya, where traders use it with their own money on the line.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            A trader who cannot build a technical filter describes what they are after and gets a
            list back. The chat agent picks up the follow-up. Both sit behind the one input, and the
            low-confidence and empty states went out with the rest of it rather than after.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            Finvasia has not published usage figures for sensAI. When there are numbers I can
            source, they go here.
          </p>
        </div>
      </div>

      {/* What I Learned (Final Quote) */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
          <h2 className="text-label font-mono uppercase tracking-wider text-metadata mb-12">
            What I Learned
          </h2>
          <p className="text-2xl md:text-3xl text-foreground font-light tracking-tight leading-snug mb-8">
            I judged this one on whether a trader stopped noticing the AI was there.
          </p>
          <p className="text-xl text-metadata leading-relaxed">
            A trader who had never built a screener typed what they were after and got the list
            back. Afterwards they talked about the stock and not about the model, which is what the
            routing underneath the input was for.
          </p>
        </div>
      </div>

    </div>
  );
}
