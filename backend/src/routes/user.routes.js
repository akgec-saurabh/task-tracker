import { Router } from "express";
import {
  signupUserHandler,
  loginUserHandler,
  logoutUserHandler,
  refreshAccessTokenHandler,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Public routes
router.route("/signup").post(signupUserHandler);
router.route("/login").post(loginUserHandler);
router.route("/refresh-token").post(refreshAccessTokenHandler);

// Protected routes
router.route("/logout").post(verifyJWT, logoutUserHandler);

export default router;
