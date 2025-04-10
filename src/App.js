import React, { Component } from "react";
import { withGetScreen } from 'react-getscreen';
import $ from "jquery";

import Settings from "./components/settings/Settings";
import Main from "./components/main/Main";
import GridBean from "./classes/GridBean";
import { canvasCfg } from "./util/GridUtil";
import { getId } from "./util/JQueryUtil";

import "./App.css";
import "./components/grid/Grid.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      funct: () => { },
      grid: new GridBean(canvasCfg.row.default,
        canvasCfg.column.default,
        canvasCfg.cellSize.default,
        canvasCfg.border.default),
      scale: 1
    }
  }

  /* Modifies the funct attribute in the state */
  setMode(funct) {
    let state = this.state;
    state.funct = funct;
    this.setState({ state });
  }

  /* Modifies the grid attribute in the state */
  changeGrid(grid) {
    let state = this.state;
    state.grid = grid;
    this.setState({ state });
  }

  zoomGrid(e) {
    let state = this.state;

    if (e.originalEvent.wheelDelta / 120 > 0  && state.grid.size < 15 /* && state.scale < 7*/){
      //state.scale += 1;
      state.grid.size++;
    }
    else if (e.originalEvent.wheelDelta / 120 < 0  && state.grid.size > 1 /* && state.scale > 1*/){
      //state.scale -= 1;
      state.grid.size--;
    }
    else {
      return;
    }
    //$(getId(canvasCfg.htmlSettings.idCanvas)).css('transform', "scale(" + state.scale + ")");
    this.changeGrid(state.grid);
  }

  PixelArt() {
    return (
      <div>
        <Settings isMobile={this.props.isTablet()} grid={this.state.grid} setMode={this.setMode.bind(this)} changeGrid={this.changeGrid.bind(this)} />
        <Main grid={this.state.grid} funct={this.state.funct} />
      </div>
    );
  }

  Warning() {
    return (
      <div id="warning">
        <h1>Por favor, voltea el dispositivo para poder usar PixelArt</h1>
      </div>
    );
  }

  componentDidMount() {
    $(getId(canvasCfg.htmlSettings.idCanvas)).on("wheel", (e) => this.zoomGrid(e));
  }

  render() {
    if (this.props.isMobile()) return this.Warning();
    return this.PixelArt();
  }
}

export default withGetScreen(App);