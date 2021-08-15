const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/comment");


// Post comment 
commentRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newComment = new Comment(req.body)
  newComment.save( (err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    res.status(201).send(savedComment)
  })
});

commentRouter.put("/:commentId", (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.commentId, user: req.user._id },
    req.body,
    { new: true },
    (err, updatedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(updatedComment)
    }
  )
});

module.exports = commentRouter
