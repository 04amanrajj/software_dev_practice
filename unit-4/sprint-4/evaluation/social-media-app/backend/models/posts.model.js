const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  post: { type: String, required: true },
  device: { type: String, required: true },
  userID: String,
});

exports.PostModel = mongoose.model("post", postSchema);
