const { Router } = require("express");
const postsModels = require("../models/posts.models");
const usersModel = require("../models/users.model");

const postsRouter = Router();

postsRouter.get("/", async (req, res) => {
  console.log(req.userId, "req.userId");
  const posts = await postsModels.find().populate("user", "email fullName");
  res.json(posts);
});

postsRouter.post("/", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ message: "title or content is required" });
  const newPost = await postsModels.create({
    title,
    content,
    user: req.userId,
  });
  await usersModel.findByIdAndUpdate(req. userId, {
    $push: { posts: newPost._id },
  });
  res.status(201).json({ newPost });
});

module.exports = postsRouter;
