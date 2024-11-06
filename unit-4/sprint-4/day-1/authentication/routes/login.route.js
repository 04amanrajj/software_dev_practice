const express = require("express");
const Router = require("express");
const authRoute = Router();
const { newUser, loginUser } = require("../controllers/user.controller");
authRoute.use(express.json());

authRoute.get("/", (req, res) => {
  res.send("welcome");
});

authRoute.post("/register", newUser);

authRoute.post("/login", loginUser);

authRoute.get("/cart", (req, res) => {
  const token = req.query.token;
  try {
    if (token == "abc123") {
      res.send("...DATa");
    } else {
      res.status(403).send("login first");
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error: error.message });
  }
});
module.exports = authRoute;
