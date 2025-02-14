// This file contains the server configuration and connection to the database

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/empresas", require("./routes/empresas"));
app.use("/api/proyectos", require("./routes/proyectos"));
app.use("/api/actividades", require("./routes/actividades"));

const PORT = process.env.PORT || 5000;

// Start the server on the specified port catching any errors
app.listen(PORT, () => {
  console.log(`🟢 Server running on port ${PORT}`);
});
