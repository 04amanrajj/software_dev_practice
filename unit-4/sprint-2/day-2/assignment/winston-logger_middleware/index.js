const express = require("express");
const app = express();
const expressWinston = require("express-winston");
const { transports, format } = require("winston");

// custom format
const myFormat = format.printf(({ level, message, meta, timestamp }) => {
  return `${level} ${message} ${JSON.stringify(meta)} ${timestamp}`;
});
// middleware
app.use(
  expressWinston.logger({
    transports: [
      new transports.Console(), //in terminal
      //  to sve in file
      new transports.File({
        level: "warn",
        filename: "./logs/warnings.log",
      }),
      new transports.File({
        level: "error",
        filename: "./logs/errors.log",
      }),
      new transports.File({
        level: "info",
        filename: "./logs/info.log",
      }),
    ],
    // format to use
    format: format.combine(format.json(), format.timestamp(), myFormat),
    //
    statusLevels: true,
  })
);

// end points
app.get("/", (req, res) => {
  res.status(200).send("Home of winston");
});
app.get("/400", (req, res) => {
  res.status(400).send("Home of winston 400");
});
app.get("/500", (req, res) => {
  res.status(500).send("Home of winston 500");
});
// server start
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
