const express = require("express");
const { usersRoute } = require("./routes/users.routes");
const { dbConnection } = require("./configs/db");
const app = express();

const port = process.env.PORT || 3400;

require("dotenv").config();

app.use("/users", usersRoute);

app.listen(port, async () => {
  try {
    await dbConnection;
    console.log("connected to DB");
  } catch (error) {
    console.log("failed to connect DB");
  }
  console.log(`http://localhost:${port}`);
});
