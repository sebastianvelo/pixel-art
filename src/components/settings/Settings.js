import React, { Component } from "react";

import ColorBean from "../../classes/ColorBean";
import Sidenav from "./sidenav/Sidenav";

import { setDownloadImage } from "../../util/Html2CanvasUtil"; 
import { rgbCfg, defaultSavedColors, colorizeCell, setColors, getColorFromRanges } from "../../util/ColorUtil";
import { resetCanvas, getLastCellIDSavedColors, setCellSize, setGridSize, getGridFromRanges } from "../../util/GridUtil";

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
    setSelectedColor(color) {
        let state = this.state;
        state.selectedColor = color;
        this.setState({ state });
        setColors(this.state.selectedColor);
    }
    /* Creates a color with values of ranges, and calls setSelectedColor() */
    changeColor() {
        this.setSelectedColor(getColorFromRanges());
    }
    /* Creates a white color, and calls setSelectedColor() */
    eraser() {
        let state = this.state;
        state.eraser = !state.eraser;
        this.setState({ state });
    }
    /*  Receives a cellId in parameter and 
    modifies its backgroundColor with the selectedColor attribute in state */
    colorizeCellWithSelectedColor(cellId) {
        if (this.state.eraser)
            colorizeCell(cellId, new ColorBean(255, 255, 255));
        else
            colorizeCell(cellId, this.state.selectedColor);
        setDownloadImage();
    }

    /* Receives a cellId in parameter, creates a color with its backgroundColor and
    calls setSelectedColor() */
    copyColor(cellId) {
        let bgColor = document.getElementById(cellId).style.backgroundColor;
        let color = new ColorBean();
        color.setRGB(bgColor);
        this.setMode(true);
        this.setSelectedColor(color);
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
            colorizeCell(lastId, color);
        })
        let state = this.state;
        Array.prototype.push.apply(state.savedColors, defaultSavedColors);
        this.setState({ state });
    }

    /* |||||||||||||||||||||||||||||| */
    /* SIZE */
    /* Create a grid with values of ranges and calls changeGrid() function of App.js and setGridSize() */
    changeSize() {
        let grid = getGridFromRanges();
        this.props.changeGrid(grid);
        setGridSize(grid);
        setDownloadImage();
    }

    componentDidMount() {
        setGridSize(this.props.grid);
        setColors(this.state.selectedColor);
        setDownloadImage();
        this.fillDefaultSavedColors();
        this.setMode(true);
    }
    componentDidUpdate(prevProps) {
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