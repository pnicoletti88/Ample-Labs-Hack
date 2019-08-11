import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./HeatMapPage.module.css";
import HeatMap from "../../Components/Features/HeatMap/HeatMap";
import SideBar from "../../Components/Features/SideBar/SideBar";
import { getLocationData } from "../../Api/dataFetch";
import { initialDateRange, initialAction } from "../../constants";

class HeatMapPage extends PureComponent {
  state = {
    startDate: initialDateRange.startDate,
    endDate: initialDateRange.endDate,
    action: initialAction,
    heatMapPoints: []
  };

  componentDidMount = () => {
    const { startDate, endDate, action } = this.state;
    this.updateLocationData(action, startDate, endDate);
  };

  updateLocationData = async (action, startDate, endDate) => {
    const data = await getLocationData(action, startDate, endDate);
    this.setState({
      heatMapPoints: data
    });
  };

  updateAction = ({ value }) => {
    const { startDate, endDate } = this.state;
    this.setState({ action: value, heatMapPoints: [] });
    this.updateLocationData(value, startDate, endDate);
  };

  updateStartDate = startDate => {
    this.setState({ startDate });
  };

  updateEndDate = endDate => {
    this.setState({ endDate });
  };

  render() {
    const { onLoad } = this.props;
    const { heatMapPoints, action } = this.state;
    return (
      <div className={styles.main}>
        <SideBar
          updateAction={this.updateAction}
          updateStartDate={this.updateStartDate}
          updateEndDate={this.updateEndDate}
          action={action}
        />
        <HeatMap data={heatMapPoints} onLoad={onLoad} />
      </div>
    );
  }
}

HeatMapPage.propTypes = {
  onLoad: PropTypes.func
};

HeatMapPage.defaultProps = {
  onLoad: () => {}
};

export default HeatMapPage;
