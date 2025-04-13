import { QueryLog, IQueryLog } from "../../infra/db/models/queryLog.model";

const log = async (
  resource: string,
  query: string,
  responseTime: number
): Promise<IQueryLog> => {
  const logEntry = new QueryLog({
    resource,
    query,
    responseTime,
  });

  return await logEntry.save();
};

export { log };
