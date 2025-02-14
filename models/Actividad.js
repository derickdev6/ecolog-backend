// This file contains the model for the activity
// Uses Mongoose to define the schema for the activity

const mongoose = require("mongoose");

const actividadSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  proyecto: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Actividad", actividadSchema);
