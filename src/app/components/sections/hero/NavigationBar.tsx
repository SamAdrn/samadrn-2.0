'use client';

import { useEffect, useState } from 'react';

type NavTitle = 'about' | 'experiences' | 'projects';

export default function NavigationBar() {
    const navs: NavTitle[] = ['about', 'experiences', 'projects'];
    const [activeSection, setActiveSection] = useState<NavTitle>('about');

    useEffect(() => {
        // Set up intersection observers for each section
        const observers: IntersectionObserver[] = [];
        const observerOptions = {
            rootMargin: '-20% 0px -80% 0px', // Adjust these values to control when a section is considered "active"
            threshold: 0,
        };

        // Create an observer for each section
        navs.forEach((nav) => {
            const targetSection = document.getElementById(nav);

            if (targetSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        // When the section is intersecting (visible)
                        if (entry.isIntersecting) {
                            setActiveSection(nav);
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

    const handleNavClick = (nav: NavTitle) => {
        const section = document.getElementById(nav);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(nav);
        }
    };

    return (
        <div className="w-full border-1 border-surface-half-light/70 dark:border-surface-half-dark rounded-lg flex cursor-pointer">
            {navs.map((nav) => (
                <div
                    key={nav}
                    onClick={() => handleNavClick(nav)}
                    className={
                        'transition-all flex-1 p-1.5 m-0.5 text-center align-middle rounded-md uppercase text-xs backdrop-blur-sm ' +
                        (activeSection === nav
                            ? 'font-medium shadow-sm bg-white/40 dark:bg-gray-800/70 opacity-100 ' +
                              'text-accent-light dark:text-accent-dark'
                            : 'hover:bg-white/40 dark:hover:bg-gray-800/70 ' +
                              'opacity-70 text-surface-half-light dark:text-surface-half-dark')
                    }
                >
                    {nav}
                </div>
            ))}
        </div>
    );
}
