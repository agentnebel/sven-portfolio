import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Vita from "@/components/Vita";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Vita />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
