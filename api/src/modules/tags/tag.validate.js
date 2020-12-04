import { check } from 'express-validator';

const tagValidate = [
    check('tag_name').notEmpty(),
    check('content').notEmpty()
];

export { tagValidate };
