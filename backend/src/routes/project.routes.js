import { Router } from "express";
import { createProjectHandler } from "../controllers/project.controller.js";
const router = Router();

router.route("/").post(createProjectHandler);

export default router;
