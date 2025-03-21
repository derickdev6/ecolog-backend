// This file contains the routes for the activities

const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");
const mongoose = require("mongoose");

// GET all activities paginate 10 by 10
// Use example: /activities/list?page=1
router.get("/list", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skipIndex = (page - 1) * limit;

  try {
    const activities = await Activity.find()
      .sort({ date: -1 })
      .limit(limit)
      .skip(skipIndex);
    res.json(activities);

    console.log("GET /activities/list");
  } catch (err) {
    res.json({ message: err });
  }
});

// GET last 5 activities
router.get("/latest", async (req, res) => {
  try {
    const activities = await Activity.find().sort({ date: -1 }).limit(5);
    res.json(activities);

    console.log("GET /activities/latest");
  } catch (err) {
    res.json({ message: err });
  }
});

// GET activity by id
router.get("/:activityId", async (req, res) => {
  const activityId = req.params.activityId;

  try {
    const activity = await Activity.findById(activityId);
    res.json(activity);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET activities by project id
// Use example: /activities/project/5f8f7b7b4b3e3b1f3c7e3b1f
router.get("/project/:projectId", async (req, res) => {
  const projectId = req.params.projectId;

  try {
    const activities = await Activity.find({
      "project.id": new mongoose.Types.ObjectId(projectId),
    });
    res.json(activities);
    console.log("GET /activities/project/" + projectId);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error retrieving activities", error: err });
  }
});

// POST one or more activities
router.post("/", async (req, res) => {
  const activities = req.body;

  if (!Array.isArray(activities)) {
    activities = [activities];
  }

  try {
    const savedActivities = await Activity.insertMany(activities);
    res.json(savedActivities);

    console.log("POST /activities");
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
