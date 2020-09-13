import express from "express";
import { UserService } from "../services";

const router = express.Router();
router.get("/", UserService.getAll);
router.post("/", UserService.createOne);

export default router;
