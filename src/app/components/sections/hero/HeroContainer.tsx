'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import SocialBar from './SocialBar';
import { LinkButton } from '../../shared';

import { useSplashAnimation } from '@/app/lib/contexts';
import { entryContainer, fadeInFromLeft } from '@/app/lib/utils';
import NavigationBar from './NavigationBar';

/** The Hero Section Component. Should appear at the top of the page. */
export default function HeroContainer() {
    const { t } = useTranslation();
    const { splashComplete } = useSplashAnimation();

    return (
        <motion.div
            variants={entryContainer}
            initial="hidden"
            animate={splashComplete ? 'visible' : 'hidden'}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-5"
        >
            {/* Name */}
            <motion.span
                variants={fadeInFromLeft}
                className={
                    'text-6xl font-title font-semibold leading-18 tracking-tight drop-shadow-md ' +
                    'underline decoration-[0.5rem] underline-offset-8 decoration-amber-600/50 dark:decoration-sky-600/50'
                }
            >
                {t('STR_HERO.NAME')}
            </motion.span>

            {/* Subtitle */}
            <motion.span
                variants={fadeInFromLeft}
                className="mt-5 mx-10 md:mx-0 text-xl font-medium tracking-tight"
            >
                Building efficient software solutions with clean code.
            </motion.span>

            {/* Footnote */}
            <motion.div variants={fadeInFromLeft} className="mx-10 md:mx-0">
                <span className="me-2 text-surface-half-light dark:text-surface-half-dark">
                    Mastering Front-End.{' '}
                    <span className="hidden md:inline">
                        Exploring Back-End.
                    </span>
                </span>

                <LinkButton text="View my Resume" />
            </motion.div>

            <div className="mt-5 w-full">
                <NavigationBar />
            </div>

            <div className="mt-5">
                <SocialBar />
            </div>
        </motion.div>
    );
}
