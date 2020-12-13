import { check } from 'express-validator';

const articleValidate = [
    check('title').notEmpty().isLength({ min: 10 }),
    check('category').notEmpty().isMongoId(),
    check('content').notEmpty().isLength({ min: 10 }),
];

export default articleValidate;
