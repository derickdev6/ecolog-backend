// This file contains the model for the activity
// Uses Mongoose to define the schema for the activity

const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  project: {
    type: {
      id: mongoose.Schema.Types.ObjectId,
      name: String,
    },
    ref: "projects",
    required: true,
  },
  company: {
    type: {
      id: mongoose.Schema.Types.ObjectId,
      name: String,
    },
    ref: "companies",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
