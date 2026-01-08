import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Process from "@/components/home/Process";
import Skills from "@/components/home/Skills";
import Experience from "@/components/home/Experience";
import Playground from "@/components/home/Playground";
import Footer from "@/components/home/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-900 selection:text-white">
            <Hero />
            <SelectedWork />
            <Process />
            <Skills />
            <Experience />
            <Playground />
            <Footer />
        </main>
    );
}
