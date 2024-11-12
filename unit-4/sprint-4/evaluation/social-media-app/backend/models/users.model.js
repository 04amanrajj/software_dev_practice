const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  userID: String,
});

exports.UserModel = mongoose.model("user", userSchema);
