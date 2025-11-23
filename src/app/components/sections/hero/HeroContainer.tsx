'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import NavigationBar from './NavigationBar';
import SocialBar from './SocialBar';

import { useSplashAnimation } from '@/app/lib/contexts';
import { entryContainer, fadeInFromLeft } from '@/app/lib/utils';
import { pathToResume } from '@/app/lib/utils/Constants';

/** The Hero Section Component. Should appear at the top of the page. */
export default function HeroContainer() {
    const { t } = useTranslation();
    const { splashComplete } = useSplashAnimation();

    return (
        <motion.section
            id="hero-section"
            aria-label={t('STR_HERO.ARIA.SECTION_LABEL')}
            variants={entryContainer}
            initial="hidden"
            animate={splashComplete ? 'visible' : 'hidden'}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-5"
        >
            {/* Name */}
            <motion.h1 variants={fadeInFromLeft} className="m-0 p-0">
                <a
                    id="hero-name"
                    href="#top"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={
                        'transition text-6xl font-title font-semibold leading-18 tracking-tight drop-shadow-md cursor-pointer rounded-md ' +
                        'focus-visible:decoration-accent-light dark:focus-visible:decoration-accent-dark hover:decoration-accent-light dark:hover:decoration-accent-dark transition ' +
                        'underline decoration-[0.5rem] underline-offset-8 decoration-amber-600/50 dark:decoration-sky-600/50 ' +
                        'focus-visible:outline-2 focus-visible:outline-accent-light dark:focus-visible:outline-accent-dark focus-visible:outline-offset-4'
                    }
                    aria-label={t('STR_MISC.NAVIGATION.ARIA.SCROLL_TO_TOP')}
                >
                    {t('STR_HERO.NAME')}
                </a>
            </motion.h1>

            {/* Subtitle */}
            <motion.span
                id="hero-subtitle"
                variants={fadeInFromLeft}
                className="mt-5 mx-10 md:mx-0 text-xl font-medium tracking-tight"
            >
                {t('STR_HERO.SUBTITLE')}
            </motion.span>

            {/* Footnote */}
            <motion.div
                id="hero-footnote"
                variants={fadeInFromLeft}
                className="mx-10 md:mx-0"
            >
                {/* Footnote Text */}
                <span className="me-2 text-surface-half-light dark:text-surface-half-dark">
                    {t('STR_HERO.FOOTNOTE.1')}{' '}
                    <span className="hidden md:inline">
                        {t('STR_HERO.FOOTNOTE.2')}
                    </span>
                </span>

                {/* Footnote Resume Link */}
                <a
                    id="view-resume-link"
                    href={pathToResume}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={t('STR_MISC.NAVIGATION.ARIA.OPENS_NEW_TAB', {
                        target: 'Resume',
                    })}
                    className={
                        'select-none cursor-pointer rounded-md inline-flex items-center group opacity-70 hover:opacity-100 focus-visible:opacity-100 ' +
                        'transition duration-300 focus-visible:outline-2 focus-visible:outline-accent-light dark:focus-visible:outline-accent-dark focus-visible:outline-offset-5 '
                    }
                >
                    {/* Button Label */}
                    <span
                        className={
                            'transition-colors text-surface-half-light dark:text-surface-half-dark ' +
                            'group-hover:text-accent-light group-hover:dark:text-accent-dark ' +
                            'group-focus-visible:text-accent-light group-focus-visible:dark:text-accent-dark'
                        }
                    >
                        {t('STR_MISC.ACTION.VIEW_RESUME')}
                    </span>

                    {/* TR Arrow */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.7}
                        stroke="currentColor"
                        className={
                            'size-4 inline mb-0.5 ms-2 transition-all transform ' +
                            'text-surface-half-light dark:text-surface-half-dark ' +
                            'group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:text-accent-light/80 group-focus-visible:dark:text-accent-dark/80 ' +
                            'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ' +
                            'group-hover:text-accent-light/80 group-hover:dark:text-accent-dark/80'
                        }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </a>
            </motion.div>

            <div className="mt-5 w-full">
                <NavigationBar />
            </div>

            <div className="mt-5">
                <SocialBar />
            </div>
        </motion.section>
    );
}
