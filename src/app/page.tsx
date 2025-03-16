'use client';

import { motion } from 'framer-motion';

import About from './components/sections/about';
import Experience from './components/sections/experience';
import Hero from './components/sections/hero';
import Visual from './components/sections/visual';

import ThemeSwitcher from './components/shared/ThemeSwitcher';
import { useSplashAnimation } from './lib/contexts/SplashAnimationProvider';
import { fadeInFromLeft } from './lib/utils/AnimationVariants';

export default function Page() {
    const { splashComplete } = useSplashAnimation();

    return (
        <div className="lg:flex lg:justify-between lg:gap-20">
            <div className="z-50 fixed top-5 right-5 md:right-20 block">
                <ThemeSwitcher />
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

                <div className='h-50'></div>
            </motion.main>
        </div>
    );
}
