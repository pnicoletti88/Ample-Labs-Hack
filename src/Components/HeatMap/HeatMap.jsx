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

  async componentDidMount() {
    // const element =
    const config = {
      container: document.getElementById('heatMapIamge'),
      radius: 13,
      maxOpacity: 0.9,
      minOpacity: 0.2,
      blur: 0.75,
    };
    // create heatmap with configuration
    const heatmapInstance = h337.create(config);

    const rawData = await locationData();
    const dataSet = rawData.map(element => mapGeoToHeatPoint(element.lat, element.long, { width: 782.8, height: 600 }, imageOne));

    // const dataPoint = mapGeoToHeatPoint(43.677331, -79.409862, { width: 782.8, height: 600 }, imageOne);
    console.log(dataSet);
    heatmapInstance.setData({
      min: 0,
      max: 100,
      data: dataSet,
    });
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <h1>Chat Bot Use Locations:</h1>
        <div id="heatMapIamge">
          <img src={map} className={styles.imageContainer} alt="map" />
        </div>
      </div>
    );
  }
}

export default HeatMap;
