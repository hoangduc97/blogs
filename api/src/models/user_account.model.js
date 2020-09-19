import mongoose from "mongoose";
import { random_number, increment_days } from "../utils/common.util";

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
    hash: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    email_confirm_token: {
        type: String,
        default: random_number(process.env.EMAIL_CONFIRM_TOKEN_LENGTH),
    },
    password_expire: {
        type: Date,
        default: increment_days(Date.now(), process.env.PASSWORD_DURATION),
    },
});

export default mongoose.model("UserAccount", userAccount);
