// This file contains the routes for the projects

const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects paginated 10 by 10
// Use example: /projects/list?page=1
router.get("/list", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skipIndex = (page - 1) * limit;

  try {
    const projects = await Project.find()
      .sort({ fecha: -1 })
      .limit(limit)
      .skip(skipIndex);
    res.json(projects);

    console.log("GET /projects/list");
  } catch (err) {
    res.json({ message: err });
  }
});

// GET projects by company
// Use example: /projects/company?company=companyName
router.get("/company", async (req, res) => {
  const company = req.query.company;

  try {
    const projects = await Project.find({ empresa: company });
    res.json(projects);

    console.log("GET /projects/" + company);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET project by id
router.get("/:projectId", async (req, res) => {
  const projectId = req.params.projectId;

  try {
    const project = await Project.findById(projectId);
    res.json(project);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST one or many projects
router.post("/", async (req, res) => {
  const projects = req.body;

  if (!Array.isArray(projects)) {
    projects = [projects];
  }

  try {
    const savedProjects = await Project.insertMany(projects);
    res.json(savedProjects);

    console.log("POST /projects");
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
