const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.newUser = async (req, res) => {
  const payLoad = req.body;
  try {
    const user = new UserModel(payLoad);
    await user.save();
    res.send("Resgisterd");
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email, password });
    if (user) {
      const token = jwt.sign(req.body, "masai"); //auth jwt token
      res.status(200).send({ msg: "Login successfull", token });
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error: error.message });
  }
};

exports.cartController = (req, res) => {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, "masai", (err, decoded) => { //verify token
      if (err) {
        res.status(403).send("login first");
        console.log({ error: err.message });
      } else {
        res.send("...DATA");
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error: error.message });
  }
};
