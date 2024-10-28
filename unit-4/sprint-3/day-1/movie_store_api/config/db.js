const mongoose = require("mongoose");

const dbconnection = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/moviesData");
};
module.exports = dbconnection;
