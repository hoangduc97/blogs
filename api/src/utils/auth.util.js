import bcrypt from "bcryptjs";

const hash = async (password, salt) => {
    return await bcrypt.hash(password, salt);
};

const salt = async (rounds = 10) => {
    return await bcrypt.genSalt(rounds);
};

const compareHash = async (hashString, normalString, saltString) => {
    return await bcrypt.compare(normalString + saltString, hashString);
};

export const authUtil = {
    hash,
    salt,
    compareHash,
};
