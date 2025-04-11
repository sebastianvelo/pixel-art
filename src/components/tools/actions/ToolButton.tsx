import { CanvasTool } from "../../../types/types";

interface ToolButtonProps {
    id: CanvasTool;
    icon: React.ComponentType;
    label: string;
    activeTool: string;
    onSelect: (id: CanvasTool) => void;
}

const ToolButton = ({ id, icon: Icon, label, activeTool, onSelect }: ToolButtonProps) => {
    const isActive = activeTool === id;
    const className = isActive
        ? "bg-indigo-100 text-indigo-700 font-medium shadow-inner"
        : "opacity-50 text-indigo-700 hover:bg-gray-100 hover:opacity-100";

    return (
        <button
            key={id}
            className={`cursor-pointer px-2 py-2 rounded-md flex items-center justify-center hover:scale-105 transition-all duration-200 ${className}`}
            onClick={() => onSelect(id)}
            title={label}
        >
            <div className="w-5 h-5">
                <Icon />
            </div>
        </button>
    );
};

export default ToolButton;