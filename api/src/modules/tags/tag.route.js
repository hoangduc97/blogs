import express from 'express';
import TagService from './tag.service';
import { authJwt } from '../../middlewares/auth.middleware';
import { tagValidate } from './tag.validate';
import { roleConstant } from '../../utils/constants';

const router = express.Router();

router
    .get('/', TagService._get)
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
    )
    .post(
        '/',
        [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...tagValidate],
        TagService._create
    );
export default router;
