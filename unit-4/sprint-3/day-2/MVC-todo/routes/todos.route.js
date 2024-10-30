const express = require("express");
const { Router } = require("express");
const todoRoute = Router();
const TodosModel = require("../model/todos.model");
const { getAllData, createTodo, updateTodo, deleteTodo } = require("../controller/todos.controller");


todoRoute.use(express.json());

// get
todoRoute.get("/", getAllData);

// create
todoRoute.post("/create", createTodo);

// update
todoRoute.patch("/:_id", updateTodo);
// delete
todoRoute.delete("/:_id", deleteTodo);
module.exports = todoRoute;
