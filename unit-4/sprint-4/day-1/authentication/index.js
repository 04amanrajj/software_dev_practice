const express = require("express");
const connection = require("./config/db");
const authRoute = require("./routes/login.route");

const app = express();

app.use("/",authRoute)

app.listen(3000, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log({ error: error.message });
  }
  console.log("http://localhost:3000");
});
