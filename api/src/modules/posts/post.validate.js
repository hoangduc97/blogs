import { check } from 'express-validator';

const postValidate = [
    check('title').notEmpty().isLength({ min: 10}),
    // check('tags').notEmpty().isArray(),
    // check('categories').notEmpty().isArray(),
    check('summary').notEmpty().isLength({ min: 10 }),
    check('content').notEmpty().isLength({ min: 10 }),
];

export { postValidate };
