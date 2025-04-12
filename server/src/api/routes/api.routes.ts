import { Router } from "express";

import peopleRoutes from "./people.routes";
import moviesRoutes from "./movies.routes";

const router = Router();

router.use(peopleRoutes);
router.use(moviesRoutes);

export default router;