import React from 'react';
import Icons from "../../icons/Icons";

interface ActionButtonsProps {
    onErase: () => void;
    onSaveCanvas: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onErase, onSaveCanvas }) => {
    return (
        <div className="flex flex-wrap gap-2 self-center">
            <button
                className="bg-white hover:bg-gray-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg shadow-sm hover:shadow flex items-center gap-1 transition-all"
                onClick={onErase}
            >
                <Icons.Trash />
            </button>
            <button
                className="bg-white hover:bg-gray-50 text-emerald-600 border border-emerald-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md flex items-center gap-1 transition-all"
                onClick={onSaveCanvas}
            >
                <Icons.Download />
            </button>
        </div>
    );
};

export default ActionButtons;