import mongoose from "mongoose";
import { increment_days } from "../utils/common.util";

const userProfile = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    full_name: {
        type: String,
    },
    avatar_url: {
        type: String,
    },
    password_expire: {
        type: Date,
        default: increment_days(Date.now(), process.env.PASSWORD_DURATION),
    },
    account_facebook: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AccountFacebook",
    },
    account_google: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AccountGoogle",
    },
    account_twitter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AccountTwitter",
    },
});

userProfile.method.Cler;

export default mongoose.model("UserProfile", userProfile);
