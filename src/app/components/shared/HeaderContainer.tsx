'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Header Container Component.
 *
 * This component appears on device widths narrower than 64rem. When scrolled,
 * the header displays a blur backdrop to ensure content placed on it will
 * still be visible.
 */
export default function HeaderContainer() {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
        <header
            className={
                'fixed bg-transparent top-0 left-0 right-0 z-50 px-5 md:px-20 flex justify-start items-center h-[var(--navbar-height)] transition-all duration-300 ' +
                (isScrolled
                    ? 'backdrop-blur-sm bg-white/50 dark:bg-gray-900/10 shadow-xs'
                    : 'bg-transparent')
            }
        >
            <a
                id="header-name"
                href="#top"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="md:pt-1 text-xl lg:text-2xl font-semibold font-mono uppercase cursor-pointer"
                aria-label={t('STR_MISC.NAVIGATION.ARIA.SCROLL_TO_TOP')}
            >
                {t('STR_HERO.NAME')}
            </a>
        </header>
    );
}
