function Range(props) {
    return (
        <div className="range">
            <label className="labelRange">{props.item.txt}</label> <br />
            <label className="labelRangeValue" id={props.item.label}></label> <br />
            <input
                className="inputRange"
                id={props.item.range}
                type="range"
                min={props.item.min}
                max={props.item.max}
                step="1"
                onChange={() => props.funct()}></input>
        </div>
    )
}
export default Range;