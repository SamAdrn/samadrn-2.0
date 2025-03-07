import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto_Mono, JetBrains_Mono } from 'next/font/google';
import Navbar from './components/navbar';
import SplashScreen from './components/spash-screen';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
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
                    `${jetBrainsMono.variable} font-mono antialiased transition-colors ` +
                    'bg-primary-light text-surface-light dark:bg-primary-dark dark:text-surface-dark'
                }
            >
                <SplashScreen>
                    <Navbar />
                    {children}
                </SplashScreen>
            </body>
        </html>
    );
}
