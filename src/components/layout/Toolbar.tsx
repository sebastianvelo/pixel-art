import React from 'react';
import { AppPixels } from "../../hooks/usePixels";
import ActionButtons from '../tools/actions/ActionButtons';
import ColorSection from '../tools/color/ColorSection';
import ToolButtonsContainer from '../tools/actions/ToolButtonsContainer';

interface ToolbarProps {
    isMenuOpen: boolean;
    app: AppPixels;
    openEraseConfirmationModal: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ isMenuOpen, app, openEraseConfirmationModal }) => (
    <div className={`backdrop-blur-xl bg-gradient-to-br from-purple-600/50 to-indigo-900/50 sm:from-purple-600 sm:to-indigo-900 text-white py-2 px-4 shadow-sm ${isMenuOpen ? "fixed top-16 rounded-md w-full" : "hidden md:block"}`}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 items-center self-center sm:self-auto">
                <div className="flex flex-col">
                    <ToolButtonsContainer
                        activeTool={app.tool.active}
                        onSelectTool={app.tool.change}
                    />
                </div>
                <div className="flex flex-col">
                    <ColorSection
                        currentColor={app.color.current}
                        savedColors={app.color.saved}
                        onColorChange={app.color.pick}
                        onSaveColor={app.color.save}
                    />
                </div>
            </div>
            <ActionButtons
                onErase={openEraseConfirmationModal}
                onSaveCanvas={app.canvas.save}
            />
        </div>
    </div>
);

export default Toolbar;