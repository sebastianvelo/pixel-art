class ColorCfg {
    constructor() {
        this.r = {
            txt: "Rojo",
            range: "rangeR",
            label: "labelR",
            default: 150,
            min: 0,
            max: 255
        };
        this.g = {
            txt: "Verde",
            range: "rangeG",
            label: "labelG",
            default: 50,
            min: 0,
            max: 255
        };
        this.b = {
            txt: "Azul",
            range: "rangeB",
            label: "labelB",
            default: 0,
            min: 0,
            max: 255
        }
    }
}
export default ColorCfg;