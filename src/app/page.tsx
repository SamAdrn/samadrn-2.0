'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import About from './components/sections/about';
import Experience from './components/sections/experience';
import Hero from './components/sections/hero';
import Project from './components/sections/project';
import Visual from './components/sections/visual';
import { LanguageSwitcher, ThemeSwitcher } from './components/shared';

import { useSplashAnimation } from './lib/contexts/SplashAnimationProvider';
import { fadeInFromLeft } from './lib/utils/AnimationVariants';

export default function Page() {
    const { splashComplete } = useSplashAnimation();
    const { t } = useTranslation();

    return (
        <div className="lg:flex lg:justify-between lg:gap-20">
            {/* Skip to main content link for keyboard accessibility */}
            <a
                href="#about"
                className={
                    'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] ' +
                    'focus:px-4 focus:py-2 focus:rounded-md focus:shadow-md ' +
                    'focus:bg-white dark:focus:bg-gray-800 ' +
                    'focus:text-accent-light dark:focus:text-accent-dark ' +
                    'focus:font-medium focus:transition-all ' +
                    'focus:border-2 focus:border-accent-light dark:focus:border-accent-dark'
                }
            >
                {t('STR_MISC.NAVIGATION.ARIA.SKIP_TO_CONTENT')}
            </a>

            <div className="z-50 fixed top-5.5 md:top-4.5 right-5 md:right-18 block">
                <ThemeSwitcher />
            </div>

            <div className="z-50 fixed top-6 lg:top-20 right-16 md:right-35 lg:right-18 block">
                <LanguageSwitcher />
            </div>

            {/* Hero - This is fixed and takes the left half of the screen on large */}
            <div className="flex items-center justify-center pt-[50%] lg:pt-0 lg:sticky lg:top-0 lg:h-screen lg:w-[45%] lg:justify-start">
                <Hero />
            </div>

            {/* Main Content */}
            <motion.main
                className="pt-24 lg:pt-0 lg:w-[55%]"
                variants={fadeInFromLeft}
                initial="hidden"
                animate={splashComplete ? 'visibleDelay' : 'hidden'}
            >
                <Visual />

                <About />

                <Experience />

                <Project />

                <div
                    className={
                        'h-50 text-surface-half-light dark:text-surface-half-dark ' +
                        'text-sm opacity-50 flex items-center'
                    }
                >
                    Built with Next.js and Tailwind | By Samuel Kosasih © 2025
                </div>
            </motion.main>
        </div>
    );
}
