'use client';

import { motion } from 'framer-motion';
import CodeWindow from './components/code-window';
import { useSplashAnimation } from './contexts/splash-animation-context-provider';
import Hero from './sections/hero';

export default function Page() {
    const { splashComplete } = useSplashAnimation();

    const fadeInFromLeft = {
        hidden: {
            opacity: 0,
            transform: 'translateX(-10px)',
        },
        visible: {
            opacity: 1,
            transform: 'translateX(0px)',
            transition: { type: 'spring', duration: 3 },
        },
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
            },
        },
    };

    return (
        <div className="lg:flex lg:justify-between lg:gap-20">
            {/* Hero - This is fixed and takes the left half of the screen on large */}
            <div className="py-[50%] lg:py-[20%] lg:sticky lg:top-0 lg:max-h-screen lg:w-[50%]">
                <Hero />
            </div>

            {/* Main Content */}
            <motion.main
                className="pt-24 lg:w-[50%] lg:py-50"
                initial={{ transform: 'translateX(-10px)', opacity: 0 }}
                animate={
                    splashComplete
                        ? { transform: 'translateX(0px)', opacity: 1 }
                        : { transform: 'translateX(-10px)', opacity: 0 }
                }
                transition={{ type: 'spring', duration: 5, delay: 1 }}
            >
                <CodeWindow />
                <CodeWindow />
                <CodeWindow />
                <CodeWindow />
            </motion.main>
        </div>
    );
}
