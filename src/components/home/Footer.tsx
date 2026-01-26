export default function Footer() {
    return (
        <footer className="py-32 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                <div className="space-y-8">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                        Let&apos;s Talk.
                    </h2>
                    <div className="flex flex-col gap-2">
                        <a href="mailto:hello@sachin.dev" className="text-gray-400 hover:text-white transition-colors text-xl">
                            hello@sachin.dev
                        </a>
                        <span className="text-gray-600 text-sm">Based in San Francisco • Remote Ready</span>
                    </div>
                </div>

                <div className="flex gap-8 text-sm font-mono text-gray-500 uppercase tracking-widest">
                    <a href="https://www.linkedin.com/in/sachinbarnwal/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="View LinkedIn profile">LinkedIn</a>
                    <a href="https://x.com/vyaktava" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Follow on X (Twitter)">X (Twitter)</a>
                    <a href="https://medium.com/@vyaktava" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Read articles on Medium">Medium</a>
                </div>

            </div>

            <div className="text-center mt-32 text-gray-800 text-xs">
                © {new Date().getFullYear()} Portfolio. Designed & Built with Next.js & Tailwind.
            </div>
        </footer>
    );
}
