import Range from "../../../../../range/Range";
import { rgbCfg } from "../../../../../../util/ColorUtil";

function RangesGroup(props) {
    return (
        <div className="dropdown-content">
            <Range item={rgbCfg.r} funct={props.changeColor} />
            <Range item={rgbCfg.g} funct={props.changeColor} />
            <Range item={rgbCfg.b} funct={props.changeColor} />
        </div>
    )
}
export default RangesGroup;