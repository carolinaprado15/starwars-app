import { Router } from "express";
import { getPeopleHandler } from "../controllers/people.controller";

const router = Router();

router.get("/people", getPeopleHandler);

export default router;