import React, { Component } from "react";

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