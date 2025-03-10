// This file contains the model for the project
// Uses Mongoose to define the schema for the project

const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
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

module.exports = mongoose.model("Project", projectSchema);
