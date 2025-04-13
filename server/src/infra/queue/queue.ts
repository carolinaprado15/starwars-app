import { Queue } from "bullmq";
import { redis } from "../config/redis";

const statsQueue = new Queue("statsQueue", {
  connection: redis,
});

export { statsQueue }