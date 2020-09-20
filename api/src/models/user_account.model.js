import mongoose from "mongoose";
import { random_number, increment_days } from "../utils/common.util";
import bcrypt from "bcryptjs";

const userAccount = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserProfile",
        required: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    email_confirm_token: {
        type: String,
        default: random_number(
            parseInt(process.env.EMAIL_CONFIRM_TOKEN_LENGTH)
        ),
    },
    password_expire: {
        type: Date,
        default: increment_days(parseInt(process.env.PASSWORD_DURATION)),
    },
});

userAccount.pre("save", function (next) {
    const account = this;

    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (error, salt) {
            if (error) {
                return next(error);
            }
            bcrypt.hash(account.password, salt, function (error, hash) {
                if (error) {
                    return next(error);
                }
                account.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

userAccount.methods.comparePassword = function (pw, cd) {
    bcrypt.compare(pw, this.password, (error, isMatch) => {
        if (error) return cd(error);
        cd(null, isMatch);
    });
};

export default mongoose.model("UserAccount", userAccount);
