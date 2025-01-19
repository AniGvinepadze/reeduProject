const { Router } = require('express');
const postsModels = require('../models/posts.models');
const usersModel = require('../models/users.model');

const postsRouter = Router();

postsRouter.get('/', async (req, res) => {
  console.log(req.userId, 'req.userId');
  const posts = await postsModels.find().populate('user', 'email fullName');
  res.json(posts);
});

postsRouter.post('/', async (req, res) => {
  const { title, category, details, status } = req.body;
  if (!title || !category || !details || !status)
    return res.status(400).json({ message: 'invalid params' });
  const newPost = await postsModel.create({
    title,
    category,
    details,
    status,
    user: req.userId,
    upVotes: 0,
  });
  await usersModel.findByIdAndUpdate(req.userId, {
    $push: { posts: newPost._id },
  });
  res.status(201).json({ newPost });
});

postsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!isValidObjectId(id))
    return res.status(400).json({ message: 'not a valid object id' });

  await postsModel.findByIdAndDelete(id);

  await usersModel.findByIdAndUpdate(
    { _id: req.userId },
    {
      $pull: { posts: id },
    }
  );

  res.json({ message: 'post deleted' });
});

module.exports = postsRouter;
