// This file contains the model for the activity
// Uses Mongoose to define the schema for the activity

const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
