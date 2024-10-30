const express = require("express");
const { Router } = require("express");
const todoRoute = Router();
const TodosModel = require("../model/todos.model");

todoRoute.use(express.json());

// get
todoRoute.get("/", async (req, res) => {
  try {
    const data = await TodosModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// create
todoRoute.post("/create", async (req, res) => {
  try {
    req.body.date = new Date();
    const task = new TodosModel(req.body);
    await task.save();
    res.status(200).send("Task Uploaded");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// update
todoRoute.patch("/:_id", async (req, res) => {
  try {
    await TodosModel.findOneAndUpdate(req.params, req.body);
    res.send(await TodosModel.find(req.params));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
// delete
todoRoute.delete("/:_id", async (req, res) => {
  try {
    await TodosModel.findOneAndDelete(req.params);
    res.send("deleted");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
module.exports = todoRoute;
