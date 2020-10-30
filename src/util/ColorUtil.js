import $ from "jquery";
import { getId, setInFront } from "../util/JQueryUtil";

import ColorBean from "../classes/ColorBean";
import ColorCfg from "../classes/ColorCfg";

const rgbCfg = new ColorCfg();
const defaultSavedColors = [
    new ColorBean(0, 0, 0),
    new ColorBean(255, 255, 255),

    new ColorBean(255, 0, 0),
    new ColorBean(0, 255, 0),
    new ColorBean(0, 0, 255),

    new ColorBean(255, 0, 255),
    new ColorBean(255, 255, 0),
    new ColorBean(0, 255, 255),

    new ColorBean(100, 255, 100),
    new ColorBean(255, 100, 100),
    new ColorBean(100, 100, 255),

    new ColorBean(100, 150, 200),
    new ColorBean(200, 150, 100),
    new ColorBean(150, 200, 100),
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

export { rgbCfg, defaultSavedColors, colorizeCell, setColors }