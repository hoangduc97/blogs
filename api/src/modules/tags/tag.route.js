import express from 'express';
import TagService from './tag.service';
import { authJwt } from '../../middlewares/auth.middleware';
import { tagValidate } from './tag.validate';
import { roleConstant } from '../../utils/constants';

const router = express.Router();

router
    .get('/', TagService._getAll)
    .get('/:id', TagService._getOne)
    .post(
        '/',
        [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...tagValidate],
        TagService._create
    )
    .put(
        '/:id',
        [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...tagValidate],
        TagService._update
    )
    .patch(
        '/:id',
        [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...tagValidate],
        TagService._update
    )
    .delete(
        '/:id',
        [authJwt([roleConstant.MANAGER, roleConstant.WRITER])],
        TagService._delete
    );
export default router;
