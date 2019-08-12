import React from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";

import styles from "./SideBar.module.css";
import SideBarSubHeading from "../SideBarSubHeading/SideBarSubHeading";
import SideBarTitle from "../SideBarTitle/SideBarTitle";
import DropDown from "../../General/DropDown/DropDown";
import DateController from "../DateController/DateController";

const SideBar = React.memo(props => {
  const {
    action,
    updateAction,
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    updateData
  } = props;
  return (
    <div className={styles.main}>
      <SideBarTitle title="Chalmers Bot User HeatMap" />
      <SideBarSubHeading title="Date Settings" />
      <DateController
        startDate={startDate}
        endDate={endDate}
        onEndDateChange={onEndDateChange}
        onStartDateChange={onStartDateChange}
        updateData={updateData}
      />
      <SideBarSubHeading title="Services Filter" />
      <DropDown value={action} updateValue={updateAction} />
    </div>
  );
});

SideBar.propTypes = {
  updateAction: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  startDate: momentPropTypes.momentObj.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  endDate: momentPropTypes.momentObj.isRequired,
  updateData: PropTypes.func.isRequired
};

export default SideBar;
