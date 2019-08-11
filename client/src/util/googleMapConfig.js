const mapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        },
        {
          color: "#f49f53"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
        {
          visibility: "on"
        },
        {
          weight: "0.01"
        },
        {
          color: "#637381"
        }
      ]
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "all",
      stylers: [
        {
          color: "#637381"
        },
        {
          visibility: "on"
        },
        {
          weight: "0.01"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#ffffff"
        },
        {
          lightness: -7
        },
        {
          gamma: "10.00"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "all",
      stylers: [
        {
          lightness: 38
        }
      ]
    },
    {
      featureType: "poi.government",
      elementType: "all",
      stylers: [
        {
          lightness: 46
        }
      ]
    },
    {
      featureType: "poi.medical",
      elementType: "geometry.fill",
      stylers: [
        {
          lightness: 38
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "all",
      stylers: [
        {
          lightness: 39
        }
      ]
    },
    {
      featureType: "poi.school",
      elementType: "all",
      stylers: [
        {
          lightness: 35
        }
      ]
    },
    {
      featureType: "poi.sports_complex",
      elementType: "all",
      stylers: [
        {
          lightness: 32
        }
      ]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          lightness: 43
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          color: "#dbdde0"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          weight: "0.66"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "all",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#dadce0"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          weight: 1.3
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry.stroke",
      stylers: [
        {
          lightness: -10
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          lightness: 38
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "all",
      stylers: [
        {
          color: "#813033"
        },
        {
          lightness: 22
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#e3e5e9"
        },
        {
          saturation: -69
        },
        {
          gamma: 0.99
        },
        {
          lightness: 43
        }
      ]
    }
  ]
};

export { mapOptions };
