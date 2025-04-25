import { Router } from "express";
import {
  signupUserHandler,
  loginUserHandler,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/signup").post(signupUserHandler);
router.route("/login").post(loginUserHandler);

export default router;
