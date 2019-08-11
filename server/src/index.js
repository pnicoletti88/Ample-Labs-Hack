require("dotenv").config();
require("./mongooseClient");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const indexRouter = require("./Routes/index");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", indexRouter);

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
