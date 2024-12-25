const express = require("express");
const Redis = require("ioredis");
const axios = require("axios");
const app = express();

app.use(express.json());
const redis = new Redis(
  "redis://default:8520@redis-13668.c305.ap-south-1-1.ec2.redns.redis-cloud.com:13668"
);

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let cached_data = await redis.get(id);

    if (cached_data == {}) {
      console.log(JSON.parse(cached_data));
      return res.status(200).send(JSON.parse(cached_data));
    }

    let response = await axios.get(`https://api.github.com/users/${id}`);
    response = response.data;
    await redis.set(id, JSON.stringify(response), "ex", 5);
    console.log(response);
    res.status(200).send({ data: response });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
