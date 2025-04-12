import { Router } from "express";
import { getPeopleHandler, getPersonHandler } from "../controllers/people.controller";
import { validateParams } from "../../shared/middlewares/validate.middleware";
import { searchSchema } from "../schemas/search.schema";

const router = Router();

router.get("/people/:id", getPersonHandler);
router.get("/people", validateParams(searchSchema, 'query'), getPeopleHandler);

export default router;