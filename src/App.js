import React, { Component } from "react";
import { withGetScreen } from 'react-getscreen';
import "./App.css";
import "./components/grid/Grid.css";

import Settings from "./components/settings/Settings";
import Main from "./components/main/Main";
import GridBean from "./classes/GridBean";
import { canvasCfg } from "./util/GridUtil";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      funct: () => { },
      grid: new GridBean(canvasCfg.row.default,
        canvasCfg.column.default,
        canvasCfg.cellSize.default,
        canvasCfg.border.default),
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

  render() {
    if (this.props.isMobile()) return this.Warning();
    return this.PixelArt();
  }
}

export default withGetScreen(App);