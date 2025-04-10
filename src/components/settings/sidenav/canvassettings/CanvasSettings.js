import $ from "jquery";

import Range from "../../../range/Range";
import { canvasCfg } from "../../../../util/GridUtil";
import { getId } from "../../../../util/JQueryUtil";

function CanvasSettings(props) {
    const divId = "bodyCanvasSettings";
    let item = canvasCfg.column;
    item.max = props.isMobile ? 20 : item.max;
    return (
        <div className="opaque">
            <p onClick={() => $(getId(divId)).slideToggle()}>Lienzo</p>
            <div id={divId}>
                <Range item={canvasCfg.column}   funct={props.changeSize} />
                <Range item={canvasCfg.row}      funct={props.changeSize} />
                <Range item={canvasCfg.cellSize} funct={props.changeSize} />
                <Range item={canvasCfg.border}   funct={props.changeSize} />
            </div>
        </div>
    )
}
export default CanvasSettings;