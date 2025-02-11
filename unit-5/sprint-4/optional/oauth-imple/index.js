const express = require("express");
const axios = require("axios");
const passport = require("./google-auth");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.sendFile(__dirname + "/homepage.html");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/login", async (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (error) {
    res.send(error);
  }
});

app.get("/auth/github", async (req, res) => {
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

//google oauth
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  () => {
    console.log("HIG");
  }
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.send(req.user);
  }
);

app.listen(5300, () => {
  console.log("Server running at http://localhost:5300");
});
