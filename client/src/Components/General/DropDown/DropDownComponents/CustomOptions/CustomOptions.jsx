import React from "react";
import { components } from "react-select";
import styles from "./CustomOptions.module.css";

const CustomOptions = props => (
  <div className="input-select">
    <div className="input-select__single-value">
      <span className="input-select__icon">
        <components.Option {...props}>
          <div className={styles.singleValue}>
            <img src={props.data.imageSrc} className={styles.icon} alt="icon" />
            <span className={styles.singleValueText}>{props.data.label}</span>
          </div>
        </components.Option>
      </span>
    </div>
  </div>
);

export default CustomOptions;
