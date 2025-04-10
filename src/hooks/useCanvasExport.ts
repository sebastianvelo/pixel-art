export interface CanvasExport {
    saveAsImage: (pixels: string[][], width: number, height: number, pixelSize: number) => void;
}

export const useCanvasExport = (): CanvasExport => {
    const saveAsImage = (
        pixels: string[][],
        width: number,
        height: number,
        pixelSize: number
    ) => {
        const canvas = document.createElement("canvas");
        canvas.width = width * pixelSize;
        canvas.height = height * pixelSize;
        const ctx = canvas.getContext("2d");

        if (ctx) {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            pixels.forEach((row, y) => {
                row.forEach((cell, x) => {
                    if (cell) {
                        ctx.fillStyle = cell;
                        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                    }
                });
            });

            ctx.strokeStyle = "#EEEEEE";

            for (let x = 0; x <= width; x++) {
                ctx.beginPath();
                ctx.moveTo(x * pixelSize, 0);
                ctx.lineTo(x * pixelSize, canvas.height);
                ctx.stroke();
            }

            for (let y = 0; y <= height; y++) {
                ctx.beginPath();
                ctx.moveTo(0, y * pixelSize);
                ctx.lineTo(canvas.width, y * pixelSize);
                ctx.stroke();
            }

            const a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "pixel-art.png";
            a.click();
        }
    };

    return { saveAsImage };
};