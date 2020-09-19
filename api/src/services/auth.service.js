import { validationResult } from "express-validator";
import { gen_hash, gen_salt } from "../utils/auth.util";
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
        const account = await UserAccount.findOne({ email });
        if (account) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const newUser = new UserProfile();
        newUser.save({}, (error, user) => {
            if (error) return res.status(400).json({
                success: false,
                message: "User create failed",
            });

            const salt = await gen_salt();
            const hash = await gen_hash(password, salt);
            const newAccount = new UserAccount({
                _id: user._id,
                hash: hash,
                salt: salt,
            });
            newAccount.save({}, (error, account) => {
                if (error) return res.status(400).json({
                    success: false,
                    message: error,
                });
                res.status(200).json({
                    success: true,
                    message: "Account create success!",
                    account: account
                });
            });
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
};

const AuthService = {
    register,
};

export default AuthService;
