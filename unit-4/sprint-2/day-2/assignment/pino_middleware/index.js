const express = require("express");
const logger=require("./pino-logger")
// const logger = pino();

const app = express();

app.use((req, res, next) => {
    try {
      logger.info("done");
      next();
    } catch (error) {
      logger.error("error");
      next();
    }
  });

app.get("/",(req, res) => {
    res.send("Homepage");
});

// server start
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
