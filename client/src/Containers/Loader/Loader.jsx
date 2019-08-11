import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Loader.module.css";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  onLoad = () => {
    const { loading } = this.state;
    if (loading) {
      this.setState({ loading: false });
    }
  };

  render() {
    const { render } = this.props;
    const { loading } = this.state;
    return (
      <React.Fragment>
        {loading && <div className={styles.main}>Page Loading!</div>}
        {render({ onLoad: this.onLoad })}
      </React.Fragment>
    );
  }
}

Loader.propTypes = {
  render: PropTypes.func.isRequired
};

export default Loader;
