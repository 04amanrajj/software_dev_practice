const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
// create a write steam in append mode
const log = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});
// custom format of log
const format =
  ":method :status :res[content-length] :response-time ms :date[web] :http-version :url";

// -----------------------------------middleware
const app = express();

app.use(morgan(format, { stream: log })); //middleware for log file

// -----------------------------------Homepage
app.get("/" ,(req, res) => {
  res.send("hello, world!");
});

// -----------------------------------server start
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
