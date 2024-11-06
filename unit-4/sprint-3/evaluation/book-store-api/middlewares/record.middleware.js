const fs = require("fs");
const path = require("path");


const logFilePath = path.join(__dirname, "logs.txt");


function logger(message) {
  const timeStamp = new Date();
  const logEntry = `[${timeStamp}] - ${message}\n`;


  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
}

module.exports = { logger };
