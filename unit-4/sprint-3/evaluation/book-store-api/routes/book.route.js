const { Router } = require("express");
const express = require("express");
const BookModel = require("../models/books.model");

const bookRoute = Router();

bookRoute.use(express.json());

bookRoute.get("/", (req, res) => {
  res.status(200).send("Home");
});

bookRoute.get("/data", async (req, res) => {
  try {
    res.status(200).send("boooks data");
  } catch (error) {
    console.log({ error: error.message });
  }
});

bookRoute.post("/upload", async (req, res) => {
  const payLoad = req.body;
  try {
    const book = new BookModel(payLoad);
    await book.save();
  } catch (error) {
    console.log({ error: error.message });
  }
});

module.exports = bookRoute;
