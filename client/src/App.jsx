import React, { Component } from "react";
import styles from "./App.module.css";
import HeatMap from "./Components/HeatMap/HeatMap";
import HeatMapSettings from "./Components/HeatMapSettings/HeatMapSettings";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dateRange: 10
    };
  }

  updateDateRange = newValue => {
    this.setState({
      dateRange: newValue
    });
  };

  render() {
    const { dateRange } = this.state;
    return (
      <div className={styles.main}>

      </div>
    );
  }
}

export default App;
