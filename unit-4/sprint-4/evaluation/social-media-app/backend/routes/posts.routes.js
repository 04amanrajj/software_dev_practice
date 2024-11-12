const express = require("express");
const { Router } = require("express");
const { PostModel } = require("../models/posts.model");
const jwt = require("jsonwebtoken");
const postsRoute = Router();

postsRoute.use(express.json());

postsRoute.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.send({ message: posts });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ message: error.message });
  }
});

postsRoute.post("/new", async (req, res) => {
  try {
    const payLoad = req.body;
    const userID = req.userID;
    payLoad.userID = userID;
    const newPost = new PostModel(payLoad);

    await newPost.save();
    res.status(200).send({ message: "Note created" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

postsRoute.patch("/update/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const payLoad = req.body;

    let post = await PostModel.findOne({ _id });
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    if (post.userID !== req.userID) {
      return res.status(403).send({ message: "You are not authorized" });
    }
    await PostModel.findOneAndUpdate({ _id }, payLoad);
    post = await PostModel.findOne({ _id });

    console.log(payLoad);

    res.status(200).send({ message: "Post updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

postsRoute.delete("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const post = await PostModel.findOne({ _id });
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    if (post.userID !== req.userID) {
      return res.status(403).send({ message: "You are not authorized" });
    }
    await PostModel.findOneAndDelete({ _id });
    res.status(200).send({ message: "Post deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
module.exports = { postsRoute };
