const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  name: { type: String, required: true },
  date: String,
});

const TodosModel = mongoose.model("task", todosSchema);

module.exports = TodosModel;
