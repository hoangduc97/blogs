import jwt from "jsonwebtoken";
import { authConstant } from "../utils/constants";

const auth = (req, res, next) => {
    const token = req.header("token");
    if (!token) return res.status(401).json({ message: "Auth error" });

    try {
        const decoded = jwt.verify(token, authConstant.JWT_RANDOM_STRING);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Invalid Token" });
    }
};

export default auth;
