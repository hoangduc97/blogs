import { check } from 'express-validator';

const tagValidate = [check('title').notEmpty()];
export default tagValidate;
