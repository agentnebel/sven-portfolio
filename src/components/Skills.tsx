"use client";

import { motion } from "framer-motion";

const skillsData = [
    { name: "Vibecoding", category: "Vibecoding Stack" },
    { name: "Google Antigravity", category: "Vibecoding Stack" },
    { name: "OpenClaw AI", category: "Vibecoding Stack" },
    { name: "LLMs & Prompt Eng.", category: "Vibecoding Stack" },
    { name: "n8n", category: "Vibecoding Stack" },
    { name: "Photography", category: "Creative" },
    { name: "Digital Experience", category: "Frontend" },
    { name: "Finance & Accounting", category: "Tools" },
    { name: "Project Management", category: "Tools" },
    { name: "Product Management", category: "Tools" },
];

export default function Skills() {
    // We'll create a double marquee effect (one moving left, one right)
    const topMarquee = skillsData.slice(0, 5);
    const bottomMarquee = skillsData.slice(5, 10);

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Frontend": return "text-electric-blue border-electric-blue/30 shadow-[0_0_15px_rgba(0,229,255,0.2)]";
            case "Backend": return "text-green-400 border-green-400/30 shadow-[0_0_15px_rgba(74,222,128,0.2)]";
            case "Tools": return "text-gray-300 border-gray-500/30 shadow-[0_0_15px_rgba(156,163,175,0.2)]";
            case "Creative": return "text-sunset-orange border-sunset-orange/30 shadow-[0_0_15px_rgba(255,94,0,0.2)]";
            case "Vibecoding Stack": return "text-cyber-purple border-cyber-purple/30 shadow-[0_0_15px_rgba(176,38,255,0.2)] neon-glow-purple";
            default: return "text-white border-white/20";
        }
    };

    return (
        <section className="relative w-full py-32 overflow-hidden bg-background border-t border-white/5" id="skills">

            {/* Background radial gradient to separate section visually */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    My Arsenal
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-400"
                >
                    A synthesis of global commerce operations, AI-driven logic, and visual storytelling.
                </motion.p>
            </div>

            <div className="relative flex flex-col gap-8 w-[200vw] sm:w-[150vw] md:w-[120vw] lg:w-[110vw] max-w-none left-1/2 -translate-x-1/2 select-none z-10">

                {/* Top Marquee (Left to Right) */}
                <div className="flex w-max py-6 relative z-20">
                    <motion.div
                        initial={{ x: "0%" }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="flex gap-6 pr-6"
                    >
                        {[...topMarquee, ...topMarquee].map((skill, index) => (
                            <div
                                key={index}
                                className={`glass px-8 py-4 rounded-[2rem] flex items-center justify-center whitespace-nowrap border transition-transform hover:scale-110 hover:-translate-y-2 cursor-none ${getCategoryColor(skill.category)}`}
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-2xl font-bold tracking-wider">{skill.name}</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono">{skill.category}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Marquee (Right to Left) */}
                <div className="flex w-max py-6 relative z-20">
                    <motion.div
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-6 pr-6"
                    >
                        {[...bottomMarquee, ...bottomMarquee].map((skill, index) => (
                            <div
                                key={index}
                                className={`glass px-8 py-4 rounded-[2rem] flex items-center justify-center whitespace-nowrap border transition-transform hover:scale-110 hover:-translate-y-2 cursor-none ${getCategoryColor(skill.category)}`}
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-2xl font-bold tracking-wider">{skill.name}</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono">{skill.category}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>

        </section>
    );
}
