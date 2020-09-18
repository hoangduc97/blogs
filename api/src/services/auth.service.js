import { validationResult } from "express-validator";
import { UserProfile, UserAccount } from "../models";

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: errors.array(),
        });
    }

    const { email, password } = req.body;
    try {
        const user = await UserAccount.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const newUser = new UserProfile()
    } catch (error) {}
};
