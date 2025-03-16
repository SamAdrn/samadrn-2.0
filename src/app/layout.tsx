import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Montserrat } from 'next/font/google';

import './globals.css';

import { CustomCursor, SplashScreen } from './components/global';
import Navbar from './components/navbar';


import { AuroraGlowBackground } from './lib/backgrounds';
import { SplashAnimationProvider } from './lib/contexts';

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
                    `${jetBrainsMono.variable} ${montserrat.variable} ${inter.variable} font-sans antialiased transition-colors ` +
                    'text-surface-light  dark:text-surface-dark'
                }
            >
                <SplashAnimationProvider>
                    {/* <SplashScreen /> */}

                    <Navbar />

                    {/* Main Content */}
                    <div className="relative min-h-screen mx-5 md:mx-20 lg:mx-30 xl:mx-48">
                        {children}
                    </div>

                    {/* <CustomCursor /> */}
                    <AuroraGlowBackground />
                </SplashAnimationProvider>
            </body>
        </html>
    );
}
