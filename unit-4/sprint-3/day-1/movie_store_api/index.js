const express = require("express");
const app = express();
const connection = require("./config/db");
const moviesRoute = require("./routes/movie.route");
const logger = require("./middleware/winston.middleware");

app.use(logger);
app.use("/movies", moviesRoute);

// server start
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to the DB");
  } catch (error) {
    console.log("DB connection failed");
    console.log(error.message);
  }
  console.log(`http://localhost:`);
});
