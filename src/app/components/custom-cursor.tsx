'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Create spring-based values for smoother motion
    const springX = useSpring(cursorX, { damping: 35, stiffness: 400 });
    const springY = useSpring(cursorY, { damping: 35, stiffness: 400 });

    useEffect(() => {
        const updateMousePosition = (e: {
            clientX: number;
            clientY: number;
        }) => {
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full bg-slate-500/50 pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                }}
            />

            <style jsx global>{`
                * {
                    cursor: none !important;
                }

                /* Restore cursor for mobile devices */
                @media (max-width: 768px) {
                    * {
                        cursor: auto !important;
                    }
                }
            `}</style>
        </>
    );
}
