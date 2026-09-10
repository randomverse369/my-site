const links = [
  {
    name: "Download Resume",
    href: "/resume.pdf",
    download: "Sachin_Barnwal_Resume.pdf",
  },
  { name: "Get in touch", href: "mailto:sachin.aiux@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-rule bg-surface py-24 md:py-32">
      <div className="container-page flex flex-col">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="flex flex-col gap-6">
            {/* No hard breaks: the display sizes are fluid, so a fixed line
                pattern only holds at one viewport width. */}
            <h2 className="max-w-[574px] text-d1 font-light text-foreground text-balance">
              Let&apos;s build something that brings real value to users &amp;
              business
            </h2>
            <p className="text-xl font-light text-metadata">Open for Work</p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...(link.download
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      download: link.download,
                    }
                  : {})}
                className="label group flex items-center gap-2 text-foreground hover:text-accent"
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  &#8599;
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="label mt-16 flex flex-col gap-4 border-t border-rule pt-8 text-metadata md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Sachin Barnwal.</p>
          <p>Designed &amp; built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
