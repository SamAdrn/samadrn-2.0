import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import './globals.css';
import Navbar from './components/navbar';
import SplashScreen from './components/spash-screen';

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

export const metadata: Metadata = {
    title: 'Samuel Kosasih',
    description: 'Personal Website',
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
                    `${jetBrainsMono.variable} ${inter.variable} antialiased transition-colors ` +
                    ' text-surface-light  dark:text-surface-dark'
                }
            >
                <SplashScreen>
                    <div className="relative min-h-screen transition-colors bg-primary-light dark:bg-primary-dark overflow-hidden">
                        <Navbar />
                        {children}

                        {/* Decorative Pieces */}
                        <div
                            className={
                                'absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl rounded-full blur-3xl ' +
                                'from-orange-400/50 via-red-200/50 to-primary-light ' +
                                'dark:from-orange-700/10 dark:via-red-800/5 dark:to-primary-dark'
                            }
                        ></div>
                        <div
                            className={
                                'absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 ' +
                                'bg-yellow-200/20 dark:bg-yellow-900/10'
                            }
                        ></div>
                        <div
                            className={
                                'absolute top-1/2 left-1/2 w-1/3 h-1/3 rounded-full blur-3xl ' +
                                'bg-red-100/30 dark:bg-red-800/5 dark:opacity-70'
                            }
                        ></div>
                    </div>
                </SplashScreen>
            </body>
        </html>
    );
}
