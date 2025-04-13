import { Router } from "express";
import { getMovieHandler, getMoviesHandler } from "../controllers/movies.controller";
import { validateParams } from "../../shared/middlewares/validate.middleware";
import { searchSchema } from "../schemas/search.schema";
import { logQuery } from "../../shared/middlewares/logQuery.middleware";

const router = Router();

router.get("/movies/:id", getMovieHandler);
router.get("/movies", validateParams(searchSchema, 'query'), logQuery, getMoviesHandler);

export default router;