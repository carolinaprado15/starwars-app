import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import apiRoutes from "./api/routes/api.routes";
import { errorHandler } from "./shared/middlewares/error.middleware";
import { connectMongoDB } from "./infra/db/mongoDB";
import { statsWorker } from "./infra/queue/workers/stats.worker";
import { scheduleStatsJob } from "./infra/scheduler/stats.cron";

connectMongoDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

statsWorker;
scheduleStatsJob();

app.use("/api/v1", apiRoutes);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});