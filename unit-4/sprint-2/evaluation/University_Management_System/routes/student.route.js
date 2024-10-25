const Router = require("express");
const express = require("express");
const fs = require("fs");
const validator = require("../middleware/validator.middleware");
const students = Router();

students.use("/:roll_no", validator);
students.use(express.json());

students.get("/", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json");
    const parsedData = JSON.parse(data);
    res.send(parsedData.students);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

students.post("/addstudent", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json", "utf8");
    const parsedData = JSON.parse(data);
    parsedData.students.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(parsedData), "utf8");
    res.send(req.body);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

students.get("/:roll_no", (req, res) => {
  try {
    let roll = req.params.roll_no;
    roll = +roll;
    const data = fs.readFileSync("./db.json");
    const parsedData = JSON.parse(data);
    let student = parsedData.students.filter((ele) => ele.roll_no == roll);
    res.send(student);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

students.patch("/:roll_no", (req, res) => {
  try {
    let roll = req.params.roll_no;
    roll = +roll;
    const data = fs.readFileSync("./db.json");
    const parsedData = JSON.parse(data);
    let studentIndex = parsedData.students.findIndex(
      (ele) => ele.roll_no == roll
    );
    if (studentIndex == -1) return res.send("student not found");
    parsedData.students[studentIndex] = {
      ...parsedData.students[studentIndex],
      ...req.body,
    };
    fs.writeFileSync("./db.json", JSON.stringify(parsedData), "utf8");
    res.send(parsedData.students[studentIndex]);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

students.delete("/:roll_no", (req, res) => {
  try {
    let roll = req.params.roll_no;
    roll = +roll;
    console.log(roll);
    const data = fs.readFileSync("./db.json");
    const parsedData = JSON.parse(data);
    let studentIndex = parsedData.students.findIndex(
      (ele) => ele.roll_no == roll
    );
    if (studentIndex == -1) return res.send("student not found");
    res.send(parsedData.students[studentIndex]);
    parsedData.students.splice(studentIndex, 1);
    fs.writeFileSync("./db.json", JSON.stringify(parsedData), "utf8");
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

module.exports = students;
