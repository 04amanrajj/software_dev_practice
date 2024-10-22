const { Router } = require("express");
const fs = require("fs");
const student = Router();

student.get("/", (req, res) => {
  res.status(200).send("student home page");
});

student.post("/create", (req, res) => {
  // read
  let data = fs.readFileSync("./student.json", "utf8");
  // parse
  const parsedData = JSON.parse(data);
  req.body.id=Math.random()*100
  // push
  parsedData.student.push(req.body);
  // write
  fs.writeFileSync("./student.json",JSON.stringify(parsedData),"utf8")

  res.status(200).send(req.body);
});

student.put("/:id", (req, res) => {
  res.status(200).send("student with id updated");
});

student.delete("/:id", (req, res) => {
  res.status(200).send("student with id deleted");
});

module.exports = student;
