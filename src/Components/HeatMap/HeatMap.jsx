/* eslint-disable no-undef */
import React, { Component } from 'react';
import h337 from 'heatmapjs';
import styles from './HeatMap.module.css';

import { locationData } from '../../tempDataFetch.js';
import map from '../../Assets/ImageOne.png';
import { mapGeoToHeatPoint } from './heatMapUtil';
import { imageOne } from '../../constants';

class HeatMap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const config = {
      container: document.getElementById('heatMapIamge'),
      radius: 13,
      maxOpacity: 0.9,
      minOpacity: 0.2,
      blur: 0.75,
    };
    this.heatmapInstance = h337.create(config);
    this.generateData(this.props.dateRange);
  }

  componentWillReceiveProps(next) {
    this.generateData(next.dateRange);
  }

  async generateData(dateRange) {
    // create heatmap with configuration


    const rawData = await locationData(dateRange);
    const dataSet = rawData.map(element => mapGeoToHeatPoint(element.lat, element.long, { width: 782.8, height: 600 }, imageOne));

    // const dataPoint = mapGeoToHeatPoint(43.677331, -79.409862, { width: 782.8, height: 600 }, imageOne);
    console.log(dataSet);
    this.heatmapInstance.setData({
      min: 0,
      max: 100,
      data: dataSet,
    });
  }

  render() {
    // this.generateData();
    return (
      <div className={styles.mainContainer}>
        <div id="heatMapIamge">
          <img src={map} className={styles.imageContainer} alt="map" />
        </div>
      </div>
    );
  }
}

export default HeatMap;
