import express from 'express';
import UserRoutes from '../modules/users/user.route';

const router = express.Router();
router.use(process.env.USER_PATH, UserRoutes);

export default router;
