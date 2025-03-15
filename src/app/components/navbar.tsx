'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ThemeSwitcher from './theme-switcher';

/** Navbar component. */
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 70);
        };

        const handleResize = () => {
            setIsVisible(window.innerWidth < 1024); // 64rem = 1024px
        };

        // Add event listener when component mounts and run it once to set initial state
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleScroll();
        handleResize();

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <header>
            <nav
                className={
                    'fixed bg-transparent top-0 left-0 right-0 z-50 px-5 md:px-20 flex justify-between items-center h-[var(--navbar-height)] transition-all duration-300 ' +
                    (isScrolled
                        ? 'backdrop-blur-sm bg-white/10 dark:bg-gray-900/10 shadow-xs'
                        : 'bg-transparent')
                }
            >
                <div className="flex items-center justify-between">
                    <Link href="#" className="text-2xl font-semibold font-mono">
                        SAMUEL KOSASIH
                    </Link>
                </div>

                <div>
                    <ThemeSwitcher />
                </div>
            </nav>
        </header>
    );
}
