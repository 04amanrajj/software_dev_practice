const BooksModel = require("../models/books.model");
const { logger } = require("../middlewares/record.middleware");

exports.getAllData = async (req, res) => {
  try {
    let query = {};

    if (req.query.price_low && req.query.price_high) {
      query.price = {
        $lte: parseFloat(req.query.price_high),
        $gte: parseFloat(req.query.price_low),
      };
    }

    if (req.query.genre) {
      query.genre = { $regex: new RegExp(req.query.genre, "i") };
    }

    const booksData = await BooksModel.find(query);
    res.status(200).send(booksData);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).send({ error: error.message });
  }
};

exports.createData = async (req, res) => {
  const payLoad = req.body;
  try {
    const book = new BooksModel(payLoad);
    await book.save();
    res.status(200).send("book added");
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).send({ error: error.message });
  }
};
exports.updateData = async (req, res) => {
  const payLoad = req.body;
  const bookID = req.params._id;
  try {
    const book = await BooksModel.findOne({ _id: bookID });
    if (!book) return res.status(404).send("Book not found");
    await BooksModel.findOneAndUpdate({ _id: bookID }, { $set: payLoad });
    logger(`The document with id:${bookID} has been updated`);
    res.status(200).send("Book updated");
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).send({ error: error.message });
  }
};
exports.deleteData = async (req, res) => {
  const bookID = req.params._id;
  try {
    const book = await BooksModel.findOne({ _id: bookID });
    if (!book) return res.status(404).send("Book not found");
    await BooksModel.findOneAndDelete({ _id: bookID });
    console.log({ bookID }, { book });
    logger(`The document with id:${bookID} has been deleted`);
    res.status(200).send("Book removed");
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).send({ error: error.message });
  }
};
