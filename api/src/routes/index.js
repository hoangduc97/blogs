import express from 'express';
import UserRoutes from '../modules/users/user.route';
import PostRoutes from '../modules/posts/post.route';
import TagRoutes from '../modules/tags/tag.route';
import CategoryRoutes from '../modules/categories/category.route';

const router = express.Router();
router.use(process.env.USER_PATH, UserRoutes);
router.use(process.env.POST_PATH, PostRoutes);
router.use(process.env.TAG_PATH, TagRoutes);
router.use(process.env.CATEGORY_PATH, CategoryRoutes);

export default router;
