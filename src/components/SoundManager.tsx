"use client";

import { createContext, useContext, ReactNode } from "react";
import useSound from "use-sound";

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
    const [playHover] = useSound("/sounds/hover.mp3", { volume: 0.2 });
    const [playClick] = useSound("/sounds/click.mp3", { volume: 0.5 });

    return (
        <SoundContext.Provider value={{ playHover, playClick }}>
            {children}
        </SoundContext.Provider>
    );
}
