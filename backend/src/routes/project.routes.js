import { Router } from "express";
import {
  createProjectHandler,
  getProjectsHandler,
  getProjectByIdHandler,
} from "../controllers/project.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/").post(verifyJWT, createProjectHandler);
router.route("/").get(verifyJWT, getProjectsHandler);
router.route("/:id").get(verifyJWT, getProjectByIdHandler);
export default router;
