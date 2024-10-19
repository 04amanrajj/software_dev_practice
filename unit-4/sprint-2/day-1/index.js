const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.listen(3000,()=>{
    console.log("server running at http://localhost:3000")
})
