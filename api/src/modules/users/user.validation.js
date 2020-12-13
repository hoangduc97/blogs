import { check } from 'express-validator';
import Message from '../../logger/message.data';

const userValidate = [
    check('email', Message[3000]).isEmail(),
    check('password', Message[3001]).isLength({ min: 6 }),
];

export { userValidate };
