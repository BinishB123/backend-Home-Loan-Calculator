import mongoose from "mongoose";
import loanModel from "../Models/loanSchema.js";
import CustomError from "../middleware/customErrorHandler.js";
import { statusCode } from "../constants/statusCodes.js";

const defaultLoanCreate = async (userId) => {
  try {
    await loanModel.create({
      userId: userId,
      loanAmount: 100000,
      interestRate: 1,
      year: 1,
    });
    return true;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const loanExistWithUserId = async (userId) => {
  try {
    const exist = await loanModel.findOne({
      userId: new mongoose.Types.ObjectId(userId + ""),
    });
    if (exist) {
      return true;
    }
    return false;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const fetchLoanDataWithUserId = async (userId) => {
  try {
    const loanDetail = await loanModel.findOne({
      userId: new mongoose.Types.ObjectId(userId + ""),
    });
    return loanDetail;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const updateLoanData = async (docId, fieldToChange, newData) => {
  try {
    const update = await loanModel.updateOne(
      { _id: new mongoose.Types.ObjectId(docId + "") },
      {
        $set: {
          [fieldToChange]: newData,
        },
      }
    );
    if (update.matchedCount === 0) {
      throw new CustomError(
        "updation failed Something went wrong",
        statusCode.NOT_FOUND
      );
    }

    if (update.modifiedCount === 0) {
      throw new CustomError(
        "updation failed Something went wrong",
        statusCode.Unprocessable_Entity
      );
    }
    return true;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const loanRepo = {
  defaultLoanCreate,
  fetchLoanDataWithUserId,
  loanExistWithUserId,
  updateLoanData,
};

export default loanRepo;
