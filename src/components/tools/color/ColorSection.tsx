import React from 'react';
import SaveColorButton from './SaveColorButton';
import ColorPicker from './ColorPicker';
import ColorPalette from './ColorPalette';

interface ColorSectionProps {
    currentColor: string;
    savedColors: string[];
    onColorChange: (color: string) => void;
    onSaveColor: () => void;
}

const ColorSection: React.FC<ColorSectionProps> = ({
    currentColor,
    savedColors,
    onColorChange,
    onSaveColor
}) => {
    return (
        <div className="flex bg-white rounded-lg shadow-sm p-1 space-x-4">
            <div className="flex space-x-2">
                <SaveColorButton onSave={onSaveColor} />
                <ColorPicker color={currentColor} onChange={onColorChange} />
            </div>
            <ColorPalette
                colors={savedColors}
                currentColor={currentColor}
                onSelectColor={onColorChange}
            />
        </div>
    );
};

export default ColorSection;