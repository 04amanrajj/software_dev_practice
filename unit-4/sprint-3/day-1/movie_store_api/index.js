const express = require("express");
const app = express();
const moviesRoute = require("./routes/movie.route");

// middleware
app.use("/movies", moviesRoute);

// server start
app.listen(3000, () => console.log("http://localhost:3000"));
