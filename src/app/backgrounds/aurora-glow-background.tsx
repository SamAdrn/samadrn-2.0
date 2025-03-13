import React from 'react';

/** Background component with warm amber glowing gradients */
export default function AuroraGlowBackground() {
    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-[-1] transition-colors bg-primary-light dark:bg-primary-dark">
            {/* Top right glow */}
            <div
                className={
                    'absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl translate-x-1/4 -translate-y-1/12 rounded-full blur-3xl transition-colors ' +
                    'from-orange-400/50 via-red-200/50 to-primary-light ' +
                    'dark:from-blue-600/50 dark:via-30% dark:via-sky-700/30 dark:to-primary-dark '
                }
            ></div>

            {/* Center glow */}
            <div
                className={
                    'absolute top-1/2 left-1/2 w-1/3 h-1/3 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 transition-colors ' +
                    'bg-red-100/30 dark:bg-teal-800/10 dark:opacity-70'
                }
            ></div>

            {/* Bottom left glow */}
            <div
                className={
                    'absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr rounded-full blur-3xl -translate-x-1/4 transition-colors ' +
                    'from-yellow-300/80 via-60% to-primary-light ' +
                    'dark:from-green-800/30 via-teal-800/20 dark:to-primary-dark '
                }
            ></div>
        </div>
    );
}
