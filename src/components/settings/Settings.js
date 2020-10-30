import React, { Component } from "react";
import html2canvas from "html2canvas";
import $ from "jquery";

import ColorBean from "../../classes/ColorBean";
import GridBean from "../../classes/GridBean";
import { rgbCfg, defaultSavedColors } from "../../util/ColorUtil";
import { canvasCfg, resetCanvas, getLastCellIDSavedColors, setCellSize, setGridSize } from "../../util/GridUtil";
import { getId, getClass, getProperty } from "../../util/JQueryUtil";

import Sidenav from "./sidenav/Sidenav";

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedColor: new ColorBean(rgbCfg.r.default, rgbCfg.g.default, rgbCfg.b.default),
            savedColors: [],
            eraser: false,
            printMode: true
        }
    }

    /* |||||||||||||||||||||||||||||| */
    /* MODE */

    /* Receives a boolean in parameter and calls setMode() function of App.js */
    setMode(print) {
        let state = this.state;
        state.printMode = print;
        state.eraser = false;
        this.setState({ state });
        return print ?
            this.props.setMode(this.colorizeCellWithSelectedColor.bind(this)) :
            this.props.setMode(this.copyColor.bind(this));
    }

    /* |||||||||||||||||||||||||||||| */
    /* COLORS */

    /* Receives a color in parameter and modifies the selectedColor attribute in state */
    setColorInState(color) {
        let state = this.state;
        state.selectedColor = color;
        this.setState({ state });
        this.setColors();
    }

    /* Creates a color with values of ranges, and calls setColorInState() */
    changeColor() {
        let r = $(getId(rgbCfg.r.range)).val();
        let g = $(getId(rgbCfg.g.range)).val();
        let b = $(getId(rgbCfg.b.range)).val();
        let color = new ColorBean(r, g, b);
        this.setColorInState(color);
    }

    /* Creates a white color, and calls setColorInState() */
    eraser() {
        let state = this.state;
        state.eraser = !state.eraser;
        this.setState({ state });
    }

    /*  Receives a cellId in parameter and 
    modifies its backgroundColor with the selectedColor attribute in state */
    colorizeCellWithSelectedColor(cellId) {
        if (this.state.eraser)
            this.colorizeCell(cellId, new ColorBean(255, 255, 255));
        else
            this.colorizeCell(cellId, this.state.selectedColor)
    }

    /*  Receives a cellId in parameter and 
    modifies its backgroundColor with the color in parameter */
    colorizeCell(cellId, color) {
        $(getId(cellId)).css("background-color", color.getRGB());
        setDownloadImage();
    }

    /* Receives a cellId in parameter, creates a color with its backgroundColor and
    calls setColorInState() */
    copyColor(cellId) {
        let bgColor = document.getElementById(cellId).style.backgroundColor;
        let color = new ColorBean();
        color.setRGB(bgColor);
        this.setMode(true);
        this.setColorInState(color);
    }

    /* Looking for the last cellId without backgroundColor and calls colorizeCellWithSelectedColor() */
    saveColor() {
        let colorIsAlreadySaved = () => this.state.savedColors.find(color => color.equals(this.state.selectedColor));
        if (colorIsAlreadySaved()) {
            return;
        }
        let lastId = getLastCellIDSavedColors();
        this.colorizeCellWithSelectedColor(lastId);

        let state = this.state;
        state.savedColors.push(this.state.selectedColor);
        this.setState({ state });
    }

    fillDefaultSavedColors() {
        defaultSavedColors.forEach(color => {
            let lastId = getLastCellIDSavedColors();
            this.colorizeCell(lastId, color);
        })
        let state = this.state;
        Array.prototype.push.apply(state.savedColors, defaultSavedColors);
        this.setState({ state });
    }

    /* modifies values in the website and the background color of selectedColor's cell */
    setColors() {
        let setInFront = (range, label, color) => {
            let value = this.state.selectedColor[color];
            $(getId(label)).text(value);
            $(getId(range)).val(value);
        };
        setInFront(rgbCfg.r.range, rgbCfg.r.label, "r");
        setInFront(rgbCfg.g.range, rgbCfg.g.label, "g");
        setInFront(rgbCfg.b.range, rgbCfg.b.label, "b");
        this.colorizeCellWithSelectedColor("selectedColor");
    }

    /* |||||||||||||||||||||||||||||| */
    /* SIZE */

    /* Create a grid with values of ranges and calls changeGrid() function of App.js and setGridSize() */
    changeSize() {
        let width = $(getId(canvasCfg.column.range)).val();
        let height = $(getId(canvasCfg.row.range)).val();
        let size = $(getId(canvasCfg.cellSize.range)).val();
        let border = $(getId(canvasCfg.border.range)).val();
        let grid = new GridBean(height, width, size, border);
        this.props.changeGrid(grid);
        setGridSize(grid);
        setDownloadImage();
    }

    componentDidMount() {
        setGridSize(this.props.grid);
        this.setColors();
        this.fillDefaultSavedColors();
        this.setMode(true);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.grid.toString() !== prevProps.grid.toString()) {
            setCellSize(this.props.grid);
        }
    }

    render() {
        return (
            <div>
                <Sidenav
                    changeSize={this.changeSize.bind(this)}
                    changeColor={this.changeColor.bind(this)}
                    saveColor={this.saveColor.bind(this)}
                    copyColor={this.copyColor.bind(this)}
                    setMode={this.setMode.bind(this)}
                    eraser={this.eraser.bind(this)}
                    resetCanvas={resetCanvas}
                    isMobile={this.props.isMobile}
                    printMode={this.state.printMode}
                    eraserMode={this.state.eraser}
                />
            </div>
        );
    }
}
export default Settings;


function setDownloadImage() {
    html2canvas(document.querySelector(getId(canvasCfg.htmlSettings.idCanvas))).then(canvas => {
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        $("#saveImage").attr("href", image);
    });
}