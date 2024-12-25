const express = require("express");
const Redis = require("ioredis");

const app = express();

const redis = new Redis(
  "redis://default:8520@redis-13668.c305.ap-south-1-1.ec2.redns.redis-cloud.com:13668"
);

redis.set("name", "Aman");

// redis.ttl('name').then(data => console.log({data}))
// redis.get("name").then((data) => console.log({ data }));
app.get("/", async (req, res) => {
  try {
    const response = await redis.get("name");
    res.send("HI " + response);
  } catch (error) {
    res.send("Error: ", error);
  }
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
