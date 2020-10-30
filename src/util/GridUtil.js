import CanvasCfg from "../classes/CanvasCfg";

const canvasCfg = new CanvasCfg();
const getCellId = (x, y, gridId) => gridId + x + "-" + y;
const getCellClass = (gridId) => canvasCfg.htmlSettings.classCell + gridId;

export { canvasCfg, getCellId, getCellClass };