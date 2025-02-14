// This file contains the routes for the activities

const express = require("express");
const router = express.Router();
const Actividad = require("../models/actividad");

// GET all activities paginate 10 by 10
// Use example: /actividades/list?page=1
router.get("/list", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = 10;
  const skipIndex = (page - 1) * limit;

  try {
    const actividades = await Actividad.find()
      .sort({ fecha: -1 })
      .limit(limit)
      .skip(skipIndex);
    res.json(actividades);

    console.log("GET /actividades/list");
  } catch (err) {
    res.json({ message: err });
  }
});

// GET last 10 activities
router.get("/latest", async (req, res) => {
  try {
    const actividades = await Actividad.find().sort({ fecha: -1 }).limit(10);
    res.json(actividades);

    console.log("GET /actividades/latest");
  } catch (err) {
    res.json({ message: err });
  }
});

// POST an activity
router.post("/", async (req, res) => {
  const actividad = new Actividad({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    proyecto: req.body.proyecto,
    fecha: req.body.fecha,
  });

  try {
    const savedActividad = await actividad.save();
    res.json(savedActividad);

    console.log("POST /actividades");
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
