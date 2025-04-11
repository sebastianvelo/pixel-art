import React from 'react';
import SaveColorButton from './SaveColorButton';
import ColorPicker from './ColorPicker';
import ColorPalette from './ColorPalette';
import ToolButton from '../actions/ToolButton';
import { CanvasTool } from '../../../types/types';
import Icons from '../../icons/Icons';

interface ColorSectionProps {
    currentColor: string;
    activeTool: CanvasTool;
    savedColors: string[];
    onColorChange: (color: string) => void;
    onSelectTool: () => void;
    onSaveColor: () => void;
}

const ColorSection: React.FC<ColorSectionProps> = ({
    currentColor,
    savedColors,
    activeTool,
    onColorChange,
    onSelectTool,
    onSaveColor
}) => {
    return (
        <div className="flex bg-white rounded-lg shadow-sm p-1 space-x-2">
            <div className="flex space-x-2">
                <ToolButton
                    key={CanvasTool.COPY}
                    id={CanvasTool.COPY}
                    icon={Icons.ColorPicker}
                    label={""}
                    activeTool={activeTool}
                    onSelect={onSelectTool}
                />
                <ColorPicker color={currentColor} onChange={onColorChange} />
                <SaveColorButton onSave={onSaveColor} />

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