import React from "react";
import Select, { components } from "react-select";
import Loader from "../../../Assets/loader.svg";
import styles from "./DropDown.module.css";

const statusOptions = [
  {
    value: "todo",
    label: "BOOM!",
    imageSrc: Loader
  },
  { value: "in_progress", label: "W toku", imageSrc: Loader },
  { value: "done", label: "Zalatwione", imageSrc: Loader },
  { value: "rejected", label: "Odrzucone", imageSrc: Loader }
];

const customSingleValue = ({ data }) => (
  <div className="input-select">
    <div className="input-select__single-value">
      <span className="input-select__icon" className={styles.singleValueIcon}>
        <img src={data.imageSrc} className={styles.icon} alt="icon" />
      </span>
      <span>{data.label}</span>
    </div>
  </div>
);

const customOptions = props => (
  <div className="input-select">
    <div className="input-select__single-value">
      <span className="input-select__icon">
        <components.Option {...props}>
          <div className="input-select">
            <div className="input-select__single-value">
              <span
                className="input-select__icon"
                className={styles.optionIcon}
              >
                <img
                  src={props.data.imageSrc}
                  className={styles.icon}
                  alt="icon"
                />
              </span>
              <span>{props.data.label}</span>
            </div>
          </div>
        </components.Option>
      </span>
    </div>
  </div>
);

const IndicatorSeparator = () => null;

const IndicatorsContainer = props => {
  return (
    <div className={styles.indicator}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

const dropDownStyles = {
  menu: (provided, state) => ({
    ...provided,
    border: "1px solid purple"
  }),
  control: provided => ({
    ...provided,
    border: "1px solid purple",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid purple"
    }
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    backgroundColor: state.isSelected ? "none" : provided.backgroundColor,
    color: "black"
  })
};

const DropDown = () => (
  <div className={styles.main}>
    <Select
      defaultValue={statusOptions[0]}
      options={statusOptions}
      components={{
        SingleValue: customSingleValue,
        Option: customOptions,
        IndicatorsContainer,
        IndicatorSeparator
      }}
      isSearchable={false}
      styles={dropDownStyles}
    />
  </div>
);

export default DropDown;
