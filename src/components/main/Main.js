import Grid from "../grid/Grid";
import { canvasCfg } from "../../util/GridUtil";

function Main(props) {
        return (
            <div className="main">
                <Grid
                    rows={props.grid.rows}
                    columns={props.grid.columns}
                    funct={props.funct}
                    id={canvasCfg.htmlSettings.idCanvas}
                />
            </div>
        );
}
export default Main;