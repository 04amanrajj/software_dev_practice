const expressWinston = require("express-winston");
const { transports, format } = require("winston");
// custom format
const myFormat = format.printf(({ level, message, meta, timestamp }) => {
  return `${level} ${message} ${JSON.stringify(meta)} ${timestamp}`;
});
// middleware
const logger = expressWinston.logger({
  transports: [
    new transports.Console(), //in terminal
    //  to save in file
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
});

module.exports = logger;
