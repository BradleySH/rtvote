const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issues");

// Get All
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issue)
  })
});

// Get Issue by ID
issueRouter.get("/user", (req, res, next) => {
  Issue.find({user: req.user._id}, (err, issue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issue)
  })
})

// Add New Issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newIssue = new Issue(req.body)
  newIssue.save( (err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
});

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    {_id: req.params.issueId, user: req.user._id},
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted ${deletedIssue.title}`)
    }
  )
});

// Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.user._id},
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(eerr)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

module.exports = issueRouter