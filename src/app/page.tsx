import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Lazy load components below the fold to improve initial load time
const Vita = dynamic(() => import("@/components/Vita"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-900/20" />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-900/20" />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-900/20" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-40 w-full animate-pulse bg-gray-900/20" />,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <Vita />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
