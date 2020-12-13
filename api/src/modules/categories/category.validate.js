import { check } from 'express-validator';

const categoryValidate = [check('title').notEmpty().isString()];

export default categoryValidate;
