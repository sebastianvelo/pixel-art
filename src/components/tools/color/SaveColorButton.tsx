import React from 'react';
import Icons from "../../icons/Icons";

interface SaveColorButtonProps {
    onSave: () => void;
}

const SaveColorButton: React.FC<SaveColorButtonProps> = ({ onSave }) => {
    return (
        <button
            className="cursor-pointer px-2 py-2 rounded-md flex items-center justify-center transition-all duration-200 opacity-50 text-indigo-700 hover:bg-gray-100 hover:opacity-100"
            onClick={onSave}
        >
            <div className="w-4 h-4">
                <Icons.FloppyDisk />
            </div>
        </button>
    );
};

export default SaveColorButton;