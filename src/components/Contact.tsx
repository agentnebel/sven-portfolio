"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full py-32 bg-[#050510] border-t border-white/5 overflow-hidden">

            {/* Background glow lines */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sunset-orange/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-sunset-orange/5 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6"
                    >
                        Let&apos;s Build Something
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl"
                    >
                        Reach out for collaborations, coffee chats, or code reviews.
                    </motion.p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a
                            href="mailto:s.belz@me.com"
                            className="px-10 py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-white bg-gradient-to-r from-sunset-orange/20 to-cyber-purple/20 border border-sunset-orange/50 hover:bg-sunset-orange/30 transition-all duration-300 group relative overflow-hidden shadow-[0_0_20px_rgba(255,94,0,0.15)] hover:shadow-[0_0_30px_rgba(255,94,0,0.3)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange to-cyber-purple opacity-0 group-hover:opacity-20 transition-opacity" />
                            <Mail className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                            <span className="relative z-10 text-xl tracking-wide">Email Me</span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <a
                            href="https://linkedin.com/in/SvenBelz"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative p-5 glass rounded-2xl border border-white/10 hover:border-cyber-purple/50 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(176,38,255,0.1)] hover:shadow-[0_0_30px_rgba(176,38,255,0.25)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 bg-cyber-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <Linkedin className="w-8 h-8 text-gray-300 group-hover:text-cyber-purple relative z-10 transition-colors group-hover:scale-110" />
                        </a>
                    </motion.div>

                </div>

                <div className="mt-32 text-center border-t border-white/10 pt-8">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Sven Belz. Crafted with <span className="text-cyber-purple font-medium">Vibecoding</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}
