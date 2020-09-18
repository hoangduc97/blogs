import express from "express";
import AuthRoutes from "./auth.route";

const router = express.Router();
router.use(process.env.AUTH_BASE_PATH, AuthRoutes);

export default router;
