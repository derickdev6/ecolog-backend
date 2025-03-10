// This file contains the model for the company
// Uses Mongoose to define the schema for the company

const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nit: {
    type: String,
    required: true,
  },
  ceo: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  contact: {
    type: [
      {
        name: String,
        link: String,
      },
    ],
    required: true,
  },
  // Projects that the company has
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "projects",
    },
  ],
});

module.exports = mongoose.model("Company", companySchema);
