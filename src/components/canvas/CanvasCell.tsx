import { CanvasTool } from "../../types/types";

const CURSORS = {
    [CanvasTool.DRAW]: "crosshair",
    [CanvasTool.ERASE]: "cell",
    [CanvasTool.COPY]: "pointer",
};

interface CanvasCellProps {
    color: string;
    size: number;
    activeTool: CanvasTool;
    onClick: () => void;
}

const CanvasCell = ({ color, size, activeTool, onClick }: CanvasCellProps) => (
    <button
        className="border border-gray-200 rounded-md"
        style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color || "transparent",
            cursor: CURSORS[activeTool] || "default",
        }}
        onClick={onClick}
        onContextMenu={(e) => {
            e.preventDefault();
            onClick();
        }}
    />
);

export default CanvasCell;