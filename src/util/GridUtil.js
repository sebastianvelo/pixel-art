import $ from "jquery";
import { getId, getClass, getProperty, setInFront } from "../util/JQueryUtil";
import GridBean from "../classes/GridBean";
import CanvasCfg from "../classes/CanvasCfg";

const canvasCfg = new CanvasCfg();
const getCellId = (x, y, gridId) => gridId + x + "-" + y;
const getCellClass = (gridId) => canvasCfg.htmlSettings.classCell + gridId;
/* Sets a white backgroundColor in canvas */
const resetCanvas = () => { $(getClass(canvasCfg.htmlSettings.classCellCanvas)).css("background-color", "white"); };

/* Returns the last cellId without backgroundColor */
function getLastCellIDSavedColors() {
    let cells = $(getProperty("owner", canvasCfg.htmlSettings.idSavedColors));
    let index = 0;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.backgroundColor.length === 0) {
            index = i;
            break;
        }
    }
    return cells[index].id;
}

/* modifies values in the website with the grid in props and calls setCellSize() */
function setGridSize(grid) {
    setInFront(canvasCfg.row.range, canvasCfg.row.label, grid.rows);
    setInFront(canvasCfg.column.range, canvasCfg.column.label, grid.columns);
    setInFront(canvasCfg.cellSize.range, canvasCfg.cellSize.label, grid.size);
    setInFront(canvasCfg.border.range, canvasCfg.border.label, grid.border);
    setCellSize(grid);
}

/* Modifies the width and height of cells with the grid in props */
function setCellSize(grid) {
    $(getClass(canvasCfg.htmlSettings.classCellCanvas)).css("width", grid.size);
    $(getClass(canvasCfg.htmlSettings.classCellCanvas)).css("height", grid.size);
    $(getClass(canvasCfg.htmlSettings.classCellCanvas)).css("border", grid.border + "px solid black");
}

function getGridFromRanges(){
    let width = $(getId(canvasCfg.column.range)).val();
    let height = $(getId(canvasCfg.row.range)).val();
    let size = $(getId(canvasCfg.cellSize.range)).val();
    let border = $(getId(canvasCfg.border.range)).val();
    return new GridBean(height, width, size, border);
}

export {
    canvasCfg,
    getCellId, getCellClass, 
    resetCanvas, getLastCellIDSavedColors,
    setCellSize, setGridSize,
    getGridFromRanges
};