const express = require("express");
const app = express();

app.use(express.json());
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

app.post("/add", async (req, res) => {
  try {
    const { name, email } = req.body;
    // knex.raw("insert into users (name,email) values (?,?)", [name, email]); method 1
    await knex("users").insert({ name, email });
    res.status(200).send({ msg: "OK" });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

app.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const name = req.body.name;
    // knex.raw("UPDATE users SET name = ? WHERE id = ?", [name, id]);
    await knex("users").update({ name }).where("id", id);
    res.status(200).send({ msg: "OK" });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
