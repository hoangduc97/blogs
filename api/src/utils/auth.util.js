import bcrypt from "bcryptjs";

const gen_hash = async (password, salt) => {
    return await bcrypt.hash(password, salt);
};

const gen_salt = async (rounds = 10) => {
    return await bcrypt.genSalt(rounds);
};

const compareHash = async (hashString, normalString, saltString) => {
    return await bcrypt.compare(normalString + saltString, hashString);
};

export { gen_hash, gen_salt, compareHash };
