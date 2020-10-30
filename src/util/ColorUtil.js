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

export { rgbCfg, defaultSavedColors }