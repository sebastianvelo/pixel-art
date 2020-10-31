import "./Modal.css";

function Modal(props) {
    return (
        <div id={props.id} className="modal">
            <div className="modal-header">
                <span className="close" onClick={() => closeModal(props.id)}>&times;</span>
                <h2>{props.txt}</h2>
            </div>
            <div className="modal-body">
                <center>
                    <button onClick={() => doSomething(props.id, props.funct)}>Confirmar</button>
                    <button onClick={() => closeModal(props.id)}>Cancelar</button>
                </center>
            </div>
        </div>
    );
}

function getModal(id) {
    return document.getElementById(id);
}

function closeModal(id) {
    getModal(id).style.display = "none";
}

function openModal(id) {
    getModal(id).style.display = "block";
}

function doSomething(id, funct) {
    funct();
    closeModal(id);
}


export { Modal, openModal };
