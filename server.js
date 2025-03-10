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
app.use("/api/companies", require("./routes/companies"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/activities", require("./routes/activities"));

const PORT = process.env.PORT || 5000;

// Start the server on the specified port catching any errors
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🟢 Server running on http://0.0.0.0:${PORT}`);
});
