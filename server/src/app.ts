import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import apiRoutes from "./api/routes/api.routes";
import { genericError } from "./shared/middlewares/error.middleware";

// import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/v1", apiRoutes);

app.use(genericError);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});