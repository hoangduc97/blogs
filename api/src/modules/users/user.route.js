import express from 'express';
import UserService from './user.service';
import { authJwt } from '../../middlewares/auth.middleware';
import { userValidate } from './user.validation';
import { role } from '../../utils/constants';

const router = express.Router();

router.post(
    process.env.AUTH_REGISTER_PATH,
    [...userValidate],
    UserService.register
);
router.post(process.env.AUTH_LOGIN_PATH, [...userValidate], UserService.login);
router.post(process.env.AUTH_TOKEN_PATH, UserService.refreshToken);
router.delete(process.env.AUTH_LOGOUT_PATH, UserService.logout);

// routes for user
router.get('/', authJwt([role.MANAGER]), UserService.getAll);

export default router;
