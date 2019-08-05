const express = require("express");
const cors = require("cors");
const assert = require("assert");
const {
  writeLocationData,
  findLocations
} = require("../dbHandlers/LocationData");

const router = express.Router();

router.post("/", cors(), async (req, res) => {
  const { longitude, latitude, action, sessionId } = req.body;
  try {
    assert(longitude, "longtitude needs to be passed");
    assert(latitude, "latitude needs to be passed");
    assert(action, "action needs to be passed");
  } catch (e) {
    return res.status(400).send(e.message);
  }

  try {
    const result = await writeLocationData(
      action,
      longitude,
      latitude,
      sessionId
    );
    res.status(201).send({ id: result._id });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", async (req, res) => {
  const { startDate, endDate, action } = req.query;
  try {
    assert(startDate, "startDate needs to be defined");
    assert(endDate, "endDate needs to be defined");
    assert(action, "action needs to be defined");
  } catch (e) {
    res.status(400).send(e.message);
  }

  try {
    const result = await findLocations(action, startDate, endDate);
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
