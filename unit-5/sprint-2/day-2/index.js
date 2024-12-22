const express = require("express");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fs = require("fs");

// const { connection } = require("./config/db"); suppose
// const { UserModel } = require("./models/User.model"); suppose
// const { authenticate } = require("./middlewares/authenticate"); suppose

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Base API Endpoint");
});

app.post("/signup", (req, res) => {
  // get user info
  const { name, email, password } = req.body;
  // encrypt/hash user pass
  bcrypt.hash(password, 5, async function (err, hash) {
    const user = new UserModel({
      name,
      email: email,
      password: hash,
    });
    // save user info
    await user.save();
    // sent res:OK
    res.send("Sign up Successfull");
  });
});

app.post("/login", async (req, res) => {
  // get user info
  const { email, password } = req.body;
  // find user
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.send("Please signup first");
  }
  const hashedpwd = user?.password;
  // check pass
  bcrypt.compare(password, hashedpwd, function (err, result) {
    if (result) {
      // sign token & refresh
      const token = jwt.sign({ userID: user._id }, "SECRET", { expiresIn: 20 });
      const refresh_token = jwt.sign({ userID: user._id }, "REFRESH_SECRET", {
        expiresIn: 100,
      });
      res.send({ msg: "login successfull", token, refresh_token });
    } else {
      res.send("login failed");
    }
  });
});

// validate jwt token
app.get("/reports", authenticate, (req, res) => {
  res.send("Reports");
});

app.get("/logout", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const blacklisteddata = JSON.parse(
    fs.readFileSync("./blacklist.json", "utf-8")
  );
  blacklisteddata.push(token);
  fs.writeFileSync("./blacklist.json", JSON.stringify(blacklisteddata));
  res.send("Logged out successfully");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Successfully connected to DB");
  } catch (err) {
    console.log("connecting to DB failed");
    console.log(err);
  }
  console.log("listening on port 8080");
});
