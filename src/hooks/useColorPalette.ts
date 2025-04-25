import { useState } from 'react';

export interface ColorPalette {
    current: string;
    pick: (color: string) => void;
    save: () => void;
    saved: string[];
    eraseSaved: (index: number) => void;
    clearSaved: () => void;
}

export const useColorPalette = (initialColor = '#000000'): ColorPalette => {
    const [color, setColor] = useState(initialColor);
    const [savedColors, setSavedColors] = useState<string[]>(Array(20).fill(""));

    const pick = (newColor: string) => setColor(newColor);

    const save = () => {
        if (!savedColors.includes(color)) {
            const firstIndex = savedColors.findIndex(color => color === "");
            if (firstIndex !== -1) {
                const updatedColors = [...savedColors];
                updatedColors[firstIndex] = color;
                setSavedColors(updatedColors);
            }
        }
    };

    const eraseSaved = (index: number) => {
        setSavedColors(prev => prev.filter((_, i) => i !== index));
    };

    const clearSaved = () => setSavedColors([]);

    return {
        current: color,
        pick,
        save,
        saved: savedColors,
        eraseSaved,
        clearSaved
    };
};