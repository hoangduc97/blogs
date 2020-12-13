import {check} from "express-validator";

const commentValidate = [
    check('article_id').notEmpty(),
    check('content').notEmpty().isLength({min: 30})
]

export default commentValidate;