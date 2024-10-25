const express = require("express");
const app = express();
const studentsRoute = require("./routes/student.route");
const teachersRoute = require("./routes/teacher.route");
const logger = require("./middleware/logger.middleware");

// middleware
app.use(logger);

// routes
app.use("/students", studentsRoute);
app.use("/teachers",teachersRoute)
// server start
app.listen(3000, () => console.log("http://localhost:3000"));
