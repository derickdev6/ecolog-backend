// This file contains the model for the company
// Uses Mongoose to define the schema for the company

const mongoose = require("mongoose");

const empresaSchema = mongoose.Schema({
  nit: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Empresa", empresaSchema);
