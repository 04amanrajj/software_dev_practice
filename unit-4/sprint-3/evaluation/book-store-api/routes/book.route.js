const express = require("express");
const { Router } = require("express");
const { getAllData, createData, updateData, deleteData } = require("../controllers/books.controller");

const bookRoute = Router();

bookRoute.use(express.json());

bookRoute.get("/", (req, res) => {
  res.status(200).send("Home");
});

bookRoute.get("/data", getAllData);

bookRoute.post("/upload", createData);

bookRoute.patch("/:_id", updateData);

bookRoute.delete("/:_id", deleteData);

module.exports = bookRoute;
