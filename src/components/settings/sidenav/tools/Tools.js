function Tools(props) {
    let classNameActive = "active";
    return (
        <div>
            <br/>
            <center>
                <button
                    onClick={() => props.setMode(true)}
                    className={!props.eraserMode && props.printMode ? classNameActive : ""}
                >
                    <i className='fas fa-paint-brush'></i>
                </button>
                <button
                    onClick={() => props.setMode(false)}
                    className={!props.eraserMode && !props.printMode ? classNameActive : ""}
                >
                    <i className='fas fa-eye-dropper'></i>
                </button>
                <button
                    onClick={() => props.eraser()}
                    className={props.eraserMode ? classNameActive : ""}
                >
                    <i className='fas fa-eraser'></i>
                </button>
                <button onClick={() => props.resetCanvas()}>
                    <i className='fas fa-trash-alt'></i>
                </button>
                <a id="saveImage" download="pixel-art.png" >
                    <button>
                        <i className='fas fa-save'></i>
                    </button>
                </a>
            </center>
        </div>
    )
}
export default Tools;
