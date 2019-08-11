const express = require("express");
const locationDataRouter = require("./locationData");

const router = express.Router();

router.use("/locationData", locationDataRouter);

module.exports = router;
