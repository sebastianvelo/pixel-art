import Grid from "../../../../grid/Grid";
import { canvasCfg } from "../../../../../util/GridUtil";

function SavedColors(props) {
    return (
        <div>
            <Grid rows={6} columns={10} funct={props.copyColor} id={canvasCfg.htmlSettings.idSavedColors} />
        </div>
    )
}
export default SavedColors;