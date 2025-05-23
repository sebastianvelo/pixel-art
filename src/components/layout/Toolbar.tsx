import React from 'react';
import { AppPixels } from "../../hooks/usePixels";
import ActionButtons from '../tools/actions/ActionButtons';
import ColorSection from '../tools/color/ColorSection';
import ToolButtonsContainer from '../tools/actions/ToolButtonsContainer';
import { CanvasTool } from '../../types/types';

interface ToolbarProps {
    isMenuOpen: boolean;
    app: AppPixels;
    openEraseConfirmationModal: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ isMenuOpen, app, openEraseConfirmationModal }) => (
    <div className={`backdrop-blur-xl bg-white/80 text-white py-2 px-4 shadow-sm ${isMenuOpen ? "fixed top-16 rounded-md w-full" : "hidden md:block"}`}>
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
                        activeTool={app.tool.active}
                        onColorChange={app.color.pick}
                        onSelectTool={() => app.tool.change(CanvasTool.COPY)}
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