import mongoose from "mongoose";
import loanModel from "../Models/loanSchema.js";
import CustomError from "../middleware/customErrorHandler.js";
import { statusCode } from "../constants/statusCodes.js";

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

const addNewLoan = async (userId, loanAmount, intrest, year, loanName) => {
  try {
    
    const newLoan = await loanModel.create({
      loanName:  loanName,
      userId: new mongoose.Types.ObjectId(userId + ""),
      loanAmount: loanAmount,
      interestRate: intrest,
      year: year,
    });
    return newLoan;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const getlatestAddedLoan = async (userId) => {
  try {
    const latestData = await loanModel.find({
      userId: new mongoose.Types.ObjectId(userId + ""),
    }).sort({createdAt:-1});
    
    return latestData.length ? latestData : [];
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const loanRepo = {
  fetchLoanDataWithUserId,
  loanExistWithUserId,
  addNewLoan,
  getlatestAddedLoan,
};

export default loanRepo;
