/* global google */
import React, { PureComponent } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import { googleMaps } from "../../../constants";
import styles from "./HeatMap.module.css";
import { mapOptions } from "../../../util/googleMapConfig";

class HeatMap extends PureComponent {
  render() {
    const { center, zoom, data, onLoad } = this.props;
    const heatMapData = {
      positions: data.map(item => ({
        lng: item.location.long,
        lat: item.location.lat
      })),
      options: {
        radius: 10,
        opacity: 0.5
      }
    };

    return (
      <div className={styles.main}>
        <GoogleMapReact
          ref={el => {
            this._googleMap = el;
          }}
          bootstrapURLKeys={googleMaps}
          defaultCenter={center}
          defaultZoom={zoom}
          heatmapLibrary
          heatmap={heatMapData}
          options={mapOptions}
          onTilesLoaded={onLoad}
        />
      </div>
    );
  }
}

HeatMap.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  zoom: PropTypes.number,
  onLoad: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.shape({
        long: PropTypes.number.isRequired,
        lat: PropTypes.number.isRequired
      })
    })
  )
};

HeatMap.defaultProps = {
  center: {
    lat: 43.6532,
    lng: -79.3832
  },
  zoom: 12,
  onLoad: () => {},
  data: []
};

export default HeatMap;
