import $ from "jquery";
import { getId, setInFront } from "../util/JQueryUtil";

import ColorBean from "../classes/ColorBean";
import ColorCfg from "../classes/ColorCfg";

const rgbCfg = new ColorCfg();
const defaultSavedColors = [
    new ColorBean(0, 0, 0), //Negro
    new ColorBean(127, 127, 127), //Gris oscuro
    new ColorBean(136, 0, 21), //Bordo
    new ColorBean(237, 38, 26), //Rojo
    new ColorBean(255, 127, 39), //Naranja
    new ColorBean(255, 242, 0), //Amarillo
    new ColorBean(34, 177, 76), //Verde
    new ColorBean(0, 162, 232), //Celeste
    new ColorBean(63, 72, 204), //Azul violeta
    new ColorBean(163, 73, 164), //Violeta
    new ColorBean(255, 255, 255),
    new ColorBean(195, 195, 195),
    new ColorBean(185, 122, 87),
    new ColorBean(255, 174, 201),
    new ColorBean(255, 201, 14),
    new ColorBean(239, 228, 176),
    new ColorBean(181, 230, 29),
    new ColorBean(153, 217, 234),
    new ColorBean(112, 146, 190),
    new ColorBean(200, 191, 231)
]

/*  Receives a cellId in parameter and 
modifies its backgroundColor with the color in parameter */
function colorizeCell(cellId, color) {
    $(getId(cellId)).css("background-color", color.getRGB());
}
/* modifies values in the website and the background color of selectedColor's cell */
function setColors(color) {
    setInFront(rgbCfg.r.range, rgbCfg.r.label, color.r);
    setInFront(rgbCfg.g.range, rgbCfg.g.label, color.g);
    setInFront(rgbCfg.b.range, rgbCfg.b.label, color.b);
    colorizeCell("selectedColor", color);
}

function getColorFromRanges(){
    let r = $(getId(rgbCfg.r.range)).val();
    let g = $(getId(rgbCfg.g.range)).val();
    let b = $(getId(rgbCfg.b.range)).val();
    return new ColorBean(r, g, b);
}

export { rgbCfg, defaultSavedColors, colorizeCell, setColors, getColorFromRanges }