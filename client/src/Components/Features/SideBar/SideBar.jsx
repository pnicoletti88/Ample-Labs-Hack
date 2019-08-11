import React from "react";
import PropTypes from "prop-types";
import styles from "./SideBar.module.css";
import SideBarSubHeading from "../SideBarSubHeading/SideBarSubHeading";
import SideBarTitle from "../SideBarTitle/SideBarTitle";
import DropDown from "../../General/DropDown/DropDown";

const SideBar = React.memo(props => {
  const { action, updateAction } = props;
  return (
    <div className={styles.main}>
      <SideBarTitle title="Chalmers Bot User HeatMap" />
      <SideBarSubHeading title="Date Settings" />
      <SideBarSubHeading title="Services Filter" />
      <DropDown value={action} updateValue={updateAction} />
    </div>
  );
});

SideBar.propTypes = {
  updateAction: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired
};

export default SideBar;
