import { useState } from 'react';
import { emptyCanvas } from '../utils/canvasUtils';

export interface PixelGrid {
    pixels: string[][];
    updatePixel: (x: number, y: number, color: string) => void;
    resetGrid: () => void;
    setGrid: (grid: string[][]) => void;
}

export const usePixelGrid = (width: number, height: number): PixelGrid => {
    const [pixels, setPixels] = useState(emptyCanvas(width, height));

    const updatePixel = (x: number, y: number, newColor: string) => {
        setPixels(prev => {
            const newPixels = [...prev];
            newPixels[y][x] = newColor;
            return newPixels;
        });
    };

    const resetGrid = () => {
        setPixels(emptyCanvas(width, height));
    };

    return {
        pixels,
        updatePixel,
        resetGrid,
        setGrid: setPixels
    };
};