'use client';

import { motion } from 'framer-motion';
import CodeWindow from '../components/code-window';
import LinkButton from '../components/link-button';
import SocialBar from '../components/social-bar';

/** The Hero Section Component. Should appear at the top of the page. */
export default function Hero() {
    const staggerDuration = 0.2;

    const fadeInFromLeft = {
        hidden: {
            opacity: 0,
            transform: 'translateX(-10px)',
        },
        visible: {
            opacity: 1,
            transform: 'translateX(0px)',
            transition: { type: 'spring', duration: 5 },
        },
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDuration,
                delayChildren: 0.3,
            },
        },
    };

    return (
        <div className="w-full h-screen lg:grid lg:grid-cols-20 lg:gap-x-7">
            {/* Left Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="h-4/5 lg:h-full lg:col-span-11 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-5"
            >
                {/* Name */}
                <motion.span
                    variants={fadeInFromLeft}
                    className={
                        'mt-5 text-6xl xl:text-7xl font-title font-semibold leading-18 tracking-tight drop-shadow-md ' +
                        'underline decoration-[0.5rem] underline-offset-8 decoration-amber-600/50 dark:decoration-sky-600/50'
                    }
                >
                    Samuel Kosasih
                </motion.span>

                {/* Subtitle */}
                <motion.span
                    variants={fadeInFromLeft}
                    className="mt-2 mx-10 md:mx-0 text-xl md:text-2xl font-semibold tracking-tight"
                >
                    Building efficient software solutions with clean code.
                </motion.span>

                {/* Footnote */}
                <motion.div variants={fadeInFromLeft} className="mx-10 md:mx-0">
                    <span className="me-2 text-surface-half-light dark:text-surface-half-dark">
                        Mastering Front-End.{' '}
                        <span className="hidden md:inline">
                            Exploring Back-End.
                        </span>
                    </span>

                    <LinkButton text="View my Resume" />
                </motion.div>

                <SocialBar />
            </motion.div>

            {/* Right Grid */}
            <motion.div
                initial={{ transform: 'translateX(-10px)', opacity: 0 }}
                animate={{ transform: 'translateX(0px)', opacity: 1 }}
                transition={{ type: 'spring', duration: 5, delay: 1 }}
                className="flex flex-col justify-center w-full lg:col-span-9"
            >
                <CodeWindow />
            </motion.div>
        </div>
    );
}
