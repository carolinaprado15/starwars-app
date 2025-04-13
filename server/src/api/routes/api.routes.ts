import { Router } from "express";

import peopleRoutes from "./people.routes";
import moviesRoutes from "./movies.routes";
import statsRoutes from "./stats.routes";

const router = Router();

router.use(peopleRoutes);
router.use(moviesRoutes);
router.use(statsRoutes);

export default router;