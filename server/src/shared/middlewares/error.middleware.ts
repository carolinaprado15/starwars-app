import express from "express";

const errorHandler =
  (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(err.code || 500).json({ message: err.message || "Internal server error" });
  };

export { errorHandler };