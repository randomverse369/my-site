import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-24 md:py-32 bg-background border-t border-metadata/20">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        
        {/* Massive Call to Action */}
        <div className="col-span-12 md:col-span-9 mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground mb-6">
            Let's build something worth using.
          </h2>
          <p className="text-lg md:text-xl text-metadata max-w-2xl">
            Open to senior design roles at AI-focused companies.
          </p>
        </div>

        {/* Links */}
        <div className="col-span-12 md:col-span-3 flex flex-col md:items-end justify-start gap-4 mb-16 md:mb-0">
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download="Sachin_Barnwal_Resume.pdf"
            className="text-[0.75rem] font-mono tracking-wider uppercase text-foreground interactive hover:text-accent flex items-center gap-2"
          >
            Download Resume
            <span className="text-accent">↗</span>
          </a>
          <a 
            href="mailto:hello@example.com" 
            className="text-[0.75rem] font-mono tracking-wider uppercase text-foreground interactive hover:text-accent flex items-center gap-2"
          >
            Get in touch
            <span className="text-accent">↗</span>
          </a>
        </div>

        {/* Divider */}
        <div className="col-span-12 border-t border-metadata/20 my-8"></div>

        {/* Copyright */}
        <div className="col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[0.75rem] font-mono uppercase tracking-wider text-metadata">
          <p>© 2026 Sachin Barnwal.</p>
          <p>Designed & built with intention.</p>
        </div>

      </div>
    </footer>
  );
}
