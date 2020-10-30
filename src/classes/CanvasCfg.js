class CanvasCfg {
    constructor() {
        this.row = {
            txt: "Alto",
            range: "height",
            label: "labelH",
            default: 20,
            min: 1,
            max: 30
        };
        this.column = {
            txt: "Ancho",
            range: "width",
            label: "labelW",
            default: 20,
            min: 1,
            max: 30
        };
        this.cellSize = {
            txt: "Celda",
            range: "size",
            label: "labelS",
            default: 15,
            min: 7,
            max: 15
        };
        this.border = {
            txt: "Borde",
            range: "border",
            label: "labelBorder",
            default: 1,
            min: 0,
            max: 2
        };
        this.htmlSettings = {
            idCanvas: "canvas",
            idSavedColors: "gridSavedColors",
            classCell: "cell",
        };
        this.htmlSettings.classCellCanvas = this.htmlSettings.classCell + this.htmlSettings.idCanvas;
        this.htmlSettings.classCellSavedColors = this.htmlSettings.classCell + this.htmlSettings.idSavedColors;
    }
}
export default CanvasCfg;