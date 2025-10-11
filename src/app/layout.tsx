import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Montserrat } from 'next/font/google';

import './globals.css';

import { CustomCursor, SplashScreen } from './components/global';
import { HeaderContainer } from './components/shared';

import { AuroraGlowBackground } from './lib/backgrounds';
import {
    LanguageProvider,
    ModalProvider,
    SplashAnimationProvider,
} from './lib/contexts';

import './i18n';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains-mono',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    title: 'Samuel Kosasih | Software Engineer',
    description: 'Personal Website',

    keywords: ['Samuel Kosasih', 'Software Engineer'],

    authors: [{ name: 'Samuel Kosasih' }],
    creator: 'Samuel Kosasih',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://samadrn.com',
        siteName: 'Samuel Kosasih',
        description: 'Building efficient software solutions with clean code',
        images: [
            {
                url: '/meta/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Samuel Kosasih - Software Engineer',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Samuel Kosasih | Software Engineer',
        description: 'Building efficient software solutions with clean code',
        images: ['/meta/og-image.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={
                    `${jetBrainsMono.variable} ${montserrat.variable} ${inter.variable} font-sans antialiased transition-colors ` +
                    'text-surface-light  dark:text-surface-dark ' +
                    'selection:bg-orange-200 selection:text-orange-800 ' +
                    'dark:selection:bg-sky-900 dark:selection:text-sky-500 selection:transition-colors'
                }
            >
                <LanguageProvider>
                    <SplashAnimationProvider>
                        <ModalProvider>
                            <SplashScreen />

                            <HeaderContainer />

                            {/* Main Content */}
                            <div className="relative min-h-screen mx-5 md:mx-20 lg:mx-30 xl:mx-40">
                                {children}
                            </div>

                            {/* <CustomCursor /> */}
                            <AuroraGlowBackground />
                        </ModalProvider>
                    </SplashAnimationProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
