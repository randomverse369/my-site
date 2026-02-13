"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef, type ReactNode } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number;
}

export default function MagneticButton({
    children,
    className = "",
    onClick,
    strength = 30,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        x.set(middleX / (100 / strength)); // Adjust division for strength
        y.set(middleY / (100 / strength));
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={`relative inline-block cursor-none ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}
