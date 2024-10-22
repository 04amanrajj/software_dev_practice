const { Router } = require("express");
const teacher = Router();

teacher.get("/", (req, res) => {
  res.status(200).send("teacher home page");
});



teacher.post("/create", (req, res) => {
  res.status(200).send("new teacher added");
});

teacher.put("/:id", (req, res) => {
  res.status(200).send("teacher with id updated");
});

teacher.delete("/:id", (req, res) => {
  res.status(200).send("teacher with id deleted");
});

module.exports = teacher;
