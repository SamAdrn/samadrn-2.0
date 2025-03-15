'use client';

import { motion } from 'framer-motion';
import LinkButton from '../components/link-button';
import SocialBar from '../components/social-bar';
import { useSplashAnimation } from '../contexts/splash-animation-context-provider';

/** The Hero Section Component. Should appear at the top of the page. */
export default function Hero() {
    const { splashComplete } = useSplashAnimation();

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
                delayChildren: 1,
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate={splashComplete ? 'visible' : 'hidden'}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-5"
        >
            {/* Name */}
            <motion.span
                variants={fadeInFromLeft}
                className={
                    'text-6xl font-title font-semibold leading-18 tracking-tight drop-shadow-md ' +
                    'underline decoration-[0.5rem] underline-offset-8 decoration-amber-600/50 dark:decoration-sky-600/50'
                }
            >
                Samuel Kosasih
            </motion.span>

            {/* Subtitle */}
            <motion.span
                variants={fadeInFromLeft}
                className="mt-5 mx-10 md:mx-0 text-xl font-medium tracking-tight"
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

            <div className='mt-10'>
                <SocialBar />
            </div>
        </motion.div>
    );
}
