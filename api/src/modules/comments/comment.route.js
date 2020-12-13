import express from 'express';
import { authJwt } from '../../middlewares/auth.middleware';
import { role } from '../../utils/constants';
import validate from './comment.validate';
import CommentService from './comment.service';

const router = express.Router();
router.get('/', CommentService._getAll);
router.get('/:id', CommentService._getOne);
router.post(
    '/',
    [authJwt([role.MANAGER, role.WRITER]), ...validate],
    CommentService._create
);
router.put(
    '/:id',
    [authJwt([role.MANAGER, role.WRITER]), ...validate],
    CommentService._update
);
router.delete(
    '/:id',
    [authJwt([role.MANAGER, role.WRITER])],
    CommentService._delete
);
export default router;
