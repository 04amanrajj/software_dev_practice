const express = require("express");
const teachersRoute = require("./routes/teachers.route");
const studentRoute = require("./routes/students.route");
const cors = require("cors");
const app = express();
const fs = require("fs");

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  // console.log("body:", req.body);
  // console.log("got request", req.query);
  // time
  const startTime = new Date().getTime();
  next();
  const endTime = new Date().getTime();
  // console.log(`Time taken: ${endTime - startTime}s`);

  let log = `Method: ${req.method}, route: ${req.url}, completion time: ${
    endTime - startTime
  }\n`;

  fs.appendFileSync("./log.txt", log, "utf8");
});
app.use("/teacher", teachersRoute);
app.use("/student", studentRoute);

// homepage
app.get("/", (req, res) => {
  console.log("put student or teacher in url");
  res.status(200).send("put student or teacher in url");
});

// watchman middleware
app.use("/data", (req, res, next) => {
  let data = fs.readFileSync("./data.txt", "utf8");
  console.log(data);
  next();
});

app.get("/data", (req, res) => {
  let data = fs.readFileSync("./data.txt", "utf8");
  res.status(200).send(data);
});

// start server
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
