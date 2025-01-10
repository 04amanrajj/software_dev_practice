const express = require("express");
const app = express();

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "myPassword",
    database: "postgres",
  },
});

app.get("/", async (req, res) => {
  try {
    let data = await knex("users").select("*");
    res.status(200).send({ data });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
