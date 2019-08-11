import React from "react";
import styles from "./CustomSingleValue.module.css";

const CustomSingleValue = ({ data }) => (
  <div className={styles.singleValue}>
    <img src={data.imageSrc} className={styles.icon} alt="icon" />
    <span className={styles.singleValueText}>{data.label}</span>
  </div>
);

export default CustomSingleValue;
