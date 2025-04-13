import cron from "node-cron";
import { addStatsJob } from "../queue/jobs/stats.job";

const scheduleStatsJob = () => {
  cron.schedule("*/5 * * * *", async () => {
    console.log("Scheduling stats job");
    await addStatsJob();
  });
};

export { scheduleStatsJob }