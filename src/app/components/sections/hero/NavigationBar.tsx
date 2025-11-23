'use client';

import { useSplashAnimation } from '@/app/lib/contexts';
import { entryContainer, fadeInFromLeft } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type SectionId = 'about' | 'experiences' | 'projects';

interface NavButton {
    target: SectionId;
    label: string;
}

/** A navigation bar to display currently-displayed section in viewport */
export default function NavigationBar() {
    const { t } = useTranslation();
    const { splashComplete } = useSplashAnimation();

    const navs: NavButton[] = [
        {
            target: 'about',
            label: 'STR_MISC.NAVIGATION.ABOUT',
        },
        {
            target: 'experiences',
            label: 'STR_MISC.NAVIGATION.EXPERIENCES',
        },
        {
            target: 'projects',
            label: 'STR_MISC.NAVIGATION.PROJECTS',
        },
    ];
    const [activeSection, setActiveSection] = useState<SectionId>('about');

    useEffect(() => {
        // Set up intersection observers for each section
        const observers: IntersectionObserver[] = [];
        const observerOptions = {
            rootMargin: '-20% 0px -80% 0px', // Adjust these values to control when a section is considered "active"
            threshold: 0,
        };

        // Create an observer for each section
        navs.forEach((nav) => {
            const targetSection = document.getElementById(nav.target);

            if (targetSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        // When the section is intersecting (visible)
                        if (entry.isIntersecting) {
                            setActiveSection(nav.target);
                        }
                    });
                }, observerOptions);

                observer.observe(targetSection);
                observers.push(observer);
            }
        });

        // Clean up all observers on component unmount
        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [navs]);

    /** Handles the onClick on a nav button to move into a certain section */
    const handleNavClick = (nav: SectionId) => {
        const section = document.getElementById(nav);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(nav);
        }
    };

    return (
        <motion.div
            id="navigation-bar-container"
            variants={entryContainer}
            initial="hidden"
            animate={splashComplete ? 'visible' : 'hidden'}
        >
            <motion.div
                variants={fadeInFromLeft}
                className={
                    'w-full border-1 border-surface-half-light/70 dark:border-surface-half-dark rounded-lg ' +
                    'hidden lg:flex'
                }
            >
                {navs.map((nav) => {
                    const isActive = activeSection === nav.target;
                    const translatedLabel = t(nav.label);
                    return (
                        <motion.button
                            id={`navigation-bar-${nav.target}-btn`}
                            key={nav.target}
                            onClick={() => handleNavClick(nav.target)}
                            variants={fadeInFromLeft}
                            className={
                                'cursor-pointer transition-colors duration-300 flex-1 p-1.5 m-0.5 text-center align-middle rounded-md uppercase text-xs backdrop-blur-sm ' +
                                'focus-visible:ring-2 focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark outline-0 ' +
                                (isActive
                                    ? 'font-medium shadow-sm bg-white/40 dark:bg-gray-800/70 opacity-100 ' +
                                      'text-accent-light dark:text-accent-dark'
                                    : 'font-normal shadow-none hover:bg-white/90 dark:hover:bg-gray-800/50 opacity-70 ' +
                                      'text-surface-half-light dark:text-surface-half-dark')
                            }
                            aria-label={
                                isActive
                                    ? t('STR_MISC.NAVIGATION.ARIA.CURRENT', {
                                          section: translatedLabel,
                                      })
                                    : t('STR_MISC.NAVIGATION.ARIA.SCROLL_TO', {
                                          section: translatedLabel,
                                      })
                            }
                        >
                            {translatedLabel}
                        </motion.button>
                    );
                })}
            </motion.div>
        </motion.div>
    );
}
