import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSplashAnimation } from '../contexts/splash-animation-context-provider';

/** A button toggle to switch between light and dark mode */
export default function ThemeSwitcher() {
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

    return (
        <motion.button
            onClick={toggleDarkMode}
            initial={{ transform: 'translateX(-10px)', opacity: 0 }}
            animate={
                splashComplete
                    ? { transform: 'translateX(0px)', opacity: 1 }
                    : { transform: 'translateX(-10px)', opacity: 0 }
            }
            transition={{ type: 'spring', duration: 3, delay: 1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={
                'relative cursor-pointer transition-colors duration-300 p-2 rounded-full border-2 ' +
                'border-surface-light dark:border-surface-dark hover:bg-primary-dark hover:dark:bg-primary-light'
            }
            aria-label={darkMode ? 'Toggle light mode' : 'Toggle dark mode'}
        >
            {/* Width and height of the container div should match the width and height of the svg */}
            <div className="relative w-3.5 h-3.5 md:w-6 md:h-6">
                <AnimatePresence mode="wait" initial={false}>
                    {darkMode ? (
                        <motion.svg
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
                                (isHovered
                                    ? 'text-sun-yellow'
                                    : 'text-surface-dark')
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
                                (isHovered
                                    ? 'text-moon-blue'
                                    : 'text-surface-light')
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
