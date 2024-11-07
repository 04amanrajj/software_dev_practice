const express = require("express");
const { Router } = require("express");
const { UserModel } = require("../models/user.model");
const appRoute = Router();

appRoute.use(express.json());

appRoute.get("/", (req, res) => {
  res.send("its Homepage");
});

appRoute.post("/register", async (req, res) => {
  const payLoad = req.body;
  try {
    if (payLoad.password != payLoad.confirmPassword) {
      return res.status(400).send("password did not matched");
    }
    if (!payLoad) {
      return res.status(400).send("fields are empty");
    }
    console.log(payLoad);
    const user = new UserModel(payLoad);
    await user.save();
    res.status(200).send("User registerd");
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = { appRoute };
