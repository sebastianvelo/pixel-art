import $ from "jquery";

import SelectedColor from "./selectedcolor/SelectedColor";
import RangesGroup from "./rangesgroup/RangesGroup";

function DropdownSelectColor(props) {
    return (
        <div className="dropdown" onMouseOver={() => setOpacity(0.1)} onMouseOut={() => setOpacity(1)}>
            <SelectedColor />
            <RangesGroup changeColor={props.changeColor} />
        </div>
    );
}
export default DropdownSelectColor;

function setOpacity(value) {
    $(".opaque").css("opacity", value);
}