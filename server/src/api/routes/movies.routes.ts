import { Router } from "express";
import { getMovieHandler, getMoviesHandler } from "../controllers/movies.controller";
import { validateParams } from "../../shared/middlewares/validate.middleware";
import { searchSchema } from "../schemas/search.schema";

const router = Router();

router.get("/movies/:id", getMovieHandler);
router.get("/movies", validateParams(searchSchema, 'query'), getMoviesHandler);

export default router;