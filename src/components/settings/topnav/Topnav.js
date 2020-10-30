import React, { Component } from "react";

import Tools from "./tools/Tools";

import "./Topnav.css";

class Topnav extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div id="topnav">
                <Tools
                    setMode={this.props.setMode}
                    eraser={this.props.eraser}
                    resetCanvas={this.props.resetCanvas}
                />
            </div>
        );
    }
}
export default Topnav;