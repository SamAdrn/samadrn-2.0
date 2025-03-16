'use client';

import React, { createContext, useContext, useState } from 'react';

/** Define the context type */
type SplashAnimationContextType = {
    splashComplete: boolean;
    setSplashComplete: (value: boolean) => void;
};

/** Create the context with default values */
const SplashAnimationContext = createContext<SplashAnimationContextType>({
    splashComplete: false,
    setSplashComplete: () => {},
});

/** Provider component */
export function SplashAnimationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [splashComplete, setSplashComplete] = useState(true);

    return (
        <SplashAnimationContext.Provider
            value={{ splashComplete, setSplashComplete }}
        >
            {children}
        </SplashAnimationContext.Provider>
    );
}

/** Custom hook to use the animation context */
export function useSplashAnimation() {
    return useContext(SplashAnimationContext);
}
