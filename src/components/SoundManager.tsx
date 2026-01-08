"use client";

import { createContext, useContext, ReactNode, useEffect, useState } from "react";
// import useSound from "use-sound"; // If installed, otherwise fallback

type SoundContextType = {
    playHover: () => void;
    playClick: () => void;
};

const SoundContext = createContext<SoundContextType | null>(null);

export const useSoundManager = () => {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error("useSoundManager must be used within a SoundProvider");
    }
    return context;
};

export function SoundProvider({ children }: { children: ReactNode }) {
    // Simple fallback implementation without external assets for now to avoid errors
    // Ideally this would load real audio files

    const playHover = () => {
        // console.log("Hover sound");
    };

    const playClick = () => {
        // console.log("Click sound");
    };

    return (
        <SoundContext.Provider value={{ playHover, playClick }}>
            {children}
        </SoundContext.Provider>
    );
}
