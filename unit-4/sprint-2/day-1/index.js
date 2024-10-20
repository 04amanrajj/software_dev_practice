// const express = require("express");

// const app = express();

// app.use(express.json())

// app.get("/", (request, response) => {
//   response.end("Hello Home");
// });

// app.get("/data", (request, response) => {
//   response.end("Database");
// });

// app.post("/write", (request, response) => {
//   console.log(request.body);
//   response.end();
// });

// app.listen(3000, () => {
//   console.log("running on http://localhost:3000/");
// });

const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.end("home");
});

app.get("/data", (req, res) => {
  // read data
  const data = fs.readFileSync("./db.json", "utf-8");
  // parse data
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  res.end("data");
});

app.get("/students", (req, res) => {
  // read data
  const data = fs.readFileSync("./db.json", "utf-8");
  // parse data
  const parsedData = JSON.parse(data);
  console.log(parsedData.students);
  res.end("data");
});

app.post("/addstudent", (req, res) => {
  // read data
  const data = fs.readFileSync("./db.json", "utf-8");
  // parse data
  const parsedData = JSON.parse(data);
  // add data
  parsedData.students.push(req.body);
  // write to file
  fs.writeFileSync("./db.json", JSON.stringify(parsedData), "utf8");
  console.log(parsedData);
  res.end();
});

app.delete("/data", (req, res) => {
  // read data
  const data = fs.readFileSync("./db.json");
  const parsedData = JSON.parse(data);
  const delObj = req.body;
  // change data
  parsedData.students = parsedData.students.filter(
    (element) => delObj.name != element.name
  );
  parsedData.tutor = parsedData.tutor.filter(
    (element) => delObj.name != element.name
  );
  // write new data
  fs.writeFileSync("./db.json", JSON.stringify(parsedData), "utf8");

  console.log(parsedData);
  res.end();
});

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
