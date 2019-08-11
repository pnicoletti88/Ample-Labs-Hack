const assert = require("assert");
const LocationData = require("../Models/LocationData");

const writeLocationData = async (action, long, lat) => {
  // TODO: reduce time accuracy (nearest hour should do)
  try {
    const data = new LocationData({
      action,
      location: {
        long,
        lat
      }
    });
    const savedDoc = await data.save();
    return savedDoc;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to save location data");
  }
};

const findLocations = async (action, startDate, endDate) => {
  // Basic data validation
  assert(action, "Action must be provided to find a location");
  if (endDate < startDate) {
    throw new Error("Start date cannot be greater than end date");
  }

  try {
    const result = await LocationData.find(
      {
        action,
        time: { $gte: startDate, $lte: endDate }
      },
      { location: 1, _id: 0 }
    );
    return result;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to get location data");
  }
};

module.exports = {
  writeLocationData,
  findLocations
};
