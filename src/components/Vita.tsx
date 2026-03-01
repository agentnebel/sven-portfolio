"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Camera, Settings } from "lucide-react";

// Placeholder data until user provides their LinkedIn CV
const vitaData = [
    {
        id: 1,
        type: "operations",
        title: "Operations & System Management",
        company: "E-Commerce Operations Manager",
        date: "7+ Years Experience",
        description: "Ownership of Salesforce Commerce Cloud. Focused on Performance Excellence (Core Web Vitals LCP < 2.4s, INP < 500ms). Expertise in system stability and Identity/Access Management.",
    },
    {
        id: 2,
        type: "experience",
        title: "Processes & Product Dev",
        company: "Requirements Engineering",
        date: "Agile / Scrum",
        description: "Bridging the gap between Business, Tech, and external stakeholders. Creating workflows, process charts, and rapid prototypes to validate and deploy new features.",
    },
    {
        id: 3,
        type: "education",
        title: "Finance & Compliance",
        company: "Governance & Finance Ops",
        date: "End-to-End Audit",
        description: "Ensuring GDPR-compliant data workflows and enforcing data protection regulations (Cookie Consent, Right to Privacy). Managing licensing, budgets, and operational payment interfaces.",
    },
    {
        id: 4,
        type: "photography",
        title: "Professional Photography",
        company: "Visual Arts & Storytelling",
        date: "10+ Years Experience",
        description: "A decade of expertise as a Wedding and Portrait Photographer. Specializing in unposed, journalistic moments and creating relaxed atmospheres from preparation to the final shot.",
    },
];

export default function Vita() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    // Calculate the height of the glowing line based on scroll
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const getIcon = (type: string) => {
        switch (type) {
            case "operations": return <Settings className="w-5 h-5 text-electric-blue" />;
            case "photography": return <Camera className="w-5 h-5 text-white" />;
            case "experience": return <Briefcase className="w-5 h-5 text-cyber-purple" />;
            case "education": return <GraduationCap className="w-5 h-5 text-sunset-orange" />;
            default: return null;
        }
    };

    const getGlow = (type: string) => {
        switch (type) {
            case "operations": return "neon-glow-blue border-electric-blue";
            case "photography": return "shadow-[0_0_15px_rgba(255,255,255,0.5)] border-white/50";
            case "experience": return "neon-glow-purple border-cyber-purple";
            case "education": return "shadow-[0_0_15px_var(--color-sunset-orange)] inset-[0_0_10px_var(--color-sunset-orange)] border-sunset-orange";
            default: return "border-white/20";
        }
    };

    return (
        <section id="about" className="relative w-full py-32 bg-[#050510]" ref={containerRef}>

            {/* Background Mesh Gradient */}
            <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-cyber-purple/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 pb-2 leading-tight"
                    >
                        My Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        A timeline of caffeine consumption and a lot of brainpower
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Static background line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2 rounded-full" />

                    {/* Animated glowing line that draws as user scrolls */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[19px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-electric-blue via-cyber-purple to-sunset-orange md:-translate-x-1/2 rounded-full shadow-[0_0_15px_#b026ff]"
                    />

                    <div className="flex flex-col gap-12">
                        {vitaData.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={item.id} className={`relative flex items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                    {/* Timeline Node (The Circle icon) */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#050510] border-2 flex items-center justify-center z-20 ${getGlow(item.type)}`}
                                    >
                                        {getIcon(item.type)}
                                    </motion.div>

                                    {/* Desktop Layout Helper: Left/Right side spacing */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Card Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                                    >
                                        <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1">
                                            <span className="text-sm font-mono text-gray-400 mb-2 block">{item.date}</span>
                                            <h3 className={`text-xl font-bold mb-1 ${item.type === 'operations' ? 'text-electric-blue' : 'text-white'}`}>
                                                {item.title}
                                            </h3>
                                            <h4 className="text-md text-cyber-purple font-medium mb-4">{item.company}</h4>
                                            <p className="text-gray-400 leading-relaxed font-light">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
