import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shoonya Case Study - Sachin Barnwal",
  description: "A complete redesign of a B2C trading platform — web and mobile. Complexity made navigable.",
};

export default function ShoonyaCaseStudy() {
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
          <p className="text-[0.75rem] uppercase tracking-wider font-mono text-metadata mb-8">
            PRODUCT REDESIGN · FINTECH
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-foreground mb-12">
            Shoonya
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-bold tracking-tight leading-snug mb-16">
            A complete redesign of a B2C trading platform — web and mobile. Complexity made navigable.
          </p>

          {/* Metadata Bar */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-metadata/20 pt-8">
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Role</span>
              <span className="text-foreground font-bold">Senior Product Designer</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Platform</span>
              <span className="text-foreground font-bold">Web + Mobile</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Company</span>
              <span className="text-foreground font-bold">Finvasia</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Problem
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
            Shoonya had everything a trader needed. That was exactly the problem.
          </h3>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            The interface had accumulated complexity over time — too many elements competing for attention, no clear hierarchy, and a navigation system that assumed users already knew where everything was.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-8">
            Real users were getting lost. They couldn't tell at a glance how their portfolio was performing. Basic actions required too many steps. The platform felt like it was built for the product team, not the trader.
          </p>
          <p className="text-lg text-foreground font-bold leading-relaxed border-l-2 border-accent pl-6">
            The brief was a redesign. The real job was to give users clarity — especially at the moment that matters most: understanding how their money is performing, right now, without hunting for it.
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

      {/* The Approach */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata sticky top-32">
            The Approach
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Two platforms. One design language.
          </h3>
          <p className="text-lg text-metadata leading-relaxed mb-6">
            <span className="font-bold text-foreground">Mobile was tackled first</span> — with the team. Mobile forced the hard decisions early: what information is truly essential, and what is just noise? When screen real estate is limited, every element has to earn its place.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            <span className="font-bold text-foreground">Web followed</span> — and the decisions made on mobile became the foundation. The same clarity principles, expanded for a larger canvas.
          </p>
        </div>
      </div>

      {/* Inset Staging Area - Right Aligned */}
      <div className="grid grid-cols-12 gap-6 my-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-8 md:col-start-5 aspect-[4/3] border border-metadata flex items-center justify-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata">
            [ ASSET_RENDER_PENDING: MOBILE_FIRST_COMPONENTS ]
          </span>
        </div>
      </div>

      {/* Oversized Pull Quote */}
      <div className="grid grid-cols-12 gap-6 my-48 reveal-up in-view">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <blockquote className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground text-center">
            "Clarity isn't a visual style. It's a series of hard decisions."
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
          <p className="text-xl text-foreground font-bold leading-relaxed mb-8">
            The dashboard was the highest-leverage problem on the entire platform.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-6">
            Before the redesign, a trader opening Shoonya had to work to understand their own portfolio — scanning multiple sections, piecing together information that should have been immediate.
          </p>
          <p className="text-lg text-metadata leading-relaxed mb-6">
            The redesign made one thing the anchor of the entire dashboard: <strong className="text-foreground">at-a-glance portfolio performance.</strong> How is my money doing, right now, without a single extra tap.
          </p>
          <p className="text-lg text-metadata leading-relaxed">
            Everything else on the screen was reorganised around that single answer. If it didn't support that moment of clarity, it was moved, reduced, or removed.
          </p>
        </div>
      </div>

      {/* Full-bleed Staging Area */}
      <div className="grid grid-cols-12 gap-6 my-32 reveal-up in-view">
        <div className="col-span-12 aspect-video border border-metadata flex items-center justify-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata">
            [ MOCKUP STAGING: DASHBOARD_REDESIGN ]
          </span>
        </div>
      </div>

      {/* What Changed & The Result */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 mb-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata sticky top-32">
            Impact
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-7 border-l-0 md:border-l border-metadata/20 pl-0 md:pl-8">
          
          <h3 className="text-xl font-bold text-foreground mb-6">What Changed</h3>
          <ul className="space-y-6 mb-16">
            <li className="flex flex-col">
              <span className="text-foreground font-bold">Navigation</span>
              <span className="text-metadata">Rebuilt from scratch — users always know where they are.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-foreground font-bold">Dashboard</span>
              <span className="text-metadata">Portfolio performance visible at a glance. No hunting required.</span>
            </li>
            <li className="flex flex-col">
              <span className="text-foreground font-bold">Visual Hierarchy</span>
              <span className="text-metadata">Old design treated everything as equally important. New design doesn't.</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mb-6">The Result</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col gap-2">
              <span className="text-accent text-3xl font-bold">—</span>
              <span className="text-foreground font-bold text-xl">2 Platforms</span>
              <span className="text-metadata text-sm">One unified design language.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-accent text-3xl font-bold">—</span>
              <span className="text-foreground font-bold text-xl">At a Glance</span>
              <span className="text-metadata text-sm">Portfolio clarity without a single extra tap.</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-accent text-3xl font-bold">—</span>
              <span className="text-foreground font-bold text-xl">Retention</span>
              <span className="text-metadata text-sm">Measurable improvement post-redesign.</span>
            </div>
          </div>

          <p className="text-lg text-metadata leading-relaxed italic border-l-2 border-metadata/30 pl-6">
            The redesign gave Shoonya's users something the old platform never had — confidence. Confidence that they understood their portfolio. Confidence that they could act quickly when they needed to. A trader who feels in control stays on the platform. That's the business case for clarity.
          </p>

        </div>
      </div>

      {/* What I Learned */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 reveal-up in-view">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-12">
            What I Learned
          </h2>
          <p className="text-2xl md:text-3xl text-foreground font-bold tracking-tight leading-snug mb-8">
            Redesigns are harder than 0 to 1 builds.
          </p>
          <p className="text-xl text-metadata leading-relaxed mb-6">
            With a new product you're inventing constraints. With a redesign you're inheriting them — existing users, existing mental models, existing expectations about where things live.
          </p>
          <p className="text-xl text-metadata leading-relaxed">
            The discipline here wasn't adding. It was removing. Every element that survived the redesign had to justify its presence. The ones that couldn't were cut — even when stakeholders were attached to them.
          </p>
        </div>
      </div>

    </div>
  );
}
