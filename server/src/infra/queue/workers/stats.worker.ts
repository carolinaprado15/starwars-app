import { Worker } from "bullmq";
import { redis } from "../../config/redis";
import { generateStats } from "../../../domain/services/stats.service";

const statsWorker = new Worker(
  "statsQueue",
  async () => {
    await generateStats();
  },
  {
    connection: redis,
  }
);

statsWorker.on("completed", () => {
  console.log("Stats recomputed");
});

statsWorker.on("failed", (job, err) => {
  console.error(`Job ${job!.id} failed:`, err);
});

export { statsWorker };
