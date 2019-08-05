require("dotenv").config();
require("./mongooseClient");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const app = express();
app.use(bodyParser());
app.use(express.json());

const locationDataRouter = require("./Routes/locationData");

app.use("/locationData", locationDataRouter);

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
