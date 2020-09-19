import express from "express";
import { AuthService } from "../services";

const router = express.Router();
// routes for signin or signup user
router.post(process.env.AUTH_REGISTER_PATH, AuthService.register);

export default router;
