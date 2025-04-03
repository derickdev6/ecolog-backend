require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware CORS (Permite todo)
app.use(
  cors({
    origin: "*", // Permitir cualquier origen
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
    credentials: true, // Permitir cookies y autenticación
  })
);

// Middleware para manejar preflight requests
app.options("*", cors());

// Middleware para analizar JSON
app.use(express.json());

// Definir rutas
app.use("/api/companies", require("./routes/companies"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/activities", require("./routes/activities"));

const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, "0.0.0.0", () => {
  console.clear();
  console.log(`🟢 Server running on http://0.0.0.0:${PORT}`);
});
