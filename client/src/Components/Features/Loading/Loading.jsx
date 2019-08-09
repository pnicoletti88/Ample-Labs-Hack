import React from "react";
import PropTypes from "prop-types";
import styles from "./Loading.module.css";
import LoadingImage from "../../Assets/loader.svg";

const Loading = props => {
  const { active } = props;
  let output;
  if (active) {
    output = (
      <div className={styles.main}>
        <img src={LoadingImage} alt="Loading..." />
      </div>
    );
  } else {
    output = null;
  }
  return output;
};

Loading.propTypes = {
  active: PropTypes.bool
};

Loading.defaultProps = {
  active: true
};

export default Loading;
