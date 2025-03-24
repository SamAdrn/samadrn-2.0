'use client'

import { motion } from 'framer-motion';
import { useSplashAnimation } from '@/app/lib/contexts';
import { entryContainer, fadeInFromLeft } from '@/app/lib/utils';

/** A bar containing links to various social media pages */
export default function SocialBar() {
    const { splashComplete } = useSplashAnimation();

    return (
        <motion.div
            variants={entryContainer}
            initial="hidden"
            animate={splashComplete ? 'visible' : 'hidden'}
            className="flex items-center space-x-8"
        >
            <motion.span
                variants={fadeInFromLeft}
                className="hidden lg:inline h-[2px] w-20 ms-1 bg-surface-half-light/70 dark:bg-surface-half-dark"
            ></motion.span>

            {/* GitHub */}
            <motion.a
                variants={fadeInFromLeft}
                className="group"
                href="https://github.com/SamAdrn"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub (opens in a new tab)"
                title="GitHub"
            >
                <span className="sr-only">GitHub</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                        'fill-surface-half-light dark:fill-surface-half-dark h-6 cursor-pointer transition-all ' +
                        'group-hover:fill-accent-light/80 group-hover:dark:fill-accent-dark/80 group-hover:scale-105'
                    }
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
                variants={fadeInFromLeft}
                className="group"
                href="https://www.linkedin.com/in/samkosasih/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn"
            >
                <span className="sr-only">LinkedIn</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                        'fill-surface-half-light dark:fill-surface-half-dark h-7 cursor-pointer transition-all ' +
                        'group-hover:fill-accent-light/80 group-hover:dark:fill-accent-dark/80 group-hover:scale-105'
                    }
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
            </motion.a>

            {/* Spotify */}
            <motion.a
                variants={fadeInFromLeft}
                className="group"
                href="https://open.spotify.com/user/31dzjlx5ll7imlrvwoaappx4kngu?si=e9b4f497b9a04e02"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Spotify (opens in a new tab)"
                title="Spotify"
            >
                <span className="sr-only">Spotify</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                        'fill-surface-half-light dark:fill-surface-half-dark h-6 cursor-pointer transition-all ' +
                        'group-hover:fill-accent-light/80 group-hover:dark:fill-accent-dark/80 group-hover:scale-105'
                    }
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
                </svg>
            </motion.a>
        </motion.div>
    );
}
