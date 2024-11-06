const express = require("express");
const dbconnection = require("./configs/db");
const authRoute = require("./routes/login.route");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

app.use("/", authRoute);

app.listen(port, async () => {
  try {
    await dbconnection;
    console.log("connected to db");
  } catch (error) {
    console.log({ error: error.message });
  }
  console.log(`http://localhost:${port}`);
});
