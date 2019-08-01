import React, { Component } from 'react';
import HeatMap from '../../Components/HeatMap/HeatMap';

class HeatMapPage extends Component {
  render() {
    return (
      <div style={{ width: '500px', height: '500px' }}>
        <HeatMap />
      </div>
    );
  }
}

export default HeatMapPage;
