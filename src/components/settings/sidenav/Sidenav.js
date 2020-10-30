import React, { Component } from "react";

import Tools from "./tools/Tools";
import ColorSettings from "./colorsettings/ColorSettings";
import CanvasSettings from "./canvassettings/CanvasSettings";

import "./Sidenav.css";

class Sidenav extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="sidenav">
                <Tools
                    setMode={this.props.setMode}
                    eraser={this.props.eraser}
                    resetCanvas={this.props.resetCanvas}
                    printMode={this.props.printMode}
                    eraserMode={this.props.eraserMode}
                />
                <ColorSettings
                    changeColor={this.props.changeColor}
                    saveColor={this.props.saveColor}
                    copyColor={this.props.copyColor}
                />
                <CanvasSettings changeSize={this.props.changeSize} isMobile={this.props.isMobile} />
                <br/><br/>
            </div>
        );
    }
}
export default Sidenav;