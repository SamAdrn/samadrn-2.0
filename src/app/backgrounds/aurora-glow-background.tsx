'use client';

import { motion } from 'framer-motion';
import React from 'react';

/** Background component with warm amber glowing gradients */
export default function AuroraGlowBackground() {
    /** Animation variants for subtle floating movement */
    const floatAnimation = {
        topRight: {
            initial: { x: '75%', y: '-45%' },
            animate: {
                x: ['75%', '70%', '75%'],
                y: ['-45%', '-25%', '-45%'],
                transition: {
                    x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                    y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                },
            },
        },
        bottomLeft: {
            initial: { x: '-60%', y: '120%' },
            animate: {
                x: ['-60%', '-30%', '-60%'],
                y: ['135%', '140%', '135%'],
                transition: {
                    x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                    y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                },
            },
        },
    };

    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-[-1] transition-colors bg-primary-light dark:bg-primary-dark">
            {/* Top right glow */}
            <motion.div
                initial={floatAnimation.topRight.initial}
                animate={floatAnimation.topRight.animate}
                className={
                    'absolute w-2/3 h-2/3 rounded-full blur-3xl bg-gradient-to-bl transition-colors ' +
                    'from-orange-500/50 via-red-200/50 to-primary-light ' +
                    'dark:from-blue-600/50 dark:via-30% dark:via-sky-700/30 dark:to-primary-dark '
                }
            ></motion.div>

            {/* Bottom left glow */}
            <motion.div
                initial={floatAnimation.bottomLeft.initial}
                animate={floatAnimation.bottomLeft.animate}
                className={
                    'absolute w-2/3 h-1/2 rounded-full blur-3xl bg-gradient-to-tr transition-colors ' +
                    'from-yellow-300/80 via-80% to-primary-light ' +
                    'dark:from-green-800/40 via-80% dark:to-primary-dark '
                }
            ></motion.div>
        </div>
    );
}
