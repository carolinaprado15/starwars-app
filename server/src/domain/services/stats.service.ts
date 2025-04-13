import { IQueryLog, QueryLog } from "../../infra/db/models/queryLog.model";
import { IStats, QueryStats } from "../../infra/db/models/stats.model";

const getLatestStats = async () => {
  const stats = await QueryStats.findOne();
  if (!stats) {
    throw { code: 404, message: "No stats found." };
  }

  return {
    topQueries: stats.topQueries,
    avgRequestTime: stats.avgRequestTime,
    mostPopularHour: stats.mostPopularHour,
  };
};

const generateStats = async () => {
  const logs = await QueryLog.find();
  if (logs.length == 0) {
    console.log("No logs available yet");
    return;
  }

  const topQueries = calculateTopQueries(logs);
  const avgRequestTime = calculateAvgRequestTime(logs);
  const mostPopularHour = calculateMostPopularHour(logs);

  await saveStatsToDB({
    topQueries,
    avgRequestTime,
    mostPopularHour,
  });
};

const saveStatsToDB = async (results: IStats) => {
  try {
    await QueryStats.findOneAndUpdate({}, results, { upsert: true, new: true });

    console.log("Stats upserted to the database");
  } catch (error) {
    console.log(error);
  }
};

const calculateTopQueries = (logs: IQueryLog[]) => {
  const stats = logs.reduce((acc, log) => {
    acc[log.query] = (acc[log.query] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalQueries = logs.length;
  const sortedQueries = Object.entries(stats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const topQueries = sortedQueries.map(([query, count]) => ({
    query,
    count,
    percentage: (count / totalQueries) * 100,
  }));

  return topQueries;
};

const calculateAvgRequestTime = (logs: IQueryLog[]) => {
  const totalRequestTime = logs.reduce((acc, log) => acc + log.responseTime, 0);
  const avgRequestTime = totalRequestTime / logs.length;
  return avgRequestTime;
};

const calculateMostPopularHour = (logs: IQueryLog[]) => {
  const hours = logs.map((log) => new Date(log.timestamp).getHours());
  const hourCounts = hours.reduce((acc, hour) => {
    acc[hour] = (acc[hour] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const mostPopularHour = Object.entries(hourCounts)
    .sort((a, b) => b[1] - a[1])
    .shift();

  return mostPopularHour ? parseInt(mostPopularHour[0]) : 0;
};

export { getLatestStats, generateStats };
