import { Router } from "express";
import {
  createTaskHandler,
  getTasksHandler,
  updateTaskHandler,
  deleteTaskHandler,
} from "../controllers/task.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/").post(verifyJWT, createTaskHandler);
router.route("/").get(verifyJWT, getTasksHandler);
router.route("/:id").put(verifyJWT, updateTaskHandler);
router.route("/:id").delete(verifyJWT, deleteTaskHandler);
export default router;
