'use client';

import { LanguageOption } from '@/app/i18n';
import { useLanguage, useSplashAnimation } from '@/app/lib/contexts';
import { fadeInFromLeft } from '@/app/lib/utils';
import { motion } from 'framer-motion';

interface LanguageButton {
    label: string;
    lang: LanguageOption;
}

export default function LanguageSwitcher() {
    const { splashComplete } = useSplashAnimation();
    const { language, changeLanguage } = useLanguage();

    const langs: LanguageButton[] = [
        {
            lang: 'en',
            label: 'ENG',
        },
        {
            lang: 'id',
            label: 'IDN',
        },
    ];

    return (
        <motion.div
            variants={fadeInFromLeft}
            initial="hidden"
            animate={splashComplete ? 'visibleDelay' : 'hidden'}
            className="text-xs md:text-sm lg:text-xs font-medium tracking-wider gap-1 md:gap-5 lg:gap-2 hidden xs:flex lg:flex-col items-center lg:border-t-1 lg:pt-3 lg:w-[45px]"
        >
            {langs.map((langType) => (
                <button
                    key={langType.lang}
                    onClick={() => changeLanguage(langType.lang)}
                    className={
                        'w-full p-2 cursor-pointer transition-all rounded-md ' +
                        (language === langType.lang
                            ? 'text-surface-light dark:text-surface-dark'
                            : 'hover:backdrop-blur-sm text-surface-half-light/80 dark:text-surface-half-dark/80 hover:bg-white/50 dark:hover:bg-gray-700/50')
                    }
                >
                    {langType.label}
                </button>
            ))}
        </motion.div>
    );
}
