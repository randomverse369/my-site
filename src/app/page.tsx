import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Playground from "@/components/home/Playground";
import Footer from "@/components/home/Footer";
import HowIWork from "@/components/home/HowIWork";

export default function Home() {
    return (
        <main className="min-h-screen text-white selection:bg-[#007AFF]/30 selection:text-white">
            <Hero />
            <SelectedWork />
            <HowIWork />
            <Skills />
            <Experience />
            <Playground />
            <Footer />
        </main>
    );
}


