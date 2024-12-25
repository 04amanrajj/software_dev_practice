const express = require("express");
const redis = require("redis");
const client = redis.createClient();
client.on("err", (error) => {
  console.log(error);
});
client.connect(
  "redis://default:8520@redis-13668.c305.ap-south-1-1.ec2.redns.redis-cloud.com:13668"
);

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await client.get("name");
    res.send("HI " + response);
  } catch (error) {
    res.send("Error: ", error);
  }
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
