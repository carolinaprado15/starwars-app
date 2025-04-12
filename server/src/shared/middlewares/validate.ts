import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

const validateParams: any =
  (schema: ObjectSchema, property: "body" | "params" | "query") =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property]);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    next();
  };

export { validateParams };
