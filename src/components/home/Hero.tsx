import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero-section"
            className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden"
        >
            <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Column: Content */}
                <div className="flex flex-col justify-center space-y-8 lg:col-span-7">
                    <div className="space-y-6">
                        <h1 className="hero-reveal text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-white mix-blend-difference">
                            Bridging human experiences &
                            <br />
                            <span className="text-gray-500">complex systems</span>
                        </h1>

                        <p className="hero-reveal max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed">
                            6+ years of experience designing complex web and mobile products from discovery and research to UX, UI, and design systems.
                            I work closely with founders, product managers, and engineers to turn ambiguity into usable, business-ready solutions.
                        </p>
                    </div>

                    <div className="hero-reveal flex flex-wrap gap-4">
                        <Link
                            href="#work"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                        >
                            <ArrowRight className="w-4 h-4" />
                            View Work
                        </Link>
                        <a
                            href="mailto:hello@sachin.dev"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            hello@sachin.dev
                        </a>
                    </div>


                </div>

                {/* Right Column: Visual/Stats */}
                <div className="hero-reveal relative h-[500px] w-full lg:h-[600px] bg-white/5 rounded-[3rem] overflow-hidden border border-white/5 lg:col-span-5">
                    {/* Placeholder for Profile Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black mix-blend-overlay opacity-50" />

                    {/* This would be the image tag */}
                    {/* <Image src="/path/to/image.jpg" fill className="object-cover" alt="Sachin" /> */}

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-bold">IMAGE</span>
                    </div>


                </div>

            </div>
        </section>
    );
}
