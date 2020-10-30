function ButtonSave(props) {
    return (
        <center>
            <button id="buttonSave" onClick={() => props.saveColor()}>
                <i className='fas fa-save'></i>&nbsp;&nbsp;Guardar color
            </button>
        </center>
    );
}
export default ButtonSave;