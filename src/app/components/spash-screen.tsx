'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/** Splash screen component. Provides an entry animation for the website. */
export default function SplashScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    /** Text to eventuallydisplay in the splash screen */
    const finalText = 'Hello World';

    /** Text currently displayed in the splash screen */
    const [displayText, setDisplayText] = useState('');

    /** Whether the typing animation is complete */
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    /** Whether the splash screen is hidden */
    const [isScreenHidden, setIsScreenHidden] = useState(false);

    useEffect(() => {
        let currentIndex = 0;

        // Typing animation
        const typingInterval = setInterval(() => {
            if (currentIndex < finalText.length) {
                setDisplayText(finalText.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setIsTypingComplete(true);

                // Wait 1 second after typing completes, then slide up
                setTimeout(() => {
                    setIsScreenHidden(true);
                }, 1000);
            }
        }, 100); // Adjust typing speed here

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="min-h-screen w-full">
            {/* Splash screen */}
            <motion.div
                className={
                    'fixed inset-0 flex items-center justify-center z-100 ' +
                    'bg-secondary-light dark:bg-secondary-dark text-surface-light dark:text-surface-dark '
                }
                initial={{ y: 0 }}
                animate={{ y: isScreenHidden ? '-100%' : 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                <h1 className="text-4xl md:text-6xl font-bold">
                    {displayText}
                    <motion.span
                        className="inline-block w-5 h-8 md:w-2 md:h-10 bg-surface-light dark:bg-surface-dark ml-1"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [1, 0, 1],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    ></motion.span>
                </h1>
            </motion.div>

            {/* Main content */}
            <div>{children}</div>
        </div>
    );
}
