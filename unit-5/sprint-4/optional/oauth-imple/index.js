const express = require("express");
const axios = require("axios");

require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.send("Homepage");
  } catch (error) {
    res.send(error);
  }
});

app.get("/login", async (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (error) {
    res.send(error);
  }
});

app.get("/github/auth", async (req, res) => {
  try {
    const { code } = req.query;
    const response = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: { Accept: "application/json" },
      }
    );
    const accessToken = response.data.access_token;

    const userDetails = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    res.send(userDetails.data);
  } catch (error) {
    res.send(error);
  }
});

app.listen(5300, () => {
  console.log("Server running at http://localhost:5300");
});
