const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());
const redis = require("redis");
const client = redis.createClient({
  url: "redis://default:8520@redis-13668.c305.ap-south-1-1.ec2.redns.redis-cloud.com:13668",
});
client.on("err", (error) => {
  console.error("redis on", error.message);
});
client.connect();

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let cached_data = await client.get(id);

    if (cached_data) {
      console.log("on redis - YES"); //10ms
      return res.status(200).send(JSON.parse(cached_data));
    }
    let response = await axios.get(`https://api.github.com/users/${id}`);
    response = response.data;
    console.log({ response }, "on redis - NO"); //1sec
    await client.set(id, JSON.stringify(response));
    await client.expire(id, 600); //will expire after 10sec
    res.status(200).send({ data: response });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
