require("dotenv").config();
require("./mongooseClient");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
const indexRouter = require("./Routes/index");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", indexRouter);

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
