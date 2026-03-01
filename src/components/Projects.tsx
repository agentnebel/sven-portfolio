"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Github, ExternalLink } from "lucide-react";

// Authentic data scraped from GitHub profile "agentnebel"
const projectsData = [
    {
        id: 1,
        title: "Automated Performance Dashboard",
        description: "A monthly Core Web Vitals report tracking LCP, CLS, and INP for industry leaders like Canyon, Specialized, and Rose Bikes. Automated via GitHub Actions + CrUX API.",
        tags: ["Performance", "CrUX API", "Automation"],
        githubUrl: "https://github.com/agentnebel/cwv-monthly-report",
        demoUrl: "https://agentnebel.github.io/cwv-monthly-report/",
        isVibecoding: true,
    },
    {
        id: 2,
        title: "Daily Dose",
        description: "A productivity-focused application designed to streamline daily routines and enhance focus.",
        tags: ["Productivity", "Utility", "UX"],
        githubUrl: "https://github.com/agentnebel/dailydose",
        demoUrl: "https://agentnebel.github.io/dailydose/",
        isVibecoding: false,
    },
    {
        id: 3,
        title: "Vibecoding Portfolio",
        description: "Personal Portfolio and CV website built with Next.js and Framer Motion, featuring native SVG neon cursors and automated deployments.",
        tags: ["Next.js", "Tailwind", "GitHub Actions"],
        githubUrl: "https://github.com/agentnebel/sven-portfolio",
        demoUrl: "https://agentnebel.github.io/sven-portfolio/",
        isVibecoding: true,
    },
];

// Reusable card component to isolate mouse-follow hover state
const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        if (isHovered) {
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
        }

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isHovered]);

    return (
        <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            transitionSpeed={2500}
            className="h-full"
        >
            <div
                ref={cardRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative h-full flex flex-col p-6 rounded-2xl overflow-hidden glass transition-all duration-300 ${project.isVibecoding ? 'border-cyber-purple/40 shadow-[0_0_20px_rgba(176,38,255,0.1)]' : 'border-white/10'
                    }`}
            >
                {/* Mouse Follow Glow Effect */}
                {isHovered && (
                    <div
                        className="absolute z-0 pointer-events-none rounded-full blur-[80px] opacity-40 transition-opacity duration-300"
                        style={{
                            width: '150px',
                            height: '150px',
                            left: mousePos.x,
                            top: mousePos.y,
                            transform: 'translate(-50%, -50%)',
                            background: project.isVibecoding ? 'var(--color-cyber-purple)' : 'var(--color-electric-blue)'
                        }}
                    />
                )}

                <div className="relative z-10 flex-grow flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        <h3 className={`text-2xl font-bold tracking-tight ${project.isVibecoding ? 'neon-text-purple text-white' : 'text-white'}`}>
                            {project.title}
                        </h3>
                        {project.isVibecoding && (
                            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cyber-purple border border-cyber-purple/50 rounded-full animate-pulse-slow">
                                Theme Vibecoding
                            </span>
                        )}
                    </div>

                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                        {project.description}
                    </p>

                    <div className="mt-auto space-y-6">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs font-mono text-gray-300 bg-white/5 border border-white/10 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group relative"
                            >
                                <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-110 rounded-full transition-transform" />
                                <Github className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">Repo</span>
                            </a>
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group relative"
                            >
                                <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-110 rounded-full transition-transform" />
                                <ExternalLink className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">Live Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default function Projects() {
    return (
        <section id="projects" className="relative w-full py-32 bg-[#050510]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        GitHub Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Real code from agentnebel. Hover to interact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
