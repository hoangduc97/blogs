import { validationResult } from "express-validator";
import { UserProfile, UserAccount } from "../models";

const signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }

    const { username, email, password } = req.body;
    try {
        const user = UserAccount.findOne({
            email,
        });
        
    } catch (error) {}
};
