"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName.toLowerCase() === "button" ||
                target.tagName.toLowerCase() === "a" ||
                target.closest("button") !== null ||
                target.closest("a") !== null;

            setIsHovering(isClickable);
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
    const cursorX = useSpring(mousePosition.x, springConfig);
    const cursorY = useSpring(mousePosition.y, springConfig);

    const springConfigTrail = { stiffness: 100, damping: 20, mass: 1 };
    const cursorXTrail = useSpring(mousePosition.x, springConfigTrail);
    const cursorYTrail = useSpring(mousePosition.y, springConfigTrail);

    if (!isMounted) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-electric-blue rounded-full pointer-events-none z-[100] neon-glow-blue mix-blend-screen"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-cyber-purple/50 rounded-full pointer-events-none z-[90] neon-glow-purple mix-blend-screen"
                style={{
                    x: cursorXTrail,
                    y: cursorYTrail,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
            />
        </>
    );
}
