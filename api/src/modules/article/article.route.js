import express from 'express';
import { authJwt } from '../../middlewares/auth.middleware';
import { role } from '../../utils/constants';
import ArticleService from './article.service';
import validate from './article.validate';

const router = express.Router();
router.get('/', ArticleService._getAll);
router.get('/:slug', ArticleService._getDetail);
router.post(
    '/',
    [authJwt([role.MANAGER, role.WRITER]), ...validate],
    ArticleService._create
);
router.put(
    '/:slug',
    [authJwt([role.MANAGER, role.WRITER]), ...validate],
    ArticleService._update
);
router.delete(
    '/:slug',
    [authJwt([role.MANAGER, role.WRITER])],
    ArticleService._delete
);
export default router;
