import Row from "./row/Row";

function Grid(props) {
    let rows = [];
    for (let i = 0; i < props.rows; i++)
        rows.push(<Row key={i} columns={props.columns} row={i} funct={props.funct} id={props.id} />);

    return (<table id={props.id} className="grid"><tbody>{rows}</tbody></table>);
}
export default Grid;