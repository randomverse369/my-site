import WorksList from "@/components/WorksList";
import QuoteBlock from "@/components/QuoteBlock";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto mb-32">
        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-6 pt-12 md:pt-24 mb-32 reveal-up in-view items-center">
          
          {/* Left Column: Intro Text */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2 mb-12 md:mb-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="live-indicator"></div>
              <p className="text-[0.75rem] uppercase tracking-wider font-mono text-metadata">
                SR. DESIGNER AND AI ENTHUSIAST
              </p>
            </div>
            <h1 className="text-5xl md:text-[64px] font-light tracking-tight leading-[0.9] text-foreground mb-12">
              Hi, I&apos;m Sachin Barnwal specialized in product design.
            </h1>
            <p className="text-lg md:text-xl font-light text-metadata max-w-2xl leading-relaxed">
              7 years designing products end-to-end. The last few spent embedding AI into the process — not as a shortcut, but as a thinking partner.
            </p>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-8 relative" style={{ transitionDelay: '0.1s' }}>
            <div className="w-full aspect-square md:aspect-[4/5] flex items-center justify-center relative rounded-[24px] overflow-hidden">
              <Image 
                src="/hero.svg"
                alt="Sachin Barnwal Hero Visual"
                fill
                className="object-cover md:object-contain rounded-[24px]"
                priority
              />
            </div>
          </div>

        </div>

        {/* Quick Stats - Bento Blueprint */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-32 reveal-up in-view border border-metadata relative">
          {/* Decorative corner accents */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-metadata bg-background z-10" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-metadata bg-background z-10" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-metadata bg-background z-10" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-metadata bg-background z-10" />
          
          <div className="col-span-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-metadata relative">
            <p className="text-4xl font-light tracking-tight text-foreground mb-2">7 Years</p>
            <p className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">End-to-end product design</p>
          </div>
          <div className="col-span-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-metadata">
            <p className="text-4xl font-light tracking-tight text-foreground mb-2">4 Industries</p>
            <p className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Fintech, SaaS, EdTech, Enterprise</p>
          </div>
          <div className="col-span-1 p-8 md:p-12">
            <p className="text-4xl font-light tracking-tight text-foreground mb-2">2 AI Products</p>
            <p className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">Built: sensAI + UXMantra</p>
          </div>
        </div>
      </div>

      {/* Works List Component */}
      <WorksList />

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto mb-32 mt-32">
        {/* Philosophy Quote */}
        <QuoteBlock />

        {/* Where I've worked */}
        <div className="grid grid-cols-12 gap-6 mt-48 reveal-up in-view border-t border-metadata/20 pt-16">
          <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
            <h2 className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">
              Where I&apos;ve worked
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 flex flex-col">
            <div className="flex justify-between items-center py-6 border-b border-metadata/20 group cursor-default">
              <span className="text-xl md:text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2">Finvasia</span>
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">2025–Present</span>
            </div>
            <div className="flex justify-between items-center py-6 border-b border-metadata/20 group cursor-default">
              <span className="text-xl md:text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2">DigiMantra</span>
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">2024–2025</span>
            </div>
            <div className="flex justify-between items-center py-6 border-b border-metadata/20 group cursor-default">
              <span className="text-xl md:text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2">Tier5</span>
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">2022–2024</span>
            </div>
            <div className="flex justify-between items-center py-6 group cursor-default">
              <span className="text-xl md:text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2">Tutelage</span>
              <span className="text-[0.75rem] font-mono uppercase tracking-wider text-metadata">2019–2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
