import express from "express";
import { apiConstant } from "../utils/constants";
import UserProfileRouter from "./user_profile.route";

const router = express.Router();
router.use(apiConstant.BASE_PATH + "/post", UserProfileRouter);

export default router;
