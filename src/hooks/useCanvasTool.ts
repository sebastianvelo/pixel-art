import { useState } from 'react';
import { CanvasTool } from '../types/types';

export interface ToolState {
    active: CanvasTool;
    change: (tool: CanvasTool) => void;
    getAction: (color: string, updatePixel: (x: number, y: number, color: string) => void, pixels: string[][]) => (x: number, y: number) => void;
}

export const useCanvasTool = (initialTool = CanvasTool.DRAW): ToolState => {
    const [tool, setTool] = useState<CanvasTool>(initialTool);

    const change = (newTool: CanvasTool) => setTool(newTool);

    const getAction = (
        color: string,
        updatePixel: (x: number, y: number, color: string) => void,
        pixels: string[][]
    ) => {
        switch (tool) {
            case CanvasTool.DRAW:
                return (x: number, y: number) => updatePixel(x, y, color);
            case CanvasTool.COPY:
                return (x: number, y: number) => {
                    const pixelColor = pixels[y][x];
                    if (pixelColor) return pixelColor;
                    return '';
                };
            case CanvasTool.ERASE:
                return (x: number, y: number) => updatePixel(x, y, '');
            default:
                return () => { };
        }
    };

    return {
        active: tool,
        change,
        getAction
    };
};