import express from 'express';
import CommentService from './comment.service';
import { authJwt } from '../../middlewares/auth.middleware';
import { commentValidate } from './comment.validate';
import { roleConstant } from '../../utils/constants';

const router = express.Router();
router.get('/', CommentService._getAll);
router.get('/:id', CommentService._getOne);
router.post(
    '/',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...commentValidate],
    CommentService._create
);
router.put(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...commentValidate],
    CommentService._update
);
router.delete(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER])],
    CommentService._delete
);
export default router;
