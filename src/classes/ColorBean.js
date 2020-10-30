class ColorBean {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    getRGB() {
        return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    }

    setRGB(rgb) {
        let rgbArray = rgb.substring(4, rgb.length-1).split(",");
        rgbArray = rgbArray.length !== 3 ? [255, 255, 255] : rgbArray;
        this.r = parseInt(rgbArray[0]);
        this.g = parseInt(rgbArray[1]);
        this.b = parseInt(rgbArray[2]);
    }

    equals(color) {
        return this.getRGB() === color.getRGB();
    }
}
export default ColorBean;