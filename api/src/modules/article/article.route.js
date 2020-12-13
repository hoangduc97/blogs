import express from 'express';
import PostService from './article.service';
import { authJwt } from '../../middlewares/auth.middleware';
import { postValidate } from './article.validate';
import { roleConstant } from '../../utils/constants';

const router = express.Router();
router.get('/', PostService._getAll);
router.get('/:id', PostService._getOne);
router.post(
    '/',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...postValidate],
    PostService._create
);
router.put(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...postValidate],
    PostService._update
);
router.delete(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER])],
    PostService._delete
);
export default router;
