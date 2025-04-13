import { Router } from "express";
import { getPeopleHandler, getPersonHandler } from "../controllers/people.controller";
import { validateParams } from "../../shared/middlewares/validate.middleware";
import { searchSchema } from "../schemas/search.schema";
import { logQuery } from "../../shared/middlewares/logQuery.middleware";

const router = Router();

router.get("/people/:id", getPersonHandler);
router.get("/people", validateParams(searchSchema, 'query'), logQuery, getPeopleHandler);

export default router;