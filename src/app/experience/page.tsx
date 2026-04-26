import ExperienceAccordion from "@/components/ExperienceAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience - Sachin Barnwal",
  description: "7 Years. 4 Companies. One Direction.",
};

export default function Experience() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto mb-32">
      
      {/* Page Header */}
      <div className="grid grid-cols-12 gap-6 pt-12 md:pt-24 mb-32 reveal-up in-view">
        <div className="col-span-12 md:col-span-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-foreground mb-12">
            7 Years. 4 Companies. One Direction.
          </h1>
          <p className="text-xl md:text-2xl text-metadata max-w-3xl leading-relaxed">
            From solo designer at a startup to building AI products at scale — every role moved closer to the intersection of design, systems, and intelligence.
          </p>
        </div>
      </div>

      {/* Full-bleed Staging Area */}
      <div className="grid grid-cols-12 gap-6 my-32 reveal-up in-view">
        <div className="col-span-12 aspect-video border border-metadata flex items-center justify-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-metadata">
            [ ASSET_RENDER_PENDING: CAREER_ARC ]
          </span>
        </div>
      </div>

      {/* Vertical Timeline Accordion */}
      <div className="mb-32 reveal-up in-view" style={{ transitionDelay: '0.1s' }}>
        <ExperienceAccordion />
      </div>

      {/* Recognition & Skills */}
      <div className="grid grid-cols-12 gap-6 border-t border-metadata/20 pt-24 reveal-up in-view" style={{ transitionDelay: '0.2s' }}>
        
        {/* Recognition */}
        <div className="col-span-12 md:col-span-4 mb-16 md:mb-0">
          <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata mb-8">
            Recognition
          </h2>
          <ul className="space-y-4">
            <li className="flex flex-col gap-1">
              <span className="text-lg text-foreground font-bold">85% Usability Score</span>
              <span className="text-[0.75rem] font-mono text-metadata">DigiMantra</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-lg text-foreground font-bold">Dream Team Award</span>
              <span className="text-[0.75rem] font-mono text-metadata">Tier5</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-lg text-foreground font-bold">Best Employee Performer</span>
              <span className="text-[0.75rem] font-mono text-metadata">Tutelage (2020 & 2021)</span>
            </li>
          </ul>
        </div>

        {/* Skills & Tools - Bento Blueprint */}
        <div className="col-span-12 md:col-span-8 border border-metadata relative">
          {/* Decorative corner accents */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-metadata bg-background z-10" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-metadata bg-background z-10" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-metadata bg-background z-10" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-metadata bg-background z-10" />

          <div className="border-b border-metadata p-6 md:p-8">
            <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">
              Skills & Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Design */}
            <div className="p-6 md:p-8 border-b sm:border-b-0 sm:border-r border-metadata">
              <h3 className="text-lg text-foreground font-bold mb-4">Design</h3>
              <ul className="space-y-2 text-metadata leading-relaxed">
                <li>Product Design</li>
                <li>UX Research</li>
                <li>Interaction Design</li>
                <li>Design Systems</li>
                <li>Usability Testing</li>
                <li>Prototyping</li>
              </ul>
            </div>

            {/* AI & Process */}
            <div className="p-6 md:p-8 border-b sm:border-b-0 lg:border-r border-metadata">
              <h3 className="text-lg text-foreground font-bold mb-4">AI & Process</h3>
              <ul className="space-y-2 text-metadata leading-relaxed">
                <li>AI-Assisted Prototyping</li>
                <li>Problem Framing</li>
                <li>AI Behaviour Design</li>
                <li>Prompt Engineering</li>
                <li>Design-Dev Handoff</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="p-6 md:p-8">
              <h3 className="text-lg text-foreground font-bold mb-4">Tools</h3>
              <ul className="space-y-2 text-metadata leading-relaxed">
                <li>Figma, Figma Make</li>
                <li>Lovable, Antigravity</li>
                <li>ChatGPT, Claude</li>
                <li>Gemini API, Google AI Studio</li>
                <li>Vercel</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
