import express from "express";
import { UserService } from "../services";

const router = express.Router();
// routes for signin or signup user
router.post(process.env.AUTH_REGISTER_PATH, UserService.getAll);
router.post(process.env.AUTH_LOGIN_PATH, UserService.getAll);

export default router;
