import React from 'react';
import { CanvasTool } from "../../../types/types";
import Icons from "../../icons/Icons";
import ToolButton from "./ToolButton";

const TOOLS = [
    { id: CanvasTool.DRAW, icon: Icons.Draw, label: "Draw" },
    { id: CanvasTool.ERASE, icon: Icons.Eraser, label: "Erase" }
];

interface ToolButtonsContainerProps {
    activeTool: CanvasTool;
    onSelectTool: (tool: CanvasTool) => void;
}

const ToolButtonsContainer: React.FC<ToolButtonsContainerProps> = ({ activeTool, onSelectTool }) => {
    return (
        <div className="flex bg-white rounded-lg shadow-sm p-1">
            {TOOLS.map(tool => (
                <ToolButton
                    key={tool.id}
                    id={tool.id}
                    icon={tool.icon}
                    label={tool.label}
                    activeTool={activeTool}
                    onSelect={onSelectTool}
                />
            ))}
        </div>
    );
};

export default ToolButtonsContainer;