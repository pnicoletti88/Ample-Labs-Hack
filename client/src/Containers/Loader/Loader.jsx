import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Loader.module.css";

class Loader extends Component {
  state = {
    loading: true
  };

  onLoad = () => {
    const { loading } = this.state;
    if (loading) {
      this.setState({ loading: false });
    }
  };

  render() {
    const { Element, ...rest } = this.props;
    const { loading } = this.state;
    return (
      <React.Fragment>
        {loading && <div className={styles.main}>Page Loading!</div>}
        <div>
          <Element onLoad={this.onLoad} {...rest} />
        </div>
      </React.Fragment>
    );
  }
}

Loader.propTypes = {
  Element: PropTypes.element.isRequired
};

export default Loader;
