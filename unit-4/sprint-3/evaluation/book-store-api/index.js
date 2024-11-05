const express = require("express");
const bookRoute = require("./routes/book.route");
const app = express();
const dbconnection = require("./config/db");
require("dotenv").config();

app.use("/", bookRoute);

app.listen(process.env.port, async () => {
  try {
    await dbconnection;
    console.log("connected to db");
  } catch (error) {
    console.log({ error: error.message });
  }
  console.log(`http://localhost:${process.env.port}`);
});
