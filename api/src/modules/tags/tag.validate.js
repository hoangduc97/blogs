import { check } from 'express-validator';

const tagValidate = [
    check('tag_name').notEmpty(),
    check('slug').notEmpty(),
    check('content').notEmpty()
];

export { tagValidate };
