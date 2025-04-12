import { Router } from "express";
import peopleRoutes from "./people.routes";

const router = Router();

router.use(peopleRoutes);

export default router;