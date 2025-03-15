'use client';

import { motion } from 'framer-motion';
import CodeWindow from './components/code-window';
import ThemeSwitcher from './components/theme-switcher';
import { useSplashAnimation } from './contexts/splash-animation-context-provider';
import About from './sections/about';
import Hero from './sections/hero';
import { fadeInFromLeft } from './utils/animation-variants';

export default function Page() {
    const { splashComplete } = useSplashAnimation();

    return (
        <div className="lg:flex lg:justify-between lg:gap-20">
            <div className="z-50 fixed top-5 right-5 md:right-20 block">
                <ThemeSwitcher />
            </div>

            {/* Hero - This is fixed and takes the left half of the screen on large */}
            <div className="flex items-center justify-center pt-50 lg:pt-0 lg:sticky lg:top-0 lg:h-screen lg:w-[50%] lg:justify-start">
                <Hero />
            </div>

            {/* Main Content */}
            <motion.main
                className="pt-40 lg:pt-0 lg:w-[50%]"
                variants={fadeInFromLeft}
                initial="hidden"
                animate={splashComplete ? 'visibleDelay' : 'hidden'}
            >
                <div className="lg:h-screen lg:flex lg:items-center">
                    <CodeWindow />
                </div>

                <About />

                {/* <div className='h-50'></div> */}
            </motion.main>
        </div>
    );
}
