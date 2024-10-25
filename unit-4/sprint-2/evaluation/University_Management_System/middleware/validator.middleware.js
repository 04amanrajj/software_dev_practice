const validator = (req, res, next) => {
  if (req.method == "DELETE" || req.method == "PATCH") {
    if (
      (req.query.password == 7877 && req.query.role == "teacher") ||
      req.query.role == "admin"
    ) {
      next();
    } else res.status(403).send("forbidden");
  } else next();
};

module.exports = validator;
