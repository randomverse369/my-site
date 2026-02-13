import Hero from "@/components/home/Hero";
import Works from "@/components/home/Works";
import Experience from "@/components/home/Experience";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Works />
            <Experience />
            <About />
            <Contact />
        </main>
    );
}
