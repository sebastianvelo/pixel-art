import { getCellId, getCellClass } from "../../../../util/GridUtil";

function Cell(props) {
    let id = getCellId(props.x, props.y, props.id);
    return (
        <td owner={props.id} id={id} className={getCellClass(props.id)} onClick={() => props.funct(id)}></td>
    );
}
export default Cell;