const express = require("express");
const fs = require("fs");

const app = express();

// middleware
app.use(express.json());
app.use("/movies", (req, res, next) => {
  if (req.method == "POST") {
    console.log(req.body);
    if (
      typeof req.body.id === "number" &&
      typeof req.body.name === "string" &&
      typeof req.body.rating === "number" &&
      typeof req.body.description === "string" &&
      typeof req.body.genre === "string" &&
      typeof req.body.cast === "string"
    )
      next();
    else res.status(400).send("Bad Request");
  } else {
    next();
  }
});

app.get("/",(req,res)=>{
  try {
    const data = fs.readFileSync("./db.json", "utf8");
    res.status(200).send(data)
  } catch (error) {
    res.status(404).send({ error: error.messsage });
  }
})

app.get("/movies", (req, res) => {
  try {
    res.status(200).send(`
      <p>
    this route with post method will accept: <br>
        ID: number <br>
        Name: string <br>
        Rating: number <br>
        Description: string <br>
        Genre: string <br>
        Cast: string
    </p>`);
  } catch (error) {
    res.status(404).send({ error: error.messsage });
  }
});

app.post("/movies", (req, res) => {
  try {
    const data = fs.readFileSync("./db.json", "utf8");
    const parseData = JSON.parse(data);
    parseData.movies.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(parseData), "utf8");
    res.status(200).send(JSON.stringify(parseData));
  } catch (error) {
    res.status(404).send({ error: error.messsage });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
