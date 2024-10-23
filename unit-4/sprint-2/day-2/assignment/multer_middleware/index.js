const app = require("express")();
const fs = require("fs");
const mutler = require("multer");
const path = require("path");
const upload = mutler({ dest: "uploads/" });

app.post("/upload", upload.single("img"), (req, res, next) => {
  try {
    // get last full path
    const newName = req.file.originalname;
    // change whole path with new one
    const newPath = path.join("uploads", newName);
    // rename file
    fs.renameSync(req.file.path, newPath);
    // done
    res.status(200).send("UPloaded");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
