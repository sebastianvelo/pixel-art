import { AppPixels } from "../../hooks/usePixels";
import CanvasCell from "./CanvasCell";

interface CanvasProps {
    app: AppPixels;
}

const Canvas = ({ app }: CanvasProps) => (
    <div
        className="grid bg-white border border-gray-200 rounded-lg shadow-lg"
        style={app.canvas.style}
    >
        {Array.from({ length: app.canvas.height }).map((_, y) =>
            Array.from({ length: app.canvas.width }).map((_, x) => (
                <CanvasCell
                    key={`${x},${y}`}
                    color={app.pixels.all[y]?.[x]}
                    size={app.pixels.size}
                    activeTool={app.tool.active}
                    onClick={() => app.tool.action(x, y)}
                />
            ))
        )}
    </div>
);

export default Canvas;