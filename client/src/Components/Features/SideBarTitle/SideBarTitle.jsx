import React from "react";
import PropTypes from "prop-types";
import styles from "./SideBarSubHeading.module.css";

const SideBarSubHeading = props => {
  const { title } = props;
  return (
    <div className={styles.main}>
      <h2 className={styles.text}>{title}</h2>
    </div>
  );
};

SideBarSubHeading.propTypes = {
  title: PropTypes.string.isRequired
};

export default SideBarSubHeading;
