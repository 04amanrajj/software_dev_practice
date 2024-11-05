const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  author: { type: String, required: true },
});
const BookModel = mongoose.model("bookshelf", bookSchema);
module.exports = BookModel;
