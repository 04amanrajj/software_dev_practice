const TodosModel = require("../model/todos.model");

exports.getAllData = async (req, res) => {
  try {
    const data = await TodosModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    req.body.date = new Date();
    const task = new TodosModel(req.body);
    await task.save();
    res.status(200).send("Task Uploaded");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    await TodosModel.findOneAndUpdate(req.params, req.body);
    res.send(await TodosModel.find(req.params));
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await TodosModel.findOneAndDelete(req.params);
    res.send("deleted");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
