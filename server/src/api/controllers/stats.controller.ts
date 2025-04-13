import { NextFunction, Request, Response } from "express";
import { getLatestStats } from "../../domain/services/stats.service";

const getStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stats = await getLatestStats();
    
    res.json(stats);
  } catch (error) {
    next(error);
  }
};

export { getStats };
