import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Account = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    hash: {
        type: String,
        required: true,
    },
});

Account.pre('save', function (next) {
    const account = this;

    if (this.isModified('hash') || this.isNew) {
        bcrypt.genSalt(10, function (error, salt) {
            if (error) return next(error);
            bcrypt.hash(account.hash, salt, function (error, hash) {
                if (error) return next(error);
                account.hash = hash;
                next();
            });
        });
    } else{
        next();
    }
});

Account.methods.compareHash = function (pw, cd) {
    bcrypt.compare(pw, this.hash, (error, isMatch) => {
        if (error) return cd(error);
        cd(null, isMatch);
    });
};

export default mongoose.model('Account', Account);
