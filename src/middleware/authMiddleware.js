import jwt from "jsonwebtoken";
import { statusCode } from "../constants/statusCodes.js";
import { configDotenv } from "dotenv";
configDotenv();

const authMiddleware = (req, res, next) => {
  const token = req.cookies?.accessToken;
  if (!token) {
    return res
      .status(statusCode.UNAUTHORIZED)
      .json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESSTOKENKEY);
    if (!decoded) {
      return res
        .status(statusCode.UNAUTHORIZED)
        .json({ message: "Unauthorized: No token provided" });
    }
    next();
  } catch (error) {
    return res
      .status(statusCode.UNAUTHORIZED)
      .json({ message: "Forbidden: Invalid token" });
  }
};

export default authMiddleware;
