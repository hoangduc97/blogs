import express from "express";
import auth from "../middlewares/auth.middleware";
import { UserService } from "../services";

const router = express.Router();
router.get("/", auth, UserService.getAll);
router.post("/user", auth, UserService.createOne);

export default router;
