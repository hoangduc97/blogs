import {check} from "express-validator";

const commentValidate = [
    check('content').notEmpty().isLength({min: 30})
]

export default commentValidate;