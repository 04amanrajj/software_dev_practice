const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

//get method
app.get("/", (req, res) => {
  const data = fs.readFileSync("./db.json", "utf8");
  const parseData = JSON.parse(data);
  res.send(parseData);
});

//post method
app.post("/", (req, res) => {
  const data = fs.readFileSync("./db.json", "utf8");
  const parseData = JSON.parse(data);

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ message: "Request body cannot be empty." });
  }

  //auto add id
  let id = parseData.students[parseData.students.length - 1].id;
  req.body["id"] = ++id;
  parseData.students.push(req.body);

  //write
  fs.writeFileSync("./db.json", JSON.stringify(parseData), "utf8");
  res.send(parseData);
});

// get data from id
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const data = fs.readFileSync("./db.json", "utf8");
  const parseData = JSON.parse(data);

  parseData.students = parseData.students.filter((ele) => ele.id == id);

  if (parseData.students.length === 0) {
    return res.status(404).send({ message: "Student not found." });
  }

  res.send(parseData);
});

// put request
app.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = fs.readFileSync("./db.json", "utf8");
  const parseData = JSON.parse(data);

  let studentIndex = parseData.students.findIndex((ele) => ele.id == id);

  if (studentIndex === -1) {
    return res.status(404).send({ message: "Student not found." });
  }

  req.body["id"] = id;
  parseData.students[studentIndex] = req.body;

  //write
  fs.writeFileSync("./db.json", JSON.stringify(parseData), "utf8");
  res.send(parseData.students[studentIndex]);
});

// Delete request
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  const data = fs.readFileSync("./db.json", "utf8");
  const parseData = JSON.parse(data);

  let studentIndex = parseData.students.findIndex((ele) => ele.id == id);

  if (studentIndex === -1) {
    return res.status(404).send({ message: "Student not found." });
  }

  parseData.students.splice(studentIndex, 1);

  //write
  fs.writeFileSync("./db.json", JSON.stringify(parseData), "utf8");
  res.send(parseData);
});

// server start
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
