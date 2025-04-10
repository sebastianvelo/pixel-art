import React from 'react';
import Icons from "../../icons/Icons";

interface SaveColorButtonProps {
    onSave: () => void;
}

const SaveColorButton: React.FC<SaveColorButtonProps> = ({ onSave }) => {
    return (
        <button
            className="bg-indigo-100 text-indigo-700 font-medium shadow-inner cursor-pointer px-3 py-2 rounded-md flex items-center justify-center hover:scale-105 transition-all duration-200"
            onClick={onSave}
        >
            <div className="w-4 h-4 text-black">
                <Icons.FloppyDisk />
            </div>
        </button>
    );
};

export default SaveColorButton;