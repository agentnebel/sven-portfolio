"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center w-full px-6 py-20">

            {/* Background Animated Gradient Meshes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                    style={{ willChange: "transform" }}
                    className="absolute -top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-cyber-purple/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                    style={{ willChange: "transform" }}
                    className="absolute top-1/2 -right-1/4 w-[60vw] h-[60vw] bg-electric-blue/20 rounded-full blur-[150px]"
                />

                {/* Particle System emulation layer could go here */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 md:space-y-8 mt-4 md:mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-block"
                >
                    <span className="px-4 py-2 rounded-full border border-cyber-purple/40 bg-cyber-purple/10 text-cyber-purple text-xs md:text-sm font-medium tracking-widest uppercase mb-4 shadow-[0_0_10px_rgba(176,38,255,0.2)]">
                        Welcome to my digital realm
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 drop-shadow-sm leading-tight px-2"
                >
                    Hi, I&apos;m <span className="text-white neon-text-blue whitespace-nowrap">Sven Belz.</span><br />
                    Scaling digital storefronts through the power of <span className="text-cyber-purple">Vibe Coding</span> and <span className="text-electric-blue">LLMs</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-md md:text-xl text-gray-400 font-light flex flex-wrap justify-center items-center gap-y-3"
                >
                    <span className="text-electric-blue neon-text-blue font-medium tracking-wide">E-commerce Ops</span>
                    <span className="text-sunset-orange mx-2 hidden sm:inline">•</span>
                    <span className="text-sunset-orange sm:hidden block w-full"></span>
                    <span className="text-cyber-purple neon-text-purple font-medium tracking-wide">AI Specialist</span>
                    <span className="text-sunset-orange mx-2 hidden sm:inline">•</span>
                    <span className="text-sunset-orange sm:hidden block w-full"></span>
                    <span className="text-sunset-orange drop-shadow-[0_0_8px_rgba(255,94,0,0.8)] font-medium tracking-wide">Photographer</span>
                    <span className="text-sunset-orange mx-2 hidden sm:inline">•</span>
                    <span className="text-sunset-orange sm:hidden block w-full"></span>
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] font-medium tracking-wide">Digital Creator</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="pt-8"
                >
                    <a href="#about" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-transparent border-2 border-electric-blue rounded-full hover:bg-electric-blue/10 neon-glow-blue overflow-hidden hover:scale-105 active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">
                            Explore My Universe
                            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/0 via-electric-blue/10 to-electric-blue/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                    </a>
                </motion.div>
            </div>

        </section>
    );
}
