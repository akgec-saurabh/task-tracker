import { Router } from "express";
import { createTaskHandler } from "../controllers/task.controller.js";
const router = Router();

router.route("/").post(createTaskHandler);

export default router;
