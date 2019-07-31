const mapGeoToHeatPoint = (lat, long, picSize, geoInfo) => {
  const latHeight = geoInfo.topLeft.lat - geoInfo.bottomLeft.lat;
  const longWidth = geoInfo.topRight.long - geoInfo.topLeft.long;

  console.log(`latHeight: ${latHeight}`);
  console.log(`longWidth: ${longWidth}`);

  const widthPixPerLong = picSize.width / longWidth;
  const heightPixPerLat = picSize.height / latHeight;

  console.log(`widthLongPerPix: ${widthPixPerLong}`);
  console.log(`heightLatPerPix: ${heightPixPerLat}`);

  const deltaLong = geoInfo.topRight.long - long;
  const deltaLat = geoInfo.topLeft.lat - lat;

  console.log(`deltaLong: ${deltaLong}`);
  console.log(`deltaLat: ${deltaLat}`);

  const longShift = deltaLong * widthPixPerLong; // will be a negative number
  const latShift = deltaLat * heightPixPerLat; // positive but in the wrong direction

  console.log(`longShift: ${longShift}`);
  console.log(`latShift: ${latShift}`);

  return {
    x: picSize.width - longShift,
    y: latShift,
    value: 25,
  };
};

export { mapGeoToHeatPoint };
