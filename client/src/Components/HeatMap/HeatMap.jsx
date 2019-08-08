/* global google */
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import { googleMaps } from "../../constants";
import styles from "./HeatMap.module.css";
import Loading from "../Loading/Loading";

const mapOptions = {
  styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#f49f53"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "0.01"
            },
            {
                "color": "#637381"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "color": "#637381"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": -7
            },
            {
                "gamma": "10.00"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 46
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 39
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 35
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 32
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "color": "#dbdde0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "0.66"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#dadce0"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": 1.3
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": -10
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 22
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#e3e5e9"
            },
            {
                "saturation": -69
            },
            {
                "gamma": 0.99
            },
            {
                "lightness": 43
            }
        ]
    }
  ]
};

class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heatmapPoints: [{ lat: 59.95, lng: 30.33 }, { lat: 59.96, lng: 30.32 }],
      mapOptions: mapOptions
    };
  }

  render() {
    const { center, zoom } = this.props;
    const { heatmapPoints, mapOptions } = this.state;
    const heatMapData = {
      positions: heatmapPoints,
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
        />
        {/* <Loading /> */}
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
