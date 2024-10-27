const mongoose = require("mongoose");

const main = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/moviesData"
    );
    console.log("connected to mongoDB");

    // add data
  } catch (error) {
    console.log("somthing went wrong");
    console.log({ error: error.message });
  }
};
main();
// create schema
const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
});
// create model
const Moviemodel = mongoose.model("movie", movieSchema);

module.exports = Moviemodel;
