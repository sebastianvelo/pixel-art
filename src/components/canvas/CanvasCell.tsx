import { CanvasTool } from "../../types/types";

interface CanvasCellProps {
    color: string;
    size: number;
    activeTool: CanvasTool;
    onClick: () => void;
}

const CanvasCell = ({ color, size, activeTool, onClick }: CanvasCellProps) => (
    <div
        className="border border-gray-200 rounded-md"
        style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color || "transparent",
            cursor: activeTool === CanvasTool.DRAW
                ? "crosshair"
                : activeTool === CanvasTool.ERASE
                    ? "cell"
                    : "pointer"
        }}
        onClick={onClick}
    />
);

export default CanvasCell;