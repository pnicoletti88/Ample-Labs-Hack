import React from "react";
import { components } from "react-select";
import styles from "./IndicatorsContainer.module.css";

const IndicatorsContainer = props => {
  return (
    <div className={styles.indicator}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

export default IndicatorsContainer;
