const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  language: { type: String, required: true },
  rating: { type: Number, required: true },
});
const Moviemodel = mongoose.model("movie", movieSchema);

module.exports = Moviemodel;
