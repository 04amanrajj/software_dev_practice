const express = require("express");
const { Router } = require("express");
const { registerUser, userData, loginUser, homePage } = require("../controller/user.controller");
const appRoute = Router();

appRoute.use(express.json());

appRoute.get("/", homePage);

appRoute.post("/register", registerUser );

appRoute.post("/login", loginUser);

appRoute.get("/data",userData)

module.exports = { appRoute };
