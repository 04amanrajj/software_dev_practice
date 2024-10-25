const Router = require("express");
const express = require("express");
const fs = require("fs");
const validator = require("../middleware/validator.middleware");
const teachers = Router();

teachers.use("/:emp_id", validator);
teachers.use(express.json());

teachers.get("/", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json");
    const parsedData = JSON.parse(data);
    res.send(parsedData.teachers);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

teachers.post("/addteacher", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json", "utf8");
    const parsedData = JSON.parse(data);
    parsedData.teachers.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(parsedData), "utf8");
    res.send(req.body);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

teachers.get("/:roll_no", (req, res) => {
  try {
    let roll = req.params.roll_no;
    roll = +roll;
    const data = fs.readFileSync("./db.json");
    const parsedData = JSON.parse(data);
    let teacher = parsedData.teachers.filter((ele) => ele.roll_no == roll);
    res.send(teacher);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

teachers.patch("/:roll_no", (req, res) => {
  try {
    let roll = req.params.roll_no;
    roll = +roll;
    const data = fs.readFileSync("./db.json");
    const parsedData = JSON.parse(data);
    let teacherIndex = parsedData.teachers.findIndex(
      (ele) => ele.roll_no == roll
    );
    if (teacherIndex == -1) return res.send("teacher not found");
    parsedData.teachers[teacherIndex] = {
      ...parsedData.teachers[teacherIndex],
      ...req.body,
    };
    fs.writeFileSync("./db.json", JSON.stringify(parsedData), "utf8");
    res.send(parsedData.teachers[teacherIndex]);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

teachers.delete("/:roll_no", (req, res) => {
  try {
    let roll = req.params.roll_no;
    roll = +roll;
    console.log(roll);
    const data = fs.readFileSync("./db.json");
    const parsedData = JSON.parse(data);
    let teacherIndex = parsedData.teachers.findIndex(
      (ele) => ele.roll_no == roll
    );
    if (teacherIndex == -1) return res.send("teacher not found");
    res.send(parsedData.teachers[teacherIndex]);
    parsedData.teachers.splice(teacherIndex, 1);
    fs.writeFileSync("./db.json", JSON.stringify(parsedData), "utf8");
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

module.exports = teachers;
