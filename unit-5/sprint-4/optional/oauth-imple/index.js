const express = require("express");
const axios = require("axios");
const passport = require("./google-auth");
require("dotenv").config();
const app = express();
const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

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
    res
      .status(500)
      .json({ error: "Failed to fetch users", details: error.message });
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
    const { id, name, login } = userDetails.data;
    let existingID = await knex("users").where({ id }).first();
    if (existingID) {
      return res.json(userDetails.data);
    }
    await knex("users").insert({ id, name, email: login, type: "GitHub" });
    res.send(userDetails.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch users", details: error.message });
  }
});

//google oauth
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: false,
  }),
  async function (req, res) {
    // Successful authentication, redirect home.
    const { name, email } = req.user._json;
    const { id } = req.user;
    let existingID = await knex("users").where({ id }).first();
    if (existingID) {
      return res.json(req.user);
    }
    await knex("users").insert({ id, name, email, type: "Google" });
    res.json(req.user);
  }
);

app.get("/admin", async (req, res) => {
  try {
    let users = await knex("users").select("*");
    res.status(200).send(users);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ error: "Failed to fetch users", details: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
