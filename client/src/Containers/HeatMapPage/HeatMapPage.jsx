import React, { Component } from "react";
import styles from "./HeatMapPage.module.css";
import HeatMap from "../../Components/Features/HeatMap/HeatMap";
import SideBar from "../../Components/Features/SideBar/SideBar";

class HeatMapPage extends Component {
  state = {
    startDate: undefined,
    endDate: undefined,
    action: undefined
  };

  updateDateRange = newValue => {
    this.setState({
      dateRange: newValue
    });
  };

  render() {
    // const {dateRange} = this.state;
    return (
      <div className={styles.main}>
        <SideBar />
        <HeatMap />
      </div>
    );
  }
}

export default HeatMapPage;
