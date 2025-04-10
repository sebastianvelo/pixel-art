import React from 'react';
import ColorSwatch from './ColorSwatch';

interface ColorPaletteProps {
    colors: string[];
    currentColor: string;
    onSelectColor: (color: string) => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors, currentColor, onSelectColor }) => {
    return (
        <div className="grid grid-cols-10 gap-1">
            {colors.map((color) => (
                <ColorSwatch
                    key={color}
                    color={color}
                    isSelected={color === currentColor}
                    onClick={() => onSelectColor(color)}
                />
            ))}
        </div>
    );
};

export default ColorPalette;