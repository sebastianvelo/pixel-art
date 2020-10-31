import $ from "jquery";
import html2canvas from "html2canvas";

import { canvasCfg } from "./GridUtil";
import { getId } from "./JQueryUtil";


function setDownloadImage() {
    html2canvas(document.querySelector(getId(canvasCfg.htmlSettings.idCanvas))).then(canvas => {
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        $("#saveImage").attr("href", image);
    });
}

export { setDownloadImage };