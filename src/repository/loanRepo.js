import Loan from "../Models/loanSchema.js";
import CustomError from "../middleware/customErrorHandler.js";

const loanExistWithUserId = async (userId) => {
  try {
    const exist = await Loan.findOne({
      where: {
        userId,
      },
    });

    return !!exist;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const fetchLoanDataWithUserId = async (userId) => {
  try {
    const loanDetail = await Loan.findOne({
      where: {
        userId,
      },
    });

    return loanDetail;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const addNewLoan = async (
  userId,
  loanAmount,
  interest,
  year,
  loanName
) => {
  try {
    const newLoan = await Loan.create({
      loanName,
      userId,
      loanAmount,
      interestRate: interest,
      year,
    });

    return newLoan;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const getlatestAddedLoan = async (userId) => {
  try {
    const latestData = await Loan.findAll({
      where: {
        userId,
      },
      order: [["createdAt", "DESC"]],
    });

    return latestData;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const defaultLoanCreate = async (userId) => {
  try {
    const newLoan = await Loan.create({
      loanName: "Default Loan",
      userId,
      loanAmount: 0,
      interestRate: 0,
      year: 0,
    });

    return newLoan;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode);
  }
};

const loanRepo = {
  fetchLoanDataWithUserId,
  loanExistWithUserId,
  addNewLoan,
  getlatestAddedLoan,
  defaultLoanCreate,
};

export default loanRepo;