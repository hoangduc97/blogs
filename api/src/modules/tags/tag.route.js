import express from 'express';
import TagService from './tag.service';
import {authJwt} from '../../middlewares/auth.middleware';
import {tagValidate} from './tag.validate';
import {roleConstant} from '../../utils/constants';

const router = express.Router();

router.get('/', TagService._getAll)
router.get('/:id', TagService._getOne)
router.post(
    '/',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...tagValidate],
    TagService._create
)
router.put(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...tagValidate],
    TagService._update
)
router.patch(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...tagValidate],
    TagService._update
)
router.delete(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER])],
    TagService._delete
);
export default router;
