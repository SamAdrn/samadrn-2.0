import { motion } from 'framer-motion';
import { Subheader } from '../../shared';

interface TechIconProps {
    icon: string;
}

/** The About Section Component.*/
export default function AboutContainer() {
    const coreLangs = [
        'typescript',
        'angular',
        'tailwind',
        'python',
        'html',
        'css',
        'git',
    ];

    const expLangs = [
        'ruby',
        'racket',
        'ansic',
        'java',
        'postgresql',
        'react',
        'swift',
        'nextjs',
    ];

    const techStack = [
        { category: 'Core Technologies', langs: coreLangs },
        { category: 'Experienced With', langs: expLangs },
    ];

    const TechIcon = (props: TechIconProps) => {
        return (
            <motion.img
                key={props.icon}
                className="h-8 drop-shadow-sm duration-400 transition-opacity opacity-80"
                whileHover={{
                    scale: 1.1,
                    transition: { type: 'spring', duration: 0.3 },
                }}
                src={`/icons/${props.icon}.svg`}
                alt={`${props.icon} Icon`}
            />
        );
    };

    return (
        <div className="w-full pt-24 flex flex-col gap-10 lg:pt-0 lg:h-screen lg:justify-center">
            <Subheader text="About Me" />

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
                    An enthusiastic{' '}
                    <span className="text-surface-light dark:text-surface-dark">
                        Software Engineer
                    </span>{' '}
                    with a passion for creating innovative solutions. Born and
                    raised in the vibrant city of{' '}
                    <span className="text-surface-light dark:text-surface-dark">
                        Jakarta, Indonesia,
                    </span>{' '}
                    I witnessed firsthand how technology can transform
                    communities and everyday life. These observations inspired
                    me to pursue a Bachelor's degree in the United States, to
                    someday make my own{' '}
                    <span className="text-surface-light dark:text-surface-dark">
                        meaningful impact
                    </span>{' '}
                    through software.
                </p>
            </div>

            {techStack.map((stack) => (
                <div
                    key={stack.category}
                    className={
                        'flex flex-col gap-5 group text-surface-light dark:text-surface-dark transition-all duration-300'
                    }
                >
                    {/* Category */}
                    <div className="flex items-center">
                        {/* <span className="hidden lg:inline h-[1px] w-6 ms-1 bg-surface-half-light/70 dark:bg-surface-half-dark"></span> */}
                        <span
                            className={
                                'transition-colors duration-400 select-none ps-3 lg:ps-0 ' +
                                'font-medium text-surface-half-light dark:text-surface-half-dark '
                            }
                        >
                            {stack.category}
                        </span>
                    </div>

                    {/* Stack List */}
                    <div>
                        <div className=" grid grid-cols-5 md:grid-cols-8 gap-y-5 place-items-center">
                            {stack.langs.map((lang) => (
                                <TechIcon icon={lang} key={lang} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
