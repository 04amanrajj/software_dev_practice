const Router = require("express");
const express = require("express");
const Moviemodel = require("../model/movie.model");
const movies = Router();

movies.use(express.json());

// end points
movies.get("/", async (req, res) => {
  try {
    console.log({ querry: req.query });
    const data = await Moviemodel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(200).send({ error: error.message });
  }
});

// create
movies.post("/addmovie", async (req, res) => {
  try {
    const title = req.body.title;
    const rating = req.body.rating;
    await Moviemodel.insertMany([{ title: title, rating: rating }]);
    res.status(200).send("DATA");
  } catch (error) {
    res.status(200).send({ error: error.message });
  }
});

// update
movies.patch("/update:id", (req, res) => {
  try {
    res.status(200).send("DATA");
  } catch (error) {
    res.status(200).send({ error: error.message });
  }
});

// delete
movies.delete("/delete:id", (req, res) => {
  try {
    res.status(200).send("DATA");
  } catch (error) {
    res.status(200).send({ error: error.message });
  }
});

module.exports = movies;
