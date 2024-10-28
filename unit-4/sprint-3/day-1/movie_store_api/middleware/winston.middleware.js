const expressWinston = require("express-winston");
const { format, transports } = require("winston");

const myFormat = format.printf(({ level, message, meta, timestamp }) => {
  return `${meta.res.statusCode} ${message} ${
    meta ? JSON.stringify(meta) : ""
  } ${timestamp}`;
});

const logger = expressWinston.logger({
  transports: [
    new transports.Console({
    }),
    new transports.File({
      level: "warn",
      filename: "./logs/warnings.log",
      format: format.combine(
        format((info) => (info.level === "warn" ? info : false))()
      ),
    }),
    new transports.File({
      level: "info",
      filename: "./logs/info.log",
      format: format.combine(
        format((info) => (info.level === "info" ? info : false))()
      ),
    }),
    new transports.File({
      level: "error",
      filename: "./logs/errors.log",
      format: format.combine(
        format((info) => (info.level === "error" ? info : false))()
      ),
    }),
  ],
  format: format.combine(format.json(), format.timestamp(), myFormat),
  statusLevels: true,
});

module.exports = logger;
