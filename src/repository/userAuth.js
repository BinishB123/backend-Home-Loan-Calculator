
import { statusCode } from "../constants/statusCodes.js";
import CustomError from "../middleware/customErrorHandler.js";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

const addUser = async (bodyData) => {
  try {
    const hashedPassword = await bcrypt.hash(bodyData.password, 10);

    const userCreated = await User.create({
      name: bodyData.name,
      mobile: bodyData.mobile,
      email: bodyData.email.trim(),
      password: hashedPassword,
    });

    console.log("userCreated", userCreated);

    if (userCreated) {
      return {
        id: userCreated.id,
        name: userCreated.name,
        email: userCreated.email,
      };
    }

    throw new CustomError(
      "SignUp Failed Try again",
      statusCode.NO_CONTENT
    );
  } catch (error) {
    console.log("error", error);
    throw new CustomError(error.message, error.statusCode);
  }
};

const checkWhetherEmailExist = async (email) => {
  try {
    const emailExist = await User.findOne({
      where: {
        email: email.trim(),
      },
    });

    if (emailExist) {
      throw new CustomError(
        "Email already exist use another email",
        statusCode.CONFLICT
      );
    }

    return { success: true };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const login = async (email, password) => {
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new CustomError(
        "No user with this email id",
        statusCode.FORBIDDEN
      );
    }

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      throw new CustomError(
        "Incorrect password",
        statusCode.UNAUTHORIZED
      );
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const authRepo = {
  addUser,
  checkWhetherEmailExist,
  login,
};

export default authRepo;

