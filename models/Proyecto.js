// This file contains the model for the project
// Uses Mongoose to define the schema for the project

const mongoose = require("mongoose");

const proyectoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  empresa: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Proyecto", proyectoSchema);
