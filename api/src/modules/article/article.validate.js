import { check } from 'express-validator';

const postValidate = [
    check('title').notEmpty().isLength({ min: 10}),
    check('categories').notEmpty().isArray(),
    check('summary').notEmpty().isLength({ min: 10 }),
    check('content').notEmpty().isLength({ min: 10 }),
];

export { postValidate };
