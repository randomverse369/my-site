import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jumpp",
  description: "AI-powered neobanking app. Complex financial flows made approachable.",
};

export default function JumppCaseStudy() {
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
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] text-foreground mb-12">
            Jumpp
          </h1>
          <p className="text-2xl md:text-3xl text-foreground font-light tracking-tight leading-snug mb-16">
            AI-powered neobanking app. Complex financial flows made approachable.
          </p>

          {/* Metadata Bar */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-metadata/20 pt-8">
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Role</span>
              <span className="text-foreground font-light">Senior Product Designer</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Industry</span>
              <span className="text-foreground font-light">Fintech · Neobanking</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label font-mono uppercase tracking-wider text-metadata">Status</span>
              <span className="text-foreground font-light">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon + Live Link */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <div className="border border-metadata/20 rounded-md px-8 py-24 md:px-16 md:py-32 flex flex-col items-center text-center">
            
            <span className="text-label font-mono uppercase tracking-wider text-metadata mb-8">
              Case Study
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl text-metadata font-light leading-relaxed max-w-lg mb-12">
              I am still writing this one up. The product is live if you want to look.
            </p>

            <a
              href="https://jumpp.finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="label interactive inline-flex items-center gap-3 px-8 py-4 border border-accent text-accent rounded-sm hover:bg-accent hover:text-on-accent"
            >
              Visit Jumpp Live
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
