import Cell from "./cell/Cell";

function Row(props){
    let columns = [];
    for(let i = 0; i < props.columns; i++)
        columns.push(<Cell key={i} x={i} y={props.row} funct={props.funct} id={props.id} />);
        
    return (<tr>{columns}</tr>);
}
export default Row;