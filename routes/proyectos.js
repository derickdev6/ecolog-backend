// This file contains the routes for the projects

const express = require("express");
const router = express.Router();
const Proyecto = require("../models/proyecto");

// GET all projects paginated 10 by 10
// Use example: /proyectos/list?page=1
router.get("/list", async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = 10;
  const skipIndex = (page - 1) * limit;

  try {
    const proyectos = await Proyecto.find()
      .sort({ fecha: -1 })
      .limit(limit)
      .skip(skipIndex);
    res.json(proyectos);

    console.log("GET /proyectos/list");
  } catch (err) {
    res.json({ message: err });
  }
});

// GET projects by company
// Use example: /proyectos/company?company=companyName
router.get("/company", async (req, res) => {
  const company = req.query.company;

  try {
    const proyectos = await Proyecto.find({ empresa: company });
    res.json(proyectos);

    console.log("GET /proyectos/company");
  } catch (err) {
    res.json({ message: err });
  }
});

// POST a project
router.post("/", async (req, res) => {
  const proyecto = new Proyecto({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    empresa: req.body.empresa,
    fecha: req.body.fecha,
  });

  try {
    const savedProyecto = await proyecto.save();
    res.json(savedProyecto);

    console.log("POST /proyectos");
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
