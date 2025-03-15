import { Variants } from 'framer-motion';

export const entryContainer: Variants = {
    hidden: {
        opacity: 0,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.3,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.3,
        },
    },
};

export const fadeInFromLeft: Variants = {
    hidden: {
        opacity: 0,
        transform: 'translateX(-10px)',
        transition: { type: 'spring', duration: 5 },
    },
    visible: {
        opacity: 1,
        transform: 'translateX(0px)',
        transition: { type: 'spring', duration: 5 },
    },
    visibleDelay: {
        opacity: 1,
        transform: 'translateX(0px)',
        transition: { type: 'spring', duration: 5, delay: 2 },
    },
};
