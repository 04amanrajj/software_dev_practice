const BooksModel = require("../models/books.model");

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
    const updateBook = await BooksModel.findOneAndUpdate(
      { _id: bookID },
      { $set: payLoad }
    );
    res.status(200).send(updateBook);
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).send({ error: error.message });
  }
};
exports.deleteData = async (req, res) => {
  const bookID = req.params._id;
  try {
    await BooksModel.findOneAndDelete({ _id: bookID });
    console.log({ bookID });
    res.status(200).send("Book removed");
  } catch (error) {
    console.log({ error: error.message });
    res.status(400).send({ error: error.message });
  }
};
