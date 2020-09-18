import express from "express";
import { UserService } from "../services";

const router = express.Router();
// routes for signin or signup user
router.post("/signup", UserService.getAll);
router.post("/signin", UserService.getAll);

export default router;
