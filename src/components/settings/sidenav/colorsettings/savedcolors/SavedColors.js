import Grid from "../../../../grid/Grid";
import { canvasCfg } from "../../../../../util/GridUtil";

function SavedColors(props) {
    return (
        <div>
            <h5>Colores guardados</h5>
            <div>
                <Grid rows={6} columns={12} funct={props.copyColor} id={canvasCfg.htmlSettings.idSavedColors} />
            </div>
        </div>
    )
}
export default SavedColors;