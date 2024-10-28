const Router = require("express");
const express = require("express");
const Moviemodel = require("../model/movie.model");
const movies = Router();

movies.use(express.json());

// end points

// all movies
movies.get("/all", async (req, res) => {
  try {
    const moviesData = await Moviemodel.find();
    res.status(200).send(moviesData);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// filter movies
movies.get("/", async (req, res) => {
  try {
    // possible query
    const {
      q,
      language,
      rating,
      sortby = "title",
      order = "asc",
      limit = 10,
      page = 1,
    } = req.query;

    // filter
    const titleFilter = q ? { title: q } : {};
    const languageFilter = language ? { language } : {};
    const ratingFilter = rating ? { rating } : {};
    const sortOrder = order === "desc" ? -1 : 1;

    // find by filter
    console.log(titleFilter);
    const moviesData = await Moviemodel.find({
      title: { $regex: titleFilter.title },
    })
      .find(languageFilter)
      .find(ratingFilter)
      .sort({ [sortby]: sortOrder })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    res.status(200).send(moviesData);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// add movies
movies.post("/addmovie", async (req, res) => {
  try {
    await Moviemodel.insertMany([req.body]);
    res.status(200).send("movie uploaded");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// update movies
movies.patch("/:title", async (req, res) => {
  try {
    const title = req.params.title;
    console.log({ title }, req.body);
    await Moviemodel.updateMany({ title }, { $set: req.body });
    const updatedMovie = await Moviemodel.find({ title });
    console.log(updatedMovie);
    res.status(200).send(updatedMovie);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// delete movies
movies.delete("/:title", async (req, res) => {
  try {
    const title = req.params.title;
    await Moviemodel.deleteMany({ title });
    res.status(200).send("OK");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = movies;
