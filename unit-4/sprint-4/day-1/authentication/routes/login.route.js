const express = require("express");
const Router = require("express");
const UserModel = require("../model/user.model");
const authRoute = Router();

authRoute.use(express.json());

authRoute.get("/", (req, res) => {
  res.send("welcome");
});

authRoute.post("/register", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.send("resgisterd");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

authRoute.post("/login", (req, res) => {
  res.send("login");
});

module.exports = authRoute;
