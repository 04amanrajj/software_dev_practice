// getting data from another api and sending back

const axios = require("axios");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/user", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
