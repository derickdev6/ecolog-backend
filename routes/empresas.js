// This file contains the routes for the companies

const express = require("express");
const router = express.Router();
const Empresa = require("../models/empresa");

// GET all companies
router.get("/", async (req, res) => {
  try {
    const empresas = await Empresa.find();
    res.json(empresas);

    console.log("GET /empresas");
  } catch (err) {
    res.json({ message: err });
  }
});

// POST a company
router.post("/", async (req, res) => {
  const empresa = new Empresa({
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    email: req.body.email,
  });

  try {
    const savedEmpresa = await empresa.save();
    res.json(savedEmpresa);

    console.log("POST /empresas");
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
