const { UserModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.homePage = (req, res) => {
  res.send("its Homepage");
};

exports.registerUser = async (req, res) => {
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
};

exports.loginUser = async (req, res) => {
  const payLoad = req.body;
  try {
    const user = await UserModel.findOne(payLoad);
    if (user) {
      const token = jwt.sign(payLoad, "jsonwebtoken");
      console.log(token);
      res.status(200).send({ msg: "Logged in", token });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

exports.userData = (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  try {
    jwt.verify(token, "jsonwebtoken", async (err, decoded) => {
      if (err) {
        res.status(403).send("login first");
        console.log({ error: err.message });
      } else {
        const data = await UserModel.find({});
        res.status(200).send(data);
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};
