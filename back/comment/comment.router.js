const express = require("express");
const commentModel = require("../models/comment.model");
const usersModel = require("../models/users.model");

const commentRouter = express.Router();

commentRouter.post("/:id", async (req, res) => {
  try {
    console.log("Received userId", req.params.id);
    const { id } = req.params;
    const { comment } = req.body;

    if (!comment)
      return res.status(400).json({ message: "Comment is required" });

    const user = await usersModel.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const newComment = new commentModel({
      comment,
      user: id,
    });

    await newComment.save();

    await usersModel.findByIdAndUpdate(id, {
      $push: { comments: newComment._id },
    });

    res.status(201).json({
      message: "Comment added successfully",
      comment: newComment,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});
commentRouter.get("/",async(req,res)=>{
    const comment = await commentModel.find().populate('user')
    if(!comment ) return res.status(404).json({message:"user not found"})
    res.json(comment)    
})


commentRouter.get("/:id",async(req,res)=>{
    const {id} = req.params

    const user = await usersModel.findById(id).populate("comments")
    if(!user ) return res.status(404).json({message:"user not found"})

    res.json(user.comments)    
})

module.exports = commentRouter;
