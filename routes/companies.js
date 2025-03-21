// This file contains the routes for the companies

const express = require("express");
const router = express.Router();
const Company = require("../models/Company");

// GET all companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);

    console.log("GET /companies");
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific company by name
router.get("/:companyName", async (req, res) => {
  try {
    const company = await Company.findOne({ name: req.params.companyName });
    res.json(company);

    console.log("GET /companies/name/" + req.params.companyName);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET a specific company by id
router.get("/id/:companyId", async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId);
    res.json(company);

    console.log("GET /companies/" + req.params.companyId);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST one or many companies
router.post("/", async (req, res) => {
  const companies = req.body;

  if (!Array.isArray(companies)) {
    companies = [companies];
  }

  try {
    const savedCompanies = await Company.insertMany(companies);
    res.json(savedCompanies);

    console.log("POST /companies");
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE a company by id
router.delete("/:companyId", async (req, res) => {
  try {
    const removedCompany = await Company.findByIdAndDelete({
      _id: req.params.companyId,
    });
    res.json(removedCompany);
    console.log("DELETE /companies/" + req.params.companyId);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
