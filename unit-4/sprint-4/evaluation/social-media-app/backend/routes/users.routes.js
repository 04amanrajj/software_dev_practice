const express = require("express");
const { Router } = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/users.model");
const usersRoute = Router();
const jwt = require("jsonwebtoken");

usersRoute.use(express.json());

usersRoute.get("/", (req, res) => {
  res.send("Users Route");
});

// signup
usersRoute.post("/signup", async (req, res) => {
  try {
    const payLoad = req.body;

    // check email
    const existingUser = await UserModel.findOne({ email: payLoad.email });
    if (existingUser)
      throw new Error({ message: "User existed with this email" });

    // secure password
    const hashedPassword = await bcrypt.hash(payLoad.password, 10);
    payLoad.password = hashedPassword;

    // save on DB
    const newUser = new UserModel(payLoad);
    await newUser.save();

    res.status(200).send({ message: "Registered" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// login
usersRoute.post("/login", async (req, res) => {
  try {
    const payLoad = req.body;

    // check for user
    const user = await UserModel.findOne({ email: payLoad.email });
    if (!user) throw new Error("User not found");

    // compare password
    bcrypt.compare(payLoad.password, user.password, (err, result) => {
      if (!result) return res.status(400).send("Password is incorrect");
      // create token
      const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY, {
        expiresIn: 600,
      });
      delete user.password;
      res.status(200).send({ message: "Logged in", token, user });
    });
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error.message);
  }
});
module.exports = { usersRoute };
