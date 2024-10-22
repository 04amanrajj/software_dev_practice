const { Router } = require("express");

const student = Router();

student.get("/", (req, res) => {
  res.status(200).send("student home page");
});

student.post("/create", (req, res) => {
  res.status(200).send("new student added");
});

student.put("/:id", (req, res) => {
  res.status(200).send("student with id updated");
});

student.delete("/:id", (req, res) => {
  res.status(200).send("student with id deleted");
});

module.exports = student;
