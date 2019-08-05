const mongoose = require("mongoose");
const { actionSet } = require("../util/constants");

const locationSchema = new mongoose.Schema({
  time: {
    type: Date,
    default: Date.now
  },
  action: {
    type: String,
    required: true,
    validate: {
      validator: action => actionSet.has(action),
      message: props => `${props.value} is not a valid action type!`
    }
  },
  location: {
    long: {
      type: Number,
      required: true
    },
    lat: {
      type: Number,
      required: true
    }
  },
  sessionId: {
    type: String
  }
});

/*
 * Pay close attention to what this index means.
 * Queries first should first filter by action, then time.
 * If you go straight to time then you lose index (much slower).
 * If you need to query just off time and not action create a time index
 * or query each action individually and then merge sort (if its a rare use case)
 */
locationSchema.index({ action: 1, time: -1 });

const LocationData = mongoose.model("locations", locationSchema);

module.exports = LocationData;
