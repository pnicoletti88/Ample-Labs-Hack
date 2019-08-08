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
      <React.Fragment>
        <div className={styles.slider}>
          <div className={styles.sliderContent}>
            <HeatMapSettings updateDateRange={this.updateDateRange} />
            {`Days Currently Shown: ${dateRange} `}
          </div>
        </div>
        <div className={styles.main}>
          <h3 className={styles.title}>Chat Bot Use Locations:</h3>
        </div>
        <HeatMap dateRange={dateRange} />
      </React.Fragment>
    );
  }
}

export default App;
