import mongoose from "mongoose";
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
        default: "1234",
    },
    password_expire: {
        type: Date,
        required: true,
    },
});

export default mongoose.model("UserAccount", userAccount);
