'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSplashAnimation } from '../../lib/contexts/SplashAnimationProvider';
import { fadeInFromLeft } from '../../lib/utils/AnimationVariants';

/** A button toggle to switch between light and dark mode */
export default function ThemeSwitcher() {
    const { t } = useTranslation();
    const { splashComplete } = useSplashAnimation();

    /** Keeps track of the dark mode preference */
    const [darkMode, setDarkMode] = useState(false);

    /** Keeps track of whether the Theme Toggle is on hover */
    const [isHovered, setIsHovered] = useState(false);

    // Determines on load whether user wants it dark or light
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
        ).matches;

        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            toggleDarkMode();
        }
    }, []);

    /** Toggles dark mode and saves the preference to localStorage */
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleLightText = t('STR_MISC.THEME.TOGGLE_LIGHT');
    const toggleDarkText = t('STR_MISC.THEME.TOGGLE_DARK');

    return (
        <motion.button
            id="theme-switcher"
            onClick={toggleDarkMode}
            variants={fadeInFromLeft}
            initial="hidden"
            animate={splashComplete ? 'visibleDelay' : 'hidden'}
            className={
                'group relative cursor-pointer transition-colors duration-300 p-2 rounded-full border-1 md:border-2 ' +
                'border-surface-light dark:border-surface-dark hover:bg-primary-dark hover:dark:bg-primary-light ' +
                'focus-visible:bg-primary-dark focus-visible:dark:bg-primary-light ' +
                'focus-visible:outline-2 focus-visible:outline-moon-blue dark:focus-visible:outline-sun-yellow focus-visible:outline-offset-4 '
            }
            aria-label={darkMode ? toggleLightText : toggleDarkText}
        >
            {/* Width and height of the container div should match the width and height of the svg */}
            <div className="relative w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-6 md:h-6">
                <AnimatePresence mode="wait" initial={false}>
                    {darkMode ? (
                        <motion.svg
                            id="theme-switcher-sun-svg"
                            key="sun"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                            className={
                                'absolute inset-0 w-3.5 h-3.5 md:w-6 md:h-6 transition-colors ' +
                                'text-surface-dark group-hover:text-sun-yellow group-focus-visible:text-sun-yellow'
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            id="theme-switcher-moon-svg"
                            key="moon"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                            className={
                                'absolute inset-0 w-3.5 h-3.5 md:w-6 md:h-6 transition-colors ' +
                                'text-surface-light group-hover:text-moon-blue group-focus-visible:text-moon-blue'
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </div>
        </motion.button>
    );
}
