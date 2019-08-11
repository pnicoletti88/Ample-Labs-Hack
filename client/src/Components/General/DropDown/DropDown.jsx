import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { dropDownData } from "../../../constants";
import styles from "./DropDown.module.css";
import IndicatorSeparator from "./DropDownComponents/IndicatorsSeparator/IndicatorsSeparator";
import IndicatorsContainer from "./DropDownComponents/IndicatorsContainer/IndicatorsContainer";
import CustomSingleValue from "./DropDownComponents/CustomSingleValue/CustomSingleValue";
import CustomOptions from "./DropDownComponents/CustomOptions/CustomOptions";

const dropDownStyles = {
  menu: provided => ({
    ...provided,
    border: "1px solid #5E5DFF"
  }),
  control: provided => ({
    ...provided,
    border: "1px solid #5E5DFF",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #5E5DFF"
    }
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    backgroundColor: state.isSelected ? "none" : provided.backgroundColor,
    color: "black"
  })
};

const DropDown = props => {
  const { value, updateValue } = props;
  return (
    <div className={styles.main}>
      <Select
        defaultValue={dropDownData.find(item => item.value === value)}
        options={dropDownData}
        components={{
          SingleValue: CustomSingleValue,
          Option: CustomOptions,
          IndicatorsContainer,
          IndicatorSeparator
        }}
        isSearchable={false}
        styles={dropDownStyles}
        onChange={updateValue}
      />
    </div>
  );
};

DropDown.propTypes = {
  value: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired
};

export default DropDown;
