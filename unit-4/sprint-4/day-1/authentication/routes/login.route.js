const express = require("express");
const Router = require("express");
const authRoute = Router();
const { newUser, loginUser, cartController } = require("../controllers/user.controller");
authRoute.use(express.json());

authRoute.get("/", (req, res) => {
  res.send("welcome");
});

authRoute.post("/register", newUser);
authRoute.post("/login", loginUser);
authRoute.get("/cart", cartController);
module.exports = authRoute;
