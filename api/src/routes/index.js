import express from "express";
import { apiConstant } from "../utils/constants";
import AuthRoutes from "./auth.route";

const router = express.Router();
router.use(apiConstant.BASE_PATH + "/auth", AuthRoutes);

export default router;
