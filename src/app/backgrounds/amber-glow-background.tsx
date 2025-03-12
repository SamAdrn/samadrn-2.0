import React from 'react';

/** Background component with warm amber glowing gradients */
const AmberGlowBackground = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-[-1] transition-colors bg-primary-light dark:bg-primary-dark">
            {/* Top right orange-red glow */}
            <div
                className={
                    'absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl rounded-full blur-3xl transition-colors ' +
                    'from-orange-400/50 via-red-200/50 to-primary-light ' +
                    'dark:from-orange-600/15 dark:via-red-700/10 dark:to-primary-dark dark:opacity-70'
                }
            ></div>

            {/* Center red glow */}
            <div
                className={
                    'absolute top-1/2 left-1/2 w-1/3 h-1/3 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 transition-colors ' +
                    'bg-red-100/30 dark:bg-red-800/5 dark:opacity-70'
                }
            ></div>

            {/* Bottom left yellow glow */}
            <div
                className={
                    'absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 transition-all ' +
                    'from-yellow-200/50 to-primary-light ' +
                    'dark:bg-yellow-400 dark:opacity-90 dark:mix-blend-color'
                }
            ></div>
        </div>
    );
};

export default AmberGlowBackground;
