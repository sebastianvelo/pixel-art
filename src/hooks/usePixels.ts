import { useEffect } from 'react';
import { CanvasTool } from '../types/types';
import { useCanvasDimensions } from './useCanvasDimensions';
import { useColorPalette } from './useColorPalette';
import { useCanvasTool } from './useCanvasTool';
import { usePixelGrid } from './usePixelGrid';
import { useCanvasExport } from './useCanvasExport';

export type AppPixels = {
    tool: {
        active: CanvasTool;
        action: (x: number, y: number) => void;
        change: (tool: CanvasTool) => void;
    };
    canvas: {
        width: number;
        height: number;
        erase: () => void;
        save: () => void;
        style: {
            gridTemplateColumns: string;
            width: string;
            height: string;
        };
    };
    color: {
        current: string;
        pick: (color: string) => void;
        save: () => void;
        saved: string[];
        eraseSaved: (index: number) => void;
        clearSaved: () => void;
    };
    pixels: {
        all: string[][];
        size: number;
    };
    handleResize: () => void;
};

export interface AppPixelsProps {
    initialPixelSize?: number;
    initialColor?: string;
}

const usePixels = (props?: AppPixelsProps): AppPixels => {
    const dimensions = useCanvasDimensions(props?.initialPixelSize);
    const colorPalette = useColorPalette(props?.initialColor);
    const tool = useCanvasTool();
    const pixelGrid = usePixelGrid(dimensions.width, dimensions.height);
    const canvasExport = useCanvasExport();

    const handleToolAction = (x: number, y: number) => {
        if (tool.active === CanvasTool.COPY) {
            const pickedColor = tool.getAction(
                colorPalette.current,
                pixelGrid.updatePixel,
                pixelGrid.pixels
            )(x, y);

            if (pickedColor !== undefined && pickedColor !== null) {
                colorPalette.pick(pickedColor);
                tool.change(CanvasTool.DRAW);
            }
        } else {
            tool.getAction(
                colorPalette.current,
                pixelGrid.updatePixel,
                pixelGrid.pixels
            )(x, y);
        }
    };

    return {
        tool: {
            active: tool.active,
            action: handleToolAction,
            change: tool.change
        },
        canvas: {
            width: dimensions.width,
            height: dimensions.height,
            erase: pixelGrid.resetGrid,
            save: () => canvasExport.saveAsImage(
                pixelGrid.pixels,
                dimensions.width,
                dimensions.height,
                dimensions.pixelSize
            ),
            style: dimensions.style
        },
        color: {
            current: colorPalette.current,
            pick: colorPalette.pick,
            save: colorPalette.save,
            saved: colorPalette.saved,
            eraseSaved: colorPalette.eraseSaved,
            clearSaved: colorPalette.clearSaved
        },
        pixels: {
            all: pixelGrid.pixels,
            size: dimensions.pixelSize
        },
        handleResize: dimensions.handleResize
    };
};

export default usePixels;