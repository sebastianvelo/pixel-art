import { Modal, openModal } from "../../../modal/Modal";

function Tools(props) {
    let classNameActive = "active";
    let idReset = "reset";
    return (
        <div>
            <br/>
            <center>
                <button onClick={() => props.setMode(true)} className={!props.eraserMode && props.printMode ? classNameActive : ""} >
                    <i className='fas fa-paint-brush'></i>
                </button>
                <button onClick={() => props.setMode(false)} className={!props.eraserMode && !props.printMode ? classNameActive : ""}>
                    <i className='fas fa-eye-dropper'></i>
                </button>
                <button onClick={() => props.eraser()} className={props.eraserMode ? classNameActive : ""} >
                    <i className='fas fa-eraser'></i>
                </button>
                <button onClick={() => openModal(idReset)}>
                    <i className='fas fa-trash-alt'></i>
                </button>
                <a id="saveImage" download="pixel-art.png" >
                    <button>
                        <i className='fas fa-save'></i>
                    </button>
                </a>
            </center>
            <Modal id={idReset} txt={"¿Está seguro que desea restaurar el lienzo?"} funct={props.resetCanvas}/>
        </div>
    )
}
export default Tools;