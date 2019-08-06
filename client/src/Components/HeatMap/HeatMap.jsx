/* global google */
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import { googleMaps } from "../../constants";
import styles from "./HeatMap.module.css";
import Loading from "../Loading/Loading";

class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heatmapPoints: [{ lat: 59.95, lng: 30.33 }, { lat: 59.96, lng: 30.32 }]
    };
  }

  render() {
    const { center, zoom } = this.props;
    const { heatmapPoints } = this.state;
    const heatMapData = {
      positions: heatmapPoints,
      options: {
        radius: 10,
        opacity: 0.5
      }
    };

    return (
      <div className={styles.main}>
        {/* <GoogleMapReact
          ref={el => {
            this._googleMap = el;
          }}
          bootstrapURLKeys={googleMaps}
          defaultCenter={center}
          defaultZoom={zoom}
          heatmapLibrary
          heatmap={heatMapData}
        /> */}
        <Loading />
      </div>
    );
  }
}

HeatMap.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  zoom: PropTypes.number
};

HeatMap.defaultProps = {
  center: {
    lat: 43.6532,
    lng: -79.3832
  },
  zoom: 12
};

export default HeatMap;

/*

options:

function defaultOptions_() {
    return {
        overviewMapControl: false,
        streetViewControl: false,
        rotateControl: true,
        mapTypeControl: false,
        // disable poi
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
        minZoom: DEFAULT_MIN_ZOOM, // dynamically recalculted if possible during init
      };
    }

*/
