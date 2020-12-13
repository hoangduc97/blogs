import express from 'express';
import CategoryService from './category.service';
import { authJwt } from '../../middlewares/auth.middleware';
import { role } from '../../utils/constants';
import validate from './category.validate';

const router = express.Router();
router.get('/', CategoryService._getAll);
router.get('/:id', CategoryService._getOne);
router.post(
    '/',
    [authJwt([role.MANAGER, role.WRITER]), ...validate],
    CategoryService._create
);
router.put(
    '/:id',
    [authJwt([role.MANAGER, role.WRITER]), ...validate],
    CategoryService._update
);
router.delete(
    '/:id',
    [authJwt([role.MANAGER, role.WRITER])],
    CategoryService._delete
);
export default router;
