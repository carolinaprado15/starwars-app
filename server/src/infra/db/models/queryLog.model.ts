import mongoose, { Schema } from "mongoose";

interface IQueryLog extends Document {
  resource: string;
  query: string;
  timestamp: Date;
  responseTime: number;
}

const QueryLogSchema: Schema = new Schema({
  resource: { type: String, required: true },
  query: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  responseTime: { type: Number, required: true },
});

const QueryLog = mongoose.model<IQueryLog>("QueryLog", QueryLogSchema);

export { QueryLog, IQueryLog };
