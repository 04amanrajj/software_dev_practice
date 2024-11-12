const express = require("express");
const { usersRoute } = require("./routes/users.routes");
const { dbConnection } = require("./configs/db");
const { postsRoute } = require("./routes/posts.routes");
const { authenticate } = require("./middlewares/authenticator.middleware");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3400;

app.use("/users", usersRoute);
app.use(authenticate);
app.use("/posts", postsRoute);

app.listen(port, async () => {
  try {
    await dbConnection;
    console.log("connected to DB");
  } catch (error) {
    console.log("failed to connect DB");
  }
  console.log(`http://localhost:${port}`);
});
