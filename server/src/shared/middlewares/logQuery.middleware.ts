import { Request, Response, NextFunction } from "express";
import { log } from "../../domain/services/queryLog.service";

const logQuery = async (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();

  res.on("finish", async () => {
    const resource = req.route.path;
    const query = (req.query.search as string) || "N/A";
    const responseTime = Date.now() - start;

    await log(resource, query, responseTime);
  });

  next();
};

export { logQuery };
