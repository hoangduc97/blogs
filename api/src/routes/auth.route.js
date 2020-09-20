import express from "express";
import { AuthService } from "../services";

const router = express.Router();

// routes for register or login user
router.post(process.env.AUTH_REGISTER_PATH, AuthService.register);
router.post(process.env.AUTH_LOGIN_PATH, AuthService.login);

export default router;
