import React, { Component } from "react";
import html2canvas from "html2canvas";
import $ from "jquery";

import ColorBean from "../../classes/ColorBean";
import GridBean from "../../classes/GridBean";
import { rgbCfg } from "../../util/ColorUtil";
import { canvasCfg } from "../../util/GridUtil";
import { getId, getClass, getProperty } from "../../util/JQueryUtil";

import Topnav from "./topnav/Topnav";
import Sidenav from "./sidenav/Sidenav";

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedColor: new ColorBean(rgbCfg.r.default, rgbCfg.g.default, rgbCfg.b.default),
            savedColors: []
        }
    }

    /* |||||||||||||||||||||||||||||| */
    /* MODE */

    /* Receives a boolean in parameter and calls setMode() function of App.js */
    setMode(print) {
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
        let color = new ColorBean(255, 255, 255);
        this.changeColorGeneric(color);
    }

    /* Sets a white backgroundColor in canvas */
    resetCanvas() {
        $(getClass(canvasCfg.htmlSettings.classCellCanvas)).css("background-color", "white");
    }

    /*  Receives a cellId in parameter and 
    modifies its backgroundColor with the selectedColor attribute in state */
    colorizeCell(cellId) {
        $(getId(cellId)).css("background-color", this.state.selectedColor.getRGB());
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
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.grid.toString() !== prevProps.grid.toString()) {
            this.setCellSize(this.props.grid);
        }
    }

    render() {
        return (
            <div>
                <Topnav
                    setMode={this.setMode.bind(this)}
                    eraser={this.eraser.bind(this)}
                    resetCanvas={this.resetCanvas.bind(this)}
                />
                <Sidenav
                    changeSize={this.changeSize.bind(this)}
                    changeColor={this.changeColor.bind(this)}
                    saveColor={this.saveColor.bind(this)}
                    copyColor={this.copyColor.bind(this)}
                    isMobile={this.props.isMobile}
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