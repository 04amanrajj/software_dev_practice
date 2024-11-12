const mongoose = require("mongoose");
require("dotenv").config();
exports.dbConnection = mongoose.connect(process.env.MONGO_URL);
