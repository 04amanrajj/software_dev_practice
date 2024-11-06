const UserModel = require("../models/user.model");

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
      res.status(200).send({ msg: "Login successfull", token: "abc123" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ error: error.message });
  }
};
