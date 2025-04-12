import { Request, Response, NextFunction } from "express";
import { getPeople } from "../../domain/services/people.service";

const getPeopleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const people = await getPeople();
    res.json(people);
  } catch (error) {
    next(error);
  }
};

export { getPeopleHandler };
