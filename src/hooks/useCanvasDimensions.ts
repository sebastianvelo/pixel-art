import { useState } from 'react';
import { emptyCanvas } from '../utils/canvasUtils';

export interface CanvasDimensions {
    width: number;
    height: number;
    pixelSize: number;
    style: {
        gridTemplateColumns: string;
        width: string;
        height: string;
    };
    handleResize: () => void;
    resetCanvas: () => string[][];
}

export const useCanvasDimensions = (initialPixelSize = 16): CanvasDimensions => {
    const [dimensions, setDimensions] = useState({ width: 32, height: 32 });
    const [pixelSize, setPixelSize] = useState(initialPixelSize);

    const handleResize = () => {
        const maxHeight = window.innerHeight - 64 - 64 - 32;
        const maxWidth = window.innerWidth - 32;

        const newWidth = Math.floor(maxWidth / pixelSize);
        const newHeight = Math.floor(maxHeight / pixelSize);

        if (newWidth !== dimensions.width || newHeight !== dimensions.height) {
            setDimensions({ width: newWidth, height: newHeight });
            return true;
        }
        return false;
    };

    const resetCanvas = () => emptyCanvas(dimensions.width, dimensions.height);

    const canvasStyle = {
        gridTemplateColumns: `repeat(${dimensions.width}, ${pixelSize}px)`,
        width: `${dimensions.width * pixelSize}px`,
        height: `${dimensions.height * pixelSize}px`
    };

    return {
        width: dimensions.width,
        height: dimensions.height,
        pixelSize,
        style: canvasStyle,
        handleResize,
        resetCanvas
    };
};