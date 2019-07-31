import React, { Component } from 'react';
import styles from './HeatMapSettings.module.css';
import { tsCallSignatureDeclaration } from '@babel/types';


class HeatMapSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideValue: 10,
    };
  }

  onSliderChange = (event) => {
    const { updateDateRange } = this.props;
    updateDateRange(event.target.value);
    this.setState({
      slideValue: event.target.value
    })
  }

  render() {
    const {slideValue} = this.state;
    return (
      <div className={styles.slidecontainer}>
        <input type="range" min="1" max="20" value={slideValue} className={styles.slider} onChange={this.onSliderChange}/>
      </div>
    );
  }
}

export default HeatMapSettings;
