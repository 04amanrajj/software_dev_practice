require("dotenv").config();
const mongoose = require("mongoose");
const dbconnection = mongoose.connect(process.env.mongoURL);
module.exports = dbconnection;
