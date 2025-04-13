import { statsQueue } from "../queue";

const addStatsJob = async () => {
  await statsQueue.add("generateStats", {}, {
    removeOnComplete: true,
    removeOnFail: true,
  });
};

export { addStatsJob }