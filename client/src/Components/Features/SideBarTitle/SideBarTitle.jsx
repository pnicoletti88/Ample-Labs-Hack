import React from "react";
import PropTypes from "prop-types";
import styles from "./SideBarTitle.module.css";

const SideBarTitle = props => {
  const { title } = props;
  return (
    <div className={styles.main}>
      <h1 className={styles.text}>{title}</h1>
    </div>
  );
};

SideBarTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default SideBarTitle;
