import express from "express";
import dotenv from "dotenv";
import uploadRoutes from "./routes/upload.routes.js";

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/api", uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
