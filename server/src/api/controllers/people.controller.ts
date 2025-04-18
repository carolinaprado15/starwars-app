import { Request, Response, NextFunction } from "express";
import { getPeople, getPersonWithMovies } from "../../domain/services/people.service";

const getPeopleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { search } = req.query;
    const people = await getPeople(String(search));

    res.json(people);
  } catch (error) {
    next(error);
  }
};

const getPersonHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const person = await getPersonWithMovies(+id);
    res.json(person);
  } catch (error) {
    next(error);
  }
};

export { getPeopleHandler, getPersonHandler };
