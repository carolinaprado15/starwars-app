import mongoose, { Schema, Document } from "mongoose";

type IStatsDocument = Document & IStats;

interface IStats {
  topQueries: { query: string; count: number; percentage: number }[];
  avgRequestTime: number;
  mostPopularHour: number;
}

const statsSchema = new Schema(
  {
    topQueries: [
      {
        query: { type: String, required: true },
        count: { type: Number, required: true },
        percentage: { type: Number, required: true },
      },
    ],
    avgRequestTime: { type: Number, required: true },
    mostPopularHour: { type: Number, required: true },
  }
);

const QueryStats = mongoose.model<IStatsDocument>("QueryStats", statsSchema);

export { QueryStats, IStats };
