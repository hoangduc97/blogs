import express from 'express';
import CategoryService from './category.service';
import { authJwt } from '../../middlewares/auth.middleware';
import { categoryValidate } from './category.validate';
import { roleConstant } from '../../utils/constants';

const router = express.Router();
router.get('/', CategoryService._getAll);
router.get('/:id', CategoryService._getOne);
router.post(
    '/',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...categoryValidate],
    CategoryService._create
);
router.put(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...categoryValidate],
    CategoryService._update
);
router.delete(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER])],
    CategoryService._delete
);
export default router;
