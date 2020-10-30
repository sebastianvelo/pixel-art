import $ from "jquery";

import DropdownSelectColor from "./dropdownselectcolor/DropdownSelectColor";
import SavedColors from "./savedcolors/SavedColors";
import ButtonSave from "./buttonsave/ButtonSave";
import { getId } from "../../../../util/JQueryUtil";

import "./ColorSettings.css";

function ColorSettings(props) {
    const divId = "bodyColorSettings";
    return (
        <div>
            <p onClick={() => $(getId(divId)).slideToggle()}>Color</p>
            <div id={divId}>
                <DropdownSelectColor changeColor={props.changeColor} />
                <ButtonSave          saveColor={props.saveColor}     />
                <SavedColors         copyColor={props.copyColor}     />
            </div>
        </div>
    )
}
export default ColorSettings;