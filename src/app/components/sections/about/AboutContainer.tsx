'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionContainer, Subheader } from '../../shared';
import { Lang, pathToIcon, stack } from '@/app/lib/utils/Constants';

interface TechIconProps {
    lang: Lang;
}

/** The About Section Component.*/
export default function AboutContainer() {
    const { t } = useTranslation();

    const techStack = [
        { category: t('STR_ABOUT.TECH.CORE'), langs: stack.core },
        { category: t('STR_ABOUT.TECH.EXPERIENCED'), langs: stack.exp },
    ];

    const TechIcon = ({ lang }: TechIconProps) => {
        return (
            <>
                {/* Icon Images */}
                <motion.img
                    id={`tech-icon-${lang.iconFile}`}
                    key={lang.iconFile}
                    className="h-8 drop-shadow-sm duration-400 transition-opacity opacity-80"
                    whileHover={{
                        scale: 1.1,
                        transition: { type: 'spring', duration: 0.3 },
                    }}
                    src={`${pathToIcon}/${lang.iconFile}.svg`}
                    alt={t('STR_ABOUT.TECH.ARIA.ICON_ALT', {
                        iconName: lang.name,
                    })}
                    aria-describedby={`img-description-${lang.iconFile}`}
                />
                {/* SR for Icon Images */}
                <span
                    id={`img-description-${lang.iconFile}`}
                    className="sr-only"
                >
                    {t('STR_ABOUT.TECH.ARIA.ICON_SR', { iconName: lang.name })}
                </span>
            </>
        );
    };

    return (
        <SectionContainer id="about">
            <Subheader text={t('STR_ABOUT.TITLE')} />

            <div
                className={
                    'bg-transparent transition-all duration-200 rounded-md'
                }
            >
                <p
                    className={
                        'text-justify leading-6 text-surface-half-light dark:text-surface-half-dark transition-colors '
                    }
                >
                    {t('STR_ABOUT.PERSONAL.PART_1')}{' '}
                    <span className="text-surface-light dark:text-surface-dark">
                        {t('STR_ABOUT.PERSONAL.PART_2')}
                    </span>{' '}
                    {t('STR_ABOUT.PERSONAL.PART_3')}{' '}
                    <span className="text-surface-light dark:text-surface-dark">
                        {t('STR_ABOUT.PERSONAL.PART_4')}
                    </span>{' '}
                    {t('STR_ABOUT.PERSONAL.PART_5')}{' '}
                    <span className="text-surface-light dark:text-surface-dark">
                        {t('STR_ABOUT.PERSONAL.PART_6')}
                    </span>{' '}
                    {t('STR_ABOUT.PERSONAL.PART_7')}
                </p>
            </div>

            {techStack.map((stack) => (
                <div
                    key={stack.category}
                    className={
                        'mt-7 flex flex-col gap-5 group text-surface-light dark:text-surface-dark transition-all duration-300'
                    }
                >
                    {/* Category */}
                    <div className="flex items-center">
                        <span
                            className={
                                'transition-colors duration-400 select-none lg:ps-0 ' +
                                'font-medium text-surface-light dark:text-surface-dark '
                            }
                        >
                            {stack.category}
                        </span>
                    </div>

                    {/* Stack List */}
                    <div>
                        <div className=" grid grid-cols-5 md:grid-cols-8 gap-y-5 place-items-center">
                            {stack.langs.map((lang) => (
                                <TechIcon lang={lang} key={lang.iconFile} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
}
