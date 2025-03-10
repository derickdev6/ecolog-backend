// This file contains the routes for the activities

const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");
const company = require("../models/Company");

// GET all activities paginate 10 by 10
// Use example: /activities/list?page=1
router.get("/list", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skipIndex = (page - 1) * limit;

  try {
    const activities = await Activity.find()
      .sort({ fecha: -1 })
      .limit(limit)
      .skip(skipIndex);
    res.json(activities);

    console.log("GET /activities/list");
  } catch (err) {
    res.json({ message: err });
  }
});

// GET last 10 activities
router.get("/latest", async (req, res) => {
  try {
    const activities = await Activity.find().sort({ fecha: -1 }).limit(10);
    res.json(activities);

    console.log("GET /activities/latest");
  } catch (err) {
    res.json({ message: err });
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
