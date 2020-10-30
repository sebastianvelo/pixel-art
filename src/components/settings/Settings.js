import React, { Component } from "react";
import html2canvas from "html2canvas";
import $ from "jquery";

import ColorBean from "../../classes/ColorBean";
import GridBean from "../../classes/GridBean";
import { rgbCfg, defaultSavedColors } from "../../util/ColorUtil";
import { canvasCfg } from "../../util/GridUtil";
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
            this.props.setMode(this.colorizeCell.bind(this)) :
            this.props.setMode(this.copyColor.bind(this));
    }

    /* |||||||||||||||||||||||||||||| */
    /* COLORS */

    /* Receives a color in parameter and modifies the selectedColor attribute in state */
    changeColorGeneric(color) {
        let state = this.state;
        state.selectedColor = color;
        this.setState({ state });
        this.setColors();
    }

    /* Creates a color with values of ranges, and calls changeColorGeneric() */
    changeColor() {
        let r = $(getId(rgbCfg.r.range)).val();
        let g = $(getId(rgbCfg.g.range)).val();
        let b = $(getId(rgbCfg.b.range)).val();
        let color = new ColorBean(r, g, b);
        this.changeColorGeneric(color);
    }

    /* Creates a white color, and calls changeColorGeneric() */
    eraser() {
        let state = this.state;
        state.eraser = !state.eraser;
        this.setState({ state });
    }

    /* Sets a white backgroundColor in canvas */
    resetCanvas() {
        $(getClass(canvasCfg.htmlSettings.classCellCanvas)).css("background-color", "white");
    }

    /*  Receives a cellId in parameter and 
    modifies its backgroundColor with the selectedColor attribute in state */
    colorizeCell(cellId) {
        if (this.state.eraser)
            this.colorizeCellGeneric(cellId, new ColorBean(255, 255, 255));
        else
            this.colorizeCellGeneric(cellId, this.state.selectedColor)
    }

    /*  Receives a cellId in parameter and 
    modifies its backgroundColor with the color in parameter */
    colorizeCellGeneric(cellId, color) {
        $(getId(cellId)).css("background-color", color.getRGB());
        setDownloadImage();
    }

    /* Receives a cellId in parameter, creates a color with its backgroundColor and
    calls changeColorGeneric() */
    copyColor(cellId) {
        let bgColor = document.getElementById(cellId).style.backgroundColor;
        let color = new ColorBean();
        color.setRGB(bgColor);
        this.setMode(true);
        this.changeColorGeneric(color);
    }

    /* Looking for the last cellId without backgroundColor and calls colorizeCell() */
    saveColor() {
        let colorIsAlreadySaved = () => this.state.savedColors.find(color => color.equals(this.state.selectedColor));
        if (colorIsAlreadySaved()) {
            return;
        }
        let lastId = this.getLastCellIDSavedColors();
        this.colorizeCell(lastId);

        let state = this.state;
        state.savedColors.push(this.state.selectedColor);
        this.setState({ state });
    }

    /* Returns the last cellId without backgroundColor */
    getLastCellIDSavedColors() {
        let cells = $(getProperty("owner", canvasCfg.htmlSettings.idSavedColors));
        let index = 0;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].style.backgroundColor.length === 0) {
                index = i;
                break;
            }
        }
        return cells[index].id;
    }

    fillDefaultSavedColors() {
        defaultSavedColors.forEach(color => {
            let lastId = this.getLastCellIDSavedColors();
            this.colorizeCellGeneric(lastId, color);
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
        this.colorizeCell("selectedColor");
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
        this.setGridSize(grid);
    }

    /* modifies values in the website with the grid in props and calls setCellSize() */
    setGridSize(grid) {
        let setInFront = (range, label, axis) => {
            let value = grid[axis];
            $(getId(label)).text(value);
            $(getId(range)).val(value);
        };
        setInFront(canvasCfg.row.range, canvasCfg.row.label, "rows");
        setInFront(canvasCfg.column.range, canvasCfg.column.label, "columns");
        setInFront(canvasCfg.cellSize.range, canvasCfg.cellSize.label, "size");
        setInFront(canvasCfg.border.range, canvasCfg.border.label, "border");
        this.setCellSize(grid);
        setDownloadImage();
    }

    /* Modifies the width and height of cells with the grid in props */
    setCellSize(grid) {
        $(getClass(canvasCfg.htmlSettings.classCellCanvas)).css("width", grid.size);
        $(getClass(canvasCfg.htmlSettings.classCellCanvas)).css("height", grid.size);
        $(getClass(canvasCfg.htmlSettings.classCellCanvas)).css("border", grid.border + "px solid black");
    }

    componentDidMount() {
        this.setColors();
        this.setGridSize(this.props.grid);
        this.setMode(true);
        this.fillDefaultSavedColors();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.grid.toString() !== prevProps.grid.toString()) {
            this.setCellSize(this.props.grid);
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
                    isMobile={this.props.isMobile}
                    setMode={this.setMode.bind(this)}
                    eraser={this.eraser.bind(this)}
                    resetCanvas={this.resetCanvas.bind(this)}
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