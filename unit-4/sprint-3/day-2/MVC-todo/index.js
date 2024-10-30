const express = require("express");
const app = express();
const dbconnection = require("./config/db");
require("dotenv").config();
const todoRoute = require("./routes/todos.route");

// middleware
app.use("/todos", todoRoute);

// connect to server express & mongo
app.listen(process.env.port, async (req, res) => {
  try {
    console.log(`http://localhost:${process.env.port}`);
    await dbconnection;
    console.log("connected to mongoDB");
  } catch (error) {
    console.log({ error: error.message });
  }
});
