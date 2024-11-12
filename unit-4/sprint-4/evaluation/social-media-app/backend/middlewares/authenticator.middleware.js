const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.send("provide token in req.headers.authorization");

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) return res.status(403).send({ message: "login again" });

    req.userID = decoded.userID;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
