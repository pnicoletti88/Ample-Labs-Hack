import React from "react";
import PropTypes from "prop-types";
import styles from "./SideBar.module.css";
import SideBarSubHeading from "../SideBarSubHeading/SideBarSubHeading";
import DropDown from "../../General/DropDown/DropDown";

const Sidebar = props => {
  return (
    <div className={styles.main}>
      <SideBarSubHeading title="Date Settings" />
      <SideBarSubHeading title="Services Filter" />
      <DropDown />
    </div>
  );
};

export default Sidebar;
