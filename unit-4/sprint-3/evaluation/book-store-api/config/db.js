const mongoose = require("mongoose");
require("dotenv").config();
const dbconnection = mongoose.connect(process.env.mongoURL);
module.exports = dbconnection;
