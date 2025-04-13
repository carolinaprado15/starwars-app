import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import apiRoutes from "./api/routes/api.routes";
import { genericError } from "./shared/middlewares/error.middleware";
import { logQuery } from "./shared/middlewares/logQuery.middleware";
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

app.use(logQuery);

app.use("/api/v1", apiRoutes);

app.use(genericError);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});