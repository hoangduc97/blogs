import express from 'express';
import UserRoutes from '../modules/users/user.route';
import PostRoutes from '../modules/posts/post.route';

const router = express.Router();
router.use(process.env.USER_PATH, UserRoutes);
router.use(process.env.POST_PATH, PostRoutes);

export default router;
