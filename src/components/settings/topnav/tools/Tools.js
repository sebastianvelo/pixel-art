function Tools(props) {
    return (
        <div id="tools">
                <button onClick={() => props.setMode(true)}>
                    <i className='fas fa-paint-brush'></i>
                </button>
                <button onClick={() => props.setMode(false)}>
                    <i className='fas fa-eye-dropper'></i>
                </button>
                <button onClick={() => props.eraser()}>
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
        </div>
    )
}
export default Tools;
