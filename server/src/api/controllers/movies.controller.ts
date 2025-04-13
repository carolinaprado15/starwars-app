import { Request, Response, NextFunction } from "express";
import { getMovies, getMovieWithPeople } from "../../domain/services/movies.service";

const getMoviesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { search } = req.query;
    const people = await getMovies(String(search));

    res.json(people);
  } catch (error) {
    next(error);
  }
};

const getMovieHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const person = await getMovieWithPeople(+id);
    
    res.json(person);
  } catch (error) {
    next(error);
  }
};

export { getMoviesHandler, getMovieHandler };
