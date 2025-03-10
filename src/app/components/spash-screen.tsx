'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/** Splash screen component. Provides an entry animation for the website. */
export default function SplashScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    /** Text to eventually display in the splash screen */
    const finalText = 'HELLO WORLD';

    /** Text currently displayed in the splash screen */
    const [displayText, setDisplayText] = useState('');

    /** Whether the splash screen is shown */
    const [showSplash, setShowSplash] = useState(true);

    /** Whether the text should be shown */
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        let currentIndex = 0;

        // Typing animation
        const typingInterval = setInterval(() => {
            if (currentIndex < finalText.length) {
                setDisplayText(finalText.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);

                // Wait 1 second after typing completes, then wipe text
                setTimeout(() => {
                    setShowText(false);

                    // After text hides, hide the entire splash screen
                    setTimeout(() => {
                        setShowSplash(false);
                    }, 600); // Delay after text hiding
                }, 1000);
            }
        }, 100); // Typing Speed

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="min-h-screen w-full">
            {/* Splash Screen */}
            <AnimatePresence>
                {showSplash && (
                    <motion.div
                        className={
                            'fixed inset-0 flex items-center justify-center z-100 ' +
                            'bg-primary-light dark:bg-primary-dark text-surface-light dark:text-surface-dark '
                        }
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        {/* Text Container */}
                        <div className="overflow-hidden">
                            <AnimatePresence>
                                {showText && (
                                    <motion.h1
                                        className="text-4xl md:text-6xl font-mono font-bold flex items-center"
                                        initial={{ y: 0 }}
                                        exit={{ y: 100 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        {displayText}
                                        <motion.span // Text Cursor
                                            className="inline-block ml-1 w-5 h-8 md:w-2 md:h-15 bg-surface-light dark:bg-surface-dark"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [1, 0, 1] }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        ></motion.span>
                                    </motion.h1>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div>{children}</div>
        </div>
    );
}
