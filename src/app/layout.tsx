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
    metadataBase: new URL('https://samadrn.com'),
    title: {
        default: 'Samuel Kosasih | Software Engineer',
        template: '%s | Samuel Kosasih',
    },
    description:
        'Software Engineer specializing in Angular with proficiency in TypeScript, Python, and GraphQL. Exploring backend engineering. Based in Maryland, passionate about building efficient solutions and always eager to learn.',

    keywords: [
        'Samuel Kosasih',
        'Software Engineer',
        'Front-End Developer',
        'Angular Developer',
        'TypeScript',
        'Python',
        'GraphQL',
        'Backend Engineering',
        'Web Development',
        'Jakarta',
        'Maryland',
        'Inovalon',
    ],

    authors: [{ name: 'Samuel Kosasih' }],
    creator: 'Samuel Kosasih',

    // Robots meta tags - Tells search engine crawlers how to index this site
    robots: {
        // Allow search engines to index this page in their search results
        index: true,
        // Allow crawlers to follow links on this page to discover other pages
        follow: true,
        // Google-specific settings for richer search result displays
        googleBot: {
            index: true,
            follow: true,
            // -1 means no limit on video preview length in search results
            'max-video-preview': -1,
            // Allow large image previews in search results (better for portfolio sites)
            'max-image-preview': 'large',
            // -1 means no limit on text snippet length in search results
            'max-snippet': -1,
        },
    },

    // Canonical URL - Tells search engines this is the official/preferred URL for this page
    // Prevents duplicate content issues if site is accessible via multiple URLs
    alternates: {
        canonical: 'https://samadrn.com',
    },

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://samadrn.com',
        siteName: 'Samuel Kosasih',
        title: 'Samuel Kosasih | Software Engineer',
        description:
            'Software Engineer specializing in Angular with proficiency in TypeScript, Python, and GraphQL. Exploring backend engineering. Based in Maryland, passionate about building efficient solutions and always eager to learn.',
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
        description:
            'Software Engineer specializing in Angular with proficiency in TypeScript, Python, and GraphQL. Exploring backend engineering.',
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Samuel Kosasih',
                            jobTitle: 'Software Engineer',
                            description:
                                'Software Engineer specializing in Angular with proficiency in TypeScript, Python, and GraphQL. Exploring backend engineering.',
                            url: 'https://samadrn.com',
                            address: {
                                '@type': 'PostalAddress',
                                addressLocality: 'Maryland',
                                addressCountry: 'US',
                            },
                        }),
                    }}
                />
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
