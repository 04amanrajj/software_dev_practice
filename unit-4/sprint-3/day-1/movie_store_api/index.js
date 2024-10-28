const express = require("express");
const app = express();
require("./config/db");
const moviesRoute = require("./routes/movie.route");
const logger = require("./middleware/winston.middleware");

app.use(logger);
app.use("/movies", moviesRoute);

// server start
app.listen(3000, () => {
  try {
    console.log("http://localhost:3000");
  } catch (error) {
    console.log(error.message);
  }
});
